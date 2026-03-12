import SwiftUI

struct CourseDetailView: View {
    let course: Course
    @State private var selectedLesson: Lesson?
    @State private var showQuiz = false
    @State private var lessonForQuiz: Lesson?

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 24) {
                courseHeader
                lessonsList
            }
            .padding()
        }
        .background(Color.theme.background)
        .navigationTitle(course.title)
        .navigationBarTitleDisplayMode(.inline)
        .navigationDestination(item: $selectedLesson) { lesson in
            LessonDetailView(lesson: lesson, courseId: course.id)
        }
    }

    private var courseHeader: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack {
                Image(systemName: course.icon)
                    .font(.largeTitle)
                    .foregroundColor(Color.theme.primary)

                Spacer()

                Text(course.level.rawValue)
                    .font(.caption)
                    .padding(.horizontal, 8)
                    .padding(.vertical, 4)
                    .background(Color.theme.primary.opacity(0.1))
                    .cornerRadius(8)
            }

            Text(course.description)
                .font(.body)
                .foregroundColor(Color.theme.textSecondary)

            HStack {
                Label("\(course.totalLessons) Lessons", systemImage: "book")
                Spacer()
                Label("\(course.estimatedMinutes) min", systemImage: "clock")
            }
            .font(.caption)
            .foregroundColor(Color.theme.textSecondary)

            ProgressView(value: course.progressPercentage)
                .tint(Color.theme.primary)

            Text("\(Int(course.progressPercentage * 100))% Complete")
                .font(.caption)
                .foregroundColor(Color.theme.primary)
        }
        .padding()
        .background(Color.theme.cardBackground)
        .cornerRadius(16)
    }

    private var lessonsList: some View {
        VStack(alignment: .leading, spacing: 12) {
            Text("Lessons")
                .font(.headline)
                .foregroundColor(Color.theme.textPrimary)

            ForEach(Array(course.lessons.enumerated()), id: \.element.id) { index, lesson in
                LessonRowView(lesson: lesson, index: index + 1)
                    .onTapGesture {
                        if !lesson.isLocked {
                            selectedLesson = lesson
                        }
                    }
                    .opacity(lesson.isLocked ? 0.5 : 1)
            }
        }
    }
}

struct LessonRowView: View {
    let lesson: Lesson
    let index: Int

    var body: some View {
        HStack {
            ZStack {
                Circle()
                    .fill(lesson.isCompleted ? Color.theme.accent : Color.theme.primary.opacity(0.1))
                    .frame(width: 40, height: 40)

                if lesson.isCompleted {
                    Image(systemName: "checkmark")
                        .foregroundColor(.white)
                        .font(.caption)
                } else {
                    Text("\(index)")
                        .font(.caption)
                        .fontWeight(.semibold)
                        .foregroundColor(Color.theme.primary)
                }
            }

            VStack(alignment: .leading, spacing: 2) {
                Text(lesson.title)
                    .font(.subheadline)
                    .fontWeight(.medium)
                    .foregroundColor(Color.theme.textPrimary)

                Text("\(lesson.estimatedMinutes) min")
                    .font(.caption)
                    .foregroundColor(Color.theme.textSecondary)
            }

            Spacer()

            if lesson.isLocked {
                Image(systemName: "lock.fill")
                    .foregroundColor(Color.theme.textSecondary)
            } else {
                Image(systemName: "chevron.right")
                    .foregroundColor(Color.theme.textSecondary)
            }
        }
        .padding()
        .background(Color.theme.cardBackground)
        .cornerRadius(12)
    }
}
