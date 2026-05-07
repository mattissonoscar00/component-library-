# Product Requirement Document (PRD)

## Upgrade Prompt Component (Multibrand Design System)

### Overview

Design a multibrand Upgrade Prompt component for a telecom/streaming logged-in experience. The component should drive upgrades, reduce churn, and scale across brands using a shared system.

### Key Requirements

- Single component with variants (no duplicates per brand)
- Brand differentiation via Figma Variables (modes)
- Fully responsive (mobile, tablet, desktop)
- Auto layout only
- WCAG 2.1 AA compliant

### Brands

**Zapp (Budget)**

- Tone: Direct, energetic
- Focus: Price & value

**Saga (Premium)**

- Tone: Calm, trustworthy
- Focus: Value & relevance

### Tech Stack

- Next.js 14 (App Router)
- Radix UI (headless componets)
- Tailwind CSS
- React
- TypeScript
- Storybook (component documentation and development).

When building the upgrade prompt component from Figma you must use the applied variables for the component.

### Component Structure

- Title
- Image
- Description
- Primary CTA
- Secondary CTA
- Optional dismiss
- Use auto layout for all elements

### States

- Default
- Hover
- Focus
- Pressed
- Disabled
- Dismissed

### Accessibility

- Keyboard navigation
- Screen reader support
- 24px minimum tap targets

### Tokens

- Use primitive + semantic tokens
- No hardcoded values

### Evaluation

- System thinking
- Accessibility
- Scalability
- Visual craft

