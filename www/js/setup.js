"use strict";

function SETUP (data) {

								window.data = data; // tmp, to dev

	data.canvas = createCanvas(1, 1);
	
	data.app_buf = createGraphics(1, 1); // ne pas mettre 0 !

	data.app_buf.imageMode(data.image_mode);

	//textAlign(CENTER, CENTER);

	//noStroke();
}