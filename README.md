# AxonOS — AI for Everyone

A cinematic 2.5D desktop-OS thesis presentation website.

## Install & Run

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`

## Build for Production

```bash
npm run build
npm run preview
```

---

## Adding Your Assets

### Images / GIF / WebP
1. Drag the file into the correct folder under `public/assets/ChapX/`
2. Open `src/config/chapters.js`
3. Find the chapter and add to the `media` array:

```js
{ type:"image", src:"/assets/Chap3/MyNewScreenshot.png", variant:"inline", title:"My caption", alt:"Alt text" }
// variants: "hero" (top banner), "wide" (full width), "inline" (side by side), "gallery"
```

For GIF files, change `type` to `"gif"`.

### YouTube Videos
1. Copy the YouTube video ID from the URL
   - e.g. `https://youtube.com/watch?v=abc123xyz` → ID is `abc123xyz`
2. In `src/config/chapters.js`, find the chapter's `media` array
3. Update the empty `videoId` field:

```js
{ type:"videoEmbed", provider:"youtube", videoId:"abc123xyz", title:"Video title" }
```

### Adding / Editing Chapter Text
All text is in `src/config/chapters.js`:
- `intro` — the opening paragraph
- `sections[].heading` — section title
- `sections[].body` — section body text
- `sections[].highlight` — pull quote block

---

## Project Structure

```
public/
  assets/
    Intro/         ← drop intro images here
    Chap2/         ← drop Chap2 images here
    ...
src/
  components/
    Boot/          ← boot sequence screen
    Desktop/       ← icon grid, taskbar
    Window/        ← draggable window frame
    Content/       ← chapter layout, media renderer
    Background/    ← Three.js atmosphere
    UI/            ← cursor glow
  config/
    chapters.js    ← ALL content + asset paths here
  hooks/
    useWindowManager.js
  styles/
    globals.css
```
