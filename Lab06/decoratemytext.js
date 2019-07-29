/*jshint esversion: 6 */
"use strict";
window.onload = pageLoad;

function pageLoad () {
    //attaching event handler for the button click
    document.getElementById("deco").onclick = decoClicked;

    //attaching event handler for the checkbox check
    document.getElementById("chk").onchange = chkboxChanged;

    //attaching event to the Igpay Atinlay button
    document.getElementById("pigLatin").onclick = pigLatinClicked;

    //attaching event to the malkovitch button
    document.getElementById("malkovitch").onclick = malkovitchClicked;
}

function decoClicked () {
    alert("Hello, world!"); //Task 1 & 2: adding the alert and linking it to clicking the decoration button
    //Task 3: changing font size & enlarging the textarea
    var b = document.getElementById("mytxtarea");
    b.cols = "50";
    b.rows = "10";
    b.style.fontSize = "24pt";
    //Task 5: Increasing font size of the text area by 2pt every 500ms
    setInterval(function(){
        b.style.fontSize = (parseInt(b.style.fontSize) + 2) + "pt";
        },500);
}

function chkboxChanged () {
    //Tast 4: changing text color and decoration of text area & showing an alert when the checkbox is checked/unchecked
    var chk = document.getElementById("chk");
    var a = document.getElementById("mytxtarea");
    if (chk.checked==true) {
        alert("Bling checked.");
        a.style.fontWeight="bold";
        a.style.color="green";
        a.style.textDecoration="underline";
        a.innerHTML="Text weight has now changed to bold, and it is green, underlined."
    } else {
        alert("Bling unchecked.");
        a.style.fontWeight="normal";
        a.innerHTML="Text weight has now returned to normal."
    }
    //More Glitz: 1. changin the background image when the checkbox is clicked (regardless of its state)
    document.body.style.background="url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
}

function pigLatinClicked () {
    //More Glitz: 2. encoding the text in textarea according to the given rules
    const vowels = ['a','e','i','o','y'];
    //first: get the text as an array to enable handling every word separately
    var textArr = document.getElementById("mytxtarea").innerHTML.split(' ');
    for (let i = 0 ; i < textArr.length - 1 ; i++) {
        //check every word: if its first letter is in the vowels array then apply the vowel rule on it
        if (vowels.filter(function(elem,i,vowels){
                return elem===textArr[i].charAt(0)
                }).length > 0) {
            //first letter is a vowel: add 'ay' to the word end
            textArr[i] = textArr[i] + 'ay';
        } else {
            //first letter is a consonant: move it to the end and add 'a'
            textArr[i] = textArr[i].substring(1) + textArr[i].charAt(0) + 'ay';
        }
    }
    //return the text to the text area after applying the encoding on it
    document.getElementById("mytxtarea").innerHTML = textArr.join(' ');
}

//More Glitz: 3. replace words >= 5 letters with the word 'Malkovitch'
function malkovitchClicked () {
    //first: get the text as an array to enable handling every word separately
    var textArr = document.getElementById("mytxtarea").innerHTML.split(' ');
    for (let i = 0 ; i < textArr.length ; i++) {
        if (textArr[i].length>=5) {
            textArr[i] = "Malkovitch";
        }
    }
    //return the text to the text area after applying the transformation on it
    document.getElementById("mytxtarea").innerHTML = textArr.join(' ');
}