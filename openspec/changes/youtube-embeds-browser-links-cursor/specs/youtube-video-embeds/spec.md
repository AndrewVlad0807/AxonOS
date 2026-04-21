## ADDED Requirements

### Requirement: YouTube video IDs populated in chapters config
The system SHALL have all `videoId` fields in `src/config/chapters.js` set to non-empty strings corresponding to the YouTube video IDs extracted from the `.url` shortcut files in `public/assets/`.

#### Scenario: Video embeds render in Intro chapter
- **WHEN** the user opens the Intro chapter window
- **THEN** a YouTube iframe for video `Ii99RU3mOJM` is visible in the chapter content

#### Scenario: Video embeds render in Chap2
- **WHEN** the user opens the Chapter 2 (models.db) window
- **THEN** a YouTube iframe for video `y27m5gYREGE` is visible

#### Scenario: Video embeds render in Chap3
- **WHEN** the user opens the Chapter 3 (agents.cli) window
- **THEN** a YouTube iframe for video `7fQcsPOm8ys` is visible

#### Scenario: Video embeds render in Chap4 (two videos)
- **WHEN** the user opens the Chapter 4 (creative.lab) window
- **THEN** YouTube iframes for videos `qkKzGx8qoI4` and `AwKSrJFvdps` are both visible

#### Scenario: Video embeds render in Chap6
- **WHEN** the user opens the Chapter 6 (privacy.log) window
- **THEN** a YouTube iframe for video `ZUDcPATcTz4` is visible

#### Scenario: Video embeds render in Chap7
- **WHEN** the user opens the Chapter 7 (local-ai.run) window
- **THEN** a YouTube iframe for video `_UEvlmNx0cs` is visible

#### Scenario: No video shown for empty videoId
- **WHEN** a chapter media item has `videoId: ""`
- **THEN** no iframe is rendered for that item (existing filter behavior is preserved)
