---
layout: null
---
window.SEARCH_INDEX = [
  {% assign first = true %}
  {% for page in site.html_pages %}
    {% if page.title and page.path contains '.md' %}
      {% if first == false %},{% endif %}
      {% assign first = false %}

      {% assign course_id = 'General' %}
      {% assign course_title = 'General' %}
      {% assign path_lower = page.path | downcase %}

      {% if path_lower contains 'git-and-github/' %}
        {% assign course_id = 'Git-and-GitHub' %}
        {% assign course_title = 'Git & GitHub' %}
      {% elsif path_lower contains 'cpp/' %}
        {% assign course_id = 'CPP' %}
        {% assign course_title = 'C++' %}
      {% elsif path_lower contains 'html/' %}
        {% assign course_id = 'HTML' %}
        {% assign course_title = 'HTML5' %}
      {% elsif path_lower contains 'css/' %}
        {% assign course_id = 'CSS' %}
        {% assign course_title = 'CSS3' %}
      {% elsif path_lower contains 'js/' %}
        {% assign course_id = 'JS' %}
        {% assign course_title = 'JavaScript' %}
      {% elsif path_lower contains 'python/' %}
        {% assign course_id = 'Python' %}
        {% assign course_title = 'Python 3' %}
      {% elsif path_lower contains 'java/' %}
        {% assign course_id = 'Java' %}
        {% assign course_title = 'Java' %}
      {% elsif path_lower contains 'sql/' %}
        {% assign course_id = 'SQL' %}
        {% assign course_title = 'SQL' %}
      {% elsif path_lower contains 'c/' %}
        {% assign course_id = 'C' %}
        {% assign course_title = 'C Language' %}
      {% endif %}

      {% assign text_snippet = page.content | strip_html | normalize_whitespace | truncatewords: 60 %}

      {
        "title": {{ page.title | jsonify }},
        "course": {{ course_title | jsonify }},
        "course_id": {{ course_id | jsonify }},
        "file": {{ page.name | jsonify }},
        "url": {{ page.url | relative_url | jsonify }},
        "snippet": {{ text_snippet | jsonify }}
      }
    {% endif %}
  {% endfor %}
];
