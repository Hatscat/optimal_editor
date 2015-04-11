"use strict";

function MOUSE_RELEASED (data) {

	for_eah_components_in_page (data, data.page_k0, function (comp) {

		if (comp.on_mouse_released && comp.on_mouse_released.function && data.custom_methods[comp.on_mouse_released.function]) {

			data.custom_methods[comp.on_mouse_released.function](comp, comp.on_mouse_released.args);

		} else if (comp.is_mouse_over) {

			if (comp.href) {

				data.page_k0 = comp.href;

			} else {
				// other mouse_released stuff
			}
		}
	});

	/** -------------------------------------------------------------- **/
}