# SiliconPath — User Guide
### B.Tech ECE Semester Intelligence Platform

**Version**: 1.0  
**Date**: June 2026  
**Authors**: Harsh & Team  

---

## What is SiliconPath?

SiliconPath is an academic planning web application designed specifically for **B.Tech Electronics & Communication Engineering (ECE)** students studying in Indian universities. It helps students plan their semesters, track syllabus progress, discover elective courses, and get AI-powered academic advice — all in one place.

The name "SiliconPath" represents the structured pathway through a silicon chip — just like how students navigate through a structured B.Tech curriculum.

---

## Who Is This For?

- **B.Tech ECE students** (2nd Year to 4th Year) who want to organize their studies.
- **Academic advisors** who want a visual tool to guide students.
- **College project reviewers** evaluating the platform's capabilities.

---

## How to Access the Application

1. Open your web browser (Chrome, Firefox, Edge, or Safari).
2. Navigate to the application URL (provided by your administrator or run locally).
3. You will land on the **Home Page**.

---

## Step-by-Step Walkthrough

### Step 1: The Home Page (Landing Page)

When you first open SiliconPath, you see a clean, dark-themed landing page with the following sections:

| Section | What It Shows |
|---------|--------------|
| **Navigation Bar** | The SiliconPath logo and menu links. On mobile phones, this collapses into a hamburger menu (☰). |
| **Hero Section** | A large headline explaining what SiliconPath does, with a "Get Started" button. |
| **Features Grid** | Four cards showing the core features: Semester Planner, Syllabus Tracker, Elective Recommender, and AI Advisor. |
| **How It Works** | A 3-step timeline: (1) Configure Your Syllabus → (2) Track Your Progress → (3) Plan Electives. |
| **Footer** | Links and copyright information. |

**Action**: Click the **"Get Started"** button to proceed to the Login page.

---

### Step 2: The Login Portal (Student Onboarding)

This is where you set up your academic profile. There is no password — this is a profile configuration screen.

**You need to fill in:**

| Field | Example | Purpose |
|-------|---------|---------|
| Full Name | Rahul Sharma | Used in welcome messages and dashboard headers. |
| Roll Number / ID | 22ECE1014 | Your college enrollment ID. |
| University / College | JNTU Hyderabad | Your institution name. |
| Current Semester | 2nd Year — Sem 3 | Selects which subjects to load in the tracker. Options: Sem 3, 4, 5, or 6. |
| ECE Specialization | Digital Systems & VLSI | Filters elective recommendations. Options: VLSI, Signal Processing, Robotics & Controls, or Power Systems. |

**Action**: Click **"Access Dashboard"** after filling all fields. You will be taken to the main Dashboard.

---

### Step 3: The Dashboard

The Dashboard is the main workspace. It has two sections:

- **Left Sidebar**: A vertical menu with 5 tabs.
- **Right Canvas**: Displays the selected tab's content.

The header bar shows your name, university, active semester, and specialization track.

#### Dashboard Tabs Overview

| Tab | Icon | What It Does |
|-----|------|-------------|
| Semester Planner | ⚡ | Plan your subjects across semesters and monitor credit loads. |
| Syllabus Tracker | 📋 | Check off completed topics and identify weak areas. |
| Course Recommender | 🔌 | Browse elective courses filtered by your specialization. |
| AI Advising Bot | 💬 | Ask questions about prerequisites, subjects, and course planning. |
| Student Profile | 👤 | Edit your CGPA target, change your track, and log completed courses. |

---

### Tab 1: Semester Planner ⚡

This tab shows your entire B.Tech course map across **Semesters 3 through 6**.

**What You See:**
- A **Total Credits counter** at the top showing combined credits across all semesters.
- **Four semester cards**, each listing the subjects, their codes, and credit values.
- A **Planner Console** at the bottom to add new subjects.

**How Credit Warnings Work:**
- If a semester has **more than 20 credits** → An **OVERLOAD** warning badge appears in orange.
- If a semester has **fewer than 12 credits** → An **UNDERLOAD** warning badge appears in red.

**Actions You Can Take:**
- **Add a subject**: Fill in the Subject Code, Name, Credits, and Target Semester in the console form, then click "Add".
- **Remove a subject**: Click the **✕** button next to any subject to remove it from that semester.

**Example subjects loaded by default:**

| Semester | Subjects |
|----------|----------|
| Sem 3 | PTSP, DS, EMI, EDC, MATH-3 |
| Sem 4 | ADC, EMTL, VCCA, IOT, DSD |
| Sem 5 | LDIC, MPMC, DDVL, OPPS, QNX |
| Sem 6 | DSP, AWP, DIP, FOC, BPP |

---

### Tab 2: Syllabus Tracker 📋

This tab lets you track your study progress **topic by topic** for each subject in your active semester.

**What You See:**
- A list of subjects for your selected semester.
- Each subject shows **5 core topics** with checkboxes.
- A **progress bar** showing completion percentage.
- A **status badge**: either "✓ ON TRACK" (green) or "⚠️ WEAK UNIT" (red).

