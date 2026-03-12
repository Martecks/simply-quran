import SwiftUI

struct ProgressView: View {
    @StateObject private var viewModel = ProgressViewModel()

    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(spacing: 24) {
                    statsSection
                    weakAreasSection
                }
                .padding()
            }
            .background(Color.theme.background)
            .navigationTitle("Progress")
            .onAppear {
                viewModel.refresh()
            }
        }
    }

    private var statsSection: some View {
        VStack(alignment: .leading, spacing: 16) {
            Text("Your Statistics")
                .font(.headline)
                .foregroundColor(Color.theme.textPrimary)

            LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible())], spacing: 16) {
                StatCard(
                    icon: "checkmark.circle.fill",
                    value: "\(viewModel.progress.correctAnswers)",
                    label: "Correct",
                    color: Color.theme.accent
                )

                StatCard(
                    icon: "xmark.circle.fill",
                    value: "\(viewModel.progress.incorrectAnswers)",
                    label: "Incorrect",
                    color: Color.theme.error
                )

                StatCard(
                    icon: "book.fill",
                    value: "\(viewModel.lessonsCompleted)",
                    label: "Lessons",
                    color: Color.theme.primary
                )

                StatCard(
                    icon: "flame.fill",
                    value: "\(viewModel.streak)",
                    label: "Day Streak",
                    color: Color.theme.warning
                )
            }

            accuracyCard
        }
    }

    private var accuracyCard: some View {
        HStack {
            ProgressRingView(progress: viewModel.progress.accuracyPercentage / 100, size: 80)
                .padding(.trailing, 16)

            VStack(alignment: .leading, spacing: 4) {
                Text("Overall Accuracy")
                    .font(.headline)
                    .foregroundColor(Color.theme.textPrimary)

                Text("\(viewModel.accuracyPercentage)%")
                    .font(.title)
                    .fontWeight(.bold)
                    .foregroundColor(Color.theme.primary)

                Text("\(viewModel.progress.totalQuestionsAnswered) questions answered")
                    .font(.caption)
                    .foregroundColor(Color.theme.textSecondary)
            }

            Spacer()
        }
        .padding()
        .background(Color.theme.cardBackground)
        .cornerRadius(16)
    }

    private var weakAreasSection: some View {
        VStack(alignment: .leading, spacing: 16) {
            Text("Areas to Improve")
                .font(.headline)
                .foregroundColor(Color.theme.textPrimary)

            if viewModel.weakAreas.isEmpty {
                Text("No weak areas yet! Keep practicing.")
                    .font(.body)
                    .foregroundColor(Color.theme.textSecondary)
                    .padding()
                    .frame(maxWidth: .infinity)
                    .background(Color.theme.cardBackground)
                    .cornerRadius(12)
            } else {
                ForEach(viewModel.weakAreas, id: \.category) { area in
                    WeakAreaCard(category: area.category, mistakeCount: area.count)
                }
            }
        }
    }
}

struct StatCard: View {
    let icon: String
    let value: String
    let label: String
    let color: Color

    var body: some View {
        VStack(spacing: 8) {
            Image(systemName: icon)
                .font(.title)
                .foregroundColor(color)

            Text(value)
                .font(.title2)
                .fontWeight(.bold)
                .foregroundColor(Color.theme.textPrimary)

            Text(label)
                .font(.caption)
                .foregroundColor(Color.theme.textSecondary)
        }
        .frame(maxWidth: .infinity)
        .padding()
        .background(Color.theme.cardBackground)
        .cornerRadius(12)
    }
}

struct WeakAreaCard: View {
    let category: String
    let mistakeCount: Int

    var body: some View {
        HStack {
            Image(systemName: "exclamationmark.triangle.fill")
                .foregroundColor(Color.theme.warning)

            VStack(alignment: .leading, spacing: 2) {
                Text(category)
                    .font(.subheadline)
                    .fontWeight(.medium)
                    .foregroundColor(Color.theme.textPrimary)

                Text("\(mistakeCount) mistakes")
                    .font(.caption)
                    .foregroundColor(Color.theme.textSecondary)
            }

            Spacer()

            Image(systemName: "chevron.right")
                .foregroundColor(Color.theme.textSecondary)
        }
        .padding()
        .background(Color.theme.cardBackground)
        .cornerRadius(12)
    }
}

#Preview {
    ProgressView()
}
