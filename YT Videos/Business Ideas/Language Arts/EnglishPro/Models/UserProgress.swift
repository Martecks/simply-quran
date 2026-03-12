import Foundation

struct UserProgress: Codable {
    var totalQuestionsAnswered: Int
    var correctAnswers: Int
    var incorrectAnswers: Int
    var lessonsCompleted: Int
    var coursesCompleted: [String]
    var categoryMistakes: [String: Int]
    var currentStreak: Int
    var lastStudyDate: Date?
    var totalStudyTimeMinutes: Int
    var achievements: [String]
    var weeklyProgress: [DailyProgress]

    var accuracyPercentage: Double {
        guard totalQuestionsAnswered > 0 else { return 0 }
        return Double(correctAnswers) / Double(totalQuestionsAnswered) * 100
    }

    var weakCategories: [String] {
        categoryMistakes.filter { $0.value >= 3 }.map { $0.key }
    }

    mutating func recordAnswer(questionId: String, category: QuestionCategory, isCorrect: Bool) {
        totalQuestionsAnswered += 1
        if isCorrect {
            correctAnswers += 1
        } else {
            incorrectAnswers += 1
            categoryMistakes[category.rawValue, default: 0] += 1
        }
    }

    mutating func completeLesson(courseId: String, lessonId: String, minutes: Int) {
        lessonsCompleted += 1
        totalStudyTimeMinutes += minutes
        lastStudyDate = Date()
        updateStreak()
    }

    mutating func completeCourse(courseId: String) {
        if !coursesCompleted.contains(courseId) {
            coursesCompleted.append(courseId)
        }
    }

    private mutating func updateStreak() {
        let calendar = Calendar.current
        if let lastDate = lastStudyDate {
            let daysSince = calendar.dateComponents([.day], from: lastDate, to: Date()).day ?? 0
            if daysSince == 1 {
                currentStreak += 1
            } else if daysSince > 1 {
                currentStreak = 1
            }
        } else {
            currentStreak = 1
        }
    }

    static var initial: UserProgress {
        UserProgress(
            totalQuestionsAnswered: 0,
            correctAnswers: 0,
            incorrectAnswers: 0,
            lessonsCompleted: 0,
            coursesCompleted: [],
            categoryMistakes: [:],
            currentStreak: 0,
            lastStudyDate: nil,
            totalStudyTimeMinutes: 0,
            achievements: [],
            weeklyProgress: []
        )
    }
}

struct DailyProgress: Codable {
    let date: Date
    var questionsAnswered: Int
    var correctAnswers: Int
    var minutesStudied: Int
}
