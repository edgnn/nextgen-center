"""
Script to integrate questions from questions_clean.js into enarsi.html
"""
import re

QUESTIONS_FILE = r'd:\Code EdGn\SiteGoogle\bank Soal\questions_clean.js'
ENARSI_FILE = r'd:\Code EdGn\SiteGoogle\bank Soal\enarsi.html'
OUTPUT_FILE = r'd:\Code EdGn\SiteGoogle\bank Soal\enarsi.html'

def main():
    print("Reading questions data...")
    with open(QUESTIONS_FILE, 'r', encoding='utf-8') as f:
        questions_js = f.read()
    
    print("Reading enarsi.html...")
    with open(ENARSI_FILE, 'r', encoding='utf-8') as f:
        enarsi_content = f.read()
    
    # Find the end of question 10 (last question before we add new ones)
    # Looking for the pattern after question 10's closing bracket
    # We want to insert after:  }  (closing question 10)
    #                           ]  (closing questions array)
    # And replace ] with },  (new questions) ]
    
    # Pattern to find the end of examData questions array
    pattern = r"(explanation: \"IPv6 RA Guard is a Layer 2 security feature.*?\")\s*(\n\s*}\s*\n\s*\])\s*(\n\s*};)"
    
    # Count lines to verify
    lines = enarsi_content.split('\n')
    print(f"Total lines in enarsi.html: {len(lines)}")
    
    # Find the insertion point - after question 10
    match = re.search(pattern, enarsi_content, re.DOTALL)
    
    if match:
        print("Found insertion point!")
        
        # New content: close question 10, add new questions, close array
        new_content = match.group(1) + "\n                },\n" + questions_js.rstrip().rstrip(',') + "\n            ]\n        };"
        
        # Replace old ending with new content including all questions
        updated_content = re.sub(pattern, new_content, enarsi_content, flags=re.DOTALL)
        
        print("Writing updated enarsi.html...")
        with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
            f.write(updated_content)
        
        new_lines = updated_content.split('\n')
        print(f"New total lines: {len(new_lines)}")
        print("Done!")
    else:
        print("Could not find insertion point. Trying alternative method...")
        
        # Alternative: Find the closing of examData
        alt_pattern = r'(\n\s*\}\s*\n\s*\]\s*\n\s*\};)(\s*\n\s*// State)'
        alt_match = re.search(alt_pattern, enarsi_content)
        
        if alt_match:
            print("Found alternative insertion point!")
            
            # Insert questions before the closing ] }; and before // State
            insertion = questions_js.rstrip().rstrip(',') + "\n            ]\n        };"
            
            # Replace the ending
            updated_content = enarsi_content[:alt_match.start()] + ",\n" + insertion + alt_match.group(2) + enarsi_content[alt_match.end():]
            
            print("Writing updated enarsi.html...")
            with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
                f.write(updated_content)
            
            new_lines = updated_content.split('\n')
            print(f"New total lines: {len(new_lines)}")
            print("Done!")
        else:
            print("Alternative pattern also not found.")
            
            # Last resort: find specific line numbers
            for i, line in enumerate(lines):
                if 'IPv6 RA Guard' in line:
                    print(f"Found 'IPv6 RA Guard' at line {i+1}")
                if i >= 1705 and i <= 1715:
                    print(f"Line {i+1}: {line[:80]}")

if __name__ == "__main__":
    main()
