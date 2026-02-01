"""
Script to clean extracted questions and integrate into enarsi.html
"""
import fitz
import re
import os
import json

PDF_PATH = r'd:\Code EdGn\SiteGoogle\bank Soal\Cisco 300-410 ENARSI v5.0.pdf'
IMAGES_DIR = r'd:\Code EdGn\SiteGoogle\bank Soal\images'
ENARSI_FILE = r'd:\Code EdGn\SiteGoogle\bank Soal\enarsi.html'
OUTPUT_JS = r'd:\Code EdGn\SiteGoogle\bank Soal\questions_clean.js'

def extract_all_images(pdf_path, output_dir):
    """Extract all images and create page mapping"""
    doc = fitz.open(pdf_path)
    image_map = {}
    
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
                
                # Skip very small images (likely icons/artifacts)
                if len(image_bytes) < 1000:
                    continue
                    
                filename = f'page{page_num+1}_img{img_idx+1}.{ext}'
                filepath = os.path.join(output_dir, filename)
                
                with open(filepath, 'wb') as f:
                    f.write(image_bytes)
                
                image_map[page_num + 1].append(filename)
            except:
                pass
    
    doc.close()
    return image_map

def extract_text_by_page(pdf_path):
    """Extract text page by page"""
    doc = fitz.open(pdf_path)
    pages = {}
    
    for page_num in range(len(doc)):
        page = doc[page_num]
        pages[page_num + 1] = page.get_text()
    
    doc.close()
    return pages

def clean_option_text(text):
    """Clean option text by removing Section/Explanation artifacts"""
    # Remove Section and Explanation references
    text = re.sub(r'Section:\s*\(none\).*$', '', text, flags=re.DOTALL | re.IGNORECASE)
    text = re.sub(r'Explanation.*$', '', text, flags=re.DOTALL | re.IGNORECASE)
    text = re.sub(r'Correct Answer:.*$', '', text, flags=re.DOTALL | re.IGNORECASE)
    
    # Clean whitespace
    text = ' '.join(text.split())
    return text.strip()

def parse_questions_improved(pages_text):
    """Improved question parsing"""
    questions = []
    full_text = '\n'.join(pages_text.values())
    
    # Find all QUESTION N patterns
    pattern = r'QUESTION\s+(\d+)\s*\n(.*?)(?=QUESTION\s+\d+|$)'
    matches = re.findall(pattern, full_text, re.DOTALL)
    
    for q_num_str, content in matches:
        q_num = int(q_num_str)
        
        # Find correct answer first
        correct_match = re.search(r'Correct Answer:\s*([A-E]+)', content)
        correct = list(correct_match.group(1)) if correct_match else []
        
        # Remove correct answer and explanation from content for parsing
        content_clean = re.sub(r'Correct Answer:.*$', '', content, flags=re.DOTALL)
        
        # Find question text (before first option)
        question_match = re.search(r'^(.*?)(?=\n[A-E][\.\s])', content_clean, re.DOTALL)
        if question_match:
            q_text = question_match.group(1).strip()
        else:
            q_text = content_clean[:500].strip()
        
        # Check for exhibit reference
        has_exhibit = 'refer to the exhibit' in q_text.lower() or 'exhibit' in q_text.lower()
        
        # Parse options - look for A. B. C. D. E. patterns
        options = []
        option_pattern = r'\n([A-E])[\.\s]\s*(.*?)(?=\n[A-E][\.\s]|Correct Answer|Section:|$)'
        option_matches = re.findall(option_pattern, content_clean, re.DOTALL)
        
        seen_letters = set()
        for letter, opt_text in option_matches:
            if letter not in seen_letters:
                cleaned_text = clean_option_text(opt_text)
                if cleaned_text and len(cleaned_text) > 1:
                    options.append({
                        'letter': letter,
                        'text': cleaned_text
                    })
                    seen_letters.add(letter)
        
        # Determine if multiple choice
        is_multiple = (len(correct) > 1 or 
                      'choose two' in q_text.lower() or 
                      'choose three' in q_text.lower())
        
        # Clean question text
        q_text = ' '.join(q_text.split())
        
        if options:  # Only add if we found options
            questions.append({
                'id': q_num,
                'type': 'multiple-choice',
                'text': q_text,
                'options': options,
                'correct': correct,
                'isMultiple': is_multiple,
                'hasExhibit': has_exhibit,
                'explanation': ''
            })
    
    return questions

