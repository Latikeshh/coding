/**
 * Centralized Sidebar Data Repository - Learn Coding Developer Hub
 * Single Source of Truth for Navigation Metadata Across All 9 Course Tracks
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
      {
        title: "03. Variables & Data Types",
        href: "03-variables-and-data-types/index.html",
        subItems: [
          { title: "01. Variables", href: "03-variables-and-data-types/01-variables.html" },
          { title: "02. Data Types", href: "03-variables-and-data-types/02-data-types.html" },
          { title: "03. Constants & Qualifiers", href: "03-variables-and-data-types/03-constants-and-qualifiers.html" },
          { title: "04. Type Conversion", href: "03-variables-and-data-types/04-type-conversion-casting.html" }
        ]
      },
      {
        title: "04. Input & Output",
        href: "04-input-output/index.html",
        subItems: [
          { title: "01. printf Formatting", href: "04-input-output/01-printf-formatting.html" },
          { title: "02. scanf Input", href: "04-input-output/02-scanf-input.html" },
          { title: "03. getchar & putchar", href: "04-input-output/03-getchar-putchar-puts.html" },
          { title: "04. fgets Buffer Handling", href: "04-input-output/04-fgets-buffer-handling.html" }
        ]
      },
      {
        title: "05. Operators",
        href: "05-operators/index.html",
        subItems: [
          { title: "01. Arithmetic Operators", href: "05-operators/01-arithmetic-operators.html" },
          { title: "02. Relational Operators", href: "05-operators/02-relational-operators.html" },
          { title: "03. Logical Operators", href: "05-operators/03-logical-operators.html" },
          { title: "04. Bitwise Operators", href: "05-operators/04-bitwise-operators.html" },
          { title: "05. Assignment Operators", href: "05-operators/05-assignment-operators.html" },
          { title: "06. Increment & Decrement", href: "05-operators/06-increment-decrement.html" },
          { title: "07. Special C Operators", href: "05-operators/07-special-c-operators.html" }
        ]
      },
      {
        title: "06. Conditionals",
        href: "06-conditionals/index.html",
        subItems: [
          { title: "01. if Statement", href: "06-conditionals/01-if-statement.html" },
          { title: "02. if-else Statement", href: "06-conditionals/02-if-else-statement.html" },
          { title: "03. else-if Ladder", href: "06-conditionals/03-else-if-ladder.html" },
          { title: "04. switch Statement", href: "06-conditionals/04-switch-statement.html" },
          { title: "05. Nested Conditionals", href: "06-conditionals/05-nested-conditionals.html" },
          { title: "06. Ternary Operator", href: "06-conditionals/06-ternary-operator.html" }
        ]
      },
      {
        title: "07. Loops & Iteration",
        href: "07-loops/index.html",
        subItems: [
          { title: "01. for Loop", href: "07-loops/01-for-loop.html" },
          { title: "02. while Loop", href: "07-loops/02-while-loop.html" },
          { title: "03. do-while Loop", href: "07-loops/03-do-while-loop.html" },
          { title: "04. Nested Loops", href: "07-loops/04-nested-loops.html" },
          { title: "05. break & continue", href: "07-loops/05-break-continue.html" }
        ]
      },
      {
        title: "08. Functions & Scope",
        href: "08-functions/index.html",
        subItems: [
          { title: "01. Prototypes & Definitions", href: "08-functions/01-prototypes-definitions.html" },
          { title: "02. Parameters & Passing", href: "08-functions/02-parameters-pass-by-value-ref.html" },
          { title: "03. Recursion in C", href: "08-functions/03-recursion-in-c.html" },
          { title: "04. Scope & Lifetime", href: "08-functions/04-function-scope-and-lifetime.html" },
          { title: "05. Function Pointers", href: "08-functions/05-function-pointers-callbacks.html" },
          { title: "06. Variadic & Inline", href: "08-functions/06-variadic-inline-functions.html" }
        ]
      },
      {
        title: "09. Arrays & VLAs",
        href: "09-arrays/index.html",
        subItems: [
          { title: "01. 1D Arrays & Memory", href: "09-arrays/01-1d-arrays-memory.html" },
          { title: "02. 2D Multidimensional", href: "09-arrays/02-2d-multidimensional-arrays.html" },
          { title: "03. Passing Arrays", href: "09-arrays/03-passing-arrays-to-functions.html" },
          { title: "04. Variable Length Arrays", href: "09-arrays/04-variable-length-arrays.html" }
        ]
      },
      {
        title: "10. Pointers & Memory",
        href: "10-pointers/index.html",
        subItems: [
          { title: "01. Pointer Basics", href: "10-pointers/01-pointer-basics-addresses.html" },
          { title: "02. Pointer Arithmetic", href: "10-pointers/02-pointer-arithmetic.html" },
          { title: "03. Double Pointers", href: "10-pointers/03-double-pointers.html" },
          { title: "04. Const & Void Pointers", href: "10-pointers/04-const-and-void-pointers.html" },
          { title: "05. Dangling & Null Pointers", href: "10-pointers/05-dangling-wild-null-pointers.html" }
        ]
      },
      {
        title: "11. Strings & Buffer Safety",
        href: "11-strings/index.html",
        subItems: [
          { title: "01. String Basics", href: "11-strings/01-string-basics-null-terminator.html" },
          { title: "02. String Functions", href: "11-strings/02-string-handling-functions.html" },
          { title: "03. Traversal & Manipulation", href: "11-strings/03-string-traversal-manipulation.html" },
          { title: "04. Safe String Functions", href: "11-strings/04-safe-string-functions-buffer-overflows.html" }
        ]
      },
      {
        title: "12. Dynamic Memory (Heap)",
        href: "12-dynamic-memory/index.html",
        subItems: [
          { title: "01. malloc, calloc, free", href: "12-dynamic-memory/01-malloc-calloc-free.html" },
          { title: "02. realloc Resizing", href: "12-dynamic-memory/02-realloc-dynamic-resizing.html" },
          { title: "03. Memory Leaks & Valgrind", href: "12-dynamic-memory/03-memory-leaks-valgrind-asan.html" }
        ]
      },
      {
        title: "13. Structures & Alignment",
        href: "13-structures/index.html",
        subItems: [
          { title: "01. Struct Declaration", href: "13-structures/01-struct-declaration-typedef.html" },
          { title: "02. Pointers to Structs", href: "13-structures/02-pointers-to-structs-arrow-operator.html" },
          { title: "03. Arrays of Structs", href: "13-structures/03-arrays-of-structs-nested-structs.html" },
          { title: "04. Padding & Alignment", href: "13-structures/04-padding-alignment-offsetof.html" }
        ]
      },
      {
        title: "14. Unions & Bit-Fields",
        href: "14-unions-and-bit-fields/index.html",
        subItems: [
          { title: "01. Unions Shared Memory", href: "14-unions-and-bit-fields/01-unions-shared-memory.html" },
          { title: "02. Bit-Fields Hardware", href: "14-unions-and-bit-fields/02-bit-fields-hardware-registers.html" }
        ]
      },
      { title: "15. Enumerations (enum)", href: "15-enums.html" },
      {
        title: "16. File I/O Operations",
        href: "16-file-handling/index.html",
        subItems: [
          { title: "01. fopen & Modes", href: "16-file-handling/01-fopen-fclose-modes.html" },
          { title: "02. Text I/O Operations", href: "16-file-handling/02-fprintf-fscanf-text-io.html" },
          { title: "03. Binary I/O Operations", href: "16-file-handling/03-fread-fwrite-binary-io.html" },
          { title: "04. Random Access Seeking", href: "16-file-handling/04-fseek-ftell-random-access.html" }
        ]
      },
      {
        title: "17. Preprocessor & Macros",
        href: "17-preprocessor/index.html",
        subItems: [
          { title: "01. Include & Define", href: "17-preprocessor/01-include-define-macros.html" },
          { title: "02. Conditional Compilation", href: "17-preprocessor/02-conditional-compilation.html" },
          { title: "03. Pragma & Concatenation", href: "17-preprocessor/03-pragma-stringification-concatenation.html" }
        ]
      },
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
      { title: "13. Memory Management", href: "13-memory-management/index.html" },
      { title: "14. Structs & Enums", href: "14-structures-and-enums/index.html" },
      { title: "15. Standard Template Library", href: "15-stl/index.html" },
      { title: "16. Templates & Generic Code", href: "16-templates/index.html" },
      { title: "17. Exception Handling", href: "17-exception-handling/index.html" },
      { title: "18. File Handling & Streams", href: "18-file-handling/index.html" },
      { title: "19. Preprocessor & Build", href: "19-preprocessor-and-build/index.html" },
      { title: "20. Modern C++ (C++17/C++20)", href: "20-modern-cpp/index.html" },
      { title: "21. Debugging & Testing", href: "21-debugging-and-testing/index.html" },
      { title: "22. Concurrency & Multithreading", href: "22-concurrency/index.html" },
      { title: "23. Capstone Mini Projects", href: "23-mini-projects/index.html" }
    ]
  },
  HTML: {
    title: "HTML5 Curriculum",
    badge: "32 Modules",
    lessons: [
      { title: "Curriculum Overview", href: "index.html" },
      { title: "01. Set Up VS Code for HTML", href: "01-setup-vs-code.html" },
      { title: "02. Introduction to HTML", href: "02-introduction.html" },
      { title: "03. HTML Document Structure", href: "03-html-document-structure.html" },
      { title: "04. Headings (h1 - h6)", href: "04-headings.html" },
      { title: "05. Paragraphs (<p>)", href: "05-paragraphs.html" },
      { title: "06. Text Formatting Tags", href: "06-text-formatting.html" },
      { title: "07. Links & Anchors (<a>)", href: "07-links.html" },
      { title: "08. Images & Picture Tags", href: "08-images.html" },
      { title: "09. Lists (ul, ol, dl)", href: "09-lists.html" },
      { title: "10. Tables (table, tr, td)", href: "10-tables.html" },
      { title: "11. Forms & Validation", href: "11-forms/index.html" },
      { title: "12. Input Types", href: "12-input-types.html" },
      { title: "13. Buttons & Submit", href: "13-buttons.html" },
      { title: "14. Containers (div & span)", href: "14-div-and-span.html" },
      { title: "15. HTML Attributes", href: "15-html-attributes.html" },
      { title: "16. HTML Comments", href: "16-html-comments.html" },
      { title: "17. Colors & Contrast", href: "17-html-colors.html" },
      { title: "18. HTML Entities", href: "18-html-entities.html" },
      { title: "19. Audio (<audio>)", href: "19-audio.html" },
      { title: "20. Video (<video>)", href: "20-video.html" },
      { title: "21. Inline Frames (iframe)", href: "21-iframes.html" },
      { title: "22. Semantic HTML Tags", href: "22-semantic-html.html" },
      { title: "23. Modern HTML5 Features", href: "23-html5-features.html" },
      { title: "24. Web Accessibility (a11y)", href: "24-accessibility-basics.html" },
      { title: "25. HTML Mini Projects", href: "25-mini-projects.html" },
      { title: "26. History & Evolution", href: "26-html-history.html" },
      { title: "27. Meta Tags & Metadata", href: "27-meta-tags.html" },
      { title: "28. Advanced Form Controls", href: "28-advanced-form-controls.html" },
      { title: "29. Responsive Images", href: "29-responsive-images.html" },
      { title: "30. Interactive Elements", href: "30-interactive-elements.html" },
      { title: "31. Global Data Attributes", href: "31-global-and-data-attributes.html" },
      { title: "32. SEO & Open Graph", href: "32-html-seo-and-open-graph.html" }
    ]
  },
  JS: {
    title: "JavaScript Curriculum",
    badge: "25 Modules",
    lessons: [
      { title: "Curriculum Overview", href: "index.html" },
      { title: "01. Setup JS Environment", href: "01-setup-js.html" },
      { title: "02. Introduction to JavaScript", href: "02-introduction-to-js.html" },
      { title: "03. Variables (let, const, var)", href: "03-variables.html" },
      { title: "04. Data Types & Memory", href: "04-data-types/index.html" },
      { title: "05. Operators in JavaScript", href: "05-operators/index.html" },
      { title: "06. Conditionals in JS", href: "06-conditionals/index.html" },
      { title: "07. Loops & Iteration", href: "07-loops/index.html" },
      { title: "08. Functions & Scope", href: "08-functions/index.html" },
      { title: "09. Arrays & Functional Methods", href: "09-arrays/index.html" },
      { title: "10. Objects, Maps & RegExp", href: "10-objects/index.html" },
      { title: "11. ES6+ Syntax & Destructuring", href: "11-es6-scope-and-features/index.html" },
      { title: "14. Closures & Callbacks", href: "14-closures-and-callbacks.html" },
      { title: "15. Asynchronous JavaScript", href: "15-async-javascript/index.html" },
      { title: "18. Object-Oriented JS", href: "18-object-oriented-js/index.html" },
      { title: "19. DOM & Events Engine", href: "19-dom-and-events/index.html" },
      { title: "21. Web Storage & Cookies", href: "21-web-storage/index.html" },
      { title: "22. Error Handling", href: "22-error-handling/index.html" },
      { title: "23. JavaScript Modules", href: "23-modules/index.html" },
      { title: "24. Capstone JS Mini Projects", href: "24-mini-projects.html" },
      { title: "25. JavaScript Debugging", href: "25-javascript-debugging/index.html" }
    ]
  },
  Java: {
    title: "Java SE Curriculum",
    badge: "24 Modules",
    lessons: [
      { title: "Curriculum Overview", href: "index.html" },
      { title: "01. Setup Java Environment", href: "01-setup-java.html" },
      { title: "02. Java Program Structure", href: "02-java-program-structure.html" },
      { title: "03. Variables & Data Types", href: "03-variables-and-data-types/index.html" },
      { title: "04. Input & Output Streams", href: "04-input-and-output.html" },
      { title: "05. Operators & Expressions", href: "05-operators/index.html" },
      { title: "06. Conditional Logic", href: "06-conditionals/index.html" },
      { title: "07. Loops in Java", href: "07-loops/index.html" },
      { title: "08. Methods in Java", href: "08-methods/index.html" },
      { title: "09. Java Arrays", href: "09-arrays/index.html" },
      { title: "10. Java Strings", href: "10-strings/index.html" },
      { title: "11. Collections Framework", href: "11-collections-framework/index.html" },
      { title: "12. Enums & Records", href: "12-enums-and-records/index.html" },
      { title: "14. Java OOP Concepts", href: "14-oop-concepts/index.html" },
      { title: "18. Exception Handling", href: "18-exceptions/index.html" },
      { title: "19. Packages & Access", href: "19-packages/index.html" },
      { title: "20. Streams API & File I/O", href: "20-streams-and-io/index.html" },
      { title: "22. Date & Time API", href: "22-dates-and-time/index.html" },
      { title: "23. Unit Testing & Debugging", href: "23-testing-and-debugging/index.html" },
      { title: "24. Build Tools & Projects", href: "24-build-tools/index.html" }
    ]
  },
  Python: {
    title: "Python 3 Curriculum",
    badge: "32 Modules",
    lessons: [
      { title: "Curriculum Overview", href: "index.html" },
      { title: "01. Setup Python Environment", href: "01-setup-python.html" },
      { title: "02. Introduction to Python 3", href: "02-introduction-to-python.html" },
      { title: "03. Variables & Data Types", href: "03-variables-and-data-types.html" },
      { title: "04. Input & Output", href: "04-input-output.html" },
      { title: "05. Operators & Expressions", href: "05-operators/index.html" },
      { title: "06. Conditionals in Python", href: "06-conditionals/index.html" },
      { title: "07. Loops & Iteration", href: "07-loops/index.html" },
      { title: "08. Functions in Python", href: "08-functions/index.html" },
      { title: "09. Lists in Python", href: "09-lists.html" },
      { title: "10. Tuples in Python", href: "10-tuples.html" },
      { title: "11. Sets in Python", href: "11-sets.html" },
      { title: "12. Dictionaries in Python", href: "12-dictionaries.html" },
      { title: "13. Strings & Text Processing", href: "13-strings.html" },
      { title: "14. List Comprehensions", href: "14-list-comprehensions.html" },
      { title: "15. Advanced Functions & Scope", href: "15-functions-advanced.html" },
      { title: "16. Modules & Packages", href: "16-modules-and-packages.html" },
      { title: "17. File Handling in Python", href: "17-file-handling.html" },
      { title: "18. Exception Handling", href: "18-exception-handling.html" },
      { title: "19. OOP in Python", href: "19-object-oriented-programming.html" },
      { title: "20. Iterators & Generators", href: "20-iterators-and-generators.html" },
      { title: "21. Decorators in Python", href: "21-decorators.html" },
      { title: "22. Functional Programming", href: "22-lambda-map-filter-reduce.html" },
      { title: "23. Regular Expressions (re)", href: "23-regular-expressions.html" },
      { title: "24. Datetime Module", href: "24-datetime.html" },
      { title: "25. JSON Serialization", href: "25-json-and-data-serialization.html" },
      { title: "26. Working with CSV Files", href: "26-working-with-csv.html" },
      { title: "27. Type Hints & Dataclasses", href: "27-type-hints-and-dataclasses.html" },
      { title: "28. Testing & Debugging", href: "28-testing-and-debugging.html" },
      { title: "29. Virtual Environments & Pip", href: "29-virtual-environments-and-pip.html" },
      { title: "30. PEP 8 & Best Practices", href: "30-project-structure-and-best-practices.html" },
      { title: "31. Capstone Python Projects", href: "31-mini-projects.html" },
      { title: "32. Asyncio Programming", href: "32-asynchronous-programming-asyncio.html" }
    ]
  },
  SQL: {
    title: "SQL Database Curriculum",
    badge: "30 Modules",
    lessons: [
      { title: "Curriculum Overview", href: "index.html" },
      { title: "01. Setup SQL Environment", href: "01-setup-sql.html" },
      { title: "02. Intro to SQL & RDBMS", href: "02-introduction-to-sql.html" },
      { title: "03. Databases & Tables", href: "03-databases-and-tables.html" },
      { title: "04. Data Types & NULL Values", href: "04-data-types-and-null.html" },
      { title: "05. Keys & Integrity", href: "05-keys/index.html" },
      { title: "06. INSERT Operations", href: "06-insert.html" },
      { title: "07. SELECT Querying", href: "07-select.html" },
      { title: "08. Filtering with WHERE", href: "08-where.html" },
      { title: "09. SQL Operators", href: "09-operators/index.html" },
      { title: "10. ORDER BY & LIMIT", href: "10-order-by-and-limit.html" },
      { title: "11. UPDATE & DELETE Data", href: "11-update-and-delete.html" },
      { title: "12. Aggregate Functions", href: "12-aggregate-functions.html" },
      { title: "13. GROUP BY & HAVING", href: "13-group-by-and-having.html" },
      { title: "14. SQL Joins", href: "14-joins/index.html" },
      { title: "15. Built-in SQL Functions", href: "15-sql-functions.html" },
      { title: "16. CASE Expressions", href: "16-case-expressions.html" },
      { title: "17. Subqueries & Complex Queries", href: "17-complex-queries/01-subqueries.html" },
      { title: "18. Set Operations (UNION)", href: "17-complex-queries/02-set-operations.html" },
      { title: "19. Database Normalization", href: "19-normalization.html" },
      { title: "20. SQL Views & Virtual Tables", href: "20-views.html" },
      { title: "21. Indexes & Performance", href: "21-db-administration/01-indexes-and-performance.html" },
      { title: "22. Transactions & ACID", href: "21-db-administration/02-transactions.html" },
      { title: "23. Common Table Expressions", href: "23-advanced-sql/01-common-table-expressions.html" },
      { title: "24. Recursive CTEs", href: "23-advanced-sql/02-recursive-ctes.html" },
      { title: "25. Window Functions", href: "23-advanced-sql/03-window-functions.html" },
      { title: "26. Stored Procedures", href: "26-programmable-sql/01-stored-procedures.html" },
      { title: "27. Triggers & Event Auditing", href: "26-programmable-sql/02-triggers.html" },
      { title: "28. SQL Security & Roles", href: "28-sql-security.html" },
      { title: "29. JSON Data in SQL", href: "29-json-data-in-sql.html" },
      { title: "30. Capstone SQL Projects", href: "30-sql-projects.html" }
    ]
  },
  "Git-and-GitHub": {
    title: "Git & GitHub Curriculum",
    badge: "30 Modules",
    lessons: [
      { title: "Curriculum Overview", href: "index.html" },
      { title: "01. Intro to Version Control", href: "01-introduction-to-version-control.html" },
      { title: "02. Installation & Setup", href: "02-installation-and-setup.html" },
      { title: "03. Git Configuration", href: "03-git-configuration.html" },
      { title: "04. Initializing Repository", href: "04-initializing-a-repository.html" },
      { title: "05. File States & 3 Trees", href: "05-git-file-states-and-lifecycle.html" },
      { title: "06. Staging & Committing", href: "06-staging-and-committing.html" },
      { title: "07. Viewing History (git log)", href: "07-viewing-history-and-git-log.html" },
      { title: "08. Ignoring Files (.gitignore)", href: "08-ignoring-files-with-gitignore.html" },
      { title: "09. Inspecting Changes (diff)", href: "09-git-diff-and-inspecting-changes.html" },
      { title: "10. Undoing Changes (restore)", href: "10-undoing-changes-and-git-restore.html" },
      { title: "11. Reset & Revert", href: "11-git-reset-and-git-revert.html" },
      { title: "12. Branching Basics", href: "12-branching-basics.html" },
      { title: "13. Merging Branches", href: "13-merging-branches.html" },
      { title: "14. Handling Merge Conflicts", href: "14-merge-conflicts/index.html" },
      { title: "15. Git Rebase", href: "15-git-rebase.html" },
      { title: "16. Git Stash", href: "16-git-stash.html" },
      { title: "17. Remote Repositories", href: "17-remote-repositories-and-remotes.html" },
      { title: "18. Git Push & Pull", href: "18-git-push-and-git-pull.html" },
      { title: "19. Remote Tracking & Fetch", href: "19-git-fetch-and-remote-branches.html" },
      { title: "20. Introduction to GitHub", href: "20-introduction-to-github.html" },
      { title: "21. Forking & Pull Requests", href: "21-forking-and-pull-requests.html" },
      { title: "22. SSH Keys & Auth", href: "22-ssh-keys-and-github-authentication.html" },
      { title: "23. GitHub Issues & Projects", href: "23-github-issues-and-project-boards.html" },
      { title: "24. Hosting with GitHub Pages", href: "24-github-pages-and-hosting.html" },
      { title: "25. Git Tags & Releases", href: "25-git-tags-and-releases.html" },
      { title: "26. GitHub Actions & CI/CD", href: "26-github-actions-and-ci-cd-basics.html" },
      { title: "27. Terminal Aliases", href: "27-git-aliases-and-shortcuts.html" },
      { title: "28. Industry Workflows", href: "28-git-workflows-gitflow-and-trunk-based.html" },
      { title: "29. Security Best Practices", href: "29-git-best-practices-and-security.html" },
      { title: "30. Capstone Team Projects", href: "30-practical-projects-and-workflows.html" }
    ]
  }
};
