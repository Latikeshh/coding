# Input Types (`text`, `email`, `password`, `date`, etc.)

> 🟢 Beginner

## 📖 Definition

The **`<input>`** element is the most versatile form control in HTML. Its behavior, appearance, and mobile keyboard layout are determined by its **`type`** attribute.

## 🌐 Multilingual Summary / संक्षेप / स्पष्टीकरण

### English
The `type` attribute on `<input>` specifies data type and validation behavior (`email`, `password`, `number`, `date`, `tel`, `file`, `checkbox`, `radio`).

### Hindi
`<input>` का `type` एट्रिब्यूट तय करता है कि किस प्रकार का डाटा (टेक्स्ट, पासवर्ड, ईमेल, नंबर, तारीख, फाइल) स्वीकार किया जाएगा।

### Marathi
इनपुटचा `type` एट्रिब्यूट माहितीचा प्रकार (ईमेल, पासवर्ड, नंबर, तारीख, फाईल) ठरवतो.

### Hinglish
Input `type` attribute se data validation aur mobile keyboard layout change hota hai (`email`, `password`, `number`, `radio`, `checkbox`, `file`).

## 📝 Essential Input Types Reference

| Input Type | Common Usage | Special Attributes / Features |
|---|---|---|
| `type="text"` | Single-line plain text (names, titles). | `placeholder`, `maxlength` |
| `type="password"` | Masked password text (hides characters). | `minlength`, `autocomplete="current-password"` |
| `type="email"` | Validated email address. Opens `@` keyboard on mobile. | `required`, `multiple` |
| `type="number"` | Numeric values with spinner controls. | `min`, `max`, `step` |
| `type="tel"` | Telephone numbers. Opens numeric dial pad on mobile. | `pattern="[0-9]{10}"` |
| `type="url"` | Validated website URLs (`https://...`). | `placeholder="https://..."` |
| `type="date"` | Date picker widget (day/month/year). | `min="2026-01-01"` |
| `type="time"` | Time picker widget. | `step` |
| `type="color"` | Color picker palette widget. | `value="#007bff"` |
| `type="file"` | File upload browser dialog. | `accept="image/*,.pdf"`, `multiple` |
| `type="checkbox"` | Multi-select toggle options (select zero, one, or many). | `checked` |
| `type="radio"` | Single-choice selection group (select exactly one option). | Grouped by identical `name="group"` |
| `type="range"` | Slider control for numeric range selection. | `min`, `max`, `step` |
| `type="search"` | Search query field with built-in clear (`X`) button. | `placeholder` |
| `type="hidden"` | Stores data hidden from UI but submitted with form. | `value="user_id_123"` |

## 🔑 Radio Button Grouping Rule

To ensure radio buttons act as a single-choice group where selecting one option automatically deselects others, **all radio buttons in the group must share the exact same `name` attribute value**:

```html
<p>Select T-Shirt Size:</p>
<label><input type="radio" name="size" value="s"> Small</label>
<label><input type="radio" name="size" value="m" checked> Medium</label>
<label><input type="radio" name="size" value="l"> Large</label>
```

## 📝 Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Input Types Practice</title>
</head>
<body>

  <h1>User Account Setup</h1>

  <form action="/signup" method="POST" enctype="multipart/form-data">

    <p>
      <label for="email">Email Address:</label><br>
      <input id="email" type="email" name="userEmail" required placeholder="user@domain.com">
    </p>

    <p>
      <label for="pass">Password:</label><br>
      <input id="pass" type="password" name="userPassword" required minlength="8">
    </p>

    <p>
      <label for="age">Age (18–99):</label><br>
      <input id="age" type="number" name="age" min="18" max="99" value="20">
    </p>

    <p>
      <label for="dob">Date of Birth:</label><br>
      <input id="dob" type="date" name="dob">
    </p>

    <p>
      <label for="avatar">Upload Profile Photo:</label><br>
      <input id="avatar" type="file" name="avatar" accept="image/png, image/jpeg">
    </p>

    <p>
      <label>
        <input type="checkbox" name="terms" required> I agree to the terms and conditions
      </label>
    </p>

    <button type="submit">Create Account</button>

  </form>

</body>
</html>
```

## ⚠️ Common Mistakes

- **Giving different `name` values to radio buttons in the same group:** Allows multiple radios to be selected simultaneously.
- **Using `type="text"` for numbers or emails:** Loses mobile keyboard optimization and built-in browser client validation.

## 🧪 Try It Yourself

Create an event booking form using:
1. `type="email"` for user contact email.
2. `type="date"` and `type="time"` for booking schedule.
3. `type="number"` for number of tickets (`min="1"`, `max="10"`).
4. `type="checkbox"` for optional add-ons.

## 🎯 Mini Challenge

Build a survey form using radio buttons for rating satisfaction (1 to 5) and a `type="range"` slider for budget selection.

## 🧭 Navigation

[← First: HTML Home](00-README.md) | [← Previous: Forms](11-forms.md) | [Next: Buttons →](13-buttons.md)
