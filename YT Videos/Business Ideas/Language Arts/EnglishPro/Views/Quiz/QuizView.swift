import SwiftUI

struct QuizView: View {
    @StateObject private var viewModel = QuizViewModel()
    var questionIds: [String] = []
    var isAdaptive: Bool = false
    @Environment(\.dismiss) private var dismiss

    var body: some View {
        NavigationStack {
            ZStack {
                Color.theme.background.ignoresSafeArea()

                if viewModel.isQuizComplete {
                    ResultView(
                        correctCount: viewModel.questionEngine.correctCount,
                        totalCount: viewModel.questionEngine.totalQuestions
                    )
                } else if let question = viewModel.questionEngine.currentQuestion {
                    QuestionView(
                        question: question,
                        selectedAnswer: $viewModel.selectedAnswer,
                        showFeedback: viewModel.showFeedback,
                        isCorrect: viewModel.isCorrect,
                        currentIndex: viewModel.questionEngine.answeredCount,
                        totalQuestions: viewModel.questionEngine.totalQuestions,
                        onSubmit: {
                            viewModel.submitAnswer()
                        },
                        onNext: {
                            viewModel.nextQuestion()
                        },
                        correctAnswer: viewModel.getCorrectAnswer(),
                        explanation: viewModel.getExplanation()
                    )
                } else {
                    ProgressView()
                        .onAppear {
                            if isAdaptive {
                                viewModel.startAdaptiveQuiz()
                            } else {
                                viewModel.startQuiz(with: questionIds)
                            }
                        }
                }
            }
            .navigationTitle(isAdaptive ? "Adaptive Quiz" : "Quiz")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .navigationBarLeading) {
                    Button("Close") {
                        dismiss()
                    }
                }
            }
        }
    }
}

#Preview {
    QuizView(questionIds: ["v1", "v2", "g1"])
}
