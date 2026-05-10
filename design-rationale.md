# Design Rationale: Leadership Portfolio Redesign

## 1. Design Overview
The core philosophy of this redesign was to shift from a "monitoring dashboard" to a "career pitch deck." This meant moving away from dense grid-based widgets and towards a linear, narrative-driven layout. Every data point is presented as evidence for a story, ensuring the employee feels a sense of ownership and pride in their monthly accomplishments.

## 2. Key Design Decisions & Tradeoffs

### Decision 1: Narrative-First Hierarchy
- **Rationale**: By placing the narrative paragraph immediately following the section header, we establish context before showing numbers. This forces the reader to understand the "why" and "how" before the "what."
- **Tradeoff**: This increases the vertical scroll depth of the page. While a dashboard is optimized for "at-a-glance" monitoring, a pitch deck is optimized for "story-driven" reading.

### Decision 2: High-Impact Signal Sentence
- **Rationale**: We replaced the composite score ring with a bold, human-centric signal sentence at the top (e.g., "Strong delivery month — tracking ahead for Program Lead."). This answers the "How did I do?" question in 3 seconds using natural language.
- **Tradeoff**: We sacrificed the precision of showing multiple top-level metrics simultaneously to ensure one clear message dominates.

### Decision 3: Visualization of Gaps, not just Scores
- **Rationale**: In the Capability Growth section, we explicitly separated "Growth Axes" (wins) from "Development Gaps" (areas for focus). We added a threshold marker at 60% to make promotion eligibility criteria unmistakable.
- **Tradeoff**: This makes the "misses" more prominent, which could cause anxiety. However, it aligns with the "dignified professional" tone by providing clear, actionable feedback.

## 3. Addressing Design Challenges (Part 10)

### Challenge 1: The Signal
- **My Approach**: Implemented a "Hero Signal" section with a large, bold sentence that combines an adjective (Strong) with a career outcome (Tracking ahead).
- **Rationale**: This feels personal and meaningful. It transforms clinical data into a motivational headline, setting the tone for the rest of the document.

### Challenge 4: The Constraint Section
- **My Approach**: Framed constraints as "Obstacles & Constraints" with a "Resolution Rate" metric. Blockers are listed with status tags (Resolved/Open).
- **Rationale**: By showing "Resolved" constraints prominently, we transform the section from a "complaint list" into a "problem-solving record," showcasing the employee's resilience.

### Challenge 2: Story vs Data Ordering
- **My Approach**: Adopted a strict "Narrative -> Summary Stats -> Evidence List" sequence for every major section.
- **Rationale**: This serves the primary audience (the employee) by providing a cohesive story. For the supervisor, the summary stats are still easily scannable within the flow.

## 4. User Persona Considerations
- **Employee**: Feels a sense of progress and clear direction for promotion.
- **Supervisor**: Can quickly see the "story" behind the numbers during a review meeting.
- **Mentor**: Has a high-quality artifact to review that highlights both wins and blockers.

## 5. Assumptions
- **User Behavior**: Assumed the user prefers a reading experience over a monitoring experience for a monthly artifact.
- **Data Availability**: Assumed that the narrative text is high-quality and accurately reflects the data (as per the PDGMS backend promise).

## 6. Future Iterations
- **Interactivity**: Add drill-downs into individual ticket state transitions for the "Evidence" layer.
- **Visual Runway**: Implement a more sophisticated "Career Runway" visualization with confidence bands as defined in the data model.
