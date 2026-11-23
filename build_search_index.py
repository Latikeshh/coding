import os
import re
import json

ROOT = os.path.dirname(os.path.abspath(__file__))

tracks_meta = {
    "C": {"course_id": "C", "course_title": "C Language"},
    "CPP": {"course_id": "CPP", "course_title": "C++"},
    "HTML": {"course_id": "HTML", "course_title": "HTML5"},
    "CSS": {"course_id": "CSS", "course_title": "CSS3"},
    "JS": {"course_id": "JS", "course_title": "JavaScript"},
    "Python": {"course_id": "Python", "course_title": "Python 3"},
    "Java": {"course_id": "Java", "course_title": "Java SE"},
    "SQL": {"course_id": "SQL", "course_title": "SQL Database"},
    "Git-and-GitHub": {"course_id": "Git-and-GitHub", "course_title": "Git & GitHub"}
}

def clean_html_text(text):
    if not text:
        return ""
    # Strip HTML tags
    text = re.sub(r'<[^>]+>', ' ', text)
    # Unescape HTML entities
    text = text.replace('&lt;', '<').replace('&gt;', '>').replace('&amp;', '&').replace('&quot;', '"').replace('&#128187;', '')
    # Normalize whitespace
    text = re.sub(r'\s+', ' ', text).strip()
    return text

search_index = []

for track_folder, meta in tracks_meta.items():
    track_path = os.path.join(ROOT, track_folder)
    if not os.path.exists(track_path):
        continue

    for root, dirs, files in os.walk(track_path):
        for file in sorted(files):
            if file.endswith(".html") and file != "00-README.html":
                fpath = os.path.join(root, file)
                rel_path = os.path.relpath(fpath, ROOT).replace("\\", "/")

                with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()

                # Extract Title
                title_match = re.search(r'<title>(.*?)</title>', content, re.IGNORECASE)
                if title_match:
                    title_text = clean_html_text(title_match.group(1))
                else:
                    h1_match = re.search(r'<h1>(.*?)</h1>', content, re.IGNORECASE)
                    title_text = clean_html_text(h1_match.group(1)) if h1_match else file.replace(".html", "").replace("-", " ").title()

                # Extract Snippet (from h2, p, code blocks)
                # Find content wrapper
                wrapper_match = re.search(r'<div class="content-wrapper">(.*?)</div>\n\s*</main>', content, re.DOTALL)
                body_content = wrapper_match.group(1) if wrapper_match else content

                plain_text = clean_html_text(body_content)
                words = plain_text.split()
                snippet = " ".join(words[:60]) if len(words) > 60 else plain_text

                # Build canonical site URL
                site_url = rel_path

                search_entry = {
                    "title": title_text,
                    "course": meta["course_title"],
                    "course_id": meta["course_id"],
                    "file": file,
                    "url": site_url,
                    "snippet": snippet
                }

                search_index.append(search_entry)

print(f"Total Search Index Entries Generated: {len(search_index)}")

# Output pure static JavaScript file assets/js/search-data.js
output_js_path = os.path.join(ROOT, "assets", "js", "search-data.js")

js_payload = "/**\n * Auto-generated Static Search Index for Learn Coding\n * Total Indexed Lessons: " + str(len(search_index)) + "\n */\n"
js_payload += "window.SEARCH_INDEX = " + json.dumps(search_index, indent=2) + ";\n"

with open(output_js_path, 'w', encoding='utf-8') as f:
    f.write(js_payload)

print(f"Successfully generated pure static JavaScript search index in '{output_js_path}'.")
