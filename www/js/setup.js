"use strict";

function SETUP (data) {

								window.data = data; // tmp, to dev, to rm after

	for (var p in data.app_content.pages) { // boucle sur les pages

		for (var c = 0; c < data.app_content.pages[p].length; c++) { // boucle sur les composants

			// load images
			if (data.app_content.pages[p][c].img_src && data.app_content.pages[p][c].img_src.length) {

				data.app_content.pages[p][c].images = [];
				data.app_content.pages[p][c].img_i = 0;

				for (var i = 0; i < data.app_content.pages[p][c].img_src.length; i++) {
					data.app_content.pages[p][c].images[i] = loadImage('img/' + data.app_content.pages[p][c].img_src[i]);
				}
			}
		}

		quick_sort_from_obj_prop(data.app_content.pages[p], 'z', -1, 0, data.app_content.pages[p].length-1);
	}

	data.canvas = createCanvas(1, 1);
	
	data.app_buf = createGraphics(1, 1); // ne pas mettre 0 !

	//data.app_buf.imageMode(data.image_mode);
	//data.app_buf.show();

	imageMode(data.image_mode);

	data.page_k0 = data.editor_conf.current_page;

	//textAlign(CENTER, CENTER);

	//noStroke();
}