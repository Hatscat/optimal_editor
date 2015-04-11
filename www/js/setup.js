"use strict";

function SETUP (data) {

	data.canvas = createCanvas(windowWidth, windowHeight);

	//data.canvas_2 = createCanvas(windowWidth/2, windowHeight/2); // no, use graphics -> http://p5js.org/reference/#/p5/createGraphics

	imageMode(data.image_mode);

	textAlign(CENTER, CENTER);

	noStroke();
}