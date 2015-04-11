"use strict";

function MOUSE_RELEASED (data) {

	for_eah_components_in_page (data, data.page_k0, function (comp) {

		if (comp.is_visible && comp.box && is_point_inside(data.mouse_pos, comp.box.x, comp.box.y, comp.box.w, comp.box.h)) {

			if (comp.href) {

				data.page_k0 = comp.href;

			} else {
				// other mouse_released stuff
			}
		}
	});
}