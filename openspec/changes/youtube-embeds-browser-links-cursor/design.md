## Context

AxonOS is a React + Vite "desktop OS" presentation app. Chapters are data-driven via `src/config/chapters.js`. Each chapter window is rendered by `ChapterContent.jsx` inside a draggable `WindowFrame` (react-rnd). A custom `CursorGlow` component draws a cyan dot + ring but the native cursor still shows underneath. YouTube shortcut files (`.url`) were dragged into `public/assets/` folders; their video IDs have been extracted and need to be wired into the chapters config.

## Goals / Non-Goals

**Goals:**
- All 7 YouTube videos render as iframes inside their chapter windows
- Hero images are taller (h-72) for stronger visual presence
- Wide/inline images use variant-appropriate max-heights
- Clicking a link-type media item opens a draggable in-app browser window (iframe)
- Native cursor is invisible while pointer is anywhere on the page

**Non-Goals:**
- Physically resizing or compressing image files on disk
- Adding navigation/history to the in-app browser window
- Supporting non-iframe-able URLs (X-Frame-Options blocked sites) — no fallback needed for this use case
- Mobile/touch support changes

## Decisions

**D1 — YouTube: data-only change, no component changes**
`ChapterContent.jsx:87` already filters `videos.filter(v => v.videoId)` before rendering iframes. Filling in the `videoId` strings in `chapters.js` is sufficient. No component refactor needed.

**D2 — Hide cursor via CSS, not JS**
`cursor: none` on `html, body` in `globals.css` is simpler and more reliable than a `useEffect` in `CursorGlow`. A CSS rule applies immediately on paint with no flash; a JS effect fires after hydration. Chosen: CSS in `globals.css`.

**D3 — In-app browser: new BrowserWindow component, reuse WindowFrame**
`WindowFrame` (react-rnd + glass styling) already encapsulates the draggable/resizable window pattern. `BrowserWindow` wraps it with an `<iframe>` body. Alternative (opening a new browser tab) was rejected — it breaks the OS metaphor. Alternative (embedding inside a chapter window) was rejected — it would require chapter windows to have nested navigation state.

**D4 — BrowserWindow state lives in useWindowManager**
`openBrowser(url, title)` appends to a `browserWindows` array (same pattern as `windows`). `closeBrowser(id)` filters it out. `Desktop.jsx` maps over `browserWindows` to render `<BrowserWindow>` instances alongside chapter windows. This keeps all window state in one place.

**D5 — MediaRenderer variant sizing**
Pass `variant` prop from ChapterContent down to MediaRenderer. Apply a `variantStyles` lookup:
- `hero`: `maxHeight: 340px` (was effectively unlimited via h-52 CSS)
- `wide`: `maxHeight: 480px`
- `inline`: `maxHeight: 280px`
All use `objectFit: cover` except `gif` which stays `contain`.

## Risks / Trade-offs

- `iframe` YouTube embeds require network access; offline environments will show blank players → Acceptable for a presentation app, no mitigation needed
- Some sites block iframe embedding (X-Frame-Options) → BrowserWindow will show a blank frame for those URLs. For this project's use case (YouTube, tool sites) this is unlikely to be an issue
- `cursor: none` applies globally — if any `<a>` or `<button>` has a custom cursor override in Tailwind/CSS it may need to be cleared → Mitigated by using `* { cursor: none !important; }` scope

## Migration Plan

1. Fill `videoId` fields in `chapters.js` — instant, no build step needed
2. CSS cursor change — single line in `globals.css`, verify in browser
3. MediaRenderer variant sizing — update component + verify visually per chapter
4. ChapterContent hero height — change `h-52` to `h-72`
5. BrowserWindow + useWindowManager — new file + hook updates + Desktop wiring
6. Add `href` fields to chapters.js media items where in-app links are desired

Rollback: all changes are isolated to config data and component files. Each step is independently revertible.
