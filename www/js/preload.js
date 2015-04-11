"use strict";

function PRELOAD (data) {

	// load content (json)
	data.app_content = loadJSON(data.app_content_url);

	/*for (var p in data.app_content.pages) { // boucle sur les pages

		for (var c in data.app_content.pages[p]) { // boucle sur les composants

			console.log(data.app_content.pages[p][c].img_src);

			// load images
			if (data.app_content.pages[p][c].img_src && data.app_content.pages[p][c].img_src.length) {

				data.app_content.pages[p][c].images = [];
				data.app_content.pages[p][c].img_i = 0;

				for (var i = 0; i < data.app_content.pages[p][c].img_src.length; i++) {
					data.app_content.pages[p][c].images[i] = loadImage('img/' + data.app_content.pages[p][c].img_src[i]);
				}
			}
		}
	}*/
}
