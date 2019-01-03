
wordList = [
    "Spiderman",
    "Venom",
    "Iron Man",
    "Hawk Eye",
    "Hulk",
    "Black Panther",
    "Ant Man",
    "Black Widow",
    "Dead Pool",
    "Wolverine",
    "Cyclops",
    "Phoenix"
];
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
];
captionListHint = [
    "A student, a photographer, and your friendly neighborhood hero.",
    "A failed photographer, he's not Peter Parker's biggest fan.",
    "He's gonna die in Avengers Endgame.",
    "His super power honestly isn't really a super power.",
    "Don't make him angry!",
    "WAKANDA FOREVAHHH!!",
    "He can kick your ass without you ever even seeing it.",
    "She's an assassin with a mysterious past.",
    "He's got the jokes and the healing factor to back it up.",
    "Don't mess with him Bub.",
    "Stare deeply into his eyes, and you'll die.",
    "A truly tragic hero."
]
captionListAnswer = [
    "I don't feel so good...",
    "WE ARE VENOM.",
    "R.I.P.",
    "I'm out of arrows!",
    "Don't make him angry!",
    "I never freeze.",
    "ANT-hony!!",
    "Beautiful, but deadly..",
    "*Fourth Wall Breaking*",
    "*SNIKT!*",
    "Everything is always red.",
    "KILL EVERYONE!!"
]
var random = Math.floor(Math.random() * wordList.length);
var basePath = "./img/alterEgo/";

var image = document.getElementById("photo");
image.src = basePath + imgList[random];

var cap = document.getElementById("caption");
cap.innerHTML = captionListHint[random];

var word = wordList[random];
var wordArray = word.split("");
var wordArrayBlank = word.split("");
var wrongGuesses = [];
attempts = 6;



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
for (var x = 0; x < 26; x++) {
    var butt = document.querySelectorAll("button");
    butt[x].addEventListener("click", function () {
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
                "color": "yellow",
                "background-color": "red",
                "font-weight": "bolder"
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


    //--------------Win State---------------//
    if (!wordArrayBlank.includes(" __ ")) {
        var secondPath = "./img/hero/";

        $("#photo").fadeOut(
            function () {
                $(this).attr('src', secondPath + imgList[random]).fadeIn(1000);
        });

        $("#caption").fadeOut(
            function () {
                $(this).html(captionListAnswer[random]).fadeIn(1000);
        });
    }

    var stone = document.querySelectorAll("#stone");
    console.log(stone[0]);

    //-------Color Wrong Guess---------------//
    if (counter == wordArray.length) {
        $("button[value=" + userGuess + "]").css({
            "color": "purple",
            "background-color": "black"
        });

        attempts--; 

        switch(attempts)  {
            case 5:
                $("#stone1").fadeOut();
            break;
            case 4:
                $("#stone6").fadeOut();
            break;
            case 3:
                $("#stone2").fadeOut();
            break;
            case 2:
                $("#stone5").fadeOut();
            break;
            case 1:
                $("#stone3").fadeOut();
            break;
            case 0:
                $("#stone4").fadeOut(
                    function () {
                        wait(500);
                        alert("YOU LOSE");
                });
        }
    }
    document.getElementById("blank").innerHTML = wordArrayBlank.join(" ");
}

function reload(){
    location.reload();
}


function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}


