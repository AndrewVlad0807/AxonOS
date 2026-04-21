## ADDED Requirements

### Requirement: Theme Toggle UI
The system SHALL provide a toggle control in the Settings menu to switch between light and dark themes.

#### Scenario: Theme toggle visibility
- **WHEN** Settings menu is open
- **THEN** a theme toggle control SHALL be visible
- **AND** it SHALL display current theme state

#### Scenario: Toggle interaction
- **WHEN** user clicks theme toggle
- **THEN** theme SHALL switch to the opposite value (dark→light or light→dark)
- **AND** `data-theme` attribute SHALL be updated on `<html>`
- **AND** preference SHALL be saved to localStorage

### Requirement: Theme Toggle Visual Design
The theme toggle SHALL have clear visual indication of current theme.

#### Scenario: Toggle appearance for dark mode
- **WHEN** current theme is 'dark'
- **THEN** toggle SHALL show dark mode as selected/active
- **AND** may show sun icon or "Dark" label

#### Scenario: Toggle appearance for light mode
- **WHEN** current theme is 'light'
- **THEN** toggle SHALL show light mode as selected/active
- **AND** may show moon icon or "Light" label

### Requirement: Toggle Animation
The theme toggle SHALL animate smoothly during theme transitions.

#### Scenario: Smooth theme switch
- **WHEN** user toggles theme
- **THEN** transition SHALL use 300ms duration
- **AND** SHALL use ease-out-expo timing function
