# AI Hallucination Guardrails

To ensure the Leadership Portfolio remains a "physics-grade" document, follow these guardrails to prevent AI hallucination during the design and rationale process.

## 1. Data Source of Truth
- **Primary Source**: [mock-portfolio-data.json](file:///Users/rohitkumar/Documents/trae_projects/project/mock-portfolio-data.json)
- **Schema Source**: [data-model.ts](file:///Users/rohitkumar/Documents/trae_projects/project/data-model.ts)
- **Constraint**: Never invent a metric, score, or narrative detail that is not present in the mock data.

## 2. Verification Checklist
Before finalizing any design or rationale, verify:
- [ ] **Scores**: Does the Composite Score match `71`? Do the 6 axis scores match the `capability_growth` data?
- [ ] **Narratives**: Are the narrative paragraphs derived from the `narrative` fields in each section?
- [ ] **Specific Wins**: Are the "Process validation protocol" and "Lyophilized injectable line" mentioned as the key wins for Rajan Iyer?
- [ ] **Constraints**: Are the HEPA filter delay and sequential review cycle the primary blockers?
- [ ] **Identity**: Is the employee named "Rajan Iyer" with the role "Production Planning Lead"?

## 3. Forbidden Hallucinations
- **DO NOT** invent a "Manager's Comment" section if it's not in the data model.
- **DO NOT** create a "Projected Salary" or "Bonus" field.
- **DO NOT** add "Peer Feedback" or "Skill Badges" unless they map to existing axes.
- **DO NOT** change the V-level meanings (V1-V5).

## 4. Narrative Fidelity
While the goal is to be "story-driven," the story must be a faithful interpretation of the data. 
- *Hallucination*: "Rajan is the best employee in the company."
- *Factual Story*: "Rajan is tracking 3 months ahead of his V3 eligibility plan due to strong delivery in Facility 3."

---
*These guardrails ensure that the AI remains a thinking partner without compromising the integrity of the data.*
