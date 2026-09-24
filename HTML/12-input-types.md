# Input Types (`text`, `email`, `password`, `date`, etc.)

> 🟢 Beginner

## 📖 Definition

The **`<input>`** element is the most versatile form control in HTML. Its behavior, visual presentation, validation rules, and mobile keyboard layout are determined by its **`type`** attribute.

## 🌍 Multilingual Summary

### English
The `type` attribute on `<input>` specifies data type and validation behavior (`email`, `password`, `number`, `date`, `tel`, `file`, `checkbox`, `radio`).

### Hindi
`<input>` ka `type` attribute data type aur validation behavior specfiy karta hai (`text`, `email`, `password`, `number`, `date`, `file`, `checkbox`, `radio`).

### Marathi
`<input>` cha `type` attribute mahiticha prakar ani validation tharavto (`email`, `password`, `number`, `date`, `file`, `checkbox`, `radio`).

## 🤔 Why Do We Use Them?

Using specific input types optimizes user experience—for example, opening numeric keypads on mobile screens for telephone numbers or presenting native calendar widgets for date picking, while automatically checking client-side formatting before form submission.

## 📝 Essential Input Types Reference

| Input Type | Common Usage | Key Attributes & Features |
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
| `type="search"` | Search query field with clear (`X`) button. | `placeholder` |
| `type="hidden"` | Stores data hidden from UI but submitted with form. | `value="user_123"` |

## 🔑 Radio Button Grouping Rule

To ensure radio buttons act as a single-choice group where selecting one option automatically deselects others, **all radio buttons in the group must share the exact same `name` attribute value**:

```html
<p>Select Size:</p>
<label><input type="radio" name="size" value="s"> Small</label>
<label><input type="radio" name="size" value="m" checked> Medium</label>
<label><input type="radio" name="size" value="l"> Large</label>
```

## 💻 Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Input Types Demonstration</title>
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
        <input type="checkbox" name="terms" required> I agree to terms and conditions
      </label>
    </p>

    <button type="submit">Create Account</button>

  </form>

</body>
</html>
```

## 👀 Output / What You Will See

An interactive user setup form rendered with appropriate widgets—masked password field, numeric stepper for age, date picker calendar for birthdate, file upload browser, and required checkbox toggle.

## 🧪 Try It Yourself

1. Create an event booking form using `type="email"`, `type="date"`, and `type="time"`.
2. Add a `type="number"` for ticket quantity (`min="1"`, `max="10"`).
3. Add a radio button group for payment method selection sharing `name="payment"`.

## ⚠️ Common Mistakes

- **Giving different `name` values to radio buttons in the same group:** Allows multiple radio options to be selected simultaneously.
- **Using `type="text"` for numbers or emails:** Loses mobile keyboard optimizations and native browser validation.

## 🌐 Real-World Usage

Every web application uses tailored input types to gather accurate, validated data efficiently on mobile and desktop devices.

## 🔗 Related Topics

- [Forms](11-forms.md)
- [Buttons](13-buttons.md)
- [Advanced Form Controls](28-advanced-form-controls.md)

## 💡 Remember

- Group radio buttons with identical `name` values.
- Choose specific input types (`email`, `tel`, `date`) for mobile keyboard optimization.
- Use `required` for mandatory form inputs.

## 🧭 Navigation

[← Previous: Forms](11-forms.md) | [HTML Home](00-README.md) | [Next: Buttons →](13-buttons.md)
