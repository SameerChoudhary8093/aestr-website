import re

def remove_geo_faq(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to find the GEO FAQ section and remove it
    # It starts with <h2>...GEO FAQ...</h2> and ends before the next <h2>
    pattern = re.compile(r'\s*<h2>(?:IV\.\s*)?GEO\s*FAQ:.*?</h2>.*?(\s*<h2>)', re.DOTALL | re.IGNORECASE)
    
    # Replacement keeps the next <h2>
    new_content = pattern.sub(r'\1', content)
    
    # Some FAQ sections might be at the end of the content (before the closing backtick)
    # So we also check for sections ending with ` (backtick)
    pattern_end = re.compile(r'\s*<h2>(?:IV\.\s*)?GEO\s*FAQ:.*?</h2>.*?(\s*`)', re.DOTALL | re.IGNORECASE)
    new_content = pattern_end.sub(r'\1', new_content)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

if __name__ == "__main__":
    remove_geo_faq('/Users/apple/Desktop/aestr-website/aestr-website/src/data/blogs.ts')
