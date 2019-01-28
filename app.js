var window = UIWindow.new()
window.frame = UIScreen.mainScreen().bounds
window.backgroundColor = UIColor.whiteColor()

var navigationController = UINavigationController.new()
var viewController = UIViewController.new()
viewController.navigationItem.title = 'Make UI with JavaScript'

var view = UIView.new()
view.backgroundColor = UIColor.redColor()
view.frame = {x: 20, y: 80, width: 280, height: 80}

var label = UILabel.new()
label.backgroundColor = UIColor.blueColor()
label.textColor = UIColor.whiteColor()
label.text = 'Hello World.'
label.font = UIFont.boldSystemFontOfSize(24)
label.sizeToFit()

var frame = label.frame
frame.x = 10
frame.y = 10
label.frame = frame

view.addSubview(label)
viewController.view.addSubview(view)

navigationController.viewControllers = [viewController]

window.rootViewController = navigationController
window.makeKeyAndVisible()
