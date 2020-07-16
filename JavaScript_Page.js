let move = 1;
let play = true;
var gameWinnerId = document.getElementById("gameWinner");
$('table tr td').click(function () {
	if ($(this).text() == "" && play) {
		if ((move % 2) == 1) {
			$(this).append('X');
			$(this).css('color', 'green');
		} else {
			$(this).append('O');
			$(this).css('color', 'red');
		}
		move++;
		if (findWinner() != -1 && findWinner() != "") {
			if (findWinner() == "X") {
				$('body').append('<div class="winner"><span>Winner</span>X</div>');
				$('body').append('<button onclick="location.reload()">Play Again</div>');
				$('.winner').css('background-color', 'green');
				$('button').css('color', 'green');
			}
			else if (findWinner() == -1) {
				$('body').append('<div class="winner"><span>Match drawn</span></div>');
				$('body').append('<button onclick="location.reload()">Play Again</div>');
				$('.winner').css('background-color', 'white');
				$('button').css('color', 'gold');
			}
			else {
				$('body').append('<div class="winner"><span>Winner</span>O</div>');
				$('body').append('<button onclick="location.reload()">Play Again</div>');
				$('.winner').css('background-color', 'red');
				$('button').css('color', 'red');
			}
			play = false;
		}
	}
});

//// Function for finding game winner
function findWinner() {
	player1 = $('table tr:nth-child(1) td:nth-child(1)').text();
	player2 = $('table tr:nth-child(1) td:nth-child(2)').text();
	player3 = $('table tr:nth-child(1) td:nth-child(3)').text();
	player4 = $('table tr:nth-child(2) td:nth-child(1)').text();
	player5 = $('table tr:nth-child(2) td:nth-child(2)').text();
	player6 = $('table tr:nth-child(2) td:nth-child(3)').text();
	player7 = $('table tr:nth-child(3) td:nth-child(1)').text();
	player8 = $('table tr:nth-child(3) td:nth-child(2)').text();
	player9 = $('table tr:nth-child(3) td:nth-child(3)').text();

	////Rows checking
	if ((player1 == player2) && (player2 == player3)) {
		return player3;
	}
	else if ((player4 == player5) && (player5 == player6)) {
		return player6;
	}
	else if ((player7 == player8) && (player8 == player9)) {
		return player9;
	}

	////Columns checking
	else if ((player1 == player4) && (player4 == player7)) {
		return player7;
	}
	else if ((player2 == player5) && (player5 == player8)) {
		return player8;
	}
	else if ((player3 == player6) && (player6 == player9)) {
		return player9;
	}

	////Diagonal checking
	else if ((player1 == player5) && (player9 == player5)) {
		return player9;
	}
	else if ((player3 == player5) && (player5 == player7)) {
		return player7;
	}

	//game draw
	else {
		return -1;
	}
}

