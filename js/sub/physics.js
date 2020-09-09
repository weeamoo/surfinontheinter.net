function physic () {

	//moves the screen based on the speed value
   moveScreen(speed);

   //if car is not stopped, caclulate drag and braking power

   if (speed != 0) {
   		
   		//sets direction var to apply l8r

   		if (speed > 0) {
   			direction = 1;
   		} else {
   			direction = -1;
   		}

   		brake = document.getElementById("brakeSlider").value * brakePower;

   		speed = ( ( Math.abs(speed) - ( Math.abs(speed) * drag ) ) - ( Math.abs(speed) * brake ) ) * direction;
   }

   //if speed is very low speed is set to zero

   	if (Math.abs(speed) < minSpeed) {
   		speed = 0;
   	}

   	//throttle
   	throttle = document.getElementById("throttleSlider").value;

   	if (throttle != 0) {

   		if (speed >= maxSpeed) {

   			speed = maxSpeed;

   		} else {

   			speed = ( Math.abs(speed) + Math.abs(speed) * accel * throttle + throttle * kick ) * direction;

   		}
   	}

	//Speedometer
	document.getElementById("speedometer").innerHTML = speed.toFixed(3) + " ppf";

   	//calls function after one frame has passed
   	requestAnimationFrame(physic);
}

//constants

var drag = 0.0001;

var brakePower = 0.0001;

var accel = 0.00001

var maxSpeed = 30;

var minSpeed = 0.25;

var kick = 0.02;

//containers

//starts var at zero

//speed is measured in pixels per frame

var speed = 0;

var direction = 0;

var brake = 0;

var throttle = 0;

var throttleDirection = 0;

//starts loop

requestAnimationFrame(physic);
