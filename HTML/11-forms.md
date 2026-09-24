# Forms (`<form>`, `<label>`, `action`, `method`)

> 🟢 Beginner

## 📖 Definition

An HTML **`<form>`** collects user input (names, emails, passwords, search terms, uploaded files, or feedback messages) and submits it to a web server or JavaScript handler for processing.

## 🌍 Multilingual Summary

### English
Forms use `<form>` with controls like `<label>`, `<input>`, `<textarea>`, `<select>`, and `<button>`. Always associate `<label for="id">` with `<input id="id">` for accessibility.

### Hindi
Forms user data collect karne ke liye hote hain. `<form>` container mein `<label>`, `<input>`, `<textarea>`, `<select>`, aur `<button>` hote hain. Accessibility ke liye `<label for="id">` ko `<input id="id">` se connect karein.

### Marathi
Forms user kadun mahiti gola karanyasathi vapartat. Accessibility sathi `<label for="id">` la `<input id="id">` shi match kara, ani form `action` ani `method` server submission tharavtat.

## 🤔 Why Do We Use Forms?

Forms are the primary interactive mechanism enabling user engagement on the web—logins, user registrations, search query inputs, checkout payments, online surveys, and contact messages.

## 🧱 Essential Form Attributes

The `<form>` tag uses key attributes to control data transmission:

1. **`action="URL"`:** Specifies the backend server URL or endpoint where submitted form data will be processed.
2. **`method="GET|POST"`:** Specifies the HTTP method used to send data:
   - **`GET`:** Appends form data directly to the URL address bar in query strings (`?search=books`). Used for search boxes and filters. **Never use GET for sensitive passwords!**
   - **`POST`:** Transmits form data inside the HTTP request body. Used for logins, registration forms, file uploads, and sensitive transactions.
3. **`name="fieldname"`:** The key name assigned to an input value when transmitted to the server.

## 🔑 Primary Form Controls

- **`<label>`:** Describes what information is requested in an input control. Clicking a label automatically focuses the corresponding input box.
- **`<input>`:** Versatile input control (text, password, email, checkbox, radio, date, etc.).
- **`<textarea>`:** Multi-line text entry field for longer comments or messages.
- **`<select>` & `<option>`:** Dropdown selection menu.
- **`<fieldset>` & `<legend>`:** Groups related form controls with a visual border and caption title.
- **`<button type="submit">`:** Triggers form submission.

## 💻 Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Student Registration Form</title>
</head>
<body>

  <h1>Student Workshop Registration</h1>

  <form action="/submit-registration" method="POST">

    <fieldset>
      <legend>Personal Details</legend>

      <p>
        <label for="full-name">Full Name:</label><br>
        <input id="full-name" type="text" name="fullName" required placeholder="e.g. Latikesh Sharma">
      </p>

      <p>
        <label for="user-email">Email Address:</label><br>
        <input id="user-email" type="email" name="userEmail" required placeholder="name@domain.com">
      </p>

      <p>
        <label for="course-select">Select Course Track:</label><br>
        <select id="course-select" name="course" required>
          <option value="">-- Choose a Course --</option>
          <option value="web-dev">Web Development</option>
          <option value="data-science">Data Science</option>
          <option value="cyber-security">Cyber Security</option>
        </select>
      </p>
    </fieldset>

    <fieldset>
      <legend>Additional Remarks</legend>
      <p>
        <label for="user-message">Learning Goals:</label><br>
        <textarea id="user-message" name="notes" rows="4" cols="50" placeholder="Tell us about your learning goals..."></textarea>
      </p>
    </fieldset>

    <p>
      <button type="submit">Submit Registration</button>
      <button type="reset">Clear Form</button>
    </p>

  </form>

</body>
</html>
```

## 👀 Output / What You Will See

A grouped registration form displaying input fields for full name, validated email address, course dropdown menu, multi-line text area, and submit/reset buttons.

## 🧪 Try It Yourself

1. Create a contact form containing `action="/contact"` and `method="POST"`.
2. Add name and email input fields paired with `<label>` tags.
3. Add a `<select>` dropdown for subject categories.
4. Add a `<textarea>` for message text and a `<button type="submit">`.

## ⚠️ Common Mistakes

- **Forgetting the `for` and `id` connection:** Writing `<label>Name</label><input type="text">` prevents screen readers from associating the label with the input field.
- **Forgetting the `name` attribute:** Input controls without a `name` attribute are ignored and **not submitted** to the server!
- **Using `method="GET"` for passwords:** Exposes sensitive password strings in the browser address bar.

## 🌐 Real-World Usage

All major web platforms rely on HTML forms for authentication, user profiles, checkout forms, search bars, and user settings.

## 🔗 Related Topics

- [Input Types](12-input-types.md)
- [Buttons](13-buttons.md)
- [Advanced Form Controls](28-advanced-form-controls.md)

## 💡 Remember

- `<label for="id">` must match `<input id="id">`.
- Always provide a `name` attribute on input fields.
- Use `method="POST"` for sensitive or modifying actions.

## 🧭 Navigation

[← Previous: Tables](10-tables.md) | [HTML Home](00-README.md) | [Next: Input Types →](12-input-types.md)
