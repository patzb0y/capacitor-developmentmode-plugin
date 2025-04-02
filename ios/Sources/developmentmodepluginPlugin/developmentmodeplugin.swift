import Foundation

@objc public class developmentmodeplugin: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
