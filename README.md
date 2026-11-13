# Ascencia Business School (Malta) - Modern Static UI Redesign

A high-performance, modern static frontend website redesign for **Ascencia Malta Business School** (part of the **Collège de Paris** network), crafted with **React** and **100% pure custom CSS** (zero external UI frameworks).

---

## 🚀 Live Demo & Repository
* **Live Deployment:** [https://ascencia-malta-nine.vercel.app/](https://ascencia-malta-nine.vercel.app/)
* **GitHub Repository:** [https://github.com/shagun199/ascencia-malta-task](https://github.com/shagun199/ascencia-malta-task)

---

## 📋 Project Scope (3 Core Pages)

This project faithfully recreates and elevates the 3 required pages with an executive academic UI theme:

1. **Home Page (`/`)**:
   * Executive Hero section with trust badges and floating glassmorphic outcome cards.
   * Seamless infinite marquee carousel of all 10 official accreditations and partners (MFHEA, MQF, EQF, ATHE, Ofqual, AACSB, EFMD, BGA, Erasmus+, Malta Chamber).
   * Key institutional metrics bar (MQF 5–8, 100% English, 50+ Nationalities, 94% Placement).
   * "Why Choose Ascencia Malta" advantage cards.
   * Interactive Academic Programmes Explorer with instant category filtering (Doctorate, MBA/Masters, Bachelor, Diplomas) and direct inquiry integration.
   * Floriana Campus & student life photo gallery.
   * International student testimonials with verified cohort ratings.
   * 4-step admissions roadmap timeline.
   * High-impact closing CTA banner.

2. **Ascencia Malta / About Us Page (`/ascencia-malta`)**:
   * Academic lineage narrative bridging French higher education heritage from the **Collège de Paris** with the Mediterranean hub of Malta.
   * Institutional milestones timeline.
   * Dual elevation cards for **Our Mission** and **Our Vision**.
   * Core Values anchored in the 4 pillars of diversity (Course, Student, Faculty, and Pedagogical Diversity).
   * Participative & Innovative Pedagogy methodology breakdown.
   * Distinguished Faculty spotlight cards featuring real Ascencia Malta academic leaders.
   * Floriana campus guide and closing CTA.

3. **Contact Page (`/contact`)**:
   * Direct contact channels (Campus Address, Admissions Phone, Official Email).
   * Interactive Application / Inquiry Form with client-side field validation, dynamic program pre-selection (via `?program=...`), simulated async submission state, and confirmation card.
   * Embedded interactive Floriana campus map (23 Vincenzo Dimech Street) with Google Maps directions link.
   * Campus office hours and comprehensive transit commute guide (Bus, Airport, Parking).
   * Direct department directory (Admissions, Visas, Registrar).
   * Interactive FAQ accordion answering top prospective student questions.

---

## 🛠️ Technical Stack & Compliance

* **Framework:** React 18 (Functional Components & React Hooks).
* **Routing:** React Router DOM v6 (Client-side routing with automatic `ScrollToTop`).
* **Styling:** **100% Pure Custom CSS** & CSS Custom Properties (`variables.css`).
  * ⚠️ **Strictly zero UI frameworks** used (No Tailwind, No Bootstrap, No MUI, No Chakra).
* **Typography:** Plus Jakarta Sans via Google Fonts.
* **Icons:** Lucide React (featherweight SVG icons).
* **Responsiveness:** Fully responsive across Mobile (< 600px), Tablet (600px – 1024px), and Desktop (> 1024px) with a mobile hamburger navigation drawer.
* **Build Tool:** Vite 6 (Sub-second HMR and optimized production bundle).

---

## 📁 Project Architecture

```text
React-Assignment/
├── public/
│   └── assets/                     # Official brand logos, accreditation badges & photos
│       ├── logo.svg                # Vector Ascencia Malta logo
│       ├── mfhea.png, mqf.png...   # Accreditation partners
│       └── team/                   # Faculty photos
├── src/
│   ├── components/
│   │   ├── Navbar/                 # Sticky header with top utility bar & mobile drawer
│   │   ├── Footer/                 # Universal footer with campus links and license info
│   │   └── ScrollToTop.jsx         # Viewport scroll reset on route changes
│   ├── data/
│   │   ├── homeData.js             # Stats, accreditations, testimonials, timeline
│   │   ├── aboutData.js            # Milestones, core values, pedagogy, faculty
│   │   ├── contactData.js          # Channels, departments, FAQs
│   │   └── programsData.js         # Academic degrees curriculum
│   ├── pages/
│   │   ├── Home/                   # Home page component & styles
│   │   ├── About/                  # About page component & styles
│   │   └── Contact/                # Contact page component & styles
│   ├── styles/
│   │   ├── variables.css           # Global design tokens (colors, spacing, shadows)
│   │   └── global.css              # Baseline CSS resets and button styles
│   ├── App.jsx                     # Route configuration
│   └── main.jsx                    # Application root
├── index.html                      # Entry HTML with meta tags & typography
├── package.json
└── vite.config.js
```

---

## ⚡ Getting Started (Local Setup)

### Prerequisites
* **Node.js** (v18 or higher recommended)
* **npm** (v9 or higher)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/React-Assignment.git
   cd React-Assignment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. Build for production:
   ```bash
   npm run build
   ```
   The optimized production bundle will be generated in the `dist/` directory, ready for deployment to **Vercel**, **Netlify**, or **GitHub Pages**.

---

## 📄 License & Credits
Designed and developed for the Frontend Developer Assignment task by **Angel Portal Private Limited**, based on the institutional identity of **Ascencia Malta Business School** (MFHEA License No: 2021-008).
