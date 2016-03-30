console.log('testicles');

function startGame() {

    for (var i = 1; i <= 9; i = i + 1) {
        clearBox(i);
    }

    document.turn = "X";

    
    if (Math.random() < 0.5) {
        document.turn = "O";
    }

    document.winner = null;
    setMessage(document.turn + " gets to start.");

    // Start Again Click Link
    var startAgain = document.getElementById('startAgain');
    startAgain.onclick = startGame;
}

function setMessage(msg) {
    document.getElementById("message").innerText = msg;
}

function printObject(obj){
  for(var prop in obj){
    console.log('Property: ' + prop + ' Value: ' + obj[prop]);

  }

}

function nextMove(square) {
  console.log(document.turn);
    if (document.winner != null) {
        setMessage(document.winner + " already won the game.");
    } else if (!square.moveCharacter) {
      var img = document.createElement("img");
      
      if(document.turn == 'O') {
        img.src = "images/knots.gif"
      }else if (document.turn == 'X'){
        img.src = "images/corset.gif"
      }
        
        square.appendChild(img);  
        square.moveCharacter = document.turn;
        // console.log(square);
        // printObject(square);
        switchTurn();
    } else {
        setMessage("That square is already used.");
    }
}

function switchTurn() {

    if (checkForWinner(document.turn)) {
        setMessage("Congratulatons " + document.turn + "! You win!");
        document.winner = document.turn;
    } else if (checkForTie()) {
        setMessage("It's a Tie! Click Start Again To Play Again!");
    } else if (document.turn == "X") {
        document.turn = "O";
        setMessage("It's " + document.turn + "'s turn!");
    } else {
        document.turn = "X";
        setMessage("It's " + document.turn + "'s turn!");
    }


}

function checkForWinner(move) {
    var result = false;
    if (checkRow(1, 2, 3, move) ||
        checkRow(4, 5, 6, move) ||
        checkRow(7, 8, 9, move) ||
        checkRow(1, 4, 7, move) ||
        checkRow(2, 5, 8, move) ||
        checkRow(3, 6, 9, move) ||
        checkRow(1, 5, 9, move) ||
        checkRow(3, 5, 7, move)) {

        result = true;
    }
    return result;
}


function checkForTie() {
    for (var i = 1; i < 10; i++) {

        if (getBox(i) === undefined){
            // console.log(i);
            return false;
        }
            
    }
    return true;
}



function checkRow(a, b, c, move) {
    var result = false;
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
        result = true;
    }
    return result;
}

function getBox(number) {
  // return the src of the img tag that is inside this box.
    return document.getElementById("s" + number).moveCharacter;
}

function clearBox(number) {
    document.getElementById("s" + number).innerText = "";
}


