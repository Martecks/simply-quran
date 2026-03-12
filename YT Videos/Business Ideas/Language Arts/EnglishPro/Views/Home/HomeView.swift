import SwiftUI

struct HomeView: View {
    @StateObject private var viewModel = HomeViewModel()
    @State private var selectedCourse: Course?
    @State private var showAdaptiveQuiz = false

    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(alignment: .leading, spacing: 24) {
                    welcomeSection
                    
                    adaptiveSection
                    
                    coursesSection
                }
                .padding()
            }
            .background(Color.theme.background)
            .navigationTitle("EnglishPro")
            .navigationDestination(item: $selectedCourse) { course in
                CourseDetailView(course: course)
            }
        }
    }

    private var welcomeSection: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("Welcome back!")
                .font(.title2)
                .fontWeight(.bold)
                .foregroundColor(Color.theme.textPrimary)

            Text("Continue your English learning journey")
                .font(.subheadline)
                .foregroundColor(Color.theme.textSecondary)
        }
    }

    private var adaptiveSection: some View {
        VStack(alignment: .leading, spacing: 12) {
            Text("Practice Weak Areas")
                .font(.headline)
                .foregroundColor(Color.theme.textPrimary)

            Button {
                showAdaptiveQuiz = true
            } label: {
                HStack {
                    Image(systemName: "brain.head.profile")
                        .font(.title2)
                    VStack(alignment: .leading) {
                        Text("Adaptive Quiz")
                            .font(.headline)
                        Text("Focus on your weak areas")
                            .font(.caption)
                    }
                    Spacer()
                    Image(systemName: "chevron.right")
                }
                .foregroundColor(.white)
                .padding()
                .background(
                    LinearGradient(
                        colors: [Color.theme.secondary, Color.theme.primary],
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
                .cornerRadius(16)
            }
            .sheet(isPresented: $showAdaptiveQuiz) {
                QuizView(isAdaptive: true)
            }
        }
    }

    private var coursesSection: some View {
        VStack(alignment: .leading, spacing: 16) {
            Text("Your Courses")
                .font(.headline)
                .foregroundColor(Color.theme.textPrimary)

            LazyVStack(spacing: 12) {
                ForEach(viewModel.courses) { course in
                    CourseCardView(course: course)
                        .onTapGesture {
                            selectedCourse = course
                        }
                }
            }
        }
    }
}

#Preview {
    HomeView()
}
