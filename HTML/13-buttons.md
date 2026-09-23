# Buttons

> 🟢 Beginner

## 📖 Definition

A button is a control a visitor can press to perform an action.

## 🤔 Why Do We Use It?

Buttons let people submit forms, open menus, buy items, or start actions.

## 🧠 Simple Explanation

A web button is like a doorbell: pressing it asks the page to do something.

## 📝 Syntax

```html
<button type="submit">Place order</button>
```

Inside a form, `type="submit"` sends the form. Give buttons clear action words.

## 💡 Practical Example

“Add to basket,” “Save changes,” and “Send message” are clear button labels because they describe the result of pressing them. A label like “OK” often leaves people guessing.

## ✅ Remember

Use a `<button>` for an action. Use a link when the visitor is simply moving to another page.

- Buttons perform actions.
- `type="submit"` submits a form.
- Clear labels tell visitors what will happen.

## 💻 Example

```html
<form>
  <label for="search">Search recipes</label>
  <input id="search" type="search">
  <button type="submit">Search</button>
</form>
```

## 👀 Output

A search field and a “Search” button appear together.

## 🔍 How It Works

When the button is pressed, `type="submit"` asks the form to submit. A real search needs extra code or a server to return results.

## ⚠️ Common Mistakes

- Do not use a button when a normal link is the correct choice.
- Inside a form, always choose the button type intentionally.

## 🧪 Try It Yourself

Add a “Save profile” submit button to a small form.

## 🎯 Mini Challenge

Write three button labels for an online shop that make the action obvious.

## 🧭 Navigation

[← First: HTML Home](00-README.md) | [← Previous: Input Types](12-input-types.md) | [Next: Div and Span →](14-div-and-span.md)
