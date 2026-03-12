import SwiftUI

struct QuestionView: View {
    let question: Question
    @Binding var selectedAnswer: String?
    let showFeedback: Bool
    let isCorrect: Bool
    let currentIndex: Int
    let totalQuestions: Int
    let onSubmit: () -> Void
    let onNext: () -> Void
    let correctAnswer: String
    let explanation: String

    var body: some View {
        VStack(spacing: 24) {
            progressHeader

            ScrollView {
                VStack(spacing: 24) {
                    questionCard
                    optionsGrid
                    if showFeedback {
                        feedbackCard
                    }
                }
                .padding()
            }

            actionButton
        }
    }

    private var progressHeader: some View {
        VStack(spacing: 8) {
            ProgressView(value: Double(currentIndex), total: Double(totalQuestions))
                .tint(Color.theme.primary)

            HStack {
                Text("Question \(currentIndex + 1) of \(totalQuestions)")
                    .font(.caption)
                    .foregroundColor(Color.theme.textSecondary)

                Spacer()

                Text(question.category.displayName)
                    .font(.caption)
                    .padding(.horizontal, 8)
                    .padding(.vertical, 4)
                    .background(Color.theme.secondary.opacity(0.1))
                    .foregroundColor(Color.theme.secondary)
                    .cornerRadius(8)
            }
        }
        .padding()
    }

    private var questionCard: some View {
        VStack(alignment: .leading, spacing: 12) {
            Text(question.type.rawValue)
                .font(.caption)
                .foregroundColor(Color.theme.primary)

            Text(question.questionText)
                .font(.title3)
                .fontWeight(.semibold)
                .foregroundColor(Color.theme.textPrimary)
                .multilineTextAlignment(.leading)

            if let hint = question.hint, !showFeedback {
                HStack {
                    Image(systemName: "lightbulb.fill")
                        .foregroundColor(Color.theme.warning)
                    Text(hint)
                        .font(.caption)
                        .foregroundColor(Color.theme.textSecondary)
                }
                .padding()
                .frame(maxWidth: .infinity, alignment: .leading)
                .background(Color.theme.warning.opacity(0.1))
                .cornerRadius(8)
            }
        }
        .padding()
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(Color.theme.cardBackground)
        .cornerRadius(16)
    }

    private var optionsGrid: some View {
        VStack(spacing: 12) {
            ForEach(question.options, id: \.self) { option in
                OptionButton(
                    text: option,
                    isSelected: selectedAnswer == option,
                    isCorrect: showFeedback && option == correctAnswer,
                    isIncorrect: showFeedback && selectedAnswer == option && !isCorrect,
                    showFeedback: showFeedback,
                    action: {
                        if !showFeedback {
                            selectedAnswer = option
                        }
                    }
                )
            }
        }
    }

    private var feedbackCard: some View {
        FeedbackView(
            isCorrect: isCorrect,
            correctAnswer: correctAnswer,
            explanation: explanation
        )
    }

    private var actionButton: some View {
        Button {
            if showFeedback {
                onNext()
            } else {
                onSubmit()
            }
        } label: {
            Text(showFeedback ? "Next Question" : "Check Answer")
                .font(.headline)
                .foregroundColor(.white)
                .frame(maxWidth: .infinity)
                .padding()
                .background(selectedAnswer == nil ? Color.gray : Color.theme.primary)
                .cornerRadius(12)
        }
        .disabled(selectedAnswer == nil && !showFeedback)
        .padding()
    }
}

struct OptionButton: View {
    let text: String
    let isSelected: Bool
    let isCorrect: Bool
    let isIncorrect: Bool
    let showFeedback: Bool
    let action: () -> Void

    var body: some View {
        Button(action: action) {
            HStack {
                Text(text)
                    .font(.body)
                    .foregroundColor(textColor)
                    .multilineTextAlignment(.leading)

                Spacer()

                if isCorrect {
                    Image(systemName: "checkmark.circle.fill")
                        .foregroundColor(Color.theme.accent)
                } else if isIncorrect {
                    Image(systemName: "xmark.circle.fill")
                        .foregroundColor(Color.theme.error)
                }
            }
            .padding()
            .background(backgroundColor)
            .cornerRadius(12)
            .overlay(
                RoundedRectangle(cornerRadius: 12)
                    .stroke(borderColor, lineWidth: 2)
            )
        }
        .disabled(showFeedback)
    }

    private var textColor: Color {
        if showFeedback {
            if isCorrect { return Color.theme.accent }
            if isIncorrect { return Color.theme.error }
        }
        return Color.theme.textPrimary
    }

    private var backgroundColor: Color {
        if isSelected {
            return Color.theme.primary.opacity(0.1)
        }
        if showFeedback && isCorrect {
            return Color.theme.accent.opacity(0.1)
        }
        if showFeedback && isIncorrect {
            return Color.theme.error.opacity(0.1)
        }
        return Color.theme.cardBackground
    }

    private var borderColor: Color {
        if isSelected {
            return Color.theme.primary
        }
        if isCorrect {
            return Color.theme.accent
        }
        if isIncorrect {
            return Color.theme.error
        }
        return Color.clear
    }
}
