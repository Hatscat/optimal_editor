"use strict";

function PRELOAD (data) {

	// load content (json)
	try {

		data.app_content = loadJSON(data.app_content_url);

	} catch (error) {

		alert("error while loading the " + data.app_content_url + ": " + error);
	}

	// load des images dans le setup... pour attendre le json
}
