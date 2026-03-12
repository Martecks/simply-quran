import SwiftUI

@main
struct EnglishProApp: App {
    var body: some Scene {
        WindowGroup {
            MainTabView()
        }
    }
}

struct MainTabView: View {
    var body: some View {
        TabView {
            HomeView()
                .tabItem {
                    Label("Learn", systemImage: "house.fill")
                }

            ProgressView()
                .tabItem {
                    Label("Progress", systemImage: "chart.bar.fill")
                }

            SettingsView()
                .tabItem {
                    Label("Settings", systemImage: "gearshape.fill")
                }
        }
        .tint(Color.theme.primary)
    }
}

struct SettingsView: View {
    var body: some View {
        NavigationStack {
            List {
                Section("Account") {
                    LabeledContent("Version", value: "1.0.0")
                }
                
                Section("Data") {
                    Button("Reset Progress") {
                        ProgressService.shared.resetProgress()
                    }
                    .foregroundColor(Color.theme.error)
                }
            }
            .navigationTitle("Settings")
        }
    }
}
