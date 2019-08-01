"use strict";

/** Input one parameter
 * @param {object} arr the array to be reversed
 * @returns {object} myArr a new reversed array and doesn't affect the sent parameter
 */
function reverseArray(arr) {
    let myArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        myArr.push(arr[i]);
    }
    return myArr;
}

/** Input one parameter
 * @param {object} arr the array to be reversed
 * @returns {void} the input array itself is reversed
 */
function reverseArrayInPlace(arr) {
    let temp = 0;
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}

/** Input one parameter
 * @param {object} arr the array used to create the list
 * @returns {object} myList a list composed of the elements from the input array
 */
function arrayToList(arr) {
    let myList = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        myList = {
            element: arr[i],
            rest: myList
        };
    }
    return myList;
}

/** Input one parameter
 * @param {object} lst the list usedto create the array
 * @returns {object} myArr the array containing the elements from the input list
 */
function listToArray(lst) {
    let myArr = [];
    for (const elem in lst) {
        let elemVal = lst[elem];
        if (typeof (elemVal) === "object") {
            let rest = listToArray(elemVal);
            myArr.push(rest);
        } else {
            myArr.push(elemVal);
        }
    }
    return myArr;
}

/** Input two parameters
 * @param {object} elem the element to be appended to the beginning of the list
 * @param {object} lst the list to append the element to
 * @returns {object} newLst a new list with the element appended to its beginning
 */
function prepend(elem, lst) {
    let newLst = null;
    newLst = {element: elem,
        rest: lst};
    return newLst;
}

/** Input two parameters
 * @param {object} lst the list from which the element will be fetched
 * @param {number} pos the position of the element requested
 * @returns {object} lst.element the element at the position specified
 */
function nth(lst, pos) {
    if (pos === 0) {
        return lst.element;
    }
    return nth(lst.rest, pos - 1);
}

/** Input two parameters
 * @param {object} val1 the fisrt value to be compared
 * @param {object} val2 the second value to be compared
 * @returns {boolean} equality result true/false
 */
function deepEqual(val1, val2) {
    if (val1 === null || val2 === null) { // eliminate null possibility
        return false;
    }
    if (typeof (val1) !== typeof (val2)) { // check type equality
        return false;
    }
    if (typeof val1 !== 'object') { // if they are not objects then compare directly based on value
        return val1 === val2;
    } // comparing objects
    for (const elem in val1) {
        if (val1.hasOwnProperty(elem) !== val2.hasOwnProperty(elem)) { // check that both values have all similar elements
            return false;
        }
        if (!deepEqual(val1[elem], val2[elem])) {
            return false;
        }
        return true;
    }
}

// check on reverseArray
let arr1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
console.log("Reverse of " + arr1 + " is " + reverseArray(arr1));
console.assert(reverseArray(['a', 'b', 'c', 'd', 'e', 'f', 'g'] === ['g', 'f', 'e', 'd', 'c', 'b', 'a']), "Assertion of reverseArray failed");

// check on reverseArrayInPlace
reverseArrayInPlace(arr1);
console.log("Original array ['a', 'b', 'c', 'd', 'e', 'f', 'g'] reversed to become: " + arr1);

// check on arrayToList
console.log("Convert array [10, 20, 30, 40, 50] to a list results in: ");
let list1 = arrayToList([10, 20, 30, 40, 50]);
console.log(list1); // must be logged separately in order to be able to view it

// check on listToArray
console.log("List {10, 20, 30, 40, 50} converted to array: " + listToArray(list1));

// check on prepend
console.log("Adding " + 100 + " to the list resulted below resulted in a new list below it:");
let list2 = prepend(100, list1);
console.log();

// check on nth
console.log("Element of position " + 3 + " of list below is: " + nth(list1,3));
console.log(list1);

// check on deepEqual: list1 is created above from converting array.
// list2 is after adding an element to it using prepend
console.assert(deepEqual(list1, list2), "Lists are not equal");
console.assert(deepEqual(list1, list1), "Lists are not equal");