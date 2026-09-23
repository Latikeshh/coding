# Links

> 🟢 Beginner

## 📖 Definition

A link is clickable text or an image that takes a visitor to another page, place, file, or email address.

## 🤔 Why Do We Use It?

Links connect the web. They let visitors move from a menu to a product page, or to another website.

## 🧠 Simple Explanation

A link is like a signpost: its label tells you where going through it will take you.

## 📝 Syntax

```html
<a href="https://www.example.com">Visit our store</a>
```

The `href` attribute holds the destination. Use clear link text instead of “click here.”

## 💡 Practical Example

For pages in the same project, you can use a file name: `<a href="contact.html">Contact us</a>`. For another website, use its full address, beginning with `https://`.

## ✅ Remember

Check that a link tells visitors where it leads. “Read our return policy” is much more helpful than “More.”

- `href` is the link destination.
- Link text should describe that destination.
- A link moves someone somewhere; it is not normally used for an action.

## 💻 Example

```html
<p>Read our <a href="menu.html">breakfast menu</a>.</p>
<p><a href="mailto:hello@example.com">Email the café</a></p>
```

## 👀 Output

“breakfast menu” is clickable and opens `menu.html`. “Email the café” opens the visitor's email app if one is set up.

## 🔍 How It Works

The `<a>` element creates the link. Its `href` can point to another page, a full website address, or an email address beginning with `mailto:`.

## ⚠️ Common Mistakes

- Wrong: `<a>Menu</a>` — there is no destination.
- Better: `<a href="menu.html">Menu</a>`

## 🧪 Try It Yourself

Add a link from `index.html` to a new file named `about.html`.

## 🎯 Mini Challenge

Make a three-link navigation menu with meaningful link text.

## 🧭 Navigation

[← First: HTML Home](00-README.md) | [← Previous: Text Formatting](06-text-formatting.md) | [Next: Images →](08-images.md)
