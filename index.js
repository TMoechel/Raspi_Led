var rpio = require('rpio');

/*
 * Set the initial state to low.  The state is set prior to the pin
 * being actived, so is safe for devices which require a stable setup.
 */
rpio.open(5, rpio.OUTPUT, rpio.LOW);

//run the blinkLED function every 250ms
var blinkInterval = setInterval(BlinkLed, 250);

function BlinkLed() {
    if (rpio.read(5) == 1) {
        rpio.write(5, rpio.LOW)
    } else
        rpio.write(5, rpio.HIGH);
}

function endBlink() { //function to stop blinking
    clearInterval(blinkInterval); // Stop blink intervals
    rpio.write(5, rpio.LOW); // Turn LED off
  }
  
  setTimeout(endBlink, 10000); //stop blinking after 5 seconds