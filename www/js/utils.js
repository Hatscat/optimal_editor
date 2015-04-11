"use strict";

function for_eah_components_in_page (data, page_name, func) {

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
