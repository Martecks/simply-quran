import Foundation

struct Question: Identifiable, Codable {
    let id: String
    let type: QuestionType
    let category: QuestionCategory
    let difficulty: QuestionDifficulty
    let questionText: String
    let options: [String]
    let correctAnswer: String
    let explanation: String
    let hint: String?

    var correctIndex: Int {
        options.firstIndex(of: correctAnswer) ?? 0
    }
}

enum QuestionType: String, Codable, CaseIterable {
    case multipleChoice = "Multiple Choice"
    case fillInBlank = "Fill in the Blank"
    case sentenceReorder = "Sentence Reorder"
    case trueFalse = "True/False"
}

enum QuestionCategory: String, Codable, CaseIterable {
    case vocabulary = "Vocabulary"
    case grammar = "Grammar"
    case reading = "Reading"
    case listening = "Listening"
    case pronunciation = "Pronunciation"

    var displayName: String {
        rawValue
    }
}

enum QuestionDifficulty: String, Codable, CaseIterable {
    case easy = "Easy"
    case medium = "Medium"
    case hard = "Hard"

    var value: Int {
        switch self {
        case .easy: return 1
        case .medium: return 2
        case .hard: return 3
        }
    }
}
