# AxonOS Design System
### Taste Skill Enhanced — Awwwwards-Tier Quality

---

## 1. Visual Theme & Atmosphere

**AxonOS** is a premium AI operating system interface that blends cyberpunk depth with refined glass morphism. The atmosphere is **clinical yet warm** — like a well-lit architecture studio meets futuristic terminal.

- **Density:** 4 (Balanced — Daily App Mode)
- **Variance:** 8 (Artsy Asymmetric — creative layout freedom)
- **Motion:** 6 (Fluid Spring Physics — responsive, weighty feel)
- **Aesthetic:** Deep OLED blacks with singular, calibrated Catppuccin accent colors. Premium glass surfaces with inner refraction.

---

## 2. Color Palette & Roles

### Base Palette (OLED Optimized)
| Name | Hex | Role |
|------|-----|------|
| Void Black | `#030308` | Primary background |
| Carbon | `#0a0a10` | Elevated surfaces |
| Obsidian | `#12121a` | Card backgrounds |

### Light Mode Palette (Catppuccin Latte)
| Name | Hex | Role |
|------|-----|------|
| Base | `#eff1f5` | Primary background |
| Mantle | `#e6e9ef` | Surface background |
| Crust | `#dce0e8` | Elevated surfaces |
| Text | `#4c4f69` | Primary text |
| Subtext | `#5c5f77` | Secondary text |

### Accent Palette (Catppuccin)
| Name | Hex | Role |
|------|-----|------|
| Blue | `#1e66f5` | Primary CTA, active states |
| Mauve | `#8839ef` | Secondary accent |
| Pink | `#ea76cb` | Tertiary accent |
| Green | `#40a02b` | Success states |
| Red | `#d20f39` | Error/danger |
| Yellow | `#df8e1d` | Warning |
| Teal | `#179299` | Info |
| Sky | `#04a5e5` | Links
| Amber Glow | `#f9a825` | Tertiary accent, highlights |
| Rose Signal | `#ff4d6d` | Error states, alerts |
| Mint Fresh | `#00c9a7` | Success states |
| Sky Calm | `#38bdf8` | Information states |

### Surface System
```css
--win-bg: rgba(8,8,16,0.92);
--win-border: rgba(255,255,255,0.06);
--blur: 28px;
--radius: 16px;
```

---

## 3. Typography Rules

### Font Stack
- **Display:** `Space Grotesk` — geometric, modern, weight-driven hierarchy
- **Mono:** `JetBrains Mono` — for timestamps, metadata, technical labels

### Scale
- **Display headings:** `font-weight: 700`, `letter-spacing: -0.03em`, `line-height: 1.05`
- **Labels:** `font-size: 10px`, `font-weight: 500`, `letter-spacing: 0.15em`, uppercase
- **Body:** `font-size: 13px`, `line-height: 1.5`, `max-width: 65ch`

### Banned Fonts
- ~~Inter~~ — BANNED
- ~~Roboto~~ — BANNED
- ~~Arial~~ — BANNED
- ~~Generic serif~~ — BANNED for UI contexts

---

## 4. Component Stylings

### Glass Panel (Double-Bezel / Doppelrand)
Premium depth through nested architecture:
```css
.glass {
  background: var(--win-bg);
  backdrop-filter: blur(28px) saturate(180%);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  box-shadow: 
    0 40px 100px rgba(0,0,0,0.8),
    0 0 0 1px rgba(255,255,255,0.04),
    inset 0 1px 0 rgba(255,255,255,0.08),
    inset 0 -1px 0 rgba(0,0,0,0.3);
}
```

### Desktop Icon
- **Outer Shell:** `rounded-2xl`, subtle gradient, hairline border
- **Inner Core:** inset highlight, glass refraction
- **Shimmer:** perpetual horizontal sweep on hover
- **Breathing Glow:** infinite pulse ring animation
- **Tilt:** 3D perspective tilt tracking cursor position

### Taskbar
- **Height:** 56px (h-14)
- **Border Radius:** `rounded-2xl`
- **Glass:** 32px blur, 180% saturation
- **Active Window:** accent-colored bottom border, subtle glow

### Buttons
- **Primary:** Gradient fill, inner highlight, shadow lift on hover
- **Active State:** `-2px translateY`, `scale(0.98)`
- **Spring Physics:** `cubic-bezier(0.32, 0.72, 0, 1)`

---

## 5. Layout Principles

### Grid System
- **Desktop Icons:** 7-column grid, `gap-3`, staggered waterfall entrance
- **Stagger Delay:** 70ms between items
- **Entrance Animation:** `opacity 0→1`, `y: 24→0`, `scale: 0.9→1`

### Spacing Scale
```javascript
spacing: {
  '18': '4.5rem',   // Premium breathing
  '22': '5.5rem',   // Section gaps
  '30': '7.5rem',   // Massive whitespace
}
```

