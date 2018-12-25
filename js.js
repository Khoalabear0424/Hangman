

//-----------Create Word List-------------//
wordList = ["Spiderman", "Venom", "Iron Man", "Hawk Eye", "Hulk", "Black Panther", "Ant Man", "Black Widow", "Dead Pool", "Wolverine", "Cyclops", "Phoenix"];

//-------------Img List-----------------//
imgList = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
    "9.png",
    "10.png",
    "11.png",
    "12.png"
]

var random = Math.floor(Math.random() * wordList.length);
var basePath = "./img/";

var image = document.getElementById("photo");
image.src=basePath+imgList[random];



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
            // if (counter == wordArray.length && !wrongGuesses.includes(userGuess)) {
            //     wrongGuesses.push(userGuess);
            // }

            //^^ THis was used to display incorrect guesses but since i added red backgrounds to incorrect guesses, dont need this anymore
        }
    }
    
    //-------Colors Red to Wrong Guess
    if(counter==wordArray.length){
        $("button[value=" + userGuess + "]").css({
            "color":"white",
            "background-color":"red"
        });
    }
    
    function wait(ms){
        var start = new Date().getTime();
        var end = start;
        while(end < start + ms) {
            end = new Date().getTime();
        }
    }
    
    document.getElementById("blank").innerHTML = wordArrayBlank.join(" ");
}

