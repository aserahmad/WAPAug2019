"use strict";

$(function(){

    // cashing of the circles class and their container
    // because of their multiple use later
    const circles = $('.circle');
    const container = $('#container');

    // event handler for clicking the start button
    $('[name="start"]').click(startAnimation);

    // clicking the reset button resets circles' sizes,
    // clears timer, and enables start button
    $('[name="reset"]').click(resetAnimation);

    // stopping timer and disabling the start button
    // and hiding circles when any circle is clicked
    container.on('click', '.circle', function() {
        $(this).addClass('hidden');
        $('[name="start"]').attr("disabled", true);
    });

    /* I tried the fading effect but it messed up the disappearing effect when a circle is clicked
    fading effect
    container.on('mouseover', '.circle', function() {
        $(this).fadeTo("slow", 0.5);
    });

    // un-fading effect
    container.on('mouseout', '.circle', function() {
        $(this).fadeTo("slow", 1);
    })
     */
});

// global variable to enable clearing the timer
let timer = null;

function startAnimation() {
    // collecting user input
    const centerWidth = parseInt($('[name="width"]').val());
    const growthAmount = parseInt($('[name="amount"]').val());
    const growthRate = parseInt($('[name="rate"]').val());
    const circleCount = parseInt($('[name="circle-count"]').val());
    // add the required number of circles
    if ($('.circle').length !== circleCount + 1) {
        createCircles(circleCount);
    }
    // deal with the whole collection after the created group
    const circles = $('.circle');
    circles.css({width: centerWidth + "px", height: centerWidth + "px"})
    // toggle button start/pause and start animation
    if ($('[name="start"]').attr("value") === "  Start  ") {
        $('[name="start"]').attr("value", "  Pause  ");
        timer = setInterval(timerAnimation, growthRate, circles, growthAmount);
    } else {
        $('[name="start"]').attr("value", "  Start  ");
        clearInterval(timer);
    }
}

function timerAnimation(circles, growthAmount) {
    // update the circles size with the required increment
    circles.css("width", function(i, old) {
        return (parseInt(old) + growthAmount) + "px";
    });
    circles.css("height", function(i, old) {
        return (parseInt(old) + growthAmount) + "px";
    });
}

function resetAnimation() {
    // extra button to reset the animation
    clearInterval(timer);
    let circles = $('.circle');
    // clean screen from created objects
    $('.circle:not(#central)').remove();
    // if the circles have disappeared, show them
    if (circles.hasClass('hidden')) {
        circles.removeClass('hidden');
    }
    // reset the start button
    $('[name="start"]').attr({"disabled": false,
    "value": "  Start  "});
}

function createCircles(circleCount) {
    const container = $('#container');
    for(let i = 1; i <= circleCount; i++) {
        container.append($('<div>', {"class": "circle"}));
    }
}