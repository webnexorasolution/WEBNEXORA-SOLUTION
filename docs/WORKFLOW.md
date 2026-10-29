# Software Engineering & AI Prompting Workflow Guide 📋⚡

Yeh workflow guide define karta hai ki kisi bhi project mein kaunsi document file **kab** generate karni hai, uska **purpose** kya hai, aur AI agent ko kya **prompt** dena chahiye.

---

## 🗺️ 15-Step Documentation Lifecycle

| # | Document | Output File | Kab Use Karein (Trigger Stage) | Purpose / Description |
|---|---|---|---|---|
| **01** | **PRD** | `PRD.md` | **Pehle** — Kuch bhi code likhne se pehle | Product requirements, target audience, core problem, success metrics, aur scope. |
| **02** | **DESIGN** | `DESIGN.md` | **PRD ke baad** | UI/UX tokens, typography, color palette, responsive breakpoints, layout wireframes. |
| **03** | **ARCHITECTURE** | `ARCHITECTURE.md` | **Design ke baad** | System design, folder structure, component hierarchy, state management, routing. |
| **04** | **DATABASE** | `DATABASE.md` | **Architecture ke baad** | Schema, tables, relationships (ERD), indices, migrations, Supabase / SQL models. |
| **05** | **API** | `API.md` | **Database ke baad** | REST / GraphQL / RPC endpoints, request/response payloads, error codes, auth headers. |
| **06** | **AGENTS** | `AGENTS.md` | **Coding shuru karne se pehle** | AI behavioral rules, system instructions, guidelines, coding conventions. |
| **07** | **README** | `README.md` | **Setup ke saath** | Project introduction, tech stack, installation, local run guide, project links. |
| **08** | **PLAN** | `PLAN.md` | **Coding se theek pehle** | Sprint breakdown, step-by-step checklist, task dependencies, execution milestones. |
| **09** | **SETUP** | `SETUP.md` | **Project scaffold hone ke baad** | Environment setup, Node/package versions, `.env` config, prerequisites. |
| **10** | **FEATURES** | `FEATURES.md` | **Har naye feature se pehle** | New feature specs, acceptance criteria, user stories, edge case definitions. |
| **11** | **AUTH & SECURITY**| `AUTH_SECURITY.md` | **Core features se pehle** | Authentication flows, JWT/OAuth, RLS policies, rate limiting, security checklist. |
| **12** | **MCP** | `MCP.md` | **Jab AI ko external tools chahiye** | Model Context Protocol setup, tool configurations, external APIs, database servers. |
| **13** | **INTEGRATIONS** | `INTEGRATIONS.md` | **Core app chalne ke baad** | Third-party services (WhatsApp, Stripe, Supabase, EmailJS, Analytics, Vercel). |
| **14** | **TESTING** | `TESTING.md` | **Features complete hone par** | Unit tests, E2E tests, browser validation checks, QA test cases. |
| **15** | **DEBUGGING** | `DEBUGGING.md` | **Jab bhi error aaye** | Error logs, root cause analysis (RCA), reproduction steps, bug fixes & lessons learned. |

---

## 🎯 Quick Action Prompts for Each Stage

### 1. `PRD.md`
> *"Create a comprehensive Product Requirement Document (PRD.md) for [Project Name]. Define the target audience, problem statement, core user journeys, MVP scope, and measurable KPIs."*

### 2. `DESIGN.md`
> *"Generate DESIGN.md based on PRD.md. Define the color palette (primary, background, accents), Google typography, micro-interaction guidelines, card elevation/bento rules, and mobile-first responsive breakpoints."*

### 3. `ARCHITECTURE.md`
> *"Write ARCHITECTURE.md outlining the tech stack, directory structure, module breakdown, state management pattern, and component hierarchy."*

### 4. `DATABASE.md`
> *"Create DATABASE.md with complete PostgreSQL / Supabase schema definitions, table relationships, foreign keys, row-level security (RLS) policies, and sample seed data."*

### 5. `API.md`
> *"Generate API.md documenting all endpoints, HTTP methods, request payloads with validation rules, success responses, and standardized error formats."*

### 6. `AGENTS.md`
> *"Create AGENTS.md specifying coding rules, design aesthetic guidelines, git commit conventions, and constraints for AI pair programmers."*

### 7. `README.md`
> *"Write a developer-friendly README.md with project badges, feature list, installation instructions, environment variables overview, and run commands."*

### 8. `PLAN.md`
> *"Generate PLAN.md containing an actionable sprint checklist broken into phases (Foundation -> Components -> Integration -> Polish -> Deployment)."*

### 9. `SETUP.md`
> *"Create SETUP.md detailing exact environment setup steps, required tooling versions, .env variables explanation, and troubleshooting common setup issues."*

### 10. `FEATURES.md`
> *"Generate FEATURES.md defining the feature roadmap, user stories, functional specs, and acceptance criteria for upcoming releases."*

### 11. `AUTH_SECURITY.md`
> *"Write AUTH_SECURITY.md covering authentication architecture, role-based access control (RBAC), Supabase RLS policies, input sanitization, and security best practices."*

### 12. `MCP.md`
> *"Create MCP.md documenting Model Context Protocol servers, tool declarations, configurations, and communication patterns."*

### 13. `INTEGRATIONS.md`
> *"Document all third-party integrations (Supabase DB, WhatsApp API, Vercel CI/CD, Analytics) in INTEGRATIONS.md with API keys mapping and webhook configurations."*

### 14. `TESTING.md`
> *"Write TESTING.md with test cases, verification checklist, manual UAT flows, performance benchmarks, and automated test scripts."*

### 15. `DEBUGGING.md`
> *"Create DEBUGGING.md tracking identified bugs, symptoms, root cause analysis, fix implementations, and regression test steps."*
