## ADDED Requirements

### Requirement: BrowserWindow component renders URL in draggable window
The system SHALL provide a `BrowserWindow` component that renders a given URL inside an `<iframe>` within a draggable, resizable desktop window using the same glass styling as chapter windows.

#### Scenario: BrowserWindow opens with correct URL
- **WHEN** `openBrowser(url, title)` is called in the window manager
- **THEN** a new draggable window appears on the desktop with an iframe loading that URL

#### Scenario: BrowserWindow can be closed
- **WHEN** the user clicks the red traffic-light button on a BrowserWindow
- **THEN** the window is removed from the desktop

#### Scenario: Multiple browser windows can be open simultaneously
- **WHEN** `openBrowser` is called multiple times with different URLs
- **THEN** each URL opens as a separate, independently draggable window

### Requirement: useWindowManager exposes browser window actions
The `useWindowManager` hook SHALL expose `browserWindows` state array, `openBrowser(url, title)` action, and `closeBrowser(id)` action.

#### Scenario: openBrowser adds entry to browserWindows
- **WHEN** `openBrowser("https://example.com", "Example")` is called
- **THEN** `browserWindows` contains a new entry with a unique id, the given url, and title

#### Scenario: closeBrowser removes entry from browserWindows
- **WHEN** `closeBrowser(id)` is called with a valid id
- **THEN** that entry is removed from `browserWindows`

### Requirement: Chapter content link-type media opens in-app browser
The system SHALL support a `type: "link"` media item in chapters.js that renders as a clickable button. Clicking it SHALL call `onOpenLink(url, title)` to open a BrowserWindow.

#### Scenario: Link item renders as button in chapter
- **WHEN** a chapter has a media item with `type: "link"` and an `href` field
- **THEN** a styled clickable button with the item's title is shown in the chapter content

#### Scenario: Clicking link opens in-app browser window
- **WHEN** the user clicks a link-type media button in a chapter
- **THEN** a BrowserWindow opens with the item's `href` URL
