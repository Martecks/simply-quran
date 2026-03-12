import SwiftUI

struct CourseCardView: View {
    let course: Course

    var body: some View {
        HStack(spacing: 16) {
            Image(systemName: course.icon)
                .font(.title)
                .foregroundColor(Color.theme.primary)
                .frame(width: 50, height: 50)
                .background(Color.theme.primary.opacity(0.1))
                .cornerRadius(12)

            VStack(alignment: .leading, spacing: 4) {
                Text(course.title)
                    .font(.headline)
                    .foregroundColor(Color.theme.textPrimary)

                Text("\(course.completedLessons)/\(course.totalLessons) lessons")
                    .font(.caption)
                    .foregroundColor(Color.theme.textSecondary)

                ProgressView(value: course.progressPercentage)
                    .tint(Color.theme.primary)
            }

            Spacer()

            VStack {
                Text("\(Int(course.progressPercentage * 100))%")
                    .font(.caption)
                    .fontWeight(.semibold)
                    .foregroundColor(Color.theme.primary)
            }
        }
        .padding()
        .background(Color.theme.cardBackground)
        .cornerRadius(16)
        .shadow(color: Color.black.opacity(0.05), radius: 8, x: 0, y: 2)
    }
}

#Preview {
    CourseCardView(course: CourseDataProvider.allCourses[0])
        .padding()
}
