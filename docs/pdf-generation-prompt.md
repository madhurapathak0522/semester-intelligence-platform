# Ready-to-Paste Prompt for PDF/Word Generation

Copy everything below the line and paste it into ChatGPT, Google Gemini, or any AI chatbot.
Then ask it to generate a downloadable PDF or Word document.

---

## ✂️ COPY FROM HERE ✂️

---

Generate a professional, well-formatted PDF document (or Word document) for my college project. Use clean formatting with a cover page, table of contents, section headers, tables, and page numbers. Use a professional font like Calibri or Arial. The document title is "SiliconPath — User Guide & Module Documentation". Here is the complete content:

---

# SiliconPath — User Guide & Module Documentation
## B.Tech ECE Semester Intelligence Platform

**Version**: 1.0
**Date**: June 2026
**Submitted By**: [YOUR NAME HERE]
**University**: [YOUR UNIVERSITY NAME]
**Branch**: Electronics & Communication Engineering (ECE)

---

## 1. Introduction

SiliconPath is a web-based academic planning platform designed for B.Tech Electronics & Communication Engineering (ECE) students in Indian universities. It helps students plan semesters, track syllabus progress, discover elective courses, and receive AI-powered academic advice.

The application is built using React.js with Vite as the build tool, styled with vanilla CSS following a Swiss Modernist Technical design theme. It operates entirely in the browser with no backend dependency in the current version.

---

## 2. System Overview

| Component | Technology |
|-----------|-----------|
| Frontend Framework | React.js 18+ |
| Build Tool | Vite 5+ |
| Styling | Vanilla CSS (Custom Properties) |
| State Management | React useState (hoisted to App.jsx) |
| Routing | State-driven SPA (no external router) |
| Font | Plus Jakarta Sans (Google Fonts) |
| Backend | Planned (Flask + SQLite) |

---

## 3. Application Architecture

The application follows a Single Page Application (SPA) architecture with three top-level views controlled by a state variable called `view`:

- `home` → Landing Page (public marketing page)
- `login` → Student Onboarding Portal (profile configuration)
- `dashboard` → Main Application Dashboard (contains 5 sub-tabs)

An authentication guard prevents users from accessing the dashboard without completing the onboarding form.

### State Flow Diagram

```
App.jsx (Global State: view, user)
├── Home Page (view = 'home')
│   ├── Navbar (scroll blur + mobile drawer)
│   ├── Hero (CTA buttons)
│   ├── Features Grid (4 feature cards)
│   ├── How It Works (3-step timeline)
│   └── Footer
├── Login Portal (view = 'login')
│   └── Profile Form → submits userData → sets user state → navigates to dashboard
└── Dashboard (view = 'dashboard')
    ├── Sidebar Navigation (5 tabs)
    ├── Canvas Header (dynamic greeting with user data)
    └── Content Panel
        ├── Tab 1: Semester Planner
        ├── Tab 2: Syllabus Tracker
        ├── Tab 3: Course Recommender
        ├── Tab 4: AI Advising Bot
        └── Tab 5: Student Profile Editor
```

---

## 4. Module Descriptions

### 4.1 Landing Page Module

**File**: `pages/Home.jsx`
**Purpose**: Public-facing entry point that markets the platform and directs users to sign up.

**Sub-components**:
- **Navbar**: Sticky header with scroll-triggered background blur. Features a mobile hamburger menu that animates into a close icon.
- **Hero**: Editorial headline with CSS-animated CAD dashboard mockup.
- **Features**: Grid of 4 interactive cards showcasing core capabilities.
- **How It Works**: 3-step vertical timeline with PCB trace decorations.
- **Footer**: Links and copyright.

---

### 4.2 Login Portal Module

**File**: `pages/Login.jsx`
**Purpose**: Collects student academic information to configure the dashboard.

**Input Fields**:
| Field | Type | Validation |
|-------|------|-----------|
| Full Name | Text | Required, non-empty |
| Roll Number | Text | Required, non-empty |
| University | Text | Required, non-empty |
| Current Semester | Dropdown | Options: Sem 3, 4, 5, 6 |
| ECE Specialization | Dropdown | Options: VLSI, DSP, Robotics, Power |

**Output**: Creates a user object with default CGPA of 8.5, passes it to the global state.

---

### 4.3 Dashboard Container Module

**File**: `pages/Dashboard.jsx`
**Purpose**: Main application shell with sidebar navigation and dynamic content rendering.

**Layout**: Two-column grid — 240px sidebar + fluid content area.
**Navigation**: Local state `activeTab` controls which sub-view renders.
**Header**: Displays welcome greeting, active track badge, and semester indicator from global user state.

---

### 4.4 Semester Planner Module

**File**: `pages/SemesterPlanner.jsx`
**Purpose**: Credit load planning and subject management across 4 semesters.

**Pre-loaded Curriculum**:
| Semester | Subjects | Total Credits |
|----------|----------|--------------|
| Sem 3 | PTSP (3), DS (4), EMI (3), EDC (4), MATH-3 (3) | 17 |
| Sem 4 | ADC (4), EMTL (4), VCCA (3), IOT (3), DSD (2) | 16 |
| Sem 5 | LDIC (4), MPMC (4), DDVL (3), OPPS (3), QNX (2) | 16 |
| Sem 6 | DSP (4), AWP (4), DIP (3), FOC (3), BPP (3) | 17 |

