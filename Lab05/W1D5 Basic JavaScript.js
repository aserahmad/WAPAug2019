        /*
        This is my first JS code ever. Despite that, I find it to a large extend easy, partly because of
        the resemblance to Java, with a lot of rule excluded.

        During the coding, I noticed that the code is very intuitive, especially the strict equality sign may be.

        The declarative coding is very interesting, and it will need some practice to master it,
        but the beginning is good so far.

        The coding took me about half an hour. I believe if I gain more experience such simple coding will take
        much less time.

        I decided to list all the functions (ending with the testing function) and then write all the tests.
        This way the code is easier for me to track.

        When I stated testing, a few bugs showed up. One of them is related to equality check on arrays. I was
        not surprised by that and I think it is related to the arrays being objects, and that the equality
        checks their memory address (I'm not sure if that's true in JS as it is in Java).
        Anyway, I was advised by a colleague to use the JSON.stringify() method to make the
        comparison string-based, and it worked!

        Also, the filterLongWords() function took me some extra work because it gave totally incorrect
        results. I consulted the web and found where I was wrong. Now it performs perfectly,
        also after applying the JSON.stringify() method on it.
        */

//traditional technique to give max. No. between 2 numbers
function max(x, y) {
    if (x>=y) {
        return x;
    } else {
        return y;
    }
}

//this function utilizes the prev. one to simplify the code
function maxOfThree(x, y, z) {
    return max(x,max(y,z));
}


function isVowel(c) {
    //validation: eliminate other data types that are not string, and strings > 1 letter.
    if (typeof(c)!="string" || c.length > 1) {
        return false;
    }
    //define a constant array of vowels to loop it and check the parameter against it
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    for (let i = 0 ; i < vowels.length ; i++) {
        if (c===vowels[i]) {
            return true;
        }
    }
    return false;
}

function sum(nums) {
    let s = 0; //repository for storing the sum
    for (let i = 0 ; i < nums.length ; i++) { //loop to collect the numbers and put them in the repository
        s += nums[i];
    }
    return s;
}

/*
this function is similar to the sum() function above, except that the repository is set to 1 because it is
the identity element for multiplication
                         */
function multiply(nums) {
    let m = 1;
    for (let i = 0 ; i < nums.length ; i++) {
        m *= nums[i];
    }
    return m;
}

//loop the input parameter backwards and take each character into a new string to return it.
function reverse (str) {
    var revStr='';
    for (let i = str.length - 1 ; i >= 0 ; i--) {
        revStr+=str.charAt(i);
    }
    return revStr;
}

//scanning the input array and updating the temporary variable with the longest, which will be returned
function findLongestWord (words) {
    let longest = words[0];
    for (let i = 1 ; i < words.length ; i++) {
        if (words[i].length > longest.length) {
            longest=words[i];
        }
    }
    return longest;
}

//this is an application of functional programming to get the words longer than a certain length
function filterLongWords (words, i) {
    let arr =  words.filter(elem=>elem.length>i);
    return arr;
}

//this array will be used as an input to help test the following three expressions
const a = [1,3,5,3,3];

//b will be an array containing elements of a multiplied by 10
const b = a.map(function(elem, i, array){return elem * 10;});

//c is an array of elements of a equal 3
const c = a.filter(function(elem, i, array){return elem===3;});

var prev = 1; //had to set the starting element to 1 because it is the identity element in multiplication
const f = a.reduce(function(prev,elem,i,array){return prev*elem;});

// This function runs test to see if expected argument is === to value returned by function2test argument
function myFunctionTest(fn, expected, found) {
    if (expected === found) {
        return "TEST OF " + fn + " SUCCEEDED.  Ref. answer: " + expected + " function gives: " + found;
    } else {
        return "TEST OF " + fn + " FAILED.  Ref. answer: " + expected + " function gives: " + found;
    }
}