"use strict";
 
function DRAW (data) {

	data.delta_time = 60 / frameRate(); // ratio à appliquer aux valeurs
	
	background(0);
	data.app_buf.background(64, 128, 255);

	image(data.app_buf, data.app_buf_x, data.app_buf_y);
	//image(data.app_buf, 0, 0);

	/** frame rate */
	fill(0, 255, 0);
	textSize(width * 0.0225 | 0);
	text(frameRate()+.5|0, 10, 30);
}