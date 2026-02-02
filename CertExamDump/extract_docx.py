from docx import Document
import json

doc = Document('QUESTION 51-60.docx')

# Collect all paragraphs
content = []
for p in doc.paragraphs:
    content.append(p.text)

# Write to file
with open('docx_content.txt', 'w', encoding='utf-8') as f:
    for i, line in enumerate(content):
        f.write(f"{i}: {line}\n")

print("Content saved to docx_content.txt")
print(f"Total paragraphs: {len(content)}")
