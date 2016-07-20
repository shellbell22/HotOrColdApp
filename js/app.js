$(document).ready(function() {

    var randomNumber;

    var numberOfGuesses;

		newGame();

    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);
    });

    /*--- Click on NewGame, start new game */

    $(".new").click(newGame);

		$("#guessForm").submit(guessNumber);

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });

});


/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var newGame = function() {

    randomNumber = getRandomInt(1, 100);
		console.log(randomNumber);
    numberOfGuesses = 0;
    $("#count").text(numberOfGuesses);
    $("#guessList").text("");
    $("#feedback").text("Make a Guess");

};

var guessNumber = function() {
    var guessedNumber = $("#userGuess").val();

  if (isNaN(guessedNumber)) {
    alert("Must Input Number!");
    return false;
  }

    numberOfGuesses++;

		$("#userGuess").val("");

		guessedNumber = parseInt(guessedNumber);

    var distance = Math.abs(randomNumber - guessedNumber);

    if (distance >= 50) {
        $("#feedback").text("Ice Cold");
    } else if (distance > 30) {
        $("#feedback").text("Cold");
    } else if (distance > 20) {
				$("#feedback").text("Warm");
    } else if (distance > 10) {
				$("#feedback").text("Hot");
		} else if (distance > 0) {
			 	$("#feedback").text("Very Hot");
		} else {
			$("#feedback").text("You Win!!");
		}

  $("#count").text(numberOfGuesses);
  $("#guessList").append(guessedNumber + "<br>");

		return false;

};
