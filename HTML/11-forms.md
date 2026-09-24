# Forms (`<form>`, `<label>`, `action`, `method`)

> 🟢 Beginner

## 📖 Definition

An HTML **`<form>`** collects user input (such as names, emails, passwords, search terms, or messages) and sends it to a web server or JavaScript handler for processing.

## 🌐 Multilingual Summary / संक्षेप / स्पष्टीकरण

### English
Forms use `<form>` with controls like `<label>`, `<input>`, `<textarea>`, `<select>`, and `<button>`. Always associate `<label for="id">` with `<input id="id">` for accessibility.

### Hindi
फॉर्म यूज़र से डाटा (नाम, ईमेल, मैसेज) जमा करता है। एक्सेसिबिलिटी के लिए `<label>` का `for` एट्रिब्यूट `<input>` के `id` से मैच होना चाहिए। 

### Marathi
फॉर्म वापरकर्त्याकडून माहिती (नाव, ईमेल, अभिप्राय) गोळा करतो. ॲक्सेसिबिलिटीसाठी लेबलचा `for` ॲट्रिब्यूट इनपुटच्या `id` शी मॅच असावा.

### Hinglish
Forms user data collect karne ke liye hote hain. Label ka `for` attribute hamesha input ke `id` se match hona chahiye, aur form `action` & `method` server submission define karte hain.

## 🧱 Essential Form Structure & Attributes

An HTML form container uses key attributes to control how data is submitted:

1. **`action="URL"`:** Specifies the server URL or endpoint where submitted data will be processed.
2. **`method="GET|POST"`:** Specifies the HTTP protocol method used to send data:
   - **`GET`:** Appends form data to the page URL in query parameters (`?query=books`). Best for search forms and filtering. Never use GET for sensitive passwords!
   - **`POST`:** Sends data inside the HTTP request body. Secure for logins, registrations, file uploads, and contact forms.
3. **`name="fieldname"`:** The key name assigned to an input value when transmitted to the server.

## 🔑 Primary Form Controls

- **`<label>`:** Describes what information is requested in an input box. Clicking the label focuses the corresponding input.
- **`<input>`:** Primary versatile input control (text, password, email, checkbox, etc.).
- **`<textarea>`:** Multi-line text field for longer messages or comments.
- **`<select>` & `<option>`:** Dropdown selection menu.
- **`<fieldset>` & `<legend>`:** Groups related form controls with a visual border and caption.
- **`<button type="submit">`:** Triggers form submission.

## 📝 Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Student Registration Form</title>
</head>
<body>

  <h1>Student Registration</h1>

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
        <label for="course-select">Select Course:</label><br>
        <select id="course-select" name="course">
          <option value="">-- Choose a Course --</option>
          <option value="web-dev">Web Development</option>
          <option value="data-science">Data Science</option>
          <option value="cyber-security">Cyber Security</option>
        </select>
      </p>
    </fieldset>

    <fieldset>
      <legend>Feedback & Remarks</legend>
      <p>
        <label for="user-message">Additional Notes:</label><br>
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

## 👀 Output

A grouped registration form containing full name input, validated email input, course dropdown, multi-line notes textarea, and submit/reset buttons.

## ⚠️ Common Mistakes

- **Forgetting `for` and `id` connection:** Writing `<label>Name</label><input type="text">` prevents screen readers from associating the label with the box.
- **Forgetting the `name` attribute:** Inputs without a `name` attribute (e.g. `<input type="text">`) are ignored and **not sent** when the form is submitted.
- **Using `GET` for passwords:** Exposes sensitive passwords directly in the browser address bar!

## 🧪 Try It Yourself

Create a contact form containing:
1. Form tag set to `method="POST"`.
2. Name and email inputs with matching `<label>` elements.
3. A dropdown (`<select>`) for subject categories.
4. A `<textarea>` for message text and a submit button.

## 🎯 Mini Challenge

Wrap your form fields into two logical `<fieldset>` groups with `<legend>` titles ("Contact Information" and "Inquiry Details").

## 🧭 Navigation

[← First: HTML Home](00-README.md) | [← Previous: Tables](10-tables.md) | [Next: Input Types →](12-input-types.md)
