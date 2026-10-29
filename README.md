# Webnexora Solution 🌐✨

A premier, high-performance website design and digital engineering agency web application crafted with **React (Vite)**, **Vanilla CSS**, **React Router 7**, and **Lucide Icons**.

Designed for **Webnexora Solution** — Precision Engineering · Clean UX · Measurable Growth.

Repository: **[https://github.com/webnexorasolution/WEBNEXORA-SOLUTION](https://github.com/webnexorasolution/WEBNEXORA-SOLUTION)**

---

## 🚀 Key Features

- **Multi-Page Architecture**:
  - **Home (`/`)**: Hero section with live sprint roadmap, services grid, interactive why-us showcase, portfolio preview, 4-step process, and instant contact form.
  - **About Agency (`/about`)**: Company story, mission, core values, leadership, and head-to-head agency benchmark comparison table.
  - **Services (`/services`)**: Full service catalog with 3D interactive flip cards, detailed feature breakdowns, and service tiers.
  - **Portfolio (`/portfolio`)**: Interactive category filtering (Corporate, E-Commerce, SaaS, Web Apps), metrics, and live demo links.
  - **Process (`/process`)**: Deep-dive interactive breakdown of our 4-phase agile delivery roadmap.
  - **Contact & Scope Planner (`/contact`)**: Dual-channel contact desk featuring direct client hotlines and an interactive Project Scope Planner with budget and timeline calculators.
  - **Agency Admin Console (`/admin`)**: Passkey-protected internal operations portal for managing inquiries, tracking pipeline stages (`New`, `Contacted`, `Proposal Sent`, `Converted`), 1-click WhatsApp/Call/Email outreach, and CSV spreadsheet exports.

- **Custom UI Components**:
  - **CustomSelect**: Luxury animated dropdown with smooth popover physics, compact categorized icons, active checkmarks, and click-outside detection.
  - **ScrollToTop**: Automatic scroll-to-top restoration across all page transitions.
  - **Direct WhatsApp Lead Engine**: Auto-formats client inquiries and connects directly with agency leads.

- **Production & Cloud Architecture**:
  - Centralized site configuration module (`src/config/site.js`).
  - `.env` & `.env.example` templates for instant customization of branding, hotlines, emails, WhatsApp numbers, social links, and database credentials.
  - **Vercel SPA Deployment**: Configured via `vercel.json` with route rewrite rules for clean client-side routing with zero 404s.
  - Ready for Supabase PostgreSQL database integration.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite 8](https://vitejs.dev/)
- **Routing**: [React Router DOM 7](https://reactrouter.com/)
- **Styling**: Vanilla CSS (Custom Warm Limestone & Bento Design System)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: CSS 3D Perspectives, Keyframe Transitions, and Motion
- **Database**: Supabase PostgreSQL (Configured in `.env`)

---

## 💻 Getting Started Locally

### 1. Clone the repository
```bash
git clone https://github.com/webnexorasolution/WEBNEXORA-SOLUTION.git
cd WEBNEXORA-SOLUTION
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
*(Windows PowerShell: `Copy-Item .env.example .env`)*

### 4. Run development server
```bash
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser.

### 5. Build for production
```bash
npm run build
```

---

## 📄 License
Proprietary · Built for **Webnexora Solution**. All rights reserved.
