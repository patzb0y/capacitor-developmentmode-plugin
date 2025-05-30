// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorDevelopmentmodePlugin",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "CapacitorDevelopmentmodePlugin",
            targets: ["DevelopmentModePlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .target(
            name: "DevelopmentModePlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/DevelopmentModePlugin"),
        .testTarget(
            name: "DevelopmentModePluginTests",
            dependencies: ["DevelopmentModePlugin"],
            path: "ios/Tests/DevelopmentModePluginTests")
    ]
)