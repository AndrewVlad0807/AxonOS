## Why

AxonOS currently only supports a dark theme, which limits its appeal for users who prefer or require light interfaces for extended use, accessibility needs, or aesthetic preferences. Adding a light mode option will improve user experience and make the interface more versatile across different environments and use cases.

## What Changes

- Add a light mode theme option alongside the existing dark theme
- Implement a theme toggle in the Settings menu
- Create a complete light color palette with warm, OLED-friendly surfaces
- Add theme persistence using localStorage
- Apply light mode consistently across all UI components:
  - Desktop icons and grid
  - Taskbar
  - Window frames
  - Background atmosphere
  - All glass/blur surfaces

## Capabilities

### New Capabilities

- `theme-system`: Core theming infrastructure with CSS custom properties, theme context, and persistence
- `light-mode`: Complete light theme palette with warm off-white surfaces and adjusted accent colors
- `theme-toggle`: UI control in Settings to switch between light and dark modes

### Modified Capabilities

<!-- No existing spec requirements being modified -->

## Impact

- **CSS**: New CSS variables for light mode colors, updated glass/blur styles
- **Tailwind Config**: Theme extension with light mode color palette
- **Components**: Desktop, DesktopIcon, Taskbar, WindowFrame, AtmosphereBackground
- **Settings**: New theme toggle UI
- **Context**: AppContext will manage theme state
- **Storage**: localStorage for theme preference persistence
