function moveScreen(pixels) {

	// gets all 3 screen positions

	var x = getOffset( document.getElementById('tScreen1') ).left; 

	var y = getOffset( document.getElementById('tScreen2') ).left; 

	var z = getOffset( document.getElementById('tScreen3') ).left; 

	// applies movement to vars

	x = x - pixels;

	y = y - pixels;

	z = z - pixels;

	// checks to see if any screens have moved out of bounds
	//reverse will be worse than forward

	if (x < -1920) {
		x = x  + 5760;
	} else if (y < -1920) {
		y = y + 5760;
	} else if (z < -1920) {
		z = z + 5760;
	} else if (x > 3840) {
		x = x - 5760;
	} else if (y > 3840) {
		y = y - 5760;
	} else if (z > 3840) {
		z = z - 5760;
	}

	//applies vars to actual html

	document.getElementById("tScreen1").style.left=x + "px";

	document.getElementById("tScreen2").style.left=y + "px";

	document.getElementById("tScreen3").style.left=z + "px";
}