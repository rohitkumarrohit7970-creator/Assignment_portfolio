# Thought Process: Leadership Portfolio Redesign

## 1. Problem Approach: From Dashboard to Pitch Deck
The fundamental problem was a **category error**: a monthly career document was being rendered as a real-time monitoring dashboard. My approach followed these steps:
- **Narrative Anchoring**: Instead of starting with charts, I anchored each section with the `narrative` field from the mock data. This creates a "Voice" for the portfolio.
- **Hierarchical Signal**: I identified the most important question ("How am I doing?") and answered it with a bold, natural-language headline rather than a raw score.
- **Evidence-Based Design**: I treated the 6-axis data not as primary UI elements, but as "Proof Points" that validate the narrative.

## 2. Controlling AI Hallucination
To maintain "physics-grade" data integrity, I implemented the following guardrails:
- **Schema Enforcement**: I strictly mapped every UI component to an interface in `data-model.ts`. If a field didn't exist in the schema, it was not included in the design.
- **Data Cross-Referencing**: I performed a manual line-by-line check between the React `App.jsx` and `mock-portfolio-data.json` to ensure numbers like the **71 composite score** and **80% delivery rate** were accurate.
- **Verification Document**: I created a [verification-guardrails.md](./verification-guardrails.md) checklist to ensure zero invention of data (e.g., no fake "manager feedback" or "skill badges").

## 3. Disagreement with AI Suggestions
During the ideation phase, the AI suggested several "standard" dashboard features which I rejected:
- **Rejected: Interactivity/Filters**: The AI wanted to add date range pickers. I disagreed because a Portfolio is a **static monthly artifact** (a snapshot in time), not a dynamic explorer.
- **Rejected: Metric Soup**: The AI initially suggested a grid of 6 equal-sized widgets. I overrode this to create a vertical story flow, prioritizing the "Deliverables" and "IP" wins over the more routine "Rituals" data.

## 4. Negative Prompting Strategy
To get a high-quality "Pitch Deck" output, I used negative constraints:
- **"NO generic dashboard widgets"**: Avoid cards with just a number and a tiny sparkline.
- **"NO invented data"**: Do not add fields like "Salary," "Department Ranking," or "Peer Reviews" that aren't in the provided JSON.
- **"NO complex navigation"**: Avoid sidebars or tabs. The portfolio must be a single, scrollable document that feels like a physical report.

## 5. Alignment with Guidelines
- **Part A Compliance**: I delivered a working React prototype and a structured rationale.
- **Part B Prep**: The layout was designed specifically to be easily translated into a **hand-drawn wireframe** (using a clear vertical block structure).
- **Data Fidelity**: Every line of the `context.md` was respected, especially the rule: *"The portfolio answers: What did I contribute? and How did I grow?"*
- **Portability**: Terminology was shifted to be professional and self-explanatory for external mentors.

---
*This document outlines the design thinking and technical rigor applied to the DeepThought PM Assignment.*
