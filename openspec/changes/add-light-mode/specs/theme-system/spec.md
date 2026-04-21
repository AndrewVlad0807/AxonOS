## ADDED Requirements

### Requirement: Theme CSS Variables
The system SHALL define CSS custom properties for both light and dark themes using `data-theme` attribute on the root HTML element.

#### Scenario: Light theme colors applied
- **WHEN** `data-theme="light"` is set on `<html>`
- **THEN** `--void`, `--carbon`, `--obsidian` shall use warm off-white values (#FAFAF9, #F5F5F4, #E7E5E4)
- **AND** `--text-primary` shall be #1C1917
- **AND** `--text-secondary` shall be #78716C

#### Scenario: Dark theme colors applied
- **WHEN** `data-theme="dark"` is set on `<html>` or no attribute
- **THEN** `--void`, `--carbon`, `--obsidian` shall use deep black values (#030308, #0a0a10, #12121a)
- **AND** `--text-primary` shall be #ffffff
- **AND** `--text-secondary` shall be rgba(255,255,255,0.6)

### Requirement: Theme State Management
The AppContext SHALL manage theme state with 'dark' as the default value.

#### Scenario: Initial theme load
- **WHEN** application loads
- **THEN** theme shall default to 'dark' if localStorage has no saved preference
- **AND** `data-theme="dark"` shall be set on `<html>`

#### Scenario: Theme persistence
- **WHEN** user changes theme to 'light'
- **THEN** theme preference shall be saved to localStorage key `axon-os-theme`
- **AND** on page reload, saved theme shall be restored
