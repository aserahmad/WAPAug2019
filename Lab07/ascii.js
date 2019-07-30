/*jshint esversion: 6 */
"use strict";
function pageLoad () {
    //attaching click event to the start button
    document.getElementById("start").onclick = startClicked;

    //attaching click event to the stop button
    document.getElementById("stop").onClick = stopClicked;
}

function startClicked () {
    document.getElementById("text-area").innerHTML
}
window.onload=pageLoad;