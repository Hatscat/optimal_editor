"use strict";

function WINDOW_RESIZED (data) {

	resizeCanvas(windowWidth * data.canvas_w, windowHeight * data.canvas_h);
	data.canvas.position(windowWidth * data.canvas_x, windowHeight * data.canvas_y);

	var canvas_wh_ratio = width / height;

	data.app_buf.height = min(1, canvas_wh_ratio / data.editor_conf.app_buf_wh_ratio) * height | 0;
	data.app_buf.width = data.app_buf.height * data.editor_conf.app_buf_wh_ratio | 0;

	data.app_buf_x = (width - data.app_buf.width) * 0.5 | 0;
	data.app_buf_y = (height - data.app_buf.height) * 0.5 | 0;
}

function MOUSE_RELEASED (data) {


}