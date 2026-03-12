# Quran Project Content Guidelines

To ensure a premium and consistent experience across the "Simply Quran" platform, all content creators and developers must adhere to these standards. This document serves as the single source of truth for content.

## 1. Terminology: "Chapter" vs "Surah"
- **Mandatory Rule**: Use the word **"Chapter"** instead of "Surah" in all English descriptions, titles, and FAQ answers.
- **Arabic Context**: Always keep the Arabic name (e.g., "سُورَةُ") or the transliterated name in Arabic contexts (e.g., "Surah Muhammad") when referring to the chapter's formal name in metadata or headers if paired with Arabic text. However, in prose and explanations, use "Chapter." 
- **Rationale**: To make the project accessible and polished for an English-speaking audience.

## 2. FAQ Development Standards
- **Quantity**: Aim for **3 to 7 FAQs** per chapter. Quality is prioritized over quantity; do not add "fluff" FAQs.
- **Answer Length**: Every answer must be between **3 and 6 sentences** long.
- **Formatting**:
    - Use **short, digestible paragraphs** (ideally 1-3 sentences per paragraph).
    - Use double newlines (`\n\n`) to separate paragraphs for mobile readability.
    - DO NOT use em-dashes (`—`). Use commas, colons, or parentheses.
- **Content Tone**: Educational, "WOW" insights, and high-impact theological explanations. Avoid generic summaries.
- **Reading Level**: Strict **7th to 8th grade reading level**. Use clear, conversational language. Avoid overly complex vocabulary (e.g., use "law" instead of "jurisprudence", "understand" instead of "comprehend"). Write so a 12-14 year old can easily grasp deep concepts.

## 3. Standardized Categories
All FAQ sections must be assigned to one of the following categories. Refer to `src/pages/SurahPage.jsx` for visual styles.

| Category | Description |
| :--- | :--- |
| **Theology** | Divine attributes, oneness of God, the nature of revelation. |
| **Guidance** | Practical advice, personal development, ethics. |
| **Stories** | Lessons from prophets, historical events, parables. |
| **Warning** | Accountabilty, judgment day, consequences of actions. |
| **Beliefs** | Pillars of faith, unseen reality, afterlife. |
| **Character** | Integrity, patience, gratitude, internal state of the heart. |
| **Rules** / **Law** | Legal injunctions, social contracts (prefer "Rules" for UX consistency). |

> [!NOTE] 
> The application uses "Rules" in the modern UI, but "Law" is accepted in legacy contexts. For new updates, prioritize **Rules**.

## 4. Premium Facts
- **Quantity**: Exactly **5 premium facts** per chapter.
- **High Impact**: Each fact should be a "golden nugget" of information.
- **Icons**: Use relevant keywords such as: `star`, `shield`, `moon`, `eye`, `book`, `ruler`, `conversation`.

## 5. Metadata and Layout
- **Verse Coverage**: Subsection `verseRange` fields must collectively cover 100% of the chapter's verses.
- **Casing**: Use Sentence case for headings and titles (e.g., "The landscape of eternity").
- **Consistency**: Ensure all property names match the established React component structure (e.g., `meta`, `sections`, `subsections`, `faq`, `facts`).
