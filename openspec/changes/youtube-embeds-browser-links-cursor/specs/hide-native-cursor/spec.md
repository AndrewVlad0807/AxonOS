## ADDED Requirements

### Requirement: Native OS cursor hidden on the page
The system SHALL hide the native browser/OS cursor for all elements on the page so that only the custom CursorGlow cursor is visible while the user's pointer is within the browser viewport.

#### Scenario: Native cursor not visible on desktop
- **WHEN** the user moves the mouse over any part of the AxonOS desktop
- **THEN** the native arrow cursor is not visible; only the cyan CursorGlow dot and ring are shown

#### Scenario: Native cursor not visible over windows
- **WHEN** the user moves the mouse over an open chapter window or browser window
- **THEN** the native cursor remains hidden

#### Scenario: Native cursor not visible over interactive elements
- **WHEN** the user hovers over a button, link, or draggable element
- **THEN** the custom cursor is the only visible pointer (no default pointer/hand cursor from the OS)

#### Scenario: Implementation via CSS
- **WHEN** the global CSS is applied
- **THEN** `cursor: none` (with `!important`) is set on all elements via a universal selector or `html, body` rule in `globals.css`