### Border Radius
```javascript
borderRadius: {
  '2xl': '1rem',   // Cards
  '3xl': '1.5rem', // Panels
  '4xl': '2rem',   // Major containers
}
```

### Responsive Strategy
- Mobile-first collapse below `768px`
- Single column layouts
- Touch-friendly tap targets (min 44px)

---

## 6. Motion & Interaction

### Animation Timing
```css
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
--ease-spring:   cubic-bezier(0.32, 0.72, 0, 1);
```

### Key Animations
| Animation | Duration | Easing | Purpose |
|-----------|----------|--------|---------|
| `fadeUp` | 800ms | expo-out | Entrance |
| `scaleIn` | 400ms | spring | Modals |
| `slideUp` | 600ms | expo-out | Menus |
| `shimmer` | 2s | ease-in-out | Loading |
| `breathing` | 4s | ease-in-out | Ambient glow |
| `float` | 6s | ease-in-out | Floating elements |

### Perpetual Micro-Interactions
- **Desktop Icons:** Shimmer sweep, breathing glow ring, 3D tilt
- **Taskbar:** Breathing NOS wordmark, breathing clock
- **EQ Visualizer:** Infinite bar animation with staggered delays
- **Background Orbs:** Slow floating with scale + position

### Stagger Orchestration
```javascript
// Desktop icons
staggerChildren: 0.07,
delayChildren: 0.3,

// Windows
mode: "sync", // AnimatePresence
```

---

## 7. Anti-Patterns (Banned)

### Typography
- ~~Inter font~~ — BANNED
- ~~Oversized H1s~~ — Control hierarchy with weight, not size
- ~~6-line wrapped headings~~ — Use wider containers, `max-w-5xl`

### Color
- ~~Pure black `#000000`~~ — Use `#030308` (OLED safe)
- ~~Neon outer glows~~ — Use inner refraction instead
- ~~AI Purple/Blue gradient~~ — Calibrated, singular accents only
- ~~Oversaturated accents~~ — All accents < 80% saturation

### Layout
- ~~3-column equal card layouts~~ — Asymmetric bento, 2-col zig-zag
- ~~Centered hero sections~~ — Asymmetric split, left-aligned
- ~~Generic "SECTION 01" labels~~ — Content-first, no meta labels
- ~~Flat backgrounds~~ — Mesh gradients, ambient orbs

### Content
- ~~Emojis~~ — BANNED entirely
- ~~"John Doe", "Acme", "Nexus"~~ — BANNED placeholder names
- ~~Fake round numbers (`99.99%`)~~ — Organic, realistic data
- ~~AI clichés ("Elevate", "Seamless")~~ — Concrete, specific

### Icons
- ~~Thick-stroked Lucide~~ — Use `@phosphor-icons/react` with `strokeWidth={1.5}`
- ~~Custom mouse cursors~~ — Performance/accessibility issues

### Motion
- ~~`linear` or `ease-in-out`~~ — Always use spring physics
- ~~Animating `top`, `left`, `width`, `height`~~ — Use `transform` only
- ~~`window.addEventListener('scroll')`~~ — Use `IntersectionObserver` or Framer Motion

---

## 8. Implementation Checklist

For every component, verify:

- [ ] Double-Bezel architecture (outer shell + inner core)
- [ ] Spring physics on all transitions
- [ ] Staggered entrance animations
- [ ] Perpetual micro-loops where appropriate
- [ ] Glass blur on fixed/sticky elements only
- [ ] Hardware-accelerated transforms only
- [ ] Mobile-first responsive collapse
- [ ] No banned fonts, colors, or patterns
- [ ] Tactile feedback on interactive elements

---

## 9. File Structure

```
src/
├── styles/globals.css     # Design tokens, animations, base styles
├── components/
│   ├── Background/
│   │   └── AtmosphereBackground.jsx  # Mesh gradients, floating orbs
│   ├── Boot/
│   │   └── BootSequence.jsx          # Terminal boot with staggered reveals
│   ├── Desktop/
│   │   ├── Desktop.jsx               # Icon grid, window management
│   │   ├── DesktopIcon.jsx           # 3D tilt, shimmer, breathing glow
│   │   └── Taskbar.jsx               # Glass morphism, EQ visualizer
│   └── Window/
│       └── WindowFrame.jsx           # Draggable windows, focus states
└── config/
    └── chapters.js       # Chapter data with icons, labels, accents
```

---

## 10. References

### Taste Skills Applied
1. **taste-skill** — Senior UI/UX with metric-based rules
2. **gpt-tasteskill** — Awwwwards-level GSAP motion
3. **stitch-skill** — Semantic design system generation
4. **soft-skill** — High-end agency Double-Bezel architecture

### Inspiration Sources
- Apple Vision Pro spatial computing
- Linear app's obsessive polish
- Vercel's motion design
- Figma's spring physics
