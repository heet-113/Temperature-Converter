# 🌡️ Temperature Converter

A simple and clean **Temperature Converter** web app that converts values between **Celsius**, **Fahrenheit**, and **Kelvin** in real time. Built using **HTML**, **JavaScript**, and **Tailwind CSS (CDN)**.

## 🚀 Demo

[Live Demo](https://heet-113.github.io/Temperature-Converter/)

---

## ✨ Features

* 🔄 Real-time temperature conversion
* 🔢 Supports **Celsius ⇄ Fahrenheit ⇄ Kelvin**
* 🎯 Automatic 2-decimal precision
* 🎨 Clean and minimal UI with Tailwind CSS
* ⚡ No frameworks, no build tools — pure frontend

---

## 🛠️ Tech Stack

* **HTML5** – Structure
* **JavaScript (Vanilla)** – Logic & event handling
* **Tailwind CSS (Play CDN)** – Styling

---

## 🚀 How It Works

* Each input field listens for the `input` event
* When a value is entered:

  * The corresponding temperature formulas are applied
  * Other fields are updated instantly
  * Values are rounded to **2 decimal places**

### Conversion Formulas Used

* **Celsius → Fahrenheit**: `(C × 9/5) + 32`
* **Celsius → Kelvin**: `C + 273.15`
* **Fahrenheit → Celsius**: `(F − 32) × 5/9`
* **Kelvin → Celsius**: `K − 273.15`

---

## 📂 Project Structure

```text
Temperature-Converter/
│
├── index.html
├── script.js
└── README.md
```

---

## ▶️ How to Run

1. Clone the repository

   ```bash
   git clone https://github.com/your-username/temperature-converter.git
   ```
2. Open `index.html` in your browser
3. Start converting temperatures 🎉

---

## 📌 Notes

* Uses **Tailwind Play CDN**, suitable for practice and small projects
* No external JavaScript libraries required
* Fully client-side

---

## 📚 What I Learned

* Handling `input` events in JavaScript
* Updating multiple inputs dynamically
* Rounding numbers to fixed precision
* Using Tailwind CSS utility classes for layout and styling

---

## 🙌 Acknowledgements

* Tailwind CSS Documentation
* JavaScript MDN Docs

---

## ⭐ Feedback

If you liked this project, consider giving it a ⭐ on GitHub!