input.onButtonPressed(Button.A, function () {
    if (x > 0) {
        led.plot(x, y)
        led.unplot(x, y)
        x += -1
        led.plot(x, y)
    }
})
input.onButtonPressed(Button.B, function () {
    if (x < 4) {
        led.plot(x, y)
        led.unplot(x, y)
        x += 1
        led.plot(x, y)
    }
})
function Lumiere () {
	
}
let y = 0
let x = 0
x = 0
y = 0
led.plot(x, y)
basic.forever(function () {
    while (x < 4) {
        basic.pause(1000)
        led.unplot(x, y)
        x += 1
        led.plot(x, y)
    }
    while (x > 0) {
        basic.pause(1000)
        led.unplot(x, y)
        x += -1
        led.plot(x, y)
    }
})
