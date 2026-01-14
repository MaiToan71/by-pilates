# By Pilates - Design System

## Brand Overview
**Brand:** By Pilates  
**Type:** Pilates Studio / Personal Training  
**Target:** Women 25–50  
**Focus:** Core strength, posture, rehabilitation, feminine fitness  
**Goal:** Educate, build authority, book training sessions

---

## Color Palette

### Primary Colors
```css
--primary-brown: #c4aa8e;    /* Primary brand color - CTA, accents */
--warm-beige: #F5F1E8;       /* Background, sections */
--soft-gray: #E8E4DC;        /* Borders, dividers */
--off-white: #FAFAF8;        /* Main background */
```

### Text Colors
```css
--text-primary: #2D3436;     /* Headings, strong text */
--text-body: #4A5568;        /* Body text */
--text-muted: #6B7280;       /* Secondary text */
```

### Usage Guidelines
- **Hero & CTA buttons:** Primary brown (#c4aa8e) with white text
- **Section backgrounds:** Alternate between off-white and warm beige
- **Borders:** Soft gray (#E8E4DC) for subtle separation
- **Text:** Dark gray (#2D3436) for headings, medium gray (#4A5568) for body

---

## Typography

### Font Families
```css
--font-heading: 'Poppins', sans-serif;
--font-body: 'Inter', sans-serif;
```

### Font Scales
```css
/* Headings */
--text-6xl: 3.75rem;   /* Hero title (60px) */
--text-5xl: 3rem;      /* Section titles (48px) */
--text-4xl: 2.25rem;   /* Subsection titles (36px) */
--text-3xl: 1.875rem;  /* Card titles (30px) */
--text-2xl: 1.5rem;    /* Small titles (24px) */

/* Body */
--text-lg: 1.125rem;   /* Large body (18px) */
--text-base: 1rem;     /* Regular body (16px) */
--text-sm: 0.875rem;   /* Small text (14px) */
```

### Font Weights
- **Headings:** 600 (Semi-bold) or 700 (Bold)
- **Body:** 400 (Regular)
- **Emphasis:** 500 (Medium)

---

## Spacing System

Based on 4px base unit:

```css
--spacing-1: 0.25rem;   /* 4px */
--spacing-2: 0.5rem;    /* 8px */
--spacing-3: 0.75rem;   /* 12px */
--spacing-4: 1rem;      /* 16px */
--spacing-6: 1.5rem;    /* 24px */
--spacing-8: 2rem;      /* 32px */
--spacing-12: 3rem;     /* 48px */
--spacing-16: 4rem;     /* 64px */
--spacing-20: 5rem;     /* 80px */
--spacing-24: 6rem;     /* 96px */
```

**Section padding:** py-16 (mobile) → py-24 (desktop)  
**Container max-width:** max-w-7xl (1280px)  
**Content max-width:** max-w-3xl (768px) for text-heavy sections

---

## Visual Effects

### Shadows
```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
--shadow-soft: 0 8px 24px rgba(139, 158, 125, 0.12); /* Sage green tint */
```

### Border Radius
```css
--radius-sm: 0.375rem;   /* 6px - small elements */
--radius-md: 0.5rem;     /* 8px - cards, buttons */
--radius-lg: 1rem;       /* 16px - large cards */
--radius-xl: 1.5rem;     /* 24px - hero sections */
```

### Transitions
```css
--transition-fast: 150ms ease-in-out;
--transition-normal: 200ms ease-in-out;
--transition-slow: 300ms ease-in-out;
```

**Use for:** Hover states, fade-ins, color changes  
**Breathing effect:** Subtle scale or opacity transitions (0.98 → 1.0)

---

## Component Guidelines

### Buttons

**Primary CTA**
- Background: Sage green (#8B9E7D)
- Text: White
- Padding: px-8 py-4
- Font: 600 weight
- Hover: Slightly darker shade + shadow
- Transition: 200ms

**Secondary Button**
- Background: Transparent
- Border: 2px sage green
- Text: Sage green
- Hover: Fill with sage green, white text

### Cards
- Background: White or warm beige
- Border: 1px soft gray or none
- Border radius: 16px
- Padding: 24px or 32px
- Shadow: Soft shadow on hover
- Transition: Shadow + transform (subtle lift)

### Icons
- Use Lucide React icons
- Size: w-6 h-6 (default) or w-8 h-8 (large)
- Color: Sage green for accent, text-muted for secondary
- Never use emojis as UI icons

---

## Layout Principles

### Mobile-First
- Design for 375px width minimum
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Single column on mobile, grid on desktop

### Content Hierarchy
1. **Hero:** Large text, clear CTA, minimal text
2. **Benefits:** Icon + title + description cards
3. **Programs:** Service offerings with clear differentiation
4. **Credibility:** Instructor bio + certifications
5. **Social Proof:** Client testimonials + before/after
6. **CTA:** Strong closing call-to-action
7. **Footer:** Contact info + social links

### Whitespace
- Generous padding between sections (80-120px desktop)
- Breathing room around text blocks
- Avoid cramped layouts
- Let content breathe

---

## Animation Guidelines

### Scroll Animations
- Fade in from bottom: translateY(20px) → 0
- Stagger children: 100-150ms delay between items
- Duration: 300-500ms
- Easing: ease-out

### Hover Effects
- Buttons: Subtle shadow + slight darken
- Cards: Lift effect (translateY(-4px)) + shadow
- Images: Slight zoom (scale 1.0 → 1.05)
- Links: Underline animation

### Breathing Motion
Subtle, calm animations that mimic breathing rhythm:
- Pulse effect on CTA buttons (slow, barely noticeable)
- Gentle fade transitions
- Smooth scroll behavior

---

## Accessibility

### Contrast Ratios
- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum
- Interactive elements: Clear focus states

### Semantic HTML
- Use proper heading hierarchy (h1 → h6)
- Alt text for all images
- Labels for form inputs
- ARIA labels where needed

### Keyboard Navigation
- All interactive elements focusable
- Visible focus indicators
- Logical tab order

### Motion
- Respect `prefers-reduced-motion`
- Disable animations for users who prefer reduced motion
- No auto-playing videos with sound

---

## UX Best Practices

### Do's ✓
- Clear, action-oriented CTAs
- High-quality, professional imagery
- Authentic testimonials with photos
- Simple booking process
- Mobile-optimized forms
- Fast loading times

### Don'ts ✗
- Aggressive fitness imagery (intimidating)
- Too many CTAs (decision fatigue)
- Auto-playing background videos
- Tiny text on mobile
- Long paragraphs without breaks
- Stock photos that look generic

---

## SEO Guidelines

### Meta Tags
- Title: 50-60 characters
- Description: 150-160 characters
- Include keywords: "Pilates", "core strength", "posture", "personal training"

### Structured Data
- LocalBusiness schema
- Service schema for each program
- Review schema for testimonials
- FAQPage schema if FAQ section included

### Content Strategy
- H1: Brand name + service ("By Pilates | Core Strength & Posture Training")
- H2: Section titles (clear, descriptive)
- Alt text: Descriptive, keyword-rich but natural
- Internal linking: Services, about, contact pages

---

## Google Fonts Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet">
```

```css
font-family: 'Poppins', sans-serif;  /* Headings */
font-family: 'Inter', sans-serif;     /* Body */
```
