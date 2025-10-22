# 🌸 DIBA COUTURE

A modern, elegant, and responsive fashion website built for **Diba Couture** — a brand that celebrates luxury and timeless style.  
The project showcases stunning collections, an interactive slider, and a WhatsApp-integrated booking system.

---

## 🖼️ Live Preview

![Diba Couture Screenshot](https://i.postimg.cc/YSb3yp36/Screenshot-2025-10-22-at-9-45-28-PM.png)

> Explore a visually rich and minimal design focused on fashion, usability, and smooth browsing experience.

---

## ✨ Features

- 🎠 **Hero Image Slider** – Smooth navigation with “Next” and “Previous” buttons.  
- 💬 **WhatsApp Integration** – Directly chat with the brand by clicking “See More” or “Book Now.”  
- 💌 **Contact Form (Formspree)** – Send messages instantly with success and error handling.  
- 🧭 **Responsive Navigation Bar** – Mobile-friendly with a modern hamburger menu.  
- 🎥 **YouTube Embed** – Introduces the brand through an elegant video section.  
- 💎 **Product Cards** – Stylish cards displaying new collections with prices and call-to-action buttons.  
- 🖤 **Minimal Footer** – Includes quick links, brand info, and social icons.

---

## 🧠 Tech Stack

- **HTML5** – Semantic and structured layout  
- **CSS3** – Elegant, responsive design  
- **JavaScript (ES6)** – For interactivity and form handling  
- **Font Awesome** – For modern and accessible icons  
- **Formspree** – For handling contact form submissions  

---

## ⚙️ How It Works

### 🛍️ Product & Slider Section
Each product or slide has a **“See More”** button that opens WhatsApp directly:
```js
function openWhatsApp(productName, productLink) {
  const phoneNumber = "918006602398";
  const message = `Hey, I wanted to know more about this product — ${productName}. Here’s the link: ${productLink}`;
  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
}

