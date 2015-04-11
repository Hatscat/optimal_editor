"use strict";
 
function DRAW (data) {

	data.delta_time = 60 / frameRate(); // ratio à appliquer aux valeurs sensibles au framerate
	
	//bg de la fenêtre de rendu
	background(0);

	// bg de l'application
	data.app_buf.background(data.editor_conf.background_color.r, data.editor_conf.background_color.g, data.editor_conf.background_color.b);

	// draw du buffer global de l'app
	image(data.app_buf, data.app_buf_x, data.app_buf_y);

	// draw des images de l'application
	for_eah_components_in_page (data, data.page_k0, function (comp) {

		if (comp.is_visible && comp.images && comp.images.length) {

			image(comp.images[comp.img_i], comp.box.x, comp.box.y, comp.box.w, comp.box.h);
		}
	});

	// frame rate 
	fill(0, 255, 0);
	textSize(width * 0.0225 | 0);
	text(frameRate()+0.5|0, 10, 30);
}