**Key Logic**:
- Credit accumulation using Array.reduce()
- OVERLOAD warning if semester credits > 20
- UNDERLOAD warning if semester credits < 12
- Add/Remove courses dynamically

---

### 4.5 Syllabus Tracker Module

**File**: `pages/SyllabusTracker.jsx`
**Purpose**: Topic-level progress tracking with weak unit detection and revision scheduling.

**Syllabus Database**: Maps each subject to 5 core topics (e.g., MPMC → 8086 CPU Architecture, 8086 Assembly Instructions, Memory Interfacing, 8255 PPI, 8051 Microcontroller).

**Algorithms**:
1. **Progress Calculation**: Progress% = (Completed Topics / Total Topics) × 100
2. **Weak Unit Detection**: If Progress% < 50%, the subject is flagged as WEAK UNIT
3. **Revision Scheduling**: Weak topics are distributed across weekdays using modulo mapping: Day = BacklogIndex % 5 (Monday=0 through Friday=4)

---

### 4.6 Course Recommender Module

**File**: `pages/CourseRecommendation.jsx`
**Purpose**: Track-filtered technical elective suggestions with prerequisite auditing.

**Tracks Available**: VLSI & Digital, Signal Processing, Robotics & Controls, Power Systems.

**Prerequisite Status**:
- ✓ CLEARED (green) — Student can enroll
- 🔒 LOCKED (orange) — Prerequisite not yet completed

---

### 4.7 AI Advising Bot Module

**File**: `pages/AIChat.jsx`
**Purpose**: Pattern-matching chatbot for curriculum planning queries.

**Recognized Keywords & Responses**:
| Keyword | Response Topic |
|---------|---------------|
| dsp, digital signal processing | PTSP prerequisite chain, Z-transforms |
| mpmc, microprocessor | DS/DSD prerequisites, bus timings |
| vlsi, ddvl, hdl | DS → DSD → DDVL → VLSI pathway |
| prereq, prerequisite | EMTL→AWP, ADC→FOC dependency chains |
| credits, credit load | 18-22 credit range, lab balancing advice |

---

### 4.8 Student Profile Module

**File**: `pages/Profile.jsx`
**Purpose**: Academic goal configuration and course clearance tracking.

**Features**:
- Specialization track radio selector (VLSI / DSP / Robotics / Power)
- Active semester dropdown
- Target CGPA input (Indian 10.0 scale)
- Planning horizon selector (Sem 6, 7, or 8)
- Completed course clearance checklist (Sem 3 & 4 foundations)
- Live clearance statistics summary card

---

## 5. Design System

**Theme**: Swiss Modernist Technical (dark mode)

**Color Palette**:
| Token | Hex | Usage |
|-------|-----|-------|
| Obsidian Midnight | #08090d | Page backgrounds |
| Carbon Graphite | #11131a | Card surfaces |
| Electric Cobalt | #2f62ff | Primary actions, links |
| Tangerine Orange | #ff5a36 | Warnings, accents |
| Status Green | #10b981 | Success indicators |

**Typography**: Plus Jakarta Sans (Google Fonts)
**Border Radius**: 4px (sharp, industrial)
**Special Effect**: Blueprint scanner laser — a horizontal cobalt line sweeps down the screen every 10 seconds.

---

## 6. Directory Structure

```
frontend/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── FeatureCard.jsx
│   │   ├── Features.jsx
│   │   ├── HowItWorks.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   ├── SemesterPlanner.jsx
│   │   ├── SyllabusTracker.jsx
│   │   ├── CourseRecommendation.jsx
│   │   ├── AIChat.jsx
│   │   └── Profile.jsx
│   ├── styles/
│   │   ├── Navbar.css
│   │   ├── Hero.css
│   │   ├── Features.css
│   │   ├── HowItWorks.css
│   │   ├── Footer.css
│   │   ├── Login.css
│   │   ├── Dashboard.css
│   │   └── SyllabusTracker.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
└── package.json
```

---

## 7. Future Enhancements

1. **Local Storage Persistence** — Save user profile and planner data across browser sessions.
2. **Flask + SQLite Backend** — Store student records, progress, and planner data server-side.
3. **Drag-and-Drop Planner** — Swap subjects between semesters by dragging course blocks.
4. **Prerequisite Validator** — Auto-flag scheduling conflicts (e.g., scheduling MPMC before clearing DS).
5. **Cloud AI Integration** — Connect the advising bot to a real AI model for smarter responses.
6. **Export & Sharing** — Allow students to export planners as PDF and share with advisors.
7. **Multi-Branch Support** — Expand curriculum databases to CSE, EEE, ME, and other B.Tech branches.

---

## ✂️ END OF CONTENT ✂️

---

## Instructions for the AI chatbot:

After pasting the above, add one of these follow-up messages:

**For PDF**:
> "Please format this content into a clean, professional PDF document with a cover page, table of contents, proper headings, tables, and page numbers. Use Calibri font, 11pt body text, 16pt headings. Add subtle blue (#2f62ff) accent colors for headers."

**For Word (.docx)**:
> "Please format this content into a downloadable Word (.docx) document with a professional cover page, automatic table of contents, styled headings (Heading 1, Heading 2), formatted tables, and page numbers in the footer."

**For Google Docs friendly format**:
> "Please format this as a clean document I can paste into Google Docs. Use clear heading hierarchy, formatted tables, and proper spacing."
