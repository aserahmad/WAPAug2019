/*jshint esversion: 6 */
window.onload {
	"use strict";
	function sum (arr) {
		return arr.reduce(function (prev, elem, i, array) {return prev + elem;});
	}

	function reverse (s) {
		return ((s.split('')).reverse().join(''));
	}

	function filterLongWords(arr,i) {
		return arr.filter(function(elem) {
			return elem.length>i;
		})
	}

	console.log (sum([1,2,3,4,5,6,7,8,9,10]));

	console.log(reverse('gfedcba'));

	console.log(filterLongWords(['asdfg','asdfg','asd','aa','aas'],2));
}
