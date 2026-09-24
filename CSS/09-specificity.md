# Specificity & The Cascade

> 🟢 Beginner

## 📖 Definition

Specificity is the hierarchy score that determines which CSS rule applies when multiple conflicting selectors target the same HTML element.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Specificity hierarchy: `Inline Styles` > `ID (#)` > `Class (.)` > `Element`. Higher specificity wins conflicting rules.
> - **Hindi:** स्पेसिफिसिटी से तय होता है कि कौनसा नियम जीतेगा: `इन्लाइन स्टाइल` > `ID (#)` > `क्लास (.)` > `एलीमेंट`|
> - **Marathi:** स्पेसिफिसिटी नियमांनुसार `ID` चा स्कोअर `क्लास` पेक्षा जास्त असतो.
> - **Hinglish:** CSS Conflict hone par Specificity score faisla karta hai: `Inline` > `ID` > `Class` > `Element`.

## 📝 Specificity Hierarchy Order

1. `Inline Styles` (`style="..."` = 1,0,0,0)
2. `ID Selectors` (`#header` = 0,1,0,0)
3. `Class & Attribute Selectors` (`.card`, `[type="text"]` = 0,0,1,0)
4. `Element Selectors` (`p`, `div` = 0,0,0,1)

```css
p { color: blue; }         /* Element (0,0,0,1) */
.text { color: green; }     /* Class (0,0,1,0) - Wins over element */
#title { color: red; }     /* ID (0,1,0,0) - Wins over class and element */
```

## 🧭 Navigation

[← Previous](08-selectors.md) | [CSS Home](00-README.md) | [Next →](10-width-and-height.md)
