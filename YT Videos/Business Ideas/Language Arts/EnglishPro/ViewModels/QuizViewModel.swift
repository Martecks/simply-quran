import Foundation

class QuizViewModel: ObservableObject {
    @Published var questionEngine: QuestionEngine
    @Published var selectedAnswer: String?
    @Published var showFeedback: Bool = false
    @Published var isCorrect: Bool = false
    @Published var isQuizComplete: Bool = false

    private let progressService = ProgressService.shared
    private var adaptiveMode: Bool = false

    init() {
        questionEngine = QuestionEngine.shared
    }

    func startQuiz(with questionIds: [String]) {
        adaptiveMode = false
        questionEngine.startQuiz(with: questionIds)
        resetState()
    }

    func startAdaptiveQuiz() {
        adaptiveMode = true
        let count = AdaptiveLearningService.shared.adaptiveQuizCount()
        questionEngine.startAdaptiveQuiz(userProgress: progressService.progress, count: count)
        resetState()
    }

    private func resetState() {
        selectedAnswer = nil
        showFeedback = false
        isCorrect = false
        isQuizComplete = false
    }

    func selectAnswer(_ answer: String) {
        selectedAnswer = answer
    }

    func submitAnswer() {
        guard let answer = selectedAnswer,
              let question = questionEngine.currentQuestion else { return }

        isCorrect = questionEngine.answerQuestion(answer)
        progressService.recordAnswer(questionId: question.id, category: question.category, isCorrect: isCorrect)

        showFeedback = true
    }

    func nextQuestion() {
        showFeedback = false
        selectedAnswer = nil

        if !questionEngine.hasMoreQuestions {
            isQuizComplete = true
        }
    }

    func getCorrectAnswer() -> String {
        questionEngine.currentQuestion?.correctAnswer ?? ""
    }

    func getExplanation() -> String {
        questionEngine.currentQuestion?.explanation ?? ""
    }

    func getWeakCategoryFollowUp() -> Question? {
        let categories = AdaptiveLearningService.shared.getRecommendedCategories()
        guard let category = categories.first else { return nil }
        return AdaptiveLearningService.shared.generateFollowUpQuestion(for: category)
    }

    func reset() {
        questionEngine.reset()
        resetState()
    }
}
