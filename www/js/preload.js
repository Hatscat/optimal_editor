"use strict";

function PRELOAD (data) {

	// load content (json)
	data.app_content = loadJSON(data.app_content_url);

	// load des images dans le setup... pour attendre le json
}
