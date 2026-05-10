# Leadership Portfolio Redesign - Assignment Summary

This project is a redesign of the **Leadership Portfolio** page for DeepThought's PDGMS platform.

## Objective
Transform the Leadership Portfolio from a grid-based dashboard into a **personal career pitch deck**. It is narrative-first, story-driven, and optimized for career reflection and mentorship.

## Key Features
- **Hero Signal**: A 3-second natural language headline answering "How did I do?"
- **Narrative-First Sections**: Each of the 6 sections leads with a narrative "Story" before presenting "Evidence" (data).
- **Promotion Clarity**: Clear visualization of axis scores against the 60% threshold for V3 eligibility.
- **Resilience Tracking**: Framing constraints as solved obstacles rather than just blockers.
- **Month-Scoped Navigation**: Professional navigation between monthly artifacts.

## Implementation Details
- **Tech Stack**: React, Tailwind CSS (v4), Lucide-React.
- **Data Fidelity**: Strictly maps to `mock-portfolio-data.json` and `data-model.ts`.
- **Portability**: Uses standard professional terminology ("Original Work", "Awaiting Review") to ensure clarity outside the organization.

## How to Run the Prototype
1. Navigate to the `prototype` directory:
   ```bash
   cd prototype
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the local URL (usually `http://localhost:5173/`) in your browser.

## Project Structure
- `prototype/`: The working React/Tailwind prototype.
- `context.md`: The full assignment context.
- `data-model.ts`: Backend data structure definitions.
- `mock-portfolio-data.json`: Sample data used for the prototype.
- `design-rationale.md`: Detailed explanation of design decisions and tradeoffs.
- `verification-guardrails.md`: Checklist used to ensure zero AI hallucination.

---
*Developed as part of the DeepThought Product Management Internship Assignment.*
