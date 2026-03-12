import Foundation

struct Course: Identifiable, Codable {
    let id: String
    let title: String
    let description: String
    let icon: String
    let level: CourseLevel
    var lessons: [Lesson]
    var isLocked: Bool

    var totalLessons: Int {
        lessons.count
    }

    var completedLessons: Int {
        lessons.filter { $0.isCompleted }.count
    }

    var progressPercentage: Double {
        guard totalLessons > 0 else { return 0 }
        return Double(completedLessons) / Double(totalLessons)
    }

    var estimatedMinutes: Int {
        lessons.reduce(0) { $0 + $1.estimatedMinutes }
    }

    enum CodingKeys: String, CodingKey {
        case id, title, description, icon, level, lessons, isLocked
    }
}

enum CourseLevel: String, Codable, CaseIterable {
    case beginner = "Beginner"
    case intermediate = "Intermediate"
    case advanced = "Advanced"

    var color: String {
        switch self {
        case .beginner: return "green"
        case .intermediate: return "orange"
        case .advanced: return "red"
        }
    }
}

struct Lesson: Identifiable, Codable {
    let id: String
    let title: String
    let description: String
    let content: String
    let vocabulary: [VocabularyItem]
    let examples: [String]
    var isCompleted: Bool
    var isLocked: Bool
    var quizQuestions: [String]
    let estimatedMinutes: Int

    var status: LessonStatus {
        if isCompleted {
            return .completed
        } else if isLocked {
            return .locked
        } else {
            return .inProgress
        }
    }
}

enum LessonStatus: String {
    case completed = "Completed"
    case inProgress = "In Progress"
    case locked = "Locked"
}

struct VocabularyItem: Identifiable, Codable {
    let id: String
    let word: String
    let definition: String
    let example: String
}
