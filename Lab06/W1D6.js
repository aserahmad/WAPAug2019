/*jshint esversion: 6 */
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

	console.log ("Summation of the array " + [1,2,3,4,5,6,7,8,9,10] + " is " + sum([1,2,3,4,5,6,7,8,9,10]));

	console.log("Reversing the string 'gfedcba' results in " + reverse('gfedcba'));

	console.log("Filtering the array " + ['asdfg','asdfg','asd','aa','aas'] + " (elements larger than 2 letters) results in  " + filterLongWords(['asdfg','asdfg','asd','aa','aas'],2));
