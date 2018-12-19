var wordList = ["Harry Potter", "Ezri", "Iron Man", "Wonder Woman", "Hulk", "Yo Momma", "Miles Morales", "Superman", "Legolas", "El Chupacabra"];

var random = Math.floor(Math.random()*wordList.length);
var word = wordList[random];
console.log(word);

var wordArray = word.split("");
var wordArrayBlank = word.split("");
var wrongGuesses =[];

//-----------Display Blank Words-----------//
for (var x = 0; x < wordArrayBlank.length; x++) {
    if (wordArrayBlank[x] != " ") {
        wordArrayBlank[x] = " __ ";
    } else {
        wordArrayBlank[x] = "&nbsp &nbsp";
    }
}
document.getElementById("blank").innerHTML = wordArrayBlank.join(" ");


//------------Reveals Correct Guesses---------//
function guessFunction() {
    
    var userGuess = document.getElementById("guess").value;
    console.log(userGuess);
    var counter = 0;

    for (var x = 0; x < wordArray.length; x++) {
        if (userGuess.toUpperCase() == wordArray[x].toUpperCase()) {
            wordArrayBlank[x] = wordArray[x];
        }else{

            //--------Collects Wrong Guesses------//
            counter ++;
            if(counter == wordArray.length && !wrongGuesses.includes(userGuess)){
                wrongGuesses.push(userGuess);
                
            }
        }
    }
    document.getElementById("guess").value = "";
    document.getElementById("wrong").innerHTML = "Incorrect Guesses: " + wrongGuesses.join(" ");
    document.getElementById("blank").innerHTML = wordArrayBlank.join(" ");
}

