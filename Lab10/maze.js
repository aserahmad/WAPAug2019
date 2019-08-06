"use strict";
let gameStarted = false;

$(document).ready(function() {

    /**
     * what happens when the start button is clicked (see the line comments).
     */
    $('#start').click(function() {
        gameStarted = true; // set game start.
        $('#status').text("Try to go to the \"E\" without touching the boundaries."); // reset game title.
        $('#maze div.boundary').removeClass('youlose'); // reset boundary.
        $('#maze, #maze div.boundary').on('mouseenter', lose); // attach mouse event to boundary + maze div.
    });

    /**
     * what happens when the user clicks the end button (see each line comment).
     */
    $('#end').click(function() {
        if (!gameStarted) { // account for clicking when no game is being played or has ended.
        $('#status').text("Click the \"S\" to begin."); // reset game title.
    } else { // if game has started but not ended..
        gameStarted = false; // reset game start flag.
        alert("You win!"); // announce winning by alert message.
        $('#status').text("You win! Click the \"S\" to do it again."); // announce winning by alert message.
    }
        $('#maze div.boundary').removeClass('youlose'); // reset boundary.
        $('#maze, #maze div.boundary').off(); // detach any event from boundary + maze div.
    });
});

/**
 * executed when the player loses. see line comments for details.
 */
function lose() {
    if (gameStarted) { // only do the following if game started to avoid annoying the user.
        $('#maze div').addClass('youlose'); // attach lose class to the boundaries to turn them to red.
        alert('Sorry! You lose :('); // announce loss by alert message.
        $('#status').text("You lose!"); // announce loss by text.
    }
    gameStarted = false;
}