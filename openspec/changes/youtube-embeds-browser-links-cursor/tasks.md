## 1. YouTube Video IDs

- [x] 1.1 In `src/config/chapters.js`, set Intro videoId to `Ii99RU3mOJM`
- [x] 1.2 Set Chap2 videoId to `y27m5gYREGE`
- [x] 1.3 Set Chap3 videoId to `7fQcsPOm8ys`
- [x] 1.4 Set Chap4 first videoEmbed (Opus vs Gemini) videoId to `qkKzGx8qoI4`
- [x] 1.5 Set Chap4 second videoEmbed (Runway) videoId to `AwKSrJFvdps`
- [x] 1.6 Set Chap6 videoId to `ZUDcPATcTz4`
- [x] 1.7 Set Chap7 videoId to `_UEvlmNx0cs`

## 2. Hide Native Cursor

- [x] 2.1 In `src/styles/globals.css`, add `*, *::before, *::after { cursor: none !important; }` rule

## 3. Media Display Sizing

- [x] 3.1 In `src/components/Content/ChapterContent.jsx`, change hero container class from `h-52` to `h-72`
- [x] 3.2 In `src/components/Content/ChapterContent.jsx`, pass `variant={m.variant}` prop to each `<MediaRenderer>` call (inlines and wides)
- [x] 3.3 In `src/components/Content/MediaRenderer.jsx`, accept `variant` prop and apply lookup: `wide → maxHeight:480px`, `inline → maxHeight:280px`, default `→ maxHeight:420px`

## 4. In-App Browser Window — State

- [x] 4.1 In `src/hooks/useWindowManager.js`, add `const [browserWindows, setBrowserWindows] = useState([])`
- [x] 4.2 Add `openBrowser(url, title)` action that appends `{ id: Date.now(), url, title }` to `browserWindows`
- [x] 4.3 Add `closeBrowser(id)` action that filters the entry out of `browserWindows`
- [x] 4.4 Return `browserWindows`, `openBrowser`, `closeBrowser` from the hook

## 5. In-App Browser Window — Component

- [x] 5.1 Create `src/components/Window/BrowserWindow.jsx` — WindowFrame wrapper with title bar label and full-size `<iframe src={url} className="w-full h-full border-0" />`
- [x] 5.2 Style iframe container to fill remaining height after title bar (use `calc(100% - titlebarHeight)` or flex-col layout)
- [x] 5.3 Wire the close button to call `onClose(id)`

## 6. Desktop Wiring

- [x] 6.1 In `src/components/Desktop/Desktop.jsx`, destructure `browserWindows`, `openBrowser`, `closeBrowser` from `useWindowManager`
- [x] 6.2 Pass `onOpenLink={openBrowser}` prop to each `<ChapterContent>` (via WindowFrame render)
- [x] 6.3 Map over `browserWindows` and render `<BrowserWindow>` for each entry below the chapter windows

## 7. Chapter Content Link Wiring

- [x] 7.1 In `src/components/Content/ChapterContent.jsx`, accept `onOpenLink` prop
- [x] 7.2 Add rendering block for `type: "link"` media items — a styled button that calls `onOpenLink(m.href, m.title)`
- [x] 7.3 In `src/config/chapters.js`, add `type: "link"` media entries per chapter from `links.txt`:
  - **Intro**: `{ type:"link", href:"https://claude.com/", title:"Claude" }`, `{ type:"link", href:"https://arena.ai/", title:"LLM Arena" }`
  - **Chap2**: `{ type:"link", href:"https://gemini.google.com/app", title:"Google Gemini" }`, `{ type:"link", href:"https://z.ai", title:"GLM 5.1" }`, `{ type:"link", href:"https://www.deepseek.com/en/", title:"DeepSeek" }`, `{ type:"link", href:"https://www.minimax.io/", title:"MiniMax" }`, `{ type:"link", href:"https://arena.ai/", title:"LLM Arena" }`
  - **Chap3**: `{ type:"link", href:"https://claude.com/product/claude-code", title:"Claude Code" }`, `{ type:"link", href:"https://geminicli.com/", title:"Gemini CLI" }`
  - **Chap4**: `{ type:"link", href:"https://stitch.withgoogle.com/", title:"Google Stitch" }`, `{ type:"link", href:"https://runwayml.com/", title:"Runway" }`
  - **Chap6**: `{ type:"link", href:"https://lmstudio.ai/", title:"LM Studio" }`, `{ type:"link", href:"https://ollama.com/", title:"Ollama" }`
  - **Chap7**: `{ type:"link", href:"https://ollama.com/", title:"Ollama" }`, `{ type:"link", href:"https://lmstudio.ai/", title:"LM Studio" }`, `{ type:"link", href:"https://deepmind.google/models/gemma/gemma-4/", title:"Google Gemma" }`

## 8. Verification

- [ ] 8.1 Open each chapter window and confirm YouTube iframe renders
- [ ] 8.2 Confirm native cursor is not visible anywhere on the page
- [ ] 8.3 Confirm hero images are visibly taller
- [ ] 8.4 Click a link item and confirm a browser window opens in-app
- [ ] 8.5 Confirm browser window is draggable and closeable
- [x] 8.6 Run `npx tsc --noEmit` and resolve any type errors
