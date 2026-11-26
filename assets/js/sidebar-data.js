/**
 * Centralized Sidebar Data Repository
 * Holds structured navigation metadata for all 9 course tracks.
 */
window.SIDEBAR_DATA = {
  CSS: {
    title: "CSS3 Curriculum",
    badge: "32 Modules",
    lessons: [
      { title: "Curriculum Overview", href: "index.html" },
      { title: "01. Setup CSS Environment", href: "01-setup-css.html" },
      { title: "02. Introduction to CSS", href: "02-introduction-to-css.html" },
      { title: "03. History & Standards", href: "03-history-and-standards.html" },
      { title: "04. Types & Inclusion", href: "04-types-and-inclusion.html" },
      { title: "05. Syntax & Comments", href: "05-syntax-and-comments.html" },
      { title: "06. Basic Selectors", href: "06-basic-selectors.html" },
      { title: "07. Specificity & Cascade", href: "07-specificity-and-cascade.html" },
      { title: "08. Sizing & Box Model", href: "08-sizing-and-box-model.html" },
      {
        title: "09. CSS Sizing Units",
        href: "09-css-units/index.html",
        subItems: [
          { title: "01. Absolute Units (px)", href: "09-css-units/01-absolute-units.html" },
          { title: "02. Relative Units (rem, em)", href: "09-css-units/02-relative-font-units.html" },
          { title: "03. Viewport Units (vw, dvh)", href: "09-css-units/03-viewport-and-dynamic-units.html" }
        ]
      },
      {
        title: "10. Colors & Gradients",
        href: "10-colors-and-gradients/index.html",
        subItems: [
          { title: "01. Color Systems (OKLCH)", href: "10-colors-and-gradients/01-color-systems.html" },
          { title: "02. Gradients (Conic)", href: "10-colors-and-gradients/02-linear-radial-conic-gradients.html" }
        ]
      },
      {
        title: "11. Backgrounds & Borders",
        href: "11-backgrounds-and-borders/index.html",
        subItems: [
          { title: "01. Background Properties", href: "11-backgrounds-and-borders/01-background-properties.html" },
          { title: "02. Borders & Box Shadows", href: "11-backgrounds-and-borders/02-borders-outlines-shadows.html" }
        ]
      },
      { title: "12. Margins & Padding", href: "12-margins-padding-collapse.html" },
      { title: "13. Display Property", href: "13-display-property.html" },
      {
        title: "14. Positioning & Stacking",
        href: "14-positioning-and-stacking/index.html",
        subItems: [
          { title: "01. Static & Relative", href: "14-positioning-and-stacking/01-static-relative-positioning.html" },
          { title: "02. Absolute & Fixed", href: "14-positioning-and-stacking/02-absolute-fixed-positioning.html" },
          { title: "03. Sticky & z-index", href: "14-positioning-and-stacking/03-sticky-zindex-stacking.html" }
        ]
      },
      { title: "15. Floats & Clears", href: "15-floats-and-clears.html" },
      {
        title: "16. Flexbox Layout",
        href: "16-flexbox/index.html",
        subItems: [
          { title: "01. Flex Container", href: "16-flexbox/01-flex-container.html" },
          { title: "02. Flex Items Sizing", href: "16-flexbox/02-flex-items.html" }
        ]
      },
      {
        title: "17. CSS Grid Layout",
        href: "17-grid/index.html",
        subItems: [
          { title: "01. Grid Container & fr", href: "17-grid/01-grid-container.html" },
          { title: "02. Grid Items & Subgrid", href: "17-grid/02-grid-items-and-areas.html" }
        ]
      },
      {
        title: "18. Responsive Design",
        href: "18-responsive-design/index.html",
        subItems: [
          { title: "01. RWD Fundamentals", href: "18-responsive-design/01-responsive-fundamentals.html" },
          { title: "02. Media Queries", href: "18-responsive-design/02-media-queries.html" },
          { title: "03. Container Queries", href: "18-responsive-design/03-container-queries.html" }
        ]
      },
      {
        title: "19. Pseudo Selectors",
        href: "19-pseudo-classes-and-elements/index.html",
        subItems: [
          { title: "01. Pseudo-classes (:has)", href: "19-pseudo-classes-and-elements/01-pseudo-classes.html" },
          { title: "02. Pseudo-elements (::before)", href: "19-pseudo-classes-and-elements/02-pseudo-elements.html" }
        ]
      },
      { title: "20. Typography & Fonts", href: "20-typography-and-fonts.html" },
      {
        title: "21. Transitions & Transforms",
        href: "21-transitions-and-transforms/index.html",
        subItems: [
          { title: "01. CSS Transitions", href: "21-transitions-and-transforms/01-css-transitions.html" },
          { title: "02. 2D & 3D Transforms", href: "21-transitions-and-transforms/02-2d-3d-transforms.html" }
        ]
      },
      {
        title: "22. CSS Animations",
        href: "22-animations/index.html",
        subItems: [
          { title: "01. @keyframes Animations", href: "22-animations/01-keyframes-animations.html" },
          { title: "02. Animation Performance", href: "22-animations/02-animation-performance.html" }
        ]
      },
      {
        title: "23. Variables & Functions",
        href: "23-variables-and-functions/index.html",
        subItems: [
          { title: "01. Custom Properties", href: "23-variables-and-functions/01-custom-properties.html" },
          { title: "02. calc, min, max, clamp", href: "23-variables-and-functions/02-css-functions.html" }
        ]
      },
      { title: "24. Logical Properties", href: "24-logical-properties-and-direction.html" },
      { title: "25. Filters, Masks & Clip", href: "25-filters-masks-and-clipping.html" },
      { title: "26. !important & DevTools", href: "26-cascade-control-and-devtools.html" },
      {
        title: "27. UI Components",
        href: "27-ui-components/index.html",
        subItems: [
          { title: "01. Forms & Custom Focus", href: "27-ui-components/01-forms-and-inputs.html" },
          { title: "02. Cards & Elevation", href: "27-ui-components/02-cards-and-elevation.html" },
          { title: "03. Responsive Navbars", href: "27-ui-components/03-navigation-bars.html" }
        ]
      },
      { title: "28. Advanced Relational Selectors", href: "28-advanced-selectors.html" },
      {
        title: "29. Modern CSS Features",
        href: "29-modern-css/index.html",
        subItems: [
          { title: "01. object-fit & Scroll Snap", href: "29-modern-css/01-modern-features.html" },
          { title: "02. Nesting, @layer, @property", href: "29-modern-css/02-css-nesting-and-layers.html" },
          { title: "03. View Transitions & Anchors", href: "29-modern-css/03-view-transitions-and-anchors.html" }
        ]
      },
      { title: "30. BEM & Dark Mode", href: "30-architecture-and-dark-mode.html" },
      { title: "31. Overflow, Lists & Tables", href: "31-overflow-lists-tables.html" },
      {
        title: "32. Capstone Mini Projects",
        href: "32-mini-projects/index.html",
        subItems: [
          { title: "01. SaaS Landing Page", href: "32-mini-projects/01-responsive-landing-page.html" },
          { title: "02. Analytics Dashboard UI", href: "32-mini-projects/02-dashboard-card-ui.html" },
          { title: "03. Dark Mode Portfolio", href: "32-mini-projects/03-dark-mode-portfolio.html" }
        ]
      }
    ]
  },
  C: {
    title: "C Language",
    badge: "24 Modules",
    lessons: [
      { title: "Master Syllabus", href: "index.html" },
      { title: "01. Environment Setup", href: "01-setup-c.html" },
      { title: "02. Introduction to C", href: "02-introduction-to-c.html" },
      { title: "03. Variables & Data Types", href: "03-variables-and-data-types/index.html" },
      { title: "04. Input & Output", href: "04-input-output/index.html" },
      { title: "05. Operators", href: "05-operators/index.html" },
      { title: "06. Conditionals", href: "06-conditionals/index.html" },
      { title: "07. Loops & Iteration", href: "07-loops/index.html" },
      { title: "08. Functions & Scope", href: "08-functions/index.html" },
      { title: "09. Arrays & VLAs", href: "09-arrays/index.html" },
      { title: "10. Pointers & Memory", href: "10-pointers/index.html" },
      { title: "11. Strings & Buffer Safety", href: "11-strings/index.html" },
      { title: "12. Dynamic Memory (Heap)", href: "12-dynamic-memory/index.html" },
      { title: "13. Structures & Alignment", href: "13-structures/index.html" },
      { title: "14. Unions & Bit-Fields", href: "14-unions-and-bit-fields/index.html" },
      { title: "15. Enumerations (enum)", href: "15-enums.html" },
      { title: "16. File I/O Operations", href: "16-file-handling/index.html" },
      { title: "17. Preprocessor & Macros", href: "17-preprocessor/index.html" },
      { title: "18. Storage Classes", href: "18-storage-classes.html" },
      { title: "19. Command Line Arguments", href: "19-command-line-arguments.html" },
      { title: "20. Multi-File Projects", href: "20-multi-file-projects.html" },
      { title: "21. Error Handling", href: "21-error-handling.html" },
      { title: "22. GDB & Sanitizers", href: "22-debugging-and-sanitizers.html" },
      { title: "23. C Standard Library", href: "23-standard-library.html" },
      { title: "24. Production Projects", href: "24-mini-projects.html" }
    ]
  },
  CPP: {
    title: "C++ Standard Curriculum",
    badge: "23 Modules",
    lessons: [
      { title: "Curriculum Overview", href: "index.html" },
      { title: "01. Setup C++ Environment", href: "01-setup-cpp.html" },
      { title: "02. Introduction to C++", href: "02-introduction-to-cpp.html" },
      { title: "03. Variables & Data Types", href: "03-variables-and-data-types/index.html" },
      { title: "04. Input & Output Streams", href: "04-input-output/index.html" },
      { title: "05. Operators & Precedence", href: "05-operators/index.html" },
      { title: "06. Control Flow & Conditionals", href: "06-conditionals/index.html" },
      { title: "07. Loops & Iteration", href: "07-loops/index.html" },
      { title: "08. Functions & Lambdas", href: "08-functions/index.html" },
      { title: "09. Arrays & Vectors", href: "09-arrays-and-vectors/index.html" },
      { title: "10. Pointers & Raw Memory", href: "10-pointers/index.html" },
      { title: "11. Strings & String View", href: "11-strings/index.html" },
      { title: "12. Object-Oriented Programming", href: "12-object-oriented-programming/index.html" },
      { title: "13. Memory Management & Smart Pointers", href: "13-memory-management/index.html" },
      { title: "14. Structs & Enums", href: "14-structures-and-enums/index.html" },
      { title: "15. Standard Template Library (STL)", href: "15-stl/index.html" },
      { title: "16. Templates & Generic Code", href: "16-templates/index.html" },
      { title: "17. Exception Handling", href: "17-exception-handling/index.html" },
      { title: "18. File Handling & Streams", href: "18-file-handling/index.html" },
      { title: "19. Preprocessor & Build Systems", href: "19-preprocessor-and-build/index.html" },
      { title: "20. Modern C++ (C++17/C++20)", href: "20-modern-cpp/index.html" },
      { title: "21. Debugging & Unit Testing", href: "21-debugging-and-testing/index.html" },
      { title: "22. Concurrency & Multithreading", href: "22-concurrency/index.html" },
      { title: "23. Capstone Mini Projects", href: "23-mini-projects/index.html" }
    ]
  },
  HTML: {
    title: "HTML5",
    badge: "32 Lessons",
    lessons: [
      { title: "Learn HTML — Complete HTML5 & Web Fundamentals", href: "index.html" },
      { title: "Set Up VS Code for HTML", href: "01-setup-vs-code.html" },
      { title: "Introduction to HTML", href: "02-introduction.html" },
      { title: "HTML Document Structure & Metadata", href: "03-html-document-structure.html" },
      { title: "Headings (<h1> to <h6>)", href: "04-headings.html" },
      { title: "Paragraphs (<p>)", href: "05-paragraphs.html" },
      { title: "Text Formatting (<strong>, <em>, <b>, <i>, etc.)", href: "06-text-formatting.html" },
      { title: "Links & Anchors (<a>)", href: "07-links.html" },
      { title: "Images, <figure>, & <picture>", href: "08-images.html" },
      { title: "Lists (<ul>, <ol>, <dl>)", href: "09-lists.html" },
      { title: "Tables (<table>, <thead>, <tbody>, <caption>)", href: "10-tables.html" },
      { title: "Forms (<form>, <label>, action, method)", href: "11-forms/index.html" },
      { title: "Input Types (text, email, password, date, etc.)", href: "12-input-types.html" },
      { title: "Buttons (<button>, type=\"submit\", type=\"button\")", href: "13-buttons.html" },
      { title: "Generic Containers (<div> and <span>)", href: "14-div-and-span.html" },
      { title: "HTML Attributes (id, class, title, Global Attributes)", href: "15-html-attributes.html" },
      { title: "HTML Comments (<!-- -->)", href: "16-html-comments.html" },
      { title: "HTML & CSS Colors (HEX, RGB, HSL, Contrast)", href: "17-html-colors.html" },
      { title: "HTML Entities (<, >, &, ©)", href: "18-html-entities.html" },
      { title: "Audio (<audio>)", href: "19-audio.html" },
      { title: "Video (<video>)", href: "20-video.html" },
      { title: "Inline Frames (<iframe>)", href: "21-iframes.html" },
      { title: "Semantic HTML (<header>, <nav>, <main>, <article>, etc.)", href: "22-semantic-html.html" },
      { title: "Modern HTML Features & Built-in Validation", href: "23-html5-features.html" },
      { title: "Web Accessibility (a11y) & HTML Validation", href: "24-accessibility-basics.html" },
      { title: "HTML Mini Projects", href: "25-mini-projects.html" },
      { title: "History, Evolution & Standards of HTML", href: "26-html-history.html" },
      { title: "Meta Tags & Head Metadata", href: "27-meta-tags.html" },
      { title: "Advanced Form Controls & HTML Validation", href: "28-advanced-form-controls.html" },
      { title: "Responsive Images & Art Direction (<picture>, srcset, sizes, loading=\"lazy\")", href: "29-responsive-images.html" },
      { title: "Interactive HTML5 Elements (<details>, <summary>, <dialog>, <progress>, <meter>, <template>)", href: "30-interactive-elements.html" },
      { title: "Global Attributes & Custom Data Attributes (data-*, tabindex, contenteditable)", href: "31-global-and-data-attributes.html" },
      { title: "HTML SEO & Open Graph Metadata", href: "32-html-seo-and-open-graph.html" }
    ]
  },
  JS: {
    title: "JavaScript",
    badge: "25 Lessons",
    lessons: [
      { title: "Learn JavaScript — Course Overview", href: "index.html" },
      { title: "Set Up JavaScript Environment", href: "01-setup-js.html" },
      { title: "Introduction to JavaScript", href: "02-introduction-to-js.html" },
      { title: "Variables in JavaScript (`let`, `const`, `var`)", href: "03-variables.html" },
      { title: "04. Data Types & Memory Module", href: "04-data-types/index.html" },
      { title: "05. Operators in JavaScript", href: "05-operators/index.html" },
      { title: "06. Conditionals in JavaScript", href: "06-conditionals/index.html" },
      { title: "07. Loops in JavaScript", href: "07-loops/index.html" },
      { title: "08. Functions Module in JavaScript", href: "08-functions/index.html" },
      { title: "09. Arrays & Functional Methods", href: "09-arrays/index.html" },
      { title: "10. Objects, Maps & RegExp", href: "10-objects/index.html" },
      { title: "11. ES6+ Scope & Syntax Module", href: "11-es6-scope-and-features/index.html" },
      { title: "14. Higher-Order Functions & Closures", href: "14-closures-and-callbacks.html" },
      { title: "15. Asynchronous JavaScript Module", href: "15-async-javascript/index.html" },
      { title: "18. Object-Oriented JavaScript", href: "18-object-oriented-js/index.html" },
      { title: "19. DOM & Events Module", href: "19-dom-and-events/index.html" },
      { title: "21. Web Storage & Cookies Module", href: "21-web-storage/index.html" },
      { title: "22. Error Handling Module", href: "22-error-handling/index.html" },
      { title: "23. JavaScript Modules Module", href: "23-modules/index.html" },
      { title: "24. Capstone JS Mini Projects", href: "24-mini-projects.html" },
      { title: "25. JavaScript Debugging Module", href: "25-javascript-debugging/index.html" }
    ]
  },
  Java: {
    title: "Java SE",
    badge: "24 Lessons",
    lessons: [
      { title: "Learn Java — Course Overview", href: "index.html" },
      { title: "Set Up Java Environment", href: "01-setup-java.html" },
      { title: "Java Program Structure", href: "02-java-program-structure.html" },
      { title: "03. Variables & Data Types Module", href: "03-variables-and-data-types/index.html" },
      { title: "Input & Output in Java", href: "04-input-and-output.html" },
      { title: "05. Operators & Expressions", href: "05-operators/index.html" },
      { title: "06. Conditional Decision Making", href: "06-conditionals/index.html" },
      { title: "07. Loops in Java", href: "07-loops/index.html" },
      { title: "08. Methods in Java", href: "08-methods/index.html" },
      { title: "09. Java Arrays Module", href: "09-arrays/index.html" },
      { title: "10. Java Strings Module", href: "10-strings/index.html" },
      { title: "11. Collections & Generics", href: "11-collections-framework/index.html" },
      { title: "12. Enums & Records Module", href: "12-enums-and-records/index.html" },
      { title: "14. Java OOP Concepts Module", href: "14-oop-concepts/index.html" },
      { title: "18. Exception Handling Module", href: "18-exceptions/index.html" },
      { title: "19. Packages & Access Control", href: "19-packages/index.html" },
      { title: "20. Streams API & File I/O", href: "20-streams-and-io/index.html" },
      { title: "22. Date & Time API Module", href: "22-dates-and-time/index.html" },
      { title: "23. Unit Testing & Debugging", href: "23-testing-and-debugging/index.html" },
      { title: "24. Build Tools & Capstone Projects", href: "24-build-tools/index.html" }
    ]
  },
  Python: {
    title: "Python 3",
    badge: "32 Lessons",
    lessons: [
      { title: "Learn Python 3 Programming", href: "index.html" },
      { title: "Set Up Python Development Environment", href: "01-setup-python.html" },
      { title: "Introduction to Python 3", href: "02-introduction-to-python.html" },
      { title: "Variables and Data Types in Python", href: "03-variables-and-data-types.html" },
      { title: "Input and Output in Python", href: "04-input-output.html" },
      { title: "Operators and Expressions in Python", href: "05-operators/index.html" },
      { title: "Conditional Decision Making in Python", href: "06-conditionals/index.html" },
      { title: "Loops in Python (`for`, `while`, `range`, `else`)", href: "07-loops/index.html" },
      { title: "Functions in Python", href: "08-functions/index.html" },
      { title: "Lists in Python", href: "09-lists.html" },
      { title: "Tuples in Python", href: "10-tuples.html" },
      { title: "Sets in Python", href: "11-sets.html" },
      { title: "Dictionaries in Python", href: "12-dictionaries.html" },
      { title: "Strings and Text Processing in Python", href: "13-strings.html" },
      { title: "List Comprehensions in Python", href: "14-list-comprehensions.html" },
      { title: "Advanced Functions in Python (`*args`, `**kwargs`, Closures & Scope)", href: "15-functions-advanced.html" },
      { title: "Modules and Packages in Python", href: "16-modules-and-packages.html" },
      { title: "File Handling in Python", href: "17-file-handling.html" },
      { title: "Exception Handling in Python", href: "18-exception-handling.html" },
      { title: "Object-Oriented Programming (OOP) in Python", href: "19-object-oriented-programming.html" },
      { title: "Iterators and Generators in Python", href: "20-iterators-and-generators.html" },
      { title: "Decorators in Python", href: "21-decorators.html" },
      { title: "Functional Programming: Lambda, Map, Filter, and Reduce", href: "22-lambda-map-filter-reduce.html" },
      { title: "Regular Expressions in Python (`re` Module)", href: "23-regular-expressions.html" },
      { title: "Working with Dates and Time in Python (`datetime` Module)", href: "24-datetime.html" },
      { title: "Working with JSON in Python (`json` Module)", href: "25-json-and-data-serialization.html" },
      { title: "Working with CSV Files in Python (`csv` Module)", href: "26-working-with-csv.html" },
      { title: "Type Hints and Dataclasses in Python", href: "27-type-hints-and-dataclasses.html" },
      { title: "Testing and Debugging in Python (`unittest` & `pdb`)", href: "28-testing-and-debugging.html" },
      { title: "Virtual Environments and Package Management (`venv` & `pip`)", href: "29-virtual-environments-and-pip.html" },
      { title: "Project Structure and PEP 8 Best Practices in Python", href: "30-project-structure-and-best-practices.html" },
      { title: "Capstone Python Mini Projects", href: "31-mini-projects.html" },
      { title: "Asynchronous Programming in Python (`asyncio`, `async` & `await`)", href: "32-asynchronous-programming-asyncio.html" }
    ]
  },
  SQL: {
    title: "SQL Database",
    badge: "30 Lessons",
    lessons: [
      { title: "Learn SQL Database & Querying", href: "index.html" },
      { title: "Set Up SQL Environment", href: "01-setup-sql.html" },
      { title: "Introduction to SQL & Relational Databases", href: "02-introduction-to-sql.html" },
      { title: "Database & Table Basics (`CREATE`, `ALTER`, `DROP`)", href: "03-databases-and-tables.html" },
      { title: "SQL Data Types & NULL Values", href: "04-data-types-and-null.html" },
      { title: "SQL Keys & Database Integrity", href: "05-keys/index.html" },
      { title: "INSERT – Adding Data to Tables", href: "06-insert.html" },
      { title: "SELECT – Reading & Querying Data", href: "07-select.html" },
      { title: "Filtering Data with WHERE", href: "08-where.html" },
      { title: "Operators in SQL", href: "09-operators/index.html" },
      { title: "Sorting & Limiting Results (`ORDER BY`, `LIMIT`)", href: "10-order-by-and-limit.html" },
      { title: "UPDATE & DELETE – Modifying Data", href: "11-update-and-delete.html" },
      { title: "SQL Aggregate Functions (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`)", href: "12-aggregate-functions.html" },
      { title: "`GROUP BY` & `HAVING` Clauses in SQL", href: "13-group-by-and-having.html" },
      { title: "SQL Joins & Table Relationships", href: "14-joins/index.html" },
      { title: "SQL Built-in Functions: String, Numeric, Date & NULL Handling", href: "15-sql-functions.html" },
      { title: "Conditional Logic with CASE Expressions in SQL", href: "16-case-expressions.html" },
      { title: "Subqueries & Nested Queries in SQL", href: "17-complex-queries/01-subqueries.html" },
      { title: "Set Operations: UNION, INTERSECT & EXCEPT", href: "17-complex-queries/02-set-operations.html" },
      { title: "Database Relationships & Normalization", href: "19-normalization.html" },
      { title: "Views & Virtual Tables in SQL", href: "20-views.html" },
      { title: "SQL Indexes & Query Performance Tuning", href: "21-db-administration/01-indexes-and-performance.html" },
      { title: "Transactions & ACID in SQL", href: "21-db-administration/02-transactions.html" },
      { title: "Common Table Expressions (CTEs) & WITH Clause", href: "23-advanced-sql/01-common-table-expressions.html" },
      { title: "Recursive CTEs in SQL", href: "23-advanced-sql/02-recursive-ctes.html" },
      { title: "SQL Window Functions", href: "23-advanced-sql/03-window-functions.html" },
      { title: "MySQL Stored Procedures & Functions", href: "26-programmable-sql/01-stored-procedures.html" },
      { title: "MySQL Triggers & Event Auditing", href: "26-programmable-sql/02-triggers.html" },
      { title: "SQL Security, Roles & Permissions", href: "28-sql-security.html" },
      { title: "Working with JSON Data in MySQL", href: "29-json-data-in-sql.html" },
      { title: "Practical SQL Capstone Projects", href: "30-sql-projects.html" }
    ]
  },
  "Git-and-GitHub": {
    title: "Git & GitHub",
    badge: "30 Lessons",
    lessons: [
      { title: "Learn Git & GitHub — Masterclass", href: "index.html" },
      { title: "Introduction to Version Control & Git", href: "01-introduction-to-version-control.html" },
      { title: "Git Installation & Environment Setup", href: "02-installation-and-setup.html" },
      { title: "Git Configuration (`git config`)", href: "03-git-configuration.html" },
      { title: "Initializing a Repository (`git init`)", href: "04-initializing-a-repository.html" },
      { title: "Git File States & The 3 Trees", href: "05-git-file-states-and-lifecycle.html" },
      { title: "Staging & Committing Changes (`git add`, `git commit`)", href: "06-staging-and-committing.html" },
      { title: "Viewing History (`git log`, `git status`)", href: "07-viewing-history-and-git-log.html" },
      { title: "Ignoring Files (`.gitignore`)", href: "08-ignoring-files-with-gitignore.html" },
      { title: "Inspecting Changes (`git diff`)", href: "09-git-diff-and-inspecting-changes.html" },
      { title: "Undoing Local Changes (`git restore`)", href: "10-undoing-changes-and-git-restore.html" },
      { title: "Undoing Commits (`git reset`, `git revert`)", href: "11-git-reset-and-git-revert.html" },
      { title: "Branching Basics (`git branch`, `git switch`)", href: "12-branching-basics.html" },
      { title: "Merging Branches (`git merge`)", href: "13-merging-branches.html" },
      { title: "Handling Merge Conflicts Step-by-Step", href: "14-merge-conflicts/index.html" },
      { title: "Git Rebase (`git rebase`)", href: "15-git-rebase.html" },
      { title: "Git Stash (`git stash`)", href: "16-git-stash.html" },
      { title: "Remote Repositories (`git remote`)", href: "17-remote-repositories-and-remotes.html" },
      { title: "Syncing Remotes (`git push`, `git pull`)", href: "18-git-push-and-git-pull.html" },
      { title: "Remote Tracking & Fetching (`git fetch`)", href: "19-git-fetch-and-remote-branches.html" },
      { title: "Introduction to GitHub Platform", href: "20-introduction-to-github.html" },
      { title: "Forking & Pull Requests (PRs)", href: "21-forking-and-pull-requests.html" },
      { title: "SSH Keys & GitHub Authentication", href: "22-ssh-keys-and-github-authentication.html" },
      { title: "GitHub Issues, Projects & Discussions", href: "23-github-issues-and-project-boards.html" },
      { title: "Free Hosting with GitHub Pages", href: "24-github-pages-and-hosting.html" },
      { title: "Git Tags & GitHub Releases", href: "25-git-tags-and-releases.html" },
      { title: "GitHub Actions & CI/CD Automation Basics", href: "26-github-actions-and-ci-cd-basics.html" },
      { title: "Terminal Productivity & Git Aliases", href: "27-git-aliases-and-shortcuts.html" },
      { title: "Industry Workflows (GitFlow & Trunk-Based)", href: "28-git-workflows-gitflow-and-trunk-based.html" },
      { title: "Security Best Practices & Secret Protection", href: "29-git-best-practices-and-security.html" },
      { title: "Practical Team Workflows & Capstone Projects", href: "30-practical-projects-and-workflows.html" }
    ]
  }
};
