"use strict";
 
function get_config () {

	var config = {

		editor_conf: {
			app_buf_wh_ratio: 0.667,
			current_page: 'homepage',
			background_color: {
				r: 64,
				g: 128,
				b: 255
			}
		},
		app_content_url: 'app_content.json',
		canvas_x: 0.25,
		canvas_y: 0,
		canvas_w: 0.5,
		canvas_h: 1,
		app_buf_x: 0,
		app_buf_y: 0,
		image_mode: CORNER,
		page_k0: '',
		page_k1: '',
		are_img_loaded: false,
		mouse_pos: null,
		canvas: null,
		app_buf: null,
		app_content: null,
		custom_methods: {},
		delta_time: 1

	};

	return config;
}