def find_page_for_question(q_num, pages_text):
    """Find which page contains a question"""
    for page_num, text in pages_text.items():
        if f'QUESTION {q_num}\n' in text or f'QUESTION {q_num} ' in text:
            return page_num
    return None

def assign_images_to_questions(questions, pages_text, image_map):
    """Assign images to questions based on page numbers"""
    for q in questions:
        if q['hasExhibit']:
            page_num = find_page_for_question(q['id'], pages_text)
            if page_num and page_num in image_map and image_map[page_num]:
                q['image'] = f"images/{image_map[page_num][0]}"

def generate_js_questions(questions):
    """Generate JavaScript array for questions"""
    lines = []
    
    for q in questions:
        lines.append("                {")
        lines.append(f"                    id: {q['id']},")
        lines.append(f"                    type: \"{q['type']}\",")
        
        if 'image' in q:
            lines.append(f"                    image: \"{q['image']}\",")
        
        # Escape text for JavaScript
        text = q['text'].replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')
        lines.append(f"                    text: \"{text}\",")
        
        lines.append("                    options: [")
        for opt in q['options']:
            opt_text = opt['text'].replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')
            lines.append(f"                        {{ letter: \"{opt['letter']}\", text: \"{opt_text}\" }},")
        lines.append("                    ],")
        
        correct_str = json.dumps(q['correct'])
        lines.append(f"                    correct: {correct_str},")
        lines.append(f"                    isMultiple: {'true' if q['isMultiple'] else 'false'},")
        lines.append(f"                    explanation: \"{q['explanation']}\"")
        lines.append("                },")
    
    return '\n'.join(lines)

def main():
    print("Extracting text by page...")
    pages_text = extract_text_by_page(PDF_PATH)
    print(f"Extracted text from {len(pages_text)} pages")
    
    print("Extracting images...")
    os.makedirs(IMAGES_DIR, exist_ok=True)
    image_map = extract_all_images(PDF_PATH, IMAGES_DIR)
    total_images = sum(len(imgs) for imgs in image_map.values())
    print(f"Extracted {total_images} images")
    
    print("Parsing questions...")
    questions = parse_questions_improved(pages_text)
    print(f"Found {len(questions)} questions")
    
    print("Assigning images to questions...")
    assign_images_to_questions(questions, pages_text, image_map)
    
    # Filter to questions 11+
    questions_11_plus = [q for q in questions if q['id'] >= 11]
    print(f"Questions 11+: {len(questions_11_plus)}")
    
    print("Generating JavaScript...")
    js_output = generate_js_questions(questions_11_plus)
    
    with open(OUTPUT_JS, 'w', encoding='utf-8') as f:
        f.write(js_output)
    
    print(f"Saved to {OUTPUT_JS}")
    
    # Print summary
    print("\n=== Summary ===")
    print(f"Total questions parsed: {len(questions)}")
    print(f"Questions with exhibits: {sum(1 for q in questions if q['hasExhibit'])}")
    print(f"Questions with images assigned: {sum(1 for q in questions if 'image' in q)}")
    print(f"Multiple choice questions: {sum(1 for q in questions if q['isMultiple'])}")
    
    # Print first 5 questions for verification
    print("\n=== First 5 Questions (11-15) ===")
    for q in questions_11_plus[:5]:
        print(f"Q{q['id']}: {q['text'][:80]}...")
        print(f"   Options: {len(q['options'])}, Correct: {q['correct']}, Image: {'image' in q}")
        for opt in q['options'][:2]:
            print(f"   {opt['letter']}. {opt['text'][:50]}...")
        print()

if __name__ == "__main__":
    main()
