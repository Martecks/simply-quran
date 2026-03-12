import Foundation

class AdaptiveLearningService: ObservableObject {
    static let shared = AdaptiveLearningService()

    private let progressService = ProgressService.shared

    private init() {}

    func getRecommendedCategories() -> [QuestionCategory] {
        let mistakes = progressService.progress.categoryMistakes

        let sorted = mistakes.sorted { $0.value > $1.value }

        return sorted
            .filter { $0.value >= 2 }
            .prefix(3)
            .compactMap { QuestionCategory(rawValue: $0.key) }
    }

    func generateFollowUpQuestion(for category: QuestionCategory) -> Question? {
        let categoryQuestions = QuestionBank.allQuestions.filter { $0.category == category }

        let difficulty = determineDifficulty(for: category)

        return categoryQuestions
            .filter { $0.difficulty == difficulty }
            .randomElement()
    }

    private func determineDifficulty(for category: QuestionCategory) -> QuestionDifficulty {
        let mistakeCount = progressService.progress.categoryMistakes[category.rawValue] ?? 0

        if mistakeCount >= 5 {
            return .easy
        } else if mistakeCount >= 3 {
            return .easy
        } else {
            return .medium
        }
    }

    func shouldPrioritizeCategory(_ category: QuestionCategory) -> Bool {
        let mistakeCount = progressService.progress.categoryMistakes[category.rawValue] ?? 0
        return mistakeCount >= 3
    }

    func adaptiveQuizCount() -> Int {
        let totalAnswered = progressService.progress.totalQuestionsAnswered

        if totalAnswered < 20 {
            return 5
        } else if totalAnswered < 50 {
            return 8
        } else {
            return 10
        }
    }
}
