import SwiftUI

struct ResultView: View {
    let correctCount: Int
    let totalCount: Int
    @Environment(\.dismiss) private var dismiss

    var percentage: Double {
        guard totalCount > 0 else { return 0 }
        return Double(correctCount) / Double(totalCount) * 100
    }

    var body: some View {
        VStack(spacing: 32) {
            Spacer()

            resultIcon

            resultText

            statsCard

            actionButtons

            Spacer()
        }
        .padding()
    }

    private var resultIcon: some View {
        ZStack {
            Circle()
                .fill(percentage >= 70 ? Color.theme.accent.opacity(0.2) : Color.theme.error.opacity(0.2))
                .frame(width: 120, height: 120)

            Image(systemName: percentage >= 70 ? "star.fill" : "arrow.clockwise")
                .font(.system(size: 50))
                .foregroundColor(percentage >= 70 ? Color.theme.accent : Color.theme.error)
        }
    }

    private var resultText: some View {
        VStack(spacing: 8) {
            Text(percentage >= 70 ? "Great Job!" : "Keep Practicing!")
                .font(.title)
                .fontWeight(.bold)
                .foregroundColor(Color.theme.textPrimary)

            Text(feedbackMessage)
                .font(.body)
                .foregroundColor(Color.theme.textSecondary)
                .multilineTextAlignment(.center)
        }
    }

    private var feedbackMessage: String {
        if percentage == 100 {
            return "Perfect score! You're mastering this topic!"
        } else if percentage >= 70 {
            return "Well done! Keep up the good work!"
        } else if percentage >= 50 {
            return "Good effort! Review the explanations and try again."
        } else {
            return "Don't worry! Practice makes perfect. Try again!"
        }
    }

    private var statsCard: some View {
        HStack(spacing: 24) {
            StatItem(value: "\(correctCount)", label: "Correct", color: Color.theme.accent)
            StatItem(value: "\(totalCount - correctCount)", label: "Wrong", color: Color.theme.error)
            StatItem(value: "\(Int(percentage))%", label: "Score", color: Color.theme.primary)
        }
        .padding()
        .background(Color.theme.cardBackground)
        .cornerRadius(16)
    }

    private var actionButtons: some View {
        VStack(spacing: 12) {
            Button {
                dismiss()
            } label: {
                Text("Continue")
                    .font(.headline)
                    .foregroundColor(.white)
                    .frame(maxWidth: .infinity)
                    .padding()
                    .background(Color.theme.primary)
                    .cornerRadius(12)
            }
        }
    }
}

struct StatItem: View {
    let value: String
    let label: String
    let color: Color

    var body: some View {
        VStack(spacing: 4) {
            Text(value)
                .font(.title2)
                .fontWeight(.bold)
                .foregroundColor(color)

            Text(label)
                .font(.caption)
                .foregroundColor(Color.theme.textSecondary)
        }
    }
}

#Preview {
    ResultView(correctCount: 7, totalCount: 10)
}
