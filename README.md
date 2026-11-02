# Personal Developer Portfolio

[![Web Standards](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20JS-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://github.com/aryanshsharma2025-max/Portfolio)
[![Zero Build](https://img.shields.io/badge/Architecture-Zero%20Build%20Overhead-10B981?style=for-the-badge&logo=javascript&logoColor=white)](https://github.com/aryanshsharma2025-max/Portfolio)
[![Live Site](https://img.shields.io/badge/Deployment-GitHub%20Pages-181717?style=for-the-badge&logo=github)](https://aryanshsharma2025-max.github.io/Portfolio/)

A responsive personal developer portfolio website built using native web technologies (semantic HTML5, modern CSS3, and vanilla JavaScript).

Presents software engineering projects, academic milestones, and programming coursework with zero runtime libraries, build tools, or package managers.

---

## 📌 Features & Implementation Details

- **Zero-Build Architecture:** Pure native web standards—opens directly in any modern browser without npm dependencies, bundlers, or transpilers.
- **Theme Persistence:** Dark and light mode toggle engineered with CSS custom properties (`:root[data-theme]`) and state persistence in browser `localStorage`.
- **Responsive Layout:** Fluid layout built using CSS Grid, Flexbox, and CSS math functions (`clamp()`) to adapt across mobile screens and desktop monitors.
- **Interactive Micro-Interactions:** Custom trailing cursor with smooth coordinate interpolation, element hover snapping, and scroll-triggered animations.
- **Dynamic GitHub Project Integration:** Client-side asynchronous `fetch()` querying public GitHub repositories to display live repository metadata.
- **Interactive Widgets:** Client-side rule-based assistant interface and persistent engagement counter using browser storage.

---

## 🚦 Implementation Status

| Feature | Status | Implementation Details |
|---|:---:|---|
| **Semantic HTML5 Layout** | **Implemented** | Structured landmarks (`<header>`, `<main>`, `<section>`, `<footer>`) |
| **Dark / Light Theme Toggle** | **Implemented** | CSS variables + `data-theme` state + `localStorage` |
| **Interactive Trailing Cursor** | **Implemented** | Dual-element cursor follower with smooth interpolation |
| **GitHub API Project Sync** | **Implemented** | Client-side `fetch()` querying public GitHub repositories |
| **Zero-Build Core** | **Implemented** | Pure native web standards with zero dependencies |
| **Local HTTP Serving** | **Implemented** | Runs cleanly via Python HTTP server (`http.server`) |
| **GitHub Pages Deployment** | **Configured** | Published from `main` branch root at [aryanshsharma2025-max.github.io/Portfolio](https://aryanshsharma2025-max.github.io/Portfolio/) |
| **Server-Side Analytics** | **Not Implemented** | Counters operate in client-side `localStorage`, not backend analytics |

---

## 🛠️ Technology Stack

- **Markup:** HTML5 (Semantic elements)
- **Styling:** CSS3 (Variables, Grid, Flexbox, Keyframes, Viewport clamps)
- **Scripting:** Vanilla JavaScript (ES6+, DOM API, Fetch API, LocalStorage)
- **Typography:** Display fonts (Syne, DM Mono, Instrument Serif) via Google Fonts

---

## 📁 Repository Structure

```
Portfolio/
├── index.html     # Main portfolio webpage
├── style.css      # Design tokens, themes, layout, and animations
├── script.js      # Theme toggle, cursor effect, GitHub API fetch logic
├── features.html  # Feature preview page
├── images/        # Project banners and visual assets
├── games/         # Lightweight browser mini-games
└── README.md      # Project documentation
```

---

## 💻 Running Locally

Because the project relies entirely on native browser standards, no compilation or build step is required:

### Option 1: Direct File Open
Double-click `index.html` or open it directly in any modern browser (Chrome, Edge, Firefox, Safari).

### Option 2: Local HTTP Server (Recommended)
To ensure relative assets and `fetch()` requests resolve without local file origin restrictions:

```bash
# Clone the repository:
git clone https://github.com/aryanshsharma2025-max/Portfolio.git
cd Portfolio

# Start a lightweight Python web server:
python -m http.server 3000
```
Navigate to `http://localhost:3000` in your web browser.

---

## 🌐 Live Deployment

- **GitHub Pages:** [https://aryanshsharma2025-max.github.io/Portfolio/](https://aryanshsharma2025-max.github.io/Portfolio/)  
*(Configured from the repository `main` branch root)*

---

## ⚠️ Notes on Feature Scope & Boundaries

- **Pure Client-Side Implementation:** All interactions (including theme memory and interactive widgets) execute strictly in the client's browser without a backend database or server-side analytics.
- **Standalone Auxiliary Scripts:** The repository contains two standalone Python scripts (`chatbot.py` and `student_calc.py`) created as early Python programming exercises; these operate separately from the web interface.

---

## 🎯 Learning Outcomes

- Writing clean, accessible semantic HTML5 documents.
- Architecting responsive CSS with design tokens, CSS custom properties, and fluid typography clamps without UI frameworks.
- Handling vanilla JavaScript DOM events, state persistence with `localStorage`, and asynchronous data fetching.
