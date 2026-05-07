# Screen Specification — Brand Home Dashboard

**Screen name:** Home (Hem)
**Language:** Swedish
**Viewport:** Desktop (full-width)

> **Note:** Wherever a specific brand name appears (e.g. service names, product names, logotype), it should be replaced with the target brand's equivalent. This is a generic dashboard template.

---

## Screen Context

This is the authenticated home dashboard for a Swedish telecom and streaming service. The logged-in user lands here after login. The layout consists of a top navbar, a persistent left sidebar, and a scrollable main content area.

---

## Layout Structure

### Navbar (60px, full-width)

- **Left:** Brand logotype with icon, warm background
- **Center:** Navigation tabs — *Hem* (active), *Mitt innehåll*, *Rekommenderat*, *Erbjudanden*
- **Right:** Search icon, notification bell (with unread badge), vertical divider, user avatar chip (initials + username + chevron)

### Left Sidebar (220px, white, right border)

**Primary navigation:**
- Hem *(active state)*
- Mitt innehåll
- Rekommenderat *(with "Nytt" badge)*
- Min lista

**Section: Konto**
- Abonnemang
- Inställningar

**Footer (pinned, separated by top border):**
- Support
- Logga ut

### Main Content Area

Scrollable column, light grey background (`#fafafa`), `32px` horizontal padding.

---

## Main Content Sections

### Hero Section

Full-width banner with a background image and dark gradient overlay. Displays a personalized greeting to the logged-in user:

- Overline: *Välkommen tillbaka*
- Heading: User's first name
- Subtext: Short personalized tagline (e.g. *Ditt innehåll är redo. Kuraterat för dig.*)

---

### Stats Cards Row

Three equal-width white cards displaying at-a-glance account and usage metrics.

| Card | Example Value | Sub-text |
|------|---------------|----------|
| Aktivt abonnemang | [Brand] Premium | Renewal date |
| Tittat den här veckan | 6 h 24 min | % change vs prior week |
| Sparade titlar | 24 titlar | Number of newly added |

---

### Dina tjänster

Section label: **DINA TJÄNSTER**

List of the user's active services, each displayed as a tappable/clickable row card with:
- Icon (in a small rounded container)
- Service name (medium weight)
- Service detail / subtitle (muted)
- Chevron arrow (right-aligned)

Example services:
- Streaming & TV — *[Brand] Play · 4K Ultra HD aktiverat*
- Bredband — *1000/1000 Mbit/s · [Street address]*
- [Brand] Säker — *Familjepaket · 5 enheter skyddade*

---

### Rekommenderat för dig

Section label: **REKOMMENDERAT FÖR DIG** with a "Visa alla →" link (right-aligned)

List of curated content recommendations. Each row displays:
- Thumbnail placeholder icon
- Title and genre
- Episode duration and season count (right-aligned, muted)
- Bookmark/add icon

Example items:
- Succession *(Drama · 58 min · 4 säsonger)*
- The Bear *(Drama · Komedi · 32 min · 3 säsonger)*
- Severance *(Thriller · Sci-fi · 52 min · 2 säsonger)*

---

### Support Banner

Full-width black card pinned at the bottom of the content area:

- **Heading:** Behöver du hjälp?
- **Body:** Vår support finns tillgänglig dygnet runt — utan väntetid.
- **CTA button:** Kontakta support *(white, small, rounded)*

---

## Design Tokens

| Token | Value |
|-------|-------|
| Brand primary | `#611f69` |
| Container default | `#f5ece4` |
| Background | `#fafafa` |
| Border | `#eaeaea` |
| Text muted | `#a1a1aa` / `#888` |
| Font heading | DM Sans |
| Font UI | Inter |
| Card radius | 8–10px |
| Button radius | 99px (pill) |
