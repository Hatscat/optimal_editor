"use strict";

function PRELOAD (data) {

	/* load fonts */
	window.WebFontConfig = {
		google: {
			families: data.fonts
		},
		active: function () {
			//console.log("fonts loaded!");
		}
	};
	WebFont.load(WebFontConfig);

	/* load images */
	for (var i in data.img_src) {
		data.images[i] = loadImage(data.img_src[i]);
	}
}