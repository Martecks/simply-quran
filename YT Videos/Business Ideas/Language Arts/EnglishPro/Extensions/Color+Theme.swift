import SwiftUI

extension Color {
    static let theme = ThemeColors()
}

struct ThemeColors {
    let primary = Color(hex: "4A90D9")
    let secondary = Color(hex: "6C5CE7")
    let accent = Color(hex: "00CEC9")
    let error = Color(hex: "FF6B6B")
    let warning = Color(hex: "FDCB6E")
    let background = Color(hex: "F8F9FA")
    let cardBackground = Color.white
    let textPrimary = Color(hex: "2D3436")
    let textSecondary = Color(hex: "636E72")
}

extension Color {
    init(hex: String) {
        let hex = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted)
        var int: UInt64 = 0
        Scanner(string: hex).scanHexInt64(&int)
        let a, r, g, b: UInt64
        switch hex.count {
        case 3:
            (a, r, g, b) = (255, (int >> 8) * 17, (int >> 4 & 0xF) * 17, (int & 0xF) * 17)
        case 6:
            (a, r, g, b) = (255, int >> 16, int >> 8 & 0xFF, int & 0xFF)
        case 8:
            (a, r, g, b) = (int >> 24, int >> 16 & 0xFF, int >> 8 & 0xFF, int & 0xFF)
        default:
            (a, r, g, b) = (255, 0, 0, 0)
        }
        self.init(
            .sRGB,
            red: Double(r) / 255,
            green: Double(g) / 255,
            blue: Double(b) / 255,
            opacity: Double(a) / 255
        )
    }
}
