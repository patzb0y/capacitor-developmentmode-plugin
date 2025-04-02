// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorDevelopmentmodePlugin",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "CapacitorDevelopmentmodePlugin",
            targets: ["developmentmodepluginPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .target(
            name: "developmentmodepluginPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/developmentmodepluginPlugin"),
        .testTarget(
            name: "developmentmodepluginPluginTests",
            dependencies: ["developmentmodepluginPlugin"],
            path: "ios/Tests/developmentmodepluginPluginTests")
    ]
)