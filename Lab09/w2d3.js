"use strict";

/**
 * Function to filter given words from a String
 * @param words {Array} words to be filtered from the string.
 * @returns {string} the text after filtering the undesired words from it.
 */
String.prototype.filter = function(...words) {
        let sentenceArray = this.split(' ');
        for (let word of words) {
            sentenceArray = sentenceArray.filter(function(elem) {
                return elem !== word;
            });
        }
        return sentenceArray.join(' ');
    };

/**
 * Function to apply Bubble Sort to an Array
 * @param array {Array} of unsorted numbers.
 * @returns {Array} of the numbers sorted ascendingly.
 */
Array.prototype.bubbleSort = function() {
    let n = this.length;
    let swapped = true;
    while (swapped) {
        swapped = false;
        for (let i = 1; i < n; i++) {
            if (this[i] < this[i - 1]) {
                let temp = this[i];
                this[i] = this[i - 1];
                this[i - 1] = temp;
                swapped = true;
            }
        }
    }
    return this;
};

    // exercise 3a:
/**
 * Function Constructor of Person
 * @param {String} name
 * @param {Number} age
 * @param {String} hobby
 * @constructor
 */
function Person(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
    this.species = "homo sapien";
    this.favoriteHobby =
        function() {
        console.log("My name is " + this.name + " and my hobby is " + this.hobby + ".");
        };
}

/**
 * Function Constructor of Teacher: inherits from Person
 * @param name
 * @param age
 * @param hobby
 * @param subject
 * @constructor
 */
function Teacher(name, age, hobby, subject) {
    Person.call(this, name, age, hobby);
    this.subject = subject;
    this.teach =
        function () {
        console.log(this.name + " is now teaching " + this.subject + ".");
        };
}

    // testing String.filter
console.log("Original String: This house is not nice, none clean, cosy, not sweet!");
console.log("Words to be filtered: not, none");
console.log("Filtered String: " + "This house is not nice, none clean, cosy, not sweet!".filter('not', 'none'));

    // testing Array.bubbleSort
console.log("Array [6, 4, 0, 3, -2, 1] after ascending bubble sorting becomes: " + [6, 4, 0, 3, -2, 1].bubbleSort());

    /* Testing object creation using Function constructor.
       Creating two Teachers and calling their teach() methods.
     */
let t1 = new Teacher('John', 30, 'Tennis', 'MWA');
t1.teach();

let t2 = new Teacher('Sara', 35, 'Volley Ball', 'WAA');
t2.teach();