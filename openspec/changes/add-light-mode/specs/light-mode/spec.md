## ADDED Requirements

### Requirement: Light Mode Surface Colors
The system SHALL use warm off-white surfaces in light mode that provide comfortable viewing.

#### Scenario: Background surfaces
- **WHEN** light mode is active
- **THEN** primary background shall be #FAFAF9 (Stone 50)
- **AND** secondary surfaces shall be #F5F5F4 (Stone 100)
- **AND** card backgrounds shall be #E7E5E4 (Stone 200)

### Requirement: Light Mode Shadows
The system SHALL use subtle, diffuse shadows appropriate for light backgrounds instead of glows.

#### Scenario: Glass panel shadows in light mode
- **WHEN** light mode is active
- **THEN** glass panels shall use `0 20px 60px rgba(0,0,0,0.06)` shadow
- **AND** window shadows shall use `0 12px 40px rgba(0,0,0,0.04)` shadow
- **AND** icon hover shall use `0 8px 30px rgba(0,0,0,0.08)` shadow

### Requirement: Light Mode Borders
The system SHALL use subtle dark borders instead of light borders.

#### Scenario: Border colors in light mode
- **WHEN** light mode is active
- **THEN** default borders shall be rgba(0,0,0,0.08)
- **AND** strong borders shall be rgba(0,0,0,0.15)

### Requirement: Light Mode Typography
The system SHALL use dark text colors for optimal readability.

#### Scenario: Text colors in light mode
- **WHEN** light mode is active
- **THEN** primary text shall be #1C1917 (Stone 900)
- **AND** secondary text shall be #78716C (Stone 500)
- **AND** muted text shall be #A8A29E (Stone 400)

### Requirement: Light Mode Scanlines
The scanline overlay SHALL be hidden in light mode.

#### Scenario: Scanlines disabled in light mode
- **WHEN** light mode is active
- **THEN** `.scanlines::before` shall have `display: none`

### Requirement: Light Mode Atmosphere
The system SHALL use subtle gradient orbs appropriate for light backgrounds.

#### Scenario: Background gradients in light mode
- **WHEN** light mode is active
- **THEN** gradient orbs shall have opacity reduced to 0.04-0.06
- **AND** use rgba(0,229,255,0.04) for cyan accents
- **AND** use rgba(155,93,229,0.03) for violet accents
