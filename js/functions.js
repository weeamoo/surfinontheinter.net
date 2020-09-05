function bless() {
    var string = '/img/tenor.gif';
    document.getElementById("body").style.backgroundImage = "url('" + string + "')";
}

function setBackgroundImgTo(pictr) {
	document.getElementById("body").style.backgroundImage = "url('" + pictr + "')";
}

//note this will be async
function getRandomLine(filename){
  fs.readFile(filename, function(err, data){
    if(err) throw err;
    var lines = data.split('\n');
    /*do something with */ lines[Math.floor(Math.random()*lines.length)];
 })
}
