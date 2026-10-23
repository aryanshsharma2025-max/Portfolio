# Personal Developer Portfolio

An interactive, high-performance personal developer portfolio showcasing software engineering projects, academic coursework, and programming achievements. Built with semantic HTML5, modern CSS3, and vanilla JavaScript without heavy frontend framework overhead.

---

## 🎨 Visual Identity & Architecture

- **Typography**: Paired display fonts including **Syne** (geometric sans-serif for headings), **DM Mono** (code and metadata tags), and **Instrument Serif** (editorial accents).
- **Theme Engine**: Built-in Dark and Light mode system powered by CSS custom properties and persisted across browser sessions via `localStorage`.
- **Micro-Interactions**: Custom trailing cursor with magnetic scaling, scroll-triggered reveal animations, dynamic count-up stat counters, and 3D perspective hover cards.
- **Zero-Dependency Core**: Pure vanilla web standards—zero build pipelines, zero package managers, and zero runtime overhead.

---

## 🚀 Key Features

| Feature | Implementation Details |
|---|---|
| **Theme Toggle** | Seamless dark/light theme switching with CSS variables and `data-theme` state |
| **Interactive Cursor** | Dual-element cursor follower with smooth interpolation and element snapping |
| **Project Showcase** | 6 flagship projects (NashaPrahari, PrepPath AI, ProofChain, Smart Attendance, DSA Practice, Developer Portfolio) |
| **GitHub Integration** | Dynamic fetching of public repositories and live profile metrics via GitHub REST API |
| **AI Assistant Chatbot** | Interactive knowledge base answering questions about SIH 2026, tech stack, DSA, and background |
| **Visitor Counter** | Client-side persistent counter tracking site engagement using browser storage |
| **Responsive Layout** | Mobile-first layout designed with CSS Grid, Flexbox, and fluid typography clamps |

---

## 🛠️ Featured Showcase Projects

1. **[NashaPrahari](https://github.com/aryanshsharma2025-max/nashaprahari)** — Offline-first digital companion for field drug testing engineered for Smart India Hackathon (SIH 2026). Built with React 19, TypeScript, Vite, Motion, and local sync queues.
2. **[PrepPath AI](https://github.com/aryanshsharma2025-max/PrepPath-AI)** — Opportunity-to-Application readiness platform with Gemini AI and deterministic Python rule engine (35 Pytest unit & integration tests).
3. **[ProofChain](https://github.com/aryanshsharma2025-max/ProofChain)** — Decentralized credential integrity and verification platform combining in-browser SHA-256 Web Crypto hashing and Ethereum Sepolia smart contracts.
4. **[Smart Attendance System](https://github.com/aryanshsharma2025-max/Smart-Attendance)** — Layered Spring Boot 3 REST API with MySQL schema, hardened BOLA/IDOR protection, and multi-modal RFID/biometric simulation.
5. **[DSA_Questions & cpp-practice](https://github.com/aryanshsharma2025-max/DSA_Questions)** — Continuous algorithmic problem solving in modern C++ with automated Syncode synchronization (28+ LeetCode problems) and 274+ verified programs across 20 modules.

---

## 📁 Repository Structure

```
Portfolio/
├── index.html          # Semantic HTML5 layout, hero, timeline, skills, and projects
├── style.css           # Design tokens, CSS variables, dark/light themes, animations
├── script.js           # DOM manipulation, typing effect, chatbot, GitHub API
├── features.html       # Feature preview showcase
├── images/             # Visual assets, avatars, and project previews
├── games/              # Interactive browser mini-games
└── README.md           # Project documentation
```

---

## 💻 Running Locally

Because this project is built entirely on native web standards, no compilation or bundler is required:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/aryanshsharma2025-max/Portfolio.git
   cd Portfolio
   ```

2. **Open in browser**:
   - Double-click `index.html` to open directly in any modern web browser (Chrome, Firefox, Safari, Edge).
   - Alternatively, serve locally using Python:
     ```bash
     python -m http.server 3000
     ```
     Navigate to `http://localhost:3000`.

---

## 🌐 Deployment (GitHub Pages)

To publish via GitHub Pages:
1. Navigate to **Settings** → **Pages** in the repository.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Set the branch to `main` and folder to `/ (root)`.
4. Click **Save**. The site will deploy at `https://aryanshsharma2025-max.github.io/Portfolio/`.

---

## 📄 License & Attribution

Designed and developed by **Aryansh Sharma**. Released under the MIT License.
