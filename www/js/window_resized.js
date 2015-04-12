"use strict";

function WINDOW_RESIZED (data) {

	resizeCanvas(windowWidth * data.canvas_w, windowHeight * data.canvas_h);
	data.canvas.position(windowWidth * data.canvas_x, windowHeight * data.canvas_y);

	var canvas_wh_ratio = width / height;

	data.app_buf.height = min(1, canvas_wh_ratio / data.editor_conf.app_buf_wh_ratio) * height | 0;
	data.app_buf.width = data.app_buf.height * data.editor_conf.app_buf_wh_ratio | 0;

	data.app_buf_x = (width - data.app_buf.width) * 0.5 | 0;
	data.app_buf_y = (height - data.app_buf.height) * 0.5 | 0;

	//data.json_ui_iframe.style.top = (data.json_ui_y * windowHeight) + 'px';
	//data.json_ui_iframe.width = data.canvas_x * windowWidth | 0;
	//data.json_ui_iframe.height = windowHeight - (data.json_ui_y * windowHeight);

	for_eah_components_in_each_pages(data, function (comp) {

		set_component_box(data, comp);
	});
}
