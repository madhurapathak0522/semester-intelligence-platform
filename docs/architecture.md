# SIP Architecture (Phase 1)

## Main Pages

### 1. Home Page

Purpose:

* Welcome student
* Show app purpose
* Start button

Features:

* App title
* Semester selection button
* Clean UI

---

### 2. Semester Dashboard

Purpose:

* Show semester subjects

Features:

* Subject cards
* Progress %
* Quick navigation

Example:
Semester 4

[Signals & Systems]
Progress: 60%

[Communication Systems]
Progress: 30%

---

### 3. Subject Tracker Page

Purpose:

* Track topic completion

Features:

* Topics list
* Checkbox completion
* Progress bar

Example:

Communication Systems

☐ Modulation
☑ ASK
☐ FSK
☑ PCM

Progress: 50%

---

### 4. Weak Topic Detection Page

Purpose:

* Show weak subjects/topics

Logic:
If progress < 50%

Mark as:
Weak Topic

Example:

Weak Topics:

* Modulation
* FSK
* Nyquist Criteria

---

### 5. Study Planner Page

Purpose:

* Suggest revision plan

Example:

Monday:

* Modulation
* ASK

Tuesday:

* PCM
* FSK

---

## Backend Flow

User action
↓
Data saved in Flask
↓
SQLite database updates
↓
Progress calculated
↓
Weak topics identified
↓
Planner generated

---

## Database Tables

Students

Subjects

Topics

Progress

---

## Folder Responsibility

frontend/

* UI pages

backend/

* Flask APIs
* Database logic

docs/

* Architecture
* Planning

screenshots/

* Project images
