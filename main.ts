input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showNumber(0)
    schritte = 0
})
input.onGesture(Gesture.Shake, function () {
    schritte += 1
    basic.showNumber(schritte)
})
let schritte = 0
schritte = 0
basic.showNumber(schritte)
