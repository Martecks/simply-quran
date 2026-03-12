import SwiftUI

struct FeedbackView: View {
    let isCorrect: Bool
    let correctAnswer: String
    let explanation: String

    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack {
                Image(systemName: isCorrect ? "checkmark.circle.fill" : "xmark.circle.fill")
                    .font(.title2)
                    .foregroundColor(isCorrect ? Color.theme.accent : Color.theme.error)

                Text(isCorrect ? "Correct!" : "Incorrect")
                    .font(.headline)
                    .foregroundColor(isCorrect ? Color.theme.accent : Color.theme.error)
            }

            if !isCorrect {
                VStack(alignment: .leading, spacing: 4) {
                    Text("Correct Answer:")
                        .font(.caption)
                        .foregroundColor(Color.theme.textSecondary)

                    Text(correctAnswer)
                        .font(.body)
                        .fontWeight(.medium)
                        .foregroundColor(Color.theme.accent)
                }
            }

            VStack(alignment: .leading, spacing: 4) {
                Text("Explanation:")
                    .font(.caption)
                    .foregroundColor(Color.theme.textSecondary)

                Text(explanation)
                    .font(.body)
                    .foregroundColor(Color.theme.textPrimary)
            }
        }
        .padding()
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(isCorrect ? Color.theme.accent.opacity(0.1) : Color.theme.error.opacity(0.1))
        .cornerRadius(12)
        .overlay(
            RoundedRectangle(cornerRadius: 12)
                .stroke(isCorrect ? Color.theme.accent.opacity(0.3) : Color.theme.error.opacity(0.3), lineWidth: 1)
        )
        .transition(.scale.combined(with: .opacity))
        .animation(.spring(response: 0.3), value: isCorrect)
    }
}

#Preview {
    VStack(spacing: 16) {
        FeedbackView(
            isCorrect: true,
            correctAnswer: "Cold",
            explanation: "Cold is the opposite of hot. It describes something with a low temperature."
        )

        FeedbackView(
            isCorrect: false,
            correctAnswer: "Cold",
            explanation: "Cold is the opposite of hot. It describes something with a low temperature."
        )
    }
    .padding()
}
