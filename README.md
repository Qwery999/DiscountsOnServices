# DiscountsOnServices

🌐 **Live site:** [https://qwery999.github.io/DiscountsOnServices/](https://qwery999.github.io/DiscountsOnServices/)

A modern multi-language landing page for purchasing **premium subscriptions** (Netflix, Spotify, YouTube Premium) at a discounted price.  
The website is fully responsive, multilingual (EN / UA / RU), and deployed via GitHub Pages.

---

## ✨ Key Features

- 💡 **Subscription cards** — showcase pricing plans and quick access buttons.  
- 🌍 **Multi-language support** — EN / UA / RU toggle in the header.  
- 📱 **Responsive design** — works seamlessly on mobile, tablet, and desktop.  
- 🧭 **Smooth navigation** — anchors, modal windows (login, signup, reset).  
- ⚡ **Fast performance** — clean HTML, SCSS Grid, and vanilla JavaScript.  
- 🔐 **Accessible UX** — aria attributes, keyboard navigation, focus states.

---

## 🛠️ Built With

- **Minista** — static site builder  
- **HTML5 / SCSS / Vanilla JS** — no heavy frameworks  
- **GitHub Actions + Pages** — automated deployment  
- **Custom i18n engine** — JSON-based translations with `data-i18n` attributes

---


## 🌍 Internationalization (i18n)

- All text content is stored in `public/locales/`
- Each element uses `data-i18n` for translations
- The selected language is saved in `localStorage`  
- Automatic language detection for first-time visitors

---

## 🚀 Deployment

The project automatically deploys to **GitHub Pages** via **GitHub Actions**  
on every push to the `main` branch.  
Workflow file: `.github/workflows/deploy.yml`

---

## 👨‍💻 Author

**Andrii Skorin (Qwery999)**  
Frontend Developer  
📍 2025  
