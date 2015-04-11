"use strict";

function swap (array, a, b) {

	var tmp = array[a];

	array[a] = array[b];
	array[b] = tmp;
}

function quick_sort_from_obj_prop (array, prop_name, dir, start, end) {
	
	// dir == 1 pour un tri croissant, dir == -1 pour un décroissant

	if (start >= end) return;
	
	var left = start - 1;
	var right = end + 1;
	var pivot = array[start][prop_name] * dir;

	while (true) {

		do right--; while(array[right][prop_name] * dir > pivot);
		do left++; while(array[left][prop_name] * dir < pivot);

		if (left < right) swap(array, left, right);
		else break;
	}

	quick_sort_from_obj_prop(array, prop_name, dir, start, right);
	quick_sort_from_obj_prop(array, prop_name, dir, right+1, end);
}