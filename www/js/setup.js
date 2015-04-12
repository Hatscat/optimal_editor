"use strict";

function SETUP (data) {

								window.data = data; // warning : tmp, to dev, to rm after

	var img_nb = 0;
	var loaded_img_nb = 0;

	for_eah_components_in_each_pages(data, function (comp) {

		// load images
		if (comp.img_src && comp.img_src.length) {

			comp.images = [];
			comp.img_i = 0;
			comp.box = {};

			for (var i = 0; i < comp.img_src.length; i++) {

				img_nb++;
				comp.images[i] = loadImage('img/' + comp.img_src[i], img_loaded);
			}
		}

	});

	for (var p in data.app_content.pages) {
		// sort by z layer
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

	function img_loaded () {

		if (++loaded_img_nb >= img_nb) { // all img are loaded
			
			console.log("all images are loaded !");

			WINDOW_RESIZED(data);

			data.are_img_loaded = true;
		}
	}
}