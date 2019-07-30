/*jshint esversion: 6 */
"use strict";

function pageLoad() {
  // attaching click event to the start button
  document.getElementById("start").onclick = startClicked;

  // attaching click event to the stop button
  document.getElementById("stop").onclick = stopClicked;
}

var originalText; // Original text in the text area befor animation started,  if any
var animationTimer = null; // Timer set and disabled by interval functions
var currFrame = 0; // No. of frame to be displayed

function startClicked() {
  // get original text in the text area (if any) and hold it in a global variable
  if (!!document.getElementById("text-area").value) {
    originalText = document.getElementById("text-area").value;
  } else {
    originalText = '';
  }

  // empty the text area, enable the stop button and disable the start button, animation select,
  document.getElementById("text-area").value = '';
  document.getElementById("stop").disabled = false;
  document.getElementById("start").disabled = true;
  document.getElementById("animation").disabled = true;

  // get user selections and animate according to them
  animate();
}

function animate() {
  // declare the animation array
  let animArr = []; // must be declared here to be visible to all function scope
  // 1. custom animation
  if (originalText.substring(0, 5) === "=====") {
    animArr = originalText.split("=====");
  } else {
  // 2. predefined animation
    let selAnim = document.getElementById("animation").value;
    animArr = ANIMATIONS[selAnim].split("=====\n");
  }

  // get required font size and apply it to the text area
  setFontSize();

  // adjust speed according to the turbo checkbox
  var frameInterval = 0;
  if (document.getElementById("turbo").checked === true) {
    frameInterval = 250;
  } else {
    frameInterval = 500;
  }

  // animate
  animationTimer = setInterval(showFrame, frameInterval, animArr);
}

function setFontSize() {
  switch (document.getElementById("fontsize").value) {
    case ("Tiny"): document.getElementById("text-area").style.fontSize = "7pt";
    break;
    case ("Small"): document.getElementById("text-area").style.fontSize = "10pt";
    break;
    case ("Medium"): document.getElementById("text-area").style.fontSize = "12pt";
    break;
    case ("Large"): document.getElementById("text-area").style.fontSize = "16pt";
    break;
    case ("Extra Large"): document.getElementById("text-area").style.fontSize = "24pt";
    break;
    case ("XXL"): document.getElementById("text-area").style.fontSize = "32pt";
    break;
  }
}

function showFrame(frames) {
  document.getElementById("text-area").value = frames[currFrame];
  if (currFrame === frames.length - 1) {
    currFrame = 0;
  } else {
    currFrame++;
  }
}

function stopClicked() {

  // enable start button, animation select, and disable the stop button again
  document.getElementById("start").disabled = false;
  document.getElementById("animation").disabled = false;
  document.getElementById("stop").disabled = true;

  // return original text
  document.getElementById("text-area").value = originalText;

  // stop animation and clears frame counter
  clearInterval(animationTimer);
  currFrame = 0;
}

window.onload = pageLoad;