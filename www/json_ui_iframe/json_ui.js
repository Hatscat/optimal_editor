"use strict";

$(document).ready(function() {

	var url = '../app_content.json';

	$.ajax({
		url: url,
		dataType: 'json',
		success: function (data) {

			$('#editor').jsonEditor(data, { change: updateJSON, propertyclick: showPath });
		},
		error: function (error) {

			alert('Something went wrong:', error);
		}
	});

	function updateJSON (data) {

		console.log("editor change:", data);
	}

	function showPath (path) {

		$('#path').text(path);
	}
});
