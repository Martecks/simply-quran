import Foundation

class QuestionEngine: ObservableObject {
    static let shared = QuestionEngine()

    @Published var questions: [Question] = []
    @Published var currentQuestionIndex: Int = 0
    @Published var answeredQuestions: [(question: Question, userAnswer: String, isCorrect: Bool)] = []

    var currentQuestion: Question? {
        guard currentQuestionIndex < questions.count else { return nil }
        return questions[currentQuestionIndex]
    }

    var hasMoreQuestions: Bool {
        currentQuestionIndex < questions.count
    }

    var totalQuestions: Int {
        questions.count
    }

    var answeredCount: Int {
        answeredQuestions.count
    }

    var correctCount: Int {
        answeredQuestions.filter { $0.isCorrect }.count
    }

    var currentProgress: Double {
        guard totalQuestions > 0 else { return 0 }
        return Double(answeredCount) / Double(totalQuestions)
    }

    private init() {
        loadQuestions()
    }

    private func loadQuestions() {
        questions = QuestionBank.allQuestions
    }

    func startQuiz(with questionIds: [String]) {
        questions = questionIds.compactMap { id in
            QuestionBank.allQuestions.first { $0.id == id }
        }
        if questions.isEmpty {
            questions = QuestionBank.allQuestions.shuffled().prefix(10).map { $0 }
        }
        currentQuestionIndex = 0
        answeredQuestions = []
    }

    func startAdaptiveQuiz(userProgress: UserProgress, count: Int = 10) {
        var quizQuestions: [Question] = []

        let weakCategories = userProgress.categoryMistakes
            .filter { $0.value >= 2 }
            .sorted { $0.value > $1.value }
            .map { $0.key }

        for categoryName in weakCategories {
            if let category = QuestionCategory(rawValue: categoryName) {
                let categoryQuestions = QuestionBank.allQuestions.filter { $0.category == category }
                quizQuestions.append(contentsOf: categoryQuestions.shuffled().prefix(3))
            }
        }

        let remainingCount = count - quizQuestions.count
        if remainingCount > 0 {
            let otherQuestions = QuestionBank.allQuestions.shuffled().prefix(remainingCount)
            quizQuestions.append(contentsOf: otherQuestions)
        }

        questions = Array(quizQuestions.shuffled().prefix(count))
        currentQuestionIndex = 0
        answeredQuestions = []
    }

    func answerQuestion(_ answer: String) -> Bool {
        guard let question = currentQuestion else { return false }

        let isCorrect = answer.lowercased().trimmingCharacters(in: .whitespaces).lowercased() ==
                        question.correctAnswer.lowercased().trimmingCharacters(in: .whitespaces).lowercased()

        answeredQuestions.append((question: question, userAnswer: answer, isCorrect: isCorrect))
        currentQuestionIndex += 1

        return isCorrect
    }

    func nextQuestion() {
        if currentQuestionIndex < questions.count - 1 {
            currentQuestionIndex += 1
        }
    }

    func reset() {
        currentQuestionIndex = 0
        answeredQuestions = []
    }
}

