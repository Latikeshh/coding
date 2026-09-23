# Input Types

> 🟢 Beginner

## 📖 Definition

An input type tells the browser what kind of information a form field should accept.

## 🤔 Why Do We Use It?

The right input makes forms clearer and can show helpful keyboards or checks on phones.

## 🧠 Simple Explanation

Different questions need different answer boxes. A birthday needs a date picker; a password needs hidden characters.

## 📝 Syntax

```html
<input type="email" name="email" placeholder="you@example.com">
<input type="date" name="birthday">
<input type="password" name="password">
```

Other useful types include `number`, `checkbox`, `radio`, and `file`.

## 💡 Practical Example

Use `checkbox` when a visitor can choose several options, such as pizza toppings. Use `radio` when they must pick one option, such as small, medium, or large.

## ✅ Remember

An input type improves the experience but does not replace clear instructions. Add a label so people know exactly what each field is for.

- `email` is for email addresses.
- `date` can show a date picker.
- `checkbox` allows several choices; `radio` allows one choice in a group.

## 💻 Example

```html
<label for="guests">Number of guests</label>
<input id="guests" type="number" min="1" name="guests">

<label><input type="checkbox" name="updates"> Send me updates</label>
```

## 👀 Output

The page shows a number field for guests and a box a visitor can tick to receive updates.

## 🔍 How It Works

`type="number"` suggests number controls, while `min="1"` says the lowest valid value is one. A checkbox can be checked or unchecked.

## ⚠️ Common Mistakes

- Radio buttons in one group need the same `name` value.
- Do not use `type="text"` for an email when `type="email"` is more helpful.

## 🧪 Try It Yourself

Add an email field and a date field to a pretend event-registration form.

## 🎯 Mini Challenge

Make a pizza order choice with three radio buttons and two topping checkboxes.

## 🧭 Navigation

[← First: HTML Home](README.md) | [← Previous: Forms](11-forms.md) | [Next: Buttons →](13-buttons.md)
