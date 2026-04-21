## Context

AxonOS is a creative AI operating system interface built with React + Vite + Tailwind CSS + Framer Motion. The current dark theme uses:
- Deep OLED blacks (`#030308`, `#0a0a10`)
- Cyan, violet, amber, rose, mint, sky accent colors
- Glass morphism with `backdrop-filter: blur()`
- Scanline overlay effect

The app has these key components that need theme support:
- `AtmosphereBackground` - gradient orbs
- `Desktop` / `DesktopIcon` - icon grid
- `Taskbar` - bottom navigation bar
- `WindowFrame` - draggable windows
- `SettingsMenu` - configuration panel
- `AppContext` - state management

## Goals / Non-Goals

**Goals:**
- Add light mode with warm off-white surfaces
- Maintain premium aesthetic in both themes
- Persist theme preference across sessions
- Minimize code duplication between themes

**Non-Goals:**
- Auto-detect system preference (can be added later)
- Multiple color scheme options beyond light/dark
- High contrast mode for accessibility (separate feature)

## Decisions

### Decision 1: CSS Custom Properties for Theming

**Choice:** Use CSS custom properties (`--variable`) with `data-theme` attribute selector

**Rationale:**
- Tailwind's `extend.colors` works seamlessly with CSS variables
- Easy to swap entire themes by changing one attribute
- No runtime style recalculations
- Works with SSR and component isolation

**Implementation:**
```css
:root { --bg: #030308; --text: #ffffff; }
:root[data-theme="light"] { --bg: #FAFAF9; --text: #1C1917; }
```

**Alternative considered:** React context + inline styles
- Rejected: Too many style recalculations, harder to maintain

### Decision 2: Light Mode Color Palette

**Choice:** Warm off-white base with subtle shadows instead of glows

**Palette:**
```css
--void:      #FAFAF9   /* Stone 50 - warm off-white */
--carbon:    #F5F5F4   /* Stone 100 */
--obsidian:  #E7E5E4   /* Stone 200 */

--text-primary:   #1C1917   /* Stone 900 */
--text-secondary: #78716C   /* Stone 500 */
--text-muted:     #A8A29E   /* Stone 400 */

--border:    rgba(0,0,0,0.08)
--border-strong: rgba(0,0,0,0.15)
```

**Shadow system (light mode):**
```css
--shadow-glass: 0 20px 60px rgba(0,0,0,0.06);
--shadow-card: 0 8px 40px rgba(0,0,0,0.04);
```

### Decision 3: Theme Toggle in Settings

**Choice:** Add toggle switch in existing SettingsMenu

**Implementation:**
- Add `theme` state to AppContext
- Persist to `localStorage` key `axon-os-theme`
- Read initial value from localStorage (default: 'dark')
- Apply `data-theme` attribute to `<html>` element

### Decision 4: Accent Color Adjustments for Light Mode

**Choice:** Slightly darken accent colors for better contrast

```js
const lightAccents = {
  cyan:   '#00b8d4',  // Deeper cyan
  violet: '#7c3aed',  // Deeper purple
  amber:  '#d97706',  // Deeper orange
  rose:   '#e11d48',  // Deeper red
  mint:   '#059669',  // Deeper green
}
```

## Risks / Trade-offs

**[Risk]** Scanlines may look odd on light backgrounds
→ **Mitigation:** Hide scanlines in light mode via CSS

**[Risk]** Glass blur effect may not look premium on light backgrounds
→ **Mitigation:** Reduce blur intensity, increase saturation in light mode

**[Risk]** Breaking existing dark theme users
→ **Mitigation:** Dark is default, light mode opt-in only

## Implementation Order

1. Add CSS variables to `globals.css`
2. Update Tailwind config with theme extensions
3. Add theme state to `AppContext`
4. Apply `data-theme` attribute in `App.jsx`
5. Update `AtmosphereBackground` for light mode
6. Update `DesktopIcon` hover states
7. Update `Taskbar` glass styles
8. Update `WindowFrame` shadows
9. Add theme toggle to `SettingsMenu`

## Open Questions

- Should we also support `prefers-color-scheme` media query for auto-detection?
- Should scanlines be a separate toggle option?
