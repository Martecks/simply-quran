import SwiftUI

struct LessonDetailView: View {
    let lesson: Lesson
    let courseId: String
    @State private var showQuiz = false

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 24) {
                contentSection
                vocabularySection
                examplesSection
                quizButton
            }
            .padding()
        }
        .background(Color.theme.background)
        .navigationTitle(lesson.title)
        .navigationBarTitleDisplayMode(.inline)
        .sheet(isPresented: $showQuiz) {
            QuizView(questionIds: lesson.quizQuestions)
        }
    }

    private var contentSection: some View {
        VStack(alignment: .leading, spacing: 12) {
            Label("Learn", systemImage: "book.fill")
                .font(.headline)
                .foregroundColor(Color.theme.primary)

            Text(lesson.content)
                .font(.body)
                .foregroundColor(Color.theme.textPrimary)
                .padding()
                .frame(maxWidth: .infinity, alignment: .leading)
                .background(Color.theme.cardBackground)
                .cornerRadius(12)
        }
    }

    private var vocabularySection: some View {
        VStack(alignment: .leading, spacing: 12) {
            Label("Vocabulary", systemImage: "textformat.abc")
                .font(.headline)
                .foregroundColor(Color.theme.primary)

            ForEach(lesson.vocabulary) { word in
                VocabularyCard(item: word)
            }
        }
    }

    private var examplesSection: some View {
        VStack(alignment: .leading, spacing: 12) {
            Label("Examples", systemImage: "text.quote")
                .font(.headline)
                .foregroundColor(Color.theme.primary)

            ForEach(lesson.examples, id: \.self) { example in
                Text(example)
                    .font(.body)
                    .italic()
                    .foregroundColor(Color.theme.textSecondary)
                    .padding()
                    .frame(maxWidth: .infinity, alignment: .leading)
                    .background(Color.theme.primary.opacity(0.05))
                    .cornerRadius(8)
            }
        }
    }

    private var quizButton: some View {
        Button {
            showQuiz = true
        } label: {
            HStack {
                Image(systemName: "play.circle.fill")
                    .font(.title2)
                Text("Take Quiz")
                    .font(.headline)
            }
            .foregroundColor(.white)
            .frame(maxWidth: .infinity)
            .padding()
            .background(
                LinearGradient(
                    colors: [Color.theme.primary, Color.theme.secondary],
                    startPoint: .leading,
                    endPoint: .trailing
                )
            )
            .cornerRadius(16)
        }
        .padding(.top, 16)
    }
}

struct VocabularyCard: View {
    let item: VocabularyItem

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text(item.word)
                .font(.headline)
                .foregroundColor(Color.theme.textPrimary)

            Text(item.definition)
                .font(.subheadline)
                .foregroundColor(Color.theme.textSecondary)

            Text("\"\(item.example)\"")
                .font(.caption)
                .italic()
                .foregroundColor(Color.theme.primary)
        }
        .padding()
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(Color.theme.cardBackground)
        .cornerRadius(12)
    }
}
