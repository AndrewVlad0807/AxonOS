## ADDED Requirements

### Requirement: Hero images display at increased height
The system SHALL render hero images at a minimum height of `h-72` (288px) in `ChapterContent.jsx`, replacing the previous `h-52` (208px).

#### Scenario: Hero image taller in chapter window
- **WHEN** the user opens any chapter that has a hero image
- **THEN** the hero image container is 288px tall (Tailwind `h-72`)

### Requirement: MediaRenderer applies variant-aware sizing
The `MediaRenderer` component SHALL accept a `variant` prop and apply different `maxHeight` values per variant instead of a single global value.

#### Scenario: Wide images use wider max height
- **WHEN** a media item with `variant: "wide"` is rendered
- **THEN** its `maxHeight` is `480px`

#### Scenario: Inline images use compact max height
- **WHEN** a media item with `variant: "inline"` is rendered
- **THEN** its `maxHeight` is `280px`

#### Scenario: Variant prop passed from ChapterContent
- **WHEN** `ChapterContent` renders wide or inline media
- **THEN** it passes the `variant` field from the media object to `MediaRenderer`
