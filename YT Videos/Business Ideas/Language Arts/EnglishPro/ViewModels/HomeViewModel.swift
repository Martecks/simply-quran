import Foundation

class HomeViewModel: ObservableObject {
    @Published var courses: [Course] = []
    @Published var isLoading: Bool = false

    private let progressService = ProgressService.shared

    init() {
        loadCourses()
    }

    func loadCourses() {
        isLoading = true
        courses = CourseDataProvider.allCourses
        isLoading = false
    }

    func getProgress() -> UserProgress {
        progressService.progress
    }

    func refreshCourses() {
        loadCourses()
    }
}

struct CourseDataProvider {
    static let allCourses: [Course] = [
        Course(
            id: "beginner1",
            title: "Beginner English 1",
            description: "Learn basic vocabulary, greetings, colors, and numbers",
            icon: "book.fill",
            level: .beginner,
            lessons: [
                Lesson(
                    id: "b1l1",
                    title: "Greetings",
                    description: "Learn common greetings",
                    content: "Greetings are the first step in any conversation. Common greetings include: Hello, Hi, Good morning, Good afternoon, Good evening, and Goodbye.",
                    vocabulary: [
                        VocabularyItem(id: "v1", word: "Hello", definition: "A common greeting", example: "Hello, how are you?"),
                        VocabularyItem(id: "v2", word: "Goodbye", definition: "A farewell greeting", example: "Goodbye, see you tomorrow!"),
                        VocabularyItem(id: "v3", word: "Morning", definition: "The period from sunrise to noon", example: "Good morning!")
                    ],
                    examples: ["Hello, how are you?", "Good morning!", "Nice to meet you!"],
                    isCompleted: false,
                    isLocked: false,
                    quizQuestions: ["v1", "v2", "g1", "g2", "v3"],
                    estimatedMinutes: 10
                ),
                Lesson(
                    id: "b1l2",
                    title: "Numbers 1-20",
                    description: "Counting in English",
                    content: "Numbers are essential for everyday communication. Learn to count from 1 to 20.",
                    vocabulary: [
                        VocabularyItem(id: "v4", word: "One", definition: "1", example: "I have one apple"),
                        VocabularyItem(id: "v5", word: "Two", definition: "2", example: "Two plus two is four")
                    ],
                    examples: ["One, two, three, four, five", "I have two cats"],
                    isCompleted: false,
                    isLocked: false,
                    quizQuestions: ["v4", "v5", "g3", "v1", "v2"],
                    estimatedMinutes: 15
                ),
                Lesson(
                    id: "b1l3",
                    title: "Colors",
                    description: "Basic color vocabulary",
                    content: "Colors help us describe the world around us. Learn the basic colors in English.",
                    vocabulary: [
                        VocabularyItem(id: "v6", word: "Red", definition: "A warm color", example: "The apple is red"),
                        VocabularyItem(id: "v7", word: "Blue", definition: "The color of the sky", example: "The sky is blue")
                    ],
                    examples: ["The car is red", "I like blue color"],
                    isCompleted: false,
                    isLocked: false,
                    quizQuestions: ["v6", "v7", "g4", "v1", "g2"],
                    estimatedMinutes: 12
                ),
                Lesson(
                    id: "b1l4",
                    title: "Family Members",
                    description: "Learn vocabulary for family",
                    content: "Family is important. Learn how to name different family members.",
                    vocabulary: [
                        VocabularyItem(id: "v8", word: "Mother", definition: "Female parent", example: "My mother is kind"),
                        VocabularyItem(id: "v9", word: "Father", definition: "Male parent", example: "My father works hard")
                    ],
                    examples: ["This is my mother", "My father and mother"],
                    isCompleted: false,
                    isLocked: false,
                    quizQuestions: ["v8", "v9", "g5", "v3", "g1"],
                    estimatedMinutes: 15
                ),
                Lesson(
                    id: "b1l5",
                    title: "Food & Drinks",
                    description: "Basic food vocabulary",
                    content: "Learn names of common foods and drinks.",
                    vocabulary: [
                        VocabularyItem(id: "v10", word: "Apple", definition: "A fruit", example: "An apple a day"),
                        VocabularyItem(id: "v11", word: "Water", definition: "A drink", example: "I drink water")
                    ],
                    examples: ["I eat an apple", "Water is good for you"],
                    isCompleted: false,
                    isLocked: false,
                    quizQuestions: ["v10", "v11", "g6", "v2", "g3"],
                    estimatedMinutes: 12
                )
            ],
            isLocked: false
        ),
        Course(
            id: "beginner2",
            title: "Beginner English 2",
            description: "Daily routines, clothing, and places",
            icon: "book.fill",
            level: .beginner,
            lessons: [
                Lesson(
                    id: "b2l1",
                    title: "Daily Routines",
                    description: "Describe your day",
                    content: "Learn to describe what you do every day.",
                    vocabulary: [
                        VocabularyItem(id: "v12", word: "Wake up", definition: "Stop sleeping", example: "I wake up at 7am")
                    ],
                    examples: ["I wake up early", "She goes to work"],
                    isCompleted: false,
                    isLocked: false,
                    quizQuestions: ["v12", "g7", "v1", "g2", "v3"],
                    estimatedMinutes: 15
                ),
                Lesson(
                    id: "b2l2",
                    title: "Clothing",
                    description: "Types of clothes",
                    content: "Learn vocabulary for different types of clothing.",
                    vocabulary: [
                        VocabularyItem(id: "v13", word: "Shirt", definition: "A top garment", example: "I wear a blue shirt")
                    ],
                    examples: ["This shirt is nice", "I need new shoes"],
                    isCompleted: false,
                    isLocked: false,
                    quizQuestions: ["v13", "g8", "v4", "g4", "v5"],
                    estimatedMinutes: 12
                ),
                Lesson(
                    id: "b2l3",
                    title: "Places in Town",
                    description: "Common places",
                    content: "Learn to name and describe places in your town.",
                    vocabulary: [
                        VocabularyItem(id: "v14", word: "Store", definition: "Where you buy things", example: "I go to the store")
                    ],
                    examples: ["The store is closed", "There is a park"],
                    isCompleted: false,
                    isLocked: false,
                    quizQuestions: ["v14", "g9", "v6", "g5", "v7"],
                    estimatedMinutes: 15
                )
            ],
            isLocked: false
        ),
        Course(
            id: "intermediate1",
            title: "Intermediate Grammar",
            description: "Past tense, adjectives, and prepositions",
            icon: "book.fill",
            level: .intermediate,
            lessons: [
                Lesson(
                    id: "i1l1",
                    title: "Past Continuous",
                    description: "Actions in progress in the past",
                    content: "Learn to describe actions that were happening at a specific time in the past.",
                    vocabulary: [
                        VocabularyItem(id: "v15", word: "Was/Were + ing", definition: "Past continuous form", example: "I was sleeping")
                    ],
                    examples: ["I was reading a book", "They were playing"],
                    isCompleted: false,
                    isLocked: false,
                    quizQuestions: ["v15", "g10", "r1", "g11", "v8"],
                    estimatedMinutes: 20
                ),
                Lesson(
                    id: "i1l2",
                    title: "Comparatives & Superlatives",
                    description: "Comparing things",
                    content: "Learn how to compare using comparative and superlative forms.",
                    vocabulary: [
                        VocabularyItem(id: "v16", word: "Taller", definition: "More tall", example: "He is taller than me")
                    ],
                    examples: ["This is the best day", "She is more beautiful"],
                    isCompleted: false,
                    isLocked: false,
                    quizQuestions: ["v16", "g11", "v9", "g12", "v10"],
                    estimatedMinutes: 18
                ),
                Lesson(
                    id: "i1l3",
                    title: "Prepositions of Time",
                    description: "At, on, in",
                    content: "Learn when to use at, on, and in for time expressions.",
                    vocabulary: [
                        VocabularyItem(id: "v17", word: "At", definition: "Specific time", example: "At 3 o'clock")
                    ],
                    examples: ["At noon", "On Monday", "In the morning"],
                    isCompleted: false,
                    isLocked: false,
                    quizQuestions: ["v17", "g12", "r2", "g13", "v11"],
                    estimatedMinutes: 15
                )
            ],
            isLocked: false
        ),
        Course(
            id: "intermediate2",
            title: "Advanced Vocabulary",
            description: "Complex words and expressions",
            icon: "book.fill",
            level: .intermediate,
            lessons: [
                Lesson(
                    id: "i2l1",
                    title: "Idioms",
                    description: "Common English expressions",
                    content: "Learn popular English idioms and their meanings.",
                    vocabulary: [
                        VocabularyItem(id: "v18", word: "Break a leg", definition: "Good luck", example: "Break a leg!")
                    ],
                    examples: ["Break a leg!", "It's raining cats and dogs"],
                    isCompleted: false,
                    isLocked: false,
                    quizQuestions: ["v18", "g13", "v12", "g14", "v13"],
                    estimatedMinutes: 20
                ),
                Lesson(
                    id: "i2l2",
                    title: "Phrasal Verbs",
                    description: "Verb + particle combinations",
                    content: "Learn common phrasal verbs used in everyday English.",
                    vocabulary: [
                        VocabularyItem(id: "v19", word: "Give up", definition: "Stop trying", example: "Don't give up!")
                    ],
                    examples: ["I give up", "She picked up the phone"],
                    isCompleted: false,
                    isLocked: false,
                    quizQuestions: ["v19", "g14", "v14", "r3", "v15"],
                    estimatedMinutes: 25
                )
            ],
            isLocked: false
        )
    ]
}