**How the Weak Topic System Works:**
1. Each subject has 5 topics. As you check off topics, the progress bar fills up.
2. If a subject's completion falls **below 50%**, it is flagged as a **WEAK UNIT**.
3. All unchecked topics from weak subjects are collected into a **Revision Backlog**.
4. The **Dynamic Revision Planner** (shown on the right side) automatically distributes these weak topics across Monday to Friday study slots.

**Example**: If you have completed only 1 out of 5 topics in MPMC (20% progress), the system will:
- Flag MPMC as ⚠️ WEAK UNIT.
- Add the 4 remaining topics to the revision backlog.
- Assign them to specific weekdays for focused study.

---

### Tab 3: Course Recommender 🔌

This tab suggests **technical elective courses** based on your specialization track.

**How It Works:**
- Use the **track filter buttons** at the top to switch between: VLSI & Digital, Signal Processing, Robotics & Controls, and Power Systems.
- Each elective card shows:
  - **Subject Code & Name**
  - **Credit Value**
  - **Brief Description** of what the course covers
  - **Prerequisite Subject** required before enrolling
  - **Clearance Status**: Either **✓ CLEARED** (you can take this course) or **🔒 LOCKED** (prerequisite not yet completed)

---

### Tab 4: AI Advising Bot 💬

This tab provides an interactive chat interface for quick academic guidance.

**How to Use:**
1. Type a question in the input box at the bottom (e.g., "What are the prereqs for DSP?").
2. Or click one of the **suggestion chips** for quick queries.
3. The bot responds with specific B.Tech ECE curriculum advice.

**Topics the Bot Understands:**
- **DSP prerequisites** — Explains the PTSP → DSP pathway.
- **MPMC requirements** — Explains the DS → MPMC dependency.
- **VLSI track pathway** — Outlines DS → DSD → DDVL → Advanced VLSI.
- **General prerequisites** — Maps out chains like EMTL → AWP and ADC → FOC.
- **Credit load advice** — Recommends balancing 18–22 credits per semester.

> **Note**: This is currently a pattern-matching advisor (not a cloud AI). It provides pre-programmed expert responses specific to B.Tech ECE.

---

### Tab 5: Student Profile 👤

This tab lets you customize your academic goals and track your foundations.

**Left Column — Settings:**
- **Specialization Track Selector**: Choose between VLSI, Signal Processing, Robotics, or Power tracks using radio buttons.
- **Completed Subjects Checklist**: Mark which foundational courses (Sem 3 & 4) you have already passed. This affects which electives show as "CLEARED" or "LOCKED" in the Course Recommender.

**Right Column — Targets:**
- **Active Academic Term**: Change your current semester.
- **Target CGPA**: Set your goal CGPA on the Indian 10.0 scale.
- **Planning Horizon**: Set your target graduation semester (Sem 6, 7, or 8).
- **Clearance Statistics**: A live summary card showing your track, number of cleared subjects, target CGPA, and end term.

---

## Design & Visual Theme

SiliconPath uses a **Swiss Modernist Technical** design language:

- **Dark Mode**: Obsidian black backgrounds with clean grid overlays.
- **Blueprint Aesthetic**: A blue scanning laser line sweeps across the screen, simulating a technical scanner effect.
- **Color Palette**:
  - **Cobalt Blue** (#2f62ff) — Primary actions and links.
  - **Tangerine Orange** (#ff5a36) — Warnings and highlights.
  - **Status Green** (#10b981) — Success indicators.
- **Typography**: Plus Jakarta Sans — a clean, modern sans-serif font.

---

## Technical Requirements

| Requirement | Details |
|-------------|---------|
| Browser | Chrome 90+, Firefox 88+, Edge 90+, Safari 14+ |
| Screen Size | Desktop (1024px+) recommended. Mobile-responsive. |
| Internet | Not required after initial load (runs entirely in-browser). |
| Backend | Not required for current version (all data is stored in-browser memory). |

---

## Frequently Asked Questions

**Q: Is my data saved when I close the browser?**  
A: Currently, no. All data resets when you refresh the page. A future update will add local storage persistence and database integration.

**Q: Can I use this for branches other than ECE?**  
A: The current version is built specifically for B.Tech ECE. Expanding to other branches (CSE, ME, EEE) is planned for future releases.

**Q: Is the AI chatbot connected to the internet?**  
A: No. The current advisor uses pre-programmed pattern matching. A future version will integrate with cloud AI services for smarter responses.

**Q: Can I share my planner with classmates?**  
A: Not yet. Export and sharing features are planned for a future update.

---

## Summary of Key Features

| Feature | Description |
|---------|-------------|
| 🎯 Semester Planner | Visual credit load planning with overload/underload warnings. |
| 📊 Syllabus Tracker | Topic-by-topic progress tracking with weak unit detection. |
| 📅 Revision Planner | Auto-generated weekly study schedule based on weak topics. |
| 🔌 Course Recommender | Track-filtered elective suggestions with prerequisite auditing. |
| 💬 AI Advisor | Pattern-based chatbot for curriculum planning questions. |
| 👤 Profile Manager | CGPA targets, track selection, and course clearance logging. |

---

*Built with React + Vite | Styled with Vanilla CSS | Designed for Indian B.Tech ECE Students*
