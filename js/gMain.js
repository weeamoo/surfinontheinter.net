var counter = 100;
var backs = ["Lesbians.png", "owo.png", "station.png", "SubRailCrunchMiku.png", "surfin.png", "owocoin.png", "RMS.png", "SubRailChris.png", "SubRailZoneTemple.png", "wizard.png"];

setTimeout(go(), 5000)

function trainArr() {

	intTrac = setInterval(trainArrr, 3);

	function trainArrr() {
	
		counter = counter - 0.1;
		document.getElementById("gFTrain").style.right=counter + "%";
		document.getElementById("gFDoor").style.right=counter + "%";

		if (counter <= 0) {
			clearInterval(intTrac);
			counter = 0;
			document.getElementById("gFTrain").style.right=counter + "%";
			document.getElementById("gFDoor").style.right=counter + "%";
		}
	}

} 

function openDoor() {
	intTrac = setInterval(openDoorr, 30);

	function openDoorr() {
	
		counter = counter + 0.1;
		document.getElementById("gFDoor").style.right=counter + "%";

		if (counter >= 11) {
			clearInterval(intTrac);
		}
	}
}

function closeDoor() {
	intTrac = setInterval(closeDoorr, 30);

	function closeDoorr() {
	
		counter = counter - 0.1;
		document.getElementById("gFDoor").style.right=counter + "%";

		if (counter <= 0) {
			clearInterval(intTrac);
			counter = 0;
			document.getElementById("gFDoor").style.right=counter + "%";
		}
	}
}


function move() {

	counter0 = 0;
	counter1 = 100;
	counter2 = 200;
	counter3 = 300;
	direction = 0;

	speedlimit = 0.9;
	startspeed = 0.005;
	accel = 0.0005;
	drag = 0.000001;
	var speed = 0;

	intTrac = setInterval(movve, 4);

	function movve() {

		//startes subway
		if (Math.abs(speed) < startspeed) {
			speed = startspeed * direction;
		}

		//accelaration
		speed = speed + Math.abs(speed * accel) * direction ;

		//drag
		if (speed > 0) {
			speed = speed - drag;
		}

		//max speed
		if (speed > maxspeed) {
			speed = maxspeed;
		}
	
		counter0 = counter0 - speed;
		counter1 = counter1 - speed;
		counter2 = counter2 - speed;
		counter3 = counter3 - speed;

		if (counter0 <= -100) {
			counter0 = 300;
			update("gFlsImg0");
		}

		if (counter1 <= -100) {
			counter1 = 300;
			update("gFlsImg1");
		}

		if (counter2 <= -100) {
			counter2 = 300;
			update("gFlsImg2");
		}

		if (counter3 <= -100) {
			counter3 = 300;
			update("gFlsImg3");
		}

		if (counter0 >= 310) {
			counter0 = -100;
			update("gFlsImg0");
		}

		if (counter1 >= 310) {
			counter1 = -100;
			update("gFlsImg1");
		}

		if (counter2 >= 310) {
			counter2 = -100;
			update("gFlsImg2");
		}

		if (counter3 >= 310) {
			counter3 = -100;
			update("gFlsImg3");
		}

		document.getElementById("gFlsImg0").style.left=counter0 + "%";
		document.getElementById("gFPlatform").style.left=counter0 + "%";
		document.getElementById("gFlsImg1").style.left=counter1 + "%";
		document.getElementById("gFlsImg2").style.left=counter2 + "%";
		document.getElementById("gFlsImg3").style.left=counter3 + "%";

		//speedomoter

		document.getElementById("Speed").innerHTML = "your speed: " + speed.toFixed(3);
	}
}

function update(lol) {

	path = '/img/g/s/rails/tracks/'; // default path here
    var num = Math.floor( Math.random() * backs.length );
    var img = backs[ num ];
    var imgStr = path + img;
    document.getElementById(lol).src=imgStr;

}