struct QuestionBank {
    static let allQuestions: [Question] = [
        Question(
            id: "v1",
            type: .multipleChoice,
            category: .vocabulary,
            difficulty: .easy,
            questionText: "What is the opposite of 'hot'?",
            options: ["Cold", "Warm", "Cool", "Boiling"],
            correctAnswer: "Cold",
            explanation: "Cold is the opposite of hot. It describes something with a low temperature.",
            hint: "Think about weather conditions"
        ),
        Question(
            id: "v2",
            type: .multipleChoice,
            category: .vocabulary,
            difficulty: .easy,
            questionText: "Choose the correct word: I _______ to the store yesterday.",
            options: ["go", "went", "going", "gone"],
            correctAnswer: "went",
            explanation: "'Went' is the past tense of 'go'. For actions in the past, we use past tense verbs.",
            hint: "Look for the past tense form"
        ),
        Question(
            id: "g1",
            type: .multipleChoice,
            category: .grammar,
            difficulty: .easy,
            questionText: "Select the correct sentence:",
            options: [
                "She don't like apples",
                "She doesn't likes apples",
                "She doesn't like apples",
                "She not like apples"
            ],
            correctAnswer: "She doesn't like apples",
            explanation: "With third person singular (she/he/it), we use 'doesn't' followed by the base form of the verb.",
            hint: "Remember the rule for third person singular"
        ),
        Question(
            id: "g2",
            type: .multipleChoice,
            category: .grammar,
            difficulty: .easy,
            questionText: "Complete: If I _______ rich, I would buy a yacht.",
            options: ["was", "am", "were", "be"],
            correctAnswer: "were",
            explanation: "In conditional sentences, we use 'were' for unreal conditions, especially with 'if I were'.",
            hint: "This is a second conditional"
        ),
        Question(
            id: "v3",
            type: .multipleChoice,
            category: .vocabulary,
            difficulty: .medium,
            questionText: "What does 'benevolent' mean?",
            options: ["Cruel", "Kind and generous", "Angry", "Sad"],
            correctAnswer: "Kind and generous",
            explanation: "Benevolent means well-meaning and kindly, showing goodwill and generosity.",
            hint: "Think of a similar word starting with 'b'"
        ),
        Question(
            id: "g3",
            type: .multipleChoice,
            category: .grammar,
            difficulty: .medium,
            questionText: "Choose the correct form: Neither the teacher _______ the students were present.",
            options: ["or", "nor", "and", "but"],
            correctAnswer: "nor",
            explanation: "'Neither...nor' is the correct correlative conjunction to connect two negative ideas.",
            hint: "Think of a negative conjunction pair"
        ),
        Question(
            id: "v4",
            type: .multipleChoice,
            category: .vocabulary,
            difficulty: .easy,
            questionText: "What is the plural of 'child'?",
            options: ["Childs", "Childrens", "Children", "Childes"],
            correctAnswer: "Children",
            explanation: "Children is the irregular plural form of child.",
            hint: "This is an irregular plural"
        ),
        Question(
            id: "g4",
            type: .multipleChoice,
            category: .grammar,
            difficulty: .medium,
            questionText: "Complete: By next year, she _______ here for five years.",
            options: ["will work", "will have worked", "will be working", "works"],
            correctAnswer: "will have worked",
            explanation: "We use 'will have worked' for actions that will be completed before a future point in time.",
            hint: "This is future perfect tense"
        ),
        Question(
            id: "r1",
            type: .multipleChoice,
            category: .reading,
            difficulty: .easy,
            questionText: "Read the sentence: 'The cat, who was very hungry, ate all the food.' What type of clause is 'who was very hungry'?",
            options: ["Main clause", "Relative clause", "Noun clause", "Adverb clause"],
            correctAnswer: "Relative clause",
            explanation: "A relative clause provides additional information about a noun using relative pronouns like who, which, that.",
            hint: "It starts with 'who'"
        ),
        Question(
            id: "v5",
            type: .multipleChoice,
            category: .vocabulary,
            difficulty: .medium,
            questionText: "Which word means 'to make something last longer'?",
            options: ["Shorten", "Extend", "Decrease", "Limit"],
            correctAnswer: "Extend",
            explanation: "To extend means to make something longer or last longer in time.",
            hint: "Think of the opposite of shorten"
        ),
        Question(
            id: "g5",
            type: .multipleChoice,
            category: .grammar,
            difficulty: .hard,
            questionText: "Choose the correct sentence:",
            options: [
                "Had I known, I would have come",
                "If I would have known, I would have come",
                "Would have known if I had, I would have come",
                "Known had I, would have come"
            ],
            correctAnswer: "Had I known, I would have come",
            explanation: "This is an inverted conditional sentence. 'Had I known' means 'If I had known'.",
            hint: "This uses subject-auxiliary inversion"
        ),
        Question(
            id: "v6",
            type: .fillInBlank,
            category: .vocabulary,
            difficulty: .easy,
            questionText: "The weather is _______ today. (not hot, not cold)",
            options: ["mild", "extreme", "harsh", "hottest"],
            correctAnswer: "mild",
            explanation: "Mild means moderately warm, not too hot or too cold.",
            hint: "Think of pleasant weather"
        ),
        Question(
            id: "g6",
            type: .fillInBlank,
            category: .grammar,
            difficulty: .easy,
            questionText: "She is _______ than her sister. (pretty in a higher degree)",
            options: ["pretty", "prettier", "more pretty", "most pretty"],
            correctAnswer: "prettier",
            explanation: "For short adjectives, we add -er to form the comparative.",
            hint: "Add -er to the adjective"
        ),
        Question(
            id: "v7",
            type: .fillInBlank,
            category: .vocabulary,
            difficulty: .medium,
            questionText: "His behavior was totally __________.",
            options: ["inappropriate", "appropriate", "suitable", "fitting"],
            correctAnswer: "inappropriate",
            explanation: "Inappropriate means not suitable or proper for the situation.",
            hint: "Think of the opposite of appropriate"
        ),
        Question(
            id: "g7",
            type: .trueFalse,
            category: .grammar,
            difficulty: .easy,
            questionText: "The sentence 'Everyone have gone home' is grammatically correct.",
            options: ["True", "False"],
            correctAnswer: "False",
            explanation: "With 'everyone', we use 'has' (third person singular): 'Everyone has gone home'.",
            hint: "Everyone is singular"
        ),
        Question(
            id: "v8",
            type: .trueFalse,
            category: .vocabulary,
            difficulty: .easy,
            questionText: "'Fluent' means speaking or writing with ease and accuracy.",
            options: ["True", "False"],
            correctAnswer: "True",
            explanation: "Fluent means able to speak or write smoothly, accurately, and with ease.",
            hint: "Think of someone who speaks a language well"
        ),
        Question(
            id: "g8",
            type: .trueFalse,
            category: .grammar,
            difficulty: .medium,
            questionText: "'Few' and 'a few' have the same meaning.",
            options: ["True", "False"],
            correctAnswer: "False",
            explanation: "'Few' means almost none (negative), while 'a few' means some (positive).",
            hint: "The article 'a' makes a difference"
        ),
        Question(
            id: "r2",
            type: .multipleChoice,
            category: .reading,
            difficulty: .medium,
            questionText: "Identify the main idea: The article discusses how climate change affects polar bear populations.",
            options: [
                "Polar bears are cute",
                "Climate change is threatening polar bears",
                "Zoos are important",
                "Bears eat fish"
            ],
            correctAnswer: "Climate change is threatening polar bears",
            explanation: "The main idea is the central point of a passage. Here it's clearly about climate change's impact.",
            hint: "Focus on the cause-effect relationship"
        ),
        Question(
            id: "g9",
            type: .multipleChoice,
            category: .grammar,
            difficulty: .medium,
            questionText: "Which sentence uses the passive voice correctly?",
            options: [
                "The cake baked by her",
                "The cake was baked by her",
                "She baked the cake",
                "Baking the cake by her"
            ],
            correctAnswer: "The cake was baked by her",
            explanation: "In passive voice, the subject receives the action. 'The cake' (subject) 'was baked' (passive verb).",
            hint: "Look for 'be' + past participle"
        ),
        Question(
            id: "v9",
            type: .multipleChoice,
            category: .vocabulary,
            difficulty: .hard,
            questionText: "Which word is a synonym for 'ephemeral'?",
            options: ["Permanent", "Eternal", "Transient", "Lasting"],
            correctAnswer: "Transient",
            explanation: "Ephemeral means lasting for a very short time. Transient has a similar meaning.",
            hint: "Think of something that doesn't last"
        ),
        Question(
            id: "g10",
            type: .multipleChoice,
            category: .grammar,
            difficulty: .hard,
            questionText: "Complete: No sooner _______ arrived than the meeting started.",
            options: ["had he", "he had", "he", "has he"],
            correctAnswer: "had he",
            explanation: "This is an inverted structure. 'No sooner had he arrived' is correct.",
            hint: "Look for inversion after 'no sooner'"
        ),
        Question(
            id: "v10",
            type: .fillInBlank,
            category: .vocabulary,
            difficulty: .easy,
            questionText: "Please __________ the door. (close it)",
            options: ["shut", "close", "both acceptable", "lock"],
            correctAnswer: "both acceptable",
            explanation: "Both 'shut' and 'close' are acceptable synonyms for this context.",
            hint: "Think of synonyms"
        ),
        Question(
            id: "g11",
            type: .multipleChoice,
            category: .grammar,
            difficulty: .easy,
            questionText: "Choose the correct preposition: She arrived _______ Monday morning.",
            options: ["in", "on", "at", "by"],
            correctAnswer: "on",
            explanation: "We use 'on' with days of the week: 'on Monday', 'on Monday morning'.",
            hint: "Days need 'on'"
        ),
        Question(
            id: "g12",
            type: .multipleChoice,
            category: .grammar,
            difficulty: .medium,
            questionText: "Complete: I suggest he _______ the doctor.",
            options: ["see", "sees", "saw", "seeing"],
            correctAnswer: "see",
            explanation: "After 'suggest', we use the base form (bare infinitive) in the subjunctive.",
            hint: "No 'to' needed"
        ),
        Question(
            id: "v11",
            type: .multipleChoice,
            category: .vocabulary,
            difficulty: .medium,
            questionText: "What does 'ambiguous' mean?",
            options: ["Clear", "Confusing", "Having multiple meanings", "Complicated"],
            correctAnswer: "Having multiple meanings",
            explanation: "Ambiguous means open to more than one interpretation; not clear.",
            hint: "Think of something that can be understood in multiple ways"
        ),
        Question(
            id: "g13",
            type: .fillInBlank,
            category: .grammar,
            difficulty: .medium,
            questionText: "I wish I _______ more time.",
            options: ["had", "have", "would have", "will have"],
            correctAnswer: "had",
            explanation: "After 'I wish', we use past tense to express unreal wishes.",
            hint: "This expresses an unreal wish"
        ),
        Question(
            id: "r3",
            type: .trueFalse,
            category: .reading,
            difficulty: .medium,
            questionText: "The main purpose of an expository text is to entertain the reader.",
            options: ["True", "False"],
            correctAnswer: "False",
            explanation: "Expository text aims to inform, explain, or describe something, not entertain.",
            hint: "Think of the purpose of informational writing"
        ),
        Question(
            id: "v12",
            type: .multipleChoice,
            category: .vocabulary,
            difficulty: .easy,
            questionText: "What is the past participle of 'write'?",
            options: ["Wrote", "Written", "Writing", "Writed"],
            correctAnswer: "Written",
            explanation: "Write - wrote - written. These are the base, past tense, and past participle forms.",
            hint: "It's an irregular verb"
        ),
        Question(
            id: "g14",
            type: .multipleChoice,
            category: .grammar,
            difficulty: .easy,
            questionText: "Which sentence has the correct article usage?",
            options: [
                "An honest man",
                "A honest man",
                "The honest man",
                "A umbrella"
            ],
            correctAnswer: "An honest man",
            explanation: "We use 'an' before vowel sounds. 'Honest' starts with a vowel sound despite 'h'.",
            hint: "Sound matters, not spelling"
        ),
        Question(
            id: "v13",
            type: .multipleChoice,
            category: .vocabulary,
            difficulty: .medium,
            questionText: "Choose the correct meaning: 'to take for granted'",
            options: [
                "To appreciate something",
                "To assume something is always there without appreciation",
                "To be grateful",
                "To question something"
            ],
            correctAnswer: "To assume something is always there without appreciation",
            explanation: "To take something for granted means to not appreciate it because it's always there.",
            hint: "It has a negative connotation"
        ),
        Question(
            id: "g15",
            type: .multipleChoice,
            category: .grammar,
            difficulty: .hard,
            questionText: "Select the correct sentence using 'as many as':",
            options: [
                "There are not as many people as I expected",
                "There are not as much people as I expected",
                "There are not as many as I expected",
                "There aren't as many people I expected"
            ],
            correctAnswer: "There are not as many people as I expected",
            explanation: "'As many as' is used with countable nouns. 'People' is countable.",
            hint: "Countable vs uncountable matters"
        ),
        Question(
            id: "p1",
            type: .multipleChoice,
            category: .pronunciation,
            difficulty: .easy,
            questionText: "How is 'through' pronounced?",
            options: ["throo", "thru", "throo", "threw"],
            correctAnswer: "throo",
            explanation: "Through is pronounced /θruː/ - like 'throo'.",
            hint: "Think of the 'oo' sound"
        ),
        Question(
            id: "p2",
            type: .multipleChoice,
            category: .pronunciation,
            difficulty: .easy,
            questionText: "Which word has a different vowel sound?",
            options: ["cat", "hat", "that", "date"],
            correctAnswer: "date",
            explanation: "Cat, hat, and that have /æ/ sound. Date has /eɪ/ sound.",
            hint: "Listen to the vowel sounds"
        ),
        Question(
            id: "v14",
            type: .fillInBlank,
            category: .vocabulary,
            difficulty: .easy,
            questionText: "I need to __________ my homework before dinner.",
            options: ["make", "do", "both acceptable", "have"],
            correctAnswer: "do",
            explanation: "We say 'do homework' (not 'make homework'). This is a collocation.",
            hint: "Think of common verb pairings"
        ),
        Question(
            id: "g16",
            type: .multipleChoice,
            category: .grammar,
            difficulty: .easy,
            questionText: "What is the superlative form of 'good'?",
            options: ["Gooder", "Best", "Better", "Most good"],
            correctAnswer: "Best",
            explanation: "Good - better - best. These are irregular comparative and superlative forms.",
            hint: "It's irregular"
        ),
        Question(
            id: "v15",
            type: .multipleChoice,
            category: .vocabulary,
            difficulty: .medium,
            questionText: "What does 'meticulous' mean?",
            options: ["Careless", "Very careful and precise", "Quick", "Slow"],
            correctAnswer: "Very careful and precise",
            explanation: "Meticulous means showing great attention to detail; very careful.",
            hint: "Think of someone very detail-oriented"
        ),
        Question(
            id: "g17",
            type: .multipleChoice,
            category: .grammar,
            difficulty: .medium,
            questionText: "Choose the correct conjunction: She was tired, _______ she continued working.",
            options: ["but", "however", "so", "because"],
            correctAnswer: "but",
            explanation: "'But' is a coordinating conjunction that shows contrast between two ideas.",
            hint: "Look for contrast"
        ),
        Question(
            id: "r4",
            type: .multipleChoice,
            category: .reading,
            difficulty: .easy,
            questionText: "What type of text is a recipe?",
            options: ["Narrative", "Expository", "Procedural", "Persuasive"],
            correctAnswer: "Procedural",
            explanation: "A recipe is a procedural text that explains how to do something step by step.",
            hint: "It gives instructions"
        ),
        Question(
            id: "v16",
            type: .trueFalse,
            category: .vocabulary,
            difficulty: .easy,
            questionText: "'Their' is a possessive pronoun.",
            options: ["True", "False"],
            correctAnswer: "True",
            explanation: "'Their' shows possession - it belongs to them.",
            hint: "It shows ownership"
        ),
        Question(
            id: "g18",
            type: .fillInBlank,
            category: .grammar,
            difficulty: .easy,
            questionText: "_______ is the capital of France.",
            options: ["Paris", "London", "Berlin", "Madrid"],
            correctAnswer: "Paris",
            explanation: "Paris is the capital of France. This is factual knowledge.",
            hint: "Think of famous cities"
        ),
        Question(
            id: "v17",
            type: .multipleChoice,
            category: .vocabulary,
            difficulty: .hard,
            questionText: "Which word is an antonym of 'verbose'?",
            options: ["Wordy", "Concise", "Long", "Detailed"],
            correctAnswer: "Concise",
            explanation: "Verbose means using more words than needed. Concise means brief and clear.",
            hint: "Opposite of wordy"
        ),
        Question(
            id: "g19",
            type: .multipleChoice,
            category: .grammar,
            difficulty: .medium,
            questionText: "Complete: I'd rather you _______ that.",
            options: ["don't do", "didn't do", "won't do", "don't"],
            correctAnswer: "didn't do",
            explanation: "After 'would rather', we use past tense for present/future unreal situations.",
            hint: "Use past tense in this construction"
        ),
        Question(
            id: "v18",
            type: .multipleChoice,
            category: .vocabulary,
            difficulty: .easy,
            questionText: "What is the comparative form of 'far'?",
            options: ["Farer", "Farther", "Further", "Farthest"],
            correctAnswer: "Farther",
            explanation: "Far - farther/further - farthest/furthest. Both farther and further are acceptable.",
            hint: "It has two comparative forms"
        )
    ]
}
