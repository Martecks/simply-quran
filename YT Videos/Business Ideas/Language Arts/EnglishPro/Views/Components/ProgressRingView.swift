import SwiftUI

struct ProgressRingView: View {
    let progress: Double
    var size: CGFloat = 100
    var lineWidth: CGFloat = 10

    var body: some View {
        ZStack {
            Circle()
                .stroke(
                    Color.theme.primary.opacity(0.2),
                    lineWidth: lineWidth
                )

            Circle()
                .trim(from: 0, to: progress)
                .stroke(
                    Color.theme.primary,
                    style: StrokeStyle(
                        lineWidth: lineWidth,
                        lineCap: .round
                    )
                )
                .rotationEffect(.degrees(-90))
                .animation(.easeInOut(duration: 0.5), value: progress)

            Text("\(Int(progress * 100))%")
                .font(.system(size: size / 4, weight: .bold))
                .foregroundColor(Color.theme.primary)
        }
        .frame(width: size, height: size)
    }
}

#Preview {
    ProgressRingView(progress: 0.75)
        .padding()
}
