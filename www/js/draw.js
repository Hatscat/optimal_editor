"use strict";
 
function DRAW (data) {

	data.delta_time = 60 / frameRate(); // ratio à appliquer aux valeurs

	background(200);

	fill(255, 0, 0);
	textSize(width * 0.0225 | 0);
	text(frameRate()+.5|0, 10, 30);

}