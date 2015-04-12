"use strict";

function for_eah_components_in_page (data, page_name, func) {

	if (!data.app_content.pages[page_name]) {
		return;
	}

	for (var i = -1, c; c = data.app_content.pages[page_name][++i];) { // boucle sur les composants

		try {

			func(c, i, page_name);
			
		} catch (error) {

			console.log(error);
		}
	}
}

function for_eah_components_in_each_pages (data, func) {

	for (var p in data.app_content.pages) { // boucle sur les pages

		for_eah_components_in_page(data, p, func);
	}
}

function set_component_box (data, comp) {

	if (comp.images && comp.images.length) {

		var img = comp.images[0];
		var wh_ratio = img.width / img.height;
		var h_max = comp.h * data.app_buf.height;

		comp.box.h = min( h_max, h_max * ( (comp.w * data.app_buf.width) / (h_max * wh_ratio) ) ) | 0;
		comp.box.w = comp.box.h * wh_ratio;
		comp.box.x = data.page_x + data.app_buf_x + comp.x * data.app_buf.width - comp.box.w * comp.anchor_x | 0;
		comp.box.y = data.page_y + data.app_buf_y + comp.y * data.app_buf.height - comp.box.h * comp.anchor_y | 0;
	}
}
