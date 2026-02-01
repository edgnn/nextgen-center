"""
Script to extract all questions from ENARSI PDF and generate JavaScript data
"""
import fitz  # pymupdf
import re
import os
import json

PDF_PATH = r'd:\Code EdGn\SiteGoogle\bank Soal\Cisco 300-410 ENARSI v5.0.pdf'
IMAGES_DIR = r'd:\Code EdGn\SiteGoogle\bank Soal\images'
OUTPUT_FILE = r'd:\Code EdGn\SiteGoogle\bank Soal\questions_data.js'

def extract_all_text(pdf_path):
    """Extract all text from PDF"""
    doc = fitz.open(pdf_path)
    full_text = ""
    for page in doc:
        full_text += page.get_text() + "\n"
    doc.close()
    return full_text

def extract_all_images(pdf_path, output_dir):
    """Extract all images from PDF with page tracking"""
    doc = fitz.open(pdf_path)
    image_map = {}  # page_num -> list of image filenames
    
    for page_num in range(len(doc)):
        page = doc[page_num]
        images = page.get_images()
        image_map[page_num + 1] = []
        
        for img_idx, img in enumerate(images):
            xref = img[0]
            try:
                base_image = doc.extract_image(xref)
                image_bytes = base_image['image']
                ext = base_image['ext']
                
                filename = f'page{page_num+1}_img{img_idx+1}.{ext}'
                filepath = os.path.join(output_dir, filename)
                
                with open(filepath, 'wb') as f:
                    f.write(image_bytes)
                
                image_map[page_num + 1].append(filename)
            except:
                pass
    
    doc.close()
    return image_map

def parse_questions(text):
    """Parse questions from extracted text"""
    questions = []
    
    # Split by QUESTION pattern
    pattern = r'QUESTION\s+(\d+)\s*\n'
    parts = re.split(pattern, text)
    
    # parts[0] is before first question, then alternating: question_num, question_content
    for i in range(1, len(parts) - 1, 2):
        q_num = int(parts[i])
        q_content = parts[i + 1]
        
        # Extract question text (before options)
        # Find where options start (A. or A )
        option_match = re.search(r'\n[A-E][\.\s]', q_content)
        if option_match:
            q_text = q_content[:option_match.start()].strip()
            rest = q_content[option_match.start():]
        else:
            q_text = q_content.strip()
            rest = ""
        
        # Check if it references an exhibit
        has_exhibit = 'refer to the exhibit' in q_text.lower() or 'exhibit' in q_text.lower()
        
        # Extract options
        options = []
        option_pattern = r'([A-E])[\.\s]\s*(.+?)(?=\n[A-E][\.\s]|\nCorrect Answer|\nSection:|$)'
        option_matches = re.findall(option_pattern, rest, re.DOTALL)
        
        for letter, opt_text in option_matches:
            options.append({
                'letter': letter,
                'text': opt_text.strip().replace('\n', ' ').replace('  ', ' ')
            })
        
        # Extract correct answer
        correct_match = re.search(r'Correct Answer:\s*([A-E]+)', q_content)
        correct = []
        if correct_match:
            correct_str = correct_match.group(1)
            correct = list(correct_str)  # Split into individual letters
        
        # Check if multiple choice
        is_multiple = len(correct) > 1 or 'choose two' in q_text.lower() or 'choose three' in q_text.lower()
        
        questions.append({
            'id': q_num,
            'type': 'multiple-choice',
            'text': q_text.replace('\n', ' ').replace('  ', ' '),
            'options': options,
            'correct': correct,
            'isMultiple': is_multiple,
            'hasExhibit': has_exhibit,
            'explanation': ''
        })
    
    return questions

def generate_js_data(questions, image_map):
    """Generate JavaScript data for questions"""
    
    # Try to map images to questions based on page numbers
    # Each page typically has 2-3 questions
    current_page = 3  # Questions start on page 3
    questions_per_page = {}
    
    js_questions = []
    
    for q in questions:
        q_data = {
            'id': q['id'],
            'type': q['type'],
            'text': q['text'],
            'options': q['options'],
            'correct': q['correct'],
            'isMultiple': q['isMultiple'],
            'explanation': q['explanation']
        }
        
        # Add image reference if question refers to exhibit
        if q['hasExhibit']:
            # Estimate which page this question is on
            # Rough estimate: ~2.5 questions per page starting from page 3
            estimated_page = 3 + (q['id'] - 1) // 2
            if estimated_page in image_map and image_map[estimated_page]:
                q_data['image'] = f"images/{image_map[estimated_page][0]}"
        
        js_questions.append(q_data)
    
    return js_questions

def format_js_output(questions):
    """Format questions as JavaScript code"""
    output = "// ENARSI 300-410 Questions Data\n"
    output += "// Auto-generated from PDF\n\n"
    output += "const questionsData = [\n"
    
    for q in questions:
        output += "    {\n"
        output += f"        id: {q['id']},\n"
        output += f"        type: \"{q['type']}\",\n"
        if 'image' in q:
            output += f"        image: \"{q['image']}\",\n"
        
        # Escape text for JavaScript
        text = q['text'].replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')
        output += f"        text: \"{text}\",\n"
        
        output += "        options: [\n"
        for opt in q['options']:
            opt_text = opt['text'].replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')
            output += f"            {{ letter: \"{opt['letter']}\", text: \"{opt_text}\" }},\n"
        output += "        ],\n"
        
        correct_str = json.dumps(q['correct'])
        output += f"        correct: {correct_str},\n"
        output += f"        isMultiple: {'true' if q['isMultiple'] else 'false'},\n"
        output += f"        explanation: \"{q['explanation']}\"\n"
        output += "    },\n"
    
    output += "];\n"
    return output

def main():
    print("Extracting text from PDF...")
    text = extract_all_text(PDF_PATH)
    
    print("Extracting images from PDF...")
    os.makedirs(IMAGES_DIR, exist_ok=True)
    image_map = extract_all_images(PDF_PATH, IMAGES_DIR)
    print(f"Extracted images from {len(image_map)} pages")
    
    print("Parsing questions...")
    questions = parse_questions(text)
    print(f"Found {len(questions)} questions")
    
    print("Generating JavaScript data...")
    js_questions = generate_js_data(questions, image_map)
    
    print("Writing output file...")
    js_output = format_js_output(js_questions)
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(js_output)
    
    print(f"Done! Output saved to {OUTPUT_FILE}")
    print(f"Total questions: {len(questions)}")
    
    # Print summary of first 15 questions
    print("\n=== First 15 Questions Summary ===")
    for q in questions[:15]:
        has_img = "📷" if q['hasExhibit'] else "📝"
        correct = ','.join(q['correct'])
        print(f"Q{q['id']:3d} {has_img} [{correct}] {q['text'][:60]}...")

if __name__ == "__main__":
    main()
