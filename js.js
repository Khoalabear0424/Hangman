

//-----------Create Word List-------------//
wordList = ["Harry Potter", "Ezri", "Iron Man", "Wonder Woman", "Hulk", "Yo Momma", "Miles Morales", "Superman", "Legolas", "El Chupacabra"];

var random = Math.floor(Math.random() * wordList.length);
var word = wordList[random];
console.log(word);

var wordArray = word.split("");
var wordArrayBlank = word.split("");
var wrongGuesses = [];


//-----------Display Blank Words-----------//
for (var x = 0; x < wordArrayBlank.length; x++) {
    if (wordArrayBlank[x] != " ") {
        wordArrayBlank[x] = " __ ";
    } else {
        wordArrayBlank[x] = "&nbsp &nbsp";
    }
}
document.getElementById("blank").innerHTML = wordArrayBlank.join(" ");


//------------Add Event Listner to Buttons--------//
for (var x = 0; x<26; x++){
    var butt = document.querySelectorAll("button");
    butt[x].addEventListener("click", function(){
        guessFunction(this);
    });
}


//------------Reveals Correct Guesses---------//
function guessFunction(letter) {

    var userGuess = letter.getAttribute('value');
    var counter = 0;

    for (var x = 0; x < wordArray.length; x++) {
        if (userGuess.toUpperCase() == wordArray[x].toUpperCase()) {
            wordArrayBlank[x] = wordArray[x];
            $("button[value=" + userGuess + "]").css({
                "color":"white",
                "background-color":"green"
            });
        } else {
            //--------Collects Wrong Guesses------//
            counter++;
            if (counter == wordArray.length && !wrongGuesses.includes(userGuess)) {
                wrongGuesses.push(userGuess);
            }
        }
    }
//-------Colors Red to Wrong Guess
    if(counter==wordArray.length){
        $("button[value=" + userGuess + "]").css({
            "color":"white",
            "background-color":"red"
        });
    }
    document.getElementById("wrong").innerHTML = "Incorrect Guesses: " + wrongGuesses.join(" ");
    document.getElementById("blank").innerHTML = wordArrayBlank.join(" ");
}


