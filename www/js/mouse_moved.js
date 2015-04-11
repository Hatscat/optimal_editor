"use strict";

function MOUSE_MOVED (data) {

	data.mouse_pos = { x: mouseX, y: mouseY };

	for_eah_components_in_page (data, data.page_k0, function (comp) {

		comp.is_mouse_over = comp.is_visible && comp.box && is_point_inside(data.mouse_pos, comp.box.x, comp.box.y, comp.box.w, comp.box.h);

		if (comp.on_mouse_moved && comp.on_mouse_moved.function && data.custom_methods[comp.on_mouse_moved.function]) {

			data.custom_methods[comp.on_mouse_moved.function](comp, comp.on_mouse_moved.args);
		}
	});

	/** -------------------------------------------------------------- **/
	
	data.custom_methods.draw_img_1_on_hover = function (comp) {

		if (comp.is_mouse_over) {
			comp.img_i = 1;
		} else {
			comp.img_i = 0;
		}
	}
}
