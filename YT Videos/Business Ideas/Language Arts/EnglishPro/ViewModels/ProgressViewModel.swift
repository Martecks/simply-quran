import Foundation

class ProgressViewModel: ObservableObject {
    @Published var progress: UserProgress

    private let progressService = ProgressService.shared

    init() {
        progress = progressService.progress
    }

    func refresh() {
        progress = progressService.progress
    }

    var accuracyPercentage: Int {
        Int(progress.accuracyPercentage)
    }

    var totalMinutes: Int {
        progress.totalStudyTimeMinutes
    }

    var lessonsCompleted: Int {
        progress.lessonsCompleted
    }

    var streak: Int {
        progress.currentStreak
    }

    var weakAreas: [(category: String, count: Int)] {
        progress.categoryMistakes
            .sorted { $0.value > $1.value }
            .prefix(5)
            .map { ($0.key, $0.value) }
    }
}
