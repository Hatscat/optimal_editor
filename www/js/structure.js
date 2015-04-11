"use strict";

(function () {

	var data;

	window.preload = function () {

		data = get_config();

		PRELOAD(data);
	}

	window.setup = function () {

		SETUP(data);

		WINDOW_RESIZED(data);
	}

	window.draw = function () {

		DRAW(data);
	}

	/**  EVENTS --> events.js  **/

	window.windowResized = function () {

		WINDOW_RESIZED(data);
	}

	window.mousePressed = function () {

		MOUSE_PRESSED(data);
	}

	window.mouseReleased = function () {

		MOUSE_RELEASED(data);
	}


})();