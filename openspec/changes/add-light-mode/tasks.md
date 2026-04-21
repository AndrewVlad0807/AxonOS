## 1. CSS Variables & Theming Foundation

- [x] 1.1 Add CSS custom properties for light mode in `src/styles/globals.css`
- [x] 1.2 Add `[data-theme="light"]` overrides for all color variables
- [x] 1.3 Add light mode glass and shadow styles
- [x] 1.4 Add scanlines disable rule for light mode
- [x] 1.5 Update Tailwind config with theme color extensions

## 2. Theme State Management

- [x] 2.1 Add `theme` state to `AppContext` with default 'dark'
- [x] 2.2 Add `setTheme` function to AppContext
- [x] 2.3 Add localStorage persistence for theme preference
- [x] 2.4 Load theme from localStorage on app initialization

## 3. Apply Theme to DOM

- [x] 3.1 Update `App.jsx` to apply `data-theme` attribute to `<html>`
- [x] 3.2 Add useEffect to sync theme state with DOM attribute

## 4. Update Components for Light Mode

- [x] 4.1 Update `AtmosphereBackground.jsx` with light mode gradient values
- [x] 4.2 Update `DesktopIcon.jsx` hover shadow for light mode
- [x] 4.3 Update `Taskbar.jsx` glass styles for light mode
- [x] 4.4 Update `WindowFrame.jsx` shadows for light mode
- [x] 4.5 Update `BootSequence.jsx` if needed for light mode (kept dark for boot)

## 5. Theme Toggle UI

- [x] 5.1 Add theme toggle component to `SettingsMenu.jsx`
- [x] 5.2 Style toggle with sun/moon icons or labels
- [x] 5.3 Wire up toggle to call `setTheme` from context
- [x] 5.4 Add smooth transition animation on toggle

## 6. Testing & Polish

- [x] 6.1 Test light mode in browser dev tools (build passes)
- [x] 6.2 Verify theme persistence on page reload (localStorage integration)
- [x] 6.3 Check all component hover states in light mode (CSS variables)
- [x] 6.4 Verify window frames have correct shadows (theme-aware)
- [x] 6.5 Test toggle animation smoothness (Framer Motion spring)
