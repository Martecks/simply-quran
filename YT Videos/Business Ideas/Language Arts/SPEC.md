# EnglishPro - Interactive English Learning App

## 1. Project Overview

- **Project Name**: EnglishPro
- **Bundle Identifier**: com.englishpro.app
- **Core Functionality**: An adaptive English language learning app where users progress through structured courses, answer questions, receive immediate feedback on mistakes, and get personalized follow-up questions based on their learning gaps.
- **Target Users**: English language learners (beginner to intermediate)
- **iOS Version Support**: iOS 16.0+

## 2. UI/UX Specification

### Screen Structure

1. **HomeScreen** - Main dashboard showing courses and progress
2. **CourseListScreen** - List of available courses
3. **LessonListScreen** - Lessons within a selected course
4. **LessonScreen** - Content and practice for a lesson
5. **QuizScreen** - Interactive quiz with adaptive questions
6. **ResultScreen** - Shows results after quiz completion
7. **ProgressScreen** - User's learning statistics

### Navigation Structure
- **TabView** with 3 tabs:
  - Home (courses)
  - Progress (statistics)
  - Settings

### Visual Design

#### Color Palette
- **Primary**: #4A90D9 (Blue - trust, learning)
- **Secondary**: #6C5CE7 (Purple - creativity)
- **Accent**: #00CEC9 (Teal - success)
- **Error**: #FF6B6B (Coral - mistakes)
- **Warning**: #FDCB6E (Yellow - caution)
- **Background**: #F8F9FA (Light gray)
- **Card Background**: #FFFFFF (White)
- **Text Primary**: #2D3436 (Dark gray)
- **Text Secondary**: #636E72 (Medium gray)

#### Typography
- **Title Large**: System Bold, 34pt
- **Title**: System Bold, 28pt
- **Headline**: System Semibold, 20pt
- **Body**: System Regular, 17pt
- **Caption**: System Regular, 14pt

#### Spacing System (8pt grid)
- **XS**: 4pt
- **SM**: 8pt
- **MD**: 16pt
- **LG**: 24pt
- **XL**: 32pt
- **XXL**: 48pt

### Views & Components

#### CourseCard
- Course icon/image
- Course title
- Progress bar (percentage)
- Lesson count
- Estimated time

#### LessonCard
- Lesson number
- Lesson title
- Completion status (locked, in-progress, completed)
- Duration

#### QuestionCard
- Question text
- Multiple choice options (4)
- Hint button (optional)
- Submit button

#### FeedbackView
- Correct: Green checkmark with explanation
- Incorrect: Red X with correct answer and explanation
- Animated transition

#### ProgressRing
- Circular progress indicator
- Percentage in center
- Animated fill

## 3. Functionality Specification

### Core Features

#### Course System (Priority: High)
- Pre-defined courses:
  - **Beginner 1**: Basic vocabulary, greetings, colors, numbers
  - **Beginner 2**: Daily routines, family, food
  - **Intermediate 1**: Past tense, adjectives, prepositions
- Each course has 5-10 lessons
- Sequential lesson unlocking (complete lesson to unlock next)

#### Lesson Content (Priority: High)
- Introduction text explaining the topic
- Example sentences
- Key vocabulary list
- Practice exercises
- Mini-quiz (5 questions)

#### Question Engine (Priority: High)
Question types supported:
1. **Multiple Choice** - Select correct answer from 4 options
2. **Fill in the Blank** - Type the correct word
3. **Sentence Reordering** - Arrange words to form sentence
4. **True/False** - Determine if statement is correct

#### Adaptive Learning System (Priority: High)
- Track incorrect answers by category (grammar, vocabulary, etc.)
- When user makes mistake:
  1. Show correct answer immediately
  2. Provide explanation
  3. Add to "weak areas" for that user
- Generate follow-up questions:
  - After 3+ mistakes in a category, prioritize that category
  - Questions adapt to difficulty level based on performance
  - Spaced repetition - revisit weak areas periodically

#### Progress Tracking (Priority: Medium)
- Lessons completed
- Questions answered correctly/incorrectly
- Time spent learning
- Streak (consecutive days)
- Weak areas identified

### User Interactions
- Tap to select answer
- Swipe to next question
- Pull to refresh course list
- Tap to reveal hint
- Tap to see explanation

### Data Handling
- **Local Storage**: UserDefaults for progress, SQLite for questions
- **Question Bank**: Pre-loaded JSON with 500+ questions
- **Progress**: Persisted locally

### Architecture Pattern
- **MVVM** (Model-View-ViewModel)
- SwiftUI for UI
- Combine for reactive updates

### Edge Cases & Error Handling
- Empty states for no courses/progress
- Network-independent (fully offline)
- Handle incomplete quiz (save progress)

## 4. Technical Specification

### Dependencies (Swift Package Manager)
- None required (using native SwiftUI)

### UI Framework
- **SwiftUI** (iOS 16+)

### Asset Requirements

#### SF Symbols Used
- house.fill (Home tab)
- chart.bar.fill (Progress tab)
- gearshape.fill (Settings tab)
- checkmark.circle.fill (Correct)
- xmark.circle.fill (Incorrect)
- book.fill (Course)
- play.circle.fill (Lesson)
- arrow.right (Next)
- lightbulb.fill (Hint)
- star.fill (Achievement)

#### Colors (Asset Catalog)
- All colors defined in Color Assets

### File Structure
```
EnglishPro/
├── App/
│   └── EnglishProApp.swift
├── Models/
│   ├── Course.swift
│   ├── Lesson.swift
│   ├── Question.swift
│   └── UserProgress.swift
├── ViewModels/
│   ├── HomeViewModel.swift
│   ├── CourseViewModel.swift
│   ├── QuizViewModel.swift
│   └── ProgressViewModel.swift
├── Views/
│   ├── Home/
│   │   ├── HomeView.swift
│   │   └── CourseCardView.swift
│   ├── Course/
│   │   ├── CourseListView.swift
│   │   └── LessonListView.swift
│   ├── Quiz/
│   │   ├── QuizView.swift
│   │   ├── QuestionView.swift
│   │   └── ResultView.swift
│   ├── Progress/
│   │   └── ProgressView.swift
│   └── Components/
│       ├── ProgressRingView.swift
│       └── FeedbackView.swift
├── Services/
│   ├── QuestionEngine.swift
│   ├── AdaptiveLearningService.swift
│   └── ProgressService.swift
├── Resources/
│   └── Questions.json
└── Extensions/
    └── Color+Theme.swift
```
