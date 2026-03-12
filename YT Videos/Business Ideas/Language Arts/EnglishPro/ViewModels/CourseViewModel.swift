import Foundation

class CourseViewModel: ObservableObject {
    @Published var selectedCourse: Course?
    @Published var currentLessonIndex: Int = 0

    func selectCourse(_ course: Course) {
        selectedCourse = course
        if let index = course.lessons.firstIndex(where: { !$0.isLocked }) {
            currentLessonIndex = index
        }
    }

    func currentLesson() -> Lesson? {
        guard let course = selectedCourse,
              currentLessonIndex < course.lessons.count else { return nil }
        return course.lessons[currentLessonIndex]
    }

    func completeCurrentLesson() {
        guard var course = selectedCourse else { return }
        course.lessons[currentLessonIndex].isCompleted = true
        if currentLessonIndex + 1 < course.lessons.count {
            course.lessons[currentLessonIndex + 1].isLocked = false
        }
        selectedCourse = course
    }

    func nextLesson() -> Bool {
        guard let course = selectedCourse else { return false }
        if currentLessonIndex + 1 < course.lessons.count {
            currentLessonIndex += 1
            return true
        }
        return false
    }

    func hasNextLesson() -> Bool {
        guard let course = selectedCourse else { return false }
        return currentLessonIndex + 1 < course.lessons.count
    }
}
