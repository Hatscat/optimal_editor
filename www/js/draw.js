"use strict";
 
function DRAW (data) {

	data.delta_time = 60 / frameRate(); // ratio à appliquer aux valeurs sensibles au framerate
	
	//bg de la fenêtre de rendu
	background(0);

	// bg de l'application
	data.app_buf.background(data.editor_conf.background_color.r, data.editor_conf.background_color.g, data.editor_conf.background_color.b);

	// draw du buffer global de l'app
	image(data.app_buf, data.app_buf_x, data.app_buf_y);

	// images de l'application
	for (var c = 0; c < data.app_content.pages[data.page_k0].length; c++) { // boucle sur les composants

		var comp = data.app_content.pages[data.page_k0][c];

		if (comp.is_visible && comp.images && comp.images.length) {

			var img = comp.images[comp.img_i];
			var wh_ratio = img.width / img.height;
			var h_max = comp.h * data.app_buf.height;
			var h = min( h_max, h_max * ( (comp.w * data.app_buf.width) / (h_max * wh_ratio) ) ) | 0;
			var w = h * wh_ratio;

			image(img,
				data.app_buf_x + comp.x * data.app_buf.width - w * comp.anchor_x | 0,
				data.app_buf_y + comp.y * data.app_buf.height - h * comp.anchor_y | 0,
				w, h);
		}
	}

	// frame rate 
	fill(0, 255, 0);
	textSize(width * 0.0225 | 0);
	text(frameRate()+0.5|0, 10, 30);
}