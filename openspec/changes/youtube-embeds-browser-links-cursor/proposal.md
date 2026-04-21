## Why

AxonOS has 7 YouTube shortcuts dragged into chapter folders, but all `videoId` fields are empty so no videos render. The custom cursor also renders on top of the native OS cursor, breaking the OS illusion. These gaps reduce the polish and completeness of the presentation.

## What Changes

- Populate all 7 `videoId` fields in `chapters.js` from the `.url` shortcut files so YouTube embeds appear in every chapter
- Increase hero image display height from `h-52` (208px) to `h-72` (288px) for better visual impact
- Apply per-variant sizing in `MediaRenderer` (hero / wide / inline) instead of one global `maxHeight`
- Add an in-app browser window system so links open as draggable OS windows instead of leaving the app
- Hide the native browser cursor while the user is on the page so only the custom CursorGlow is visible

## Capabilities

### New Capabilities

- `youtube-video-embeds`: Populate video IDs in chapters.js so iframes render in every chapter
- `in-app-browser-window`: New `BrowserWindow` component + window manager actions that open any URL as a draggable desktop window inside AxonOS
- `hide-native-cursor`: Suppress the native OS cursor on the page so the custom cyan glow cursor is the only visible pointer

### Modified Capabilities

- `media-display-sizing`: Hero image height and per-variant max-height rules in ChapterContent and MediaRenderer are changing

## Impact

- `src/config/chapters.js` — data only, fill 7 videoId strings
- `src/components/Content/ChapterContent.jsx` — hero height CSS class, `onOpenLink` prop wiring
- `src/components/Content/MediaRenderer.jsx` — variant-aware sizing logic
- `src/hooks/useWindowManager.js` — new browserWindows state + openBrowser/closeBrowser
- `src/components/Window/BrowserWindow.jsx` (new file) — iframe window component
- `src/components/Desktop/Desktop.jsx` — render BrowserWindow list, pass openBrowser down
- `src/styles/globals.css` — `cursor: none` on body/root
