var target = 0;
var cur = 0;
var time;
var timer;
var time = setInterval(autoPlay, 3000);
var outBox = document.getElementById('carousel');
var inBox = document.getElementById('inner');
var inImg = inBox.getElementsByTagName('img');
var inCircle = outBox.getElementsByTagName('button');
function autoPlay() {
	if (target <= -400) {
		target = -100;
	;	cur = 0;
	} else {
		target -= 100;
	}
	timer = setInterval(play, 5);
	function play() {
		if (cur == target) {
			clearInterval(timer);
		} else {
		cur--;
		inBox.style.left = cur + "%";
		}
	}
}
outBox.onmouseover = function() {
	clearInterval(time);
}
outBox.onmouseout = function() {
	time = setInterval(autoPlay, 3000);
}
inCircle.onmouseover = function() {
	this.style.class = 'circle-hover';
}
inCircle.onmouseout = function() {
	this.style.class = '';
}

window.onload = function circle() {
	for (i=0; i<inCircle.length; i++) {
		inCircle[i].index = i;
		inCircle[i].onclick = function() {
			target = this.index * -100;
			function play() {
			if (cur == target) {
				clearInterval(timer);
			} else {
			cur--;
			inBox.style.left = cur + "%";
			}}
		}
	}
}