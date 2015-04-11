"use strict";
 
function get_config () {

	var config = {

		canvas_x: 0.25,
		canvas_y: 0,
		canvas_w: 0.5,
		canvas_h: 1,
		app_buf_wh_ratio: 0.667,
		app_buf_x: 0,
		app_buf_y: 0,
		//current_page:,
		//next_page:,
		image_mode: CORNER,
		canvas: null,
		app_buf: null,
		delta_time: 1,
		img_src: {
		},
		images: {},
		fonts: [
			'Shadows Into Light',
			'Play'
		]
	};
	return config;
}