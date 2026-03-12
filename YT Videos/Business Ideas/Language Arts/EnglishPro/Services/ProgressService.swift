import Foundation

class ProgressService: ObservableObject {
    static let shared = ProgressService()

    @Published var progress: UserProgress {
        didSet {
            saveProgress()
        }
    }

    private let userDefaultsKey = "userProgress"

    private init() {
        if let data = UserDefaults.standard.data(forKey: userDefaultsKey),
           let savedProgress = try? JSONDecoder().decode(UserProgress.self, from: data) {
            self.progress = savedProgress
        } else {
            self.progress = .initial
        }
    }

    private func saveProgress() {
        if let data = try? JSONEncoder().encode(progress) {
            UserDefaults.standard.set(data, forKey: userDefaultsKey)
        }
    }

    func recordAnswer(questionId: String, category: QuestionCategory, isCorrect: Bool) {
        progress.recordAnswer(questionId: questionId, category: category, isCorrect: isCorrect)
    }

    func completeLesson(courseId: String, lessonId: String, minutes: Int) {
        progress.completeLesson(courseId: courseId, lessonId: lessonId, minutes: minutes)
    }

    func completeCourse(courseId: String) {
        progress.completeCourse(courseId: courseId)
    }

    func resetProgress() {
        progress = .initial
    }
}
