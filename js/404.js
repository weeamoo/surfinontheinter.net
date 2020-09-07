//creates empty array auto generated array.js will add to it
var index = []

function FBI() {

	path = '/img/404/'; // default path here
    var num = Math.floor( Math.random() * index.length );
    var img = index[ num ];
    var imgStr = path + img;
    setBackgroundImgTo(imgStr);

}

function chBig() {

	path = '/img/404/'; // default path here
    var num = Math.floor( Math.random() * index.length );
    var img = index[ num ];
    var imgStr = path + img;
    document.getElementById("bigImg").src=imgStr;

}