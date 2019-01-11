
wordList = [
    "SPIDERMAN",
    "VENOM",
    "IRON MAN",
    "HAWK EYE",
    "HULK",
    "BLACK PANTHER",
    "ANT MAN",
    "BLACK WIDOW",
    "DEAD POOL",
    "WOLVERINE",
    "CYCLOPS",
    "PHOENIX"
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
    "He's the fearless leader of the Avengers",
    "His super power honestly isn't really a super power.",
    "Don't make him angry!",
    "WAKANDA FOREVAHHH!!",
    "He can kick your ass without you ever even seeing it.",
    "She's an assassin with a mysterious past.",
    "He's got the jokes and the healing factor to back it up.",
    "Don't mess with him..Bub.",
    "Stare deeply into his eyes, and you'll die.",
    "She's really nice, until she kills everyone by accident.."
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
var basePath = "./img/alterEgo/";
var secondPath = "./img/hero/";
var image = document.querySelector("#photo");
var cap = document.querySelector("#caption");
win = 0;
loss = 0;

var canClick = true;

//------------Add Event Listner to Buttons--------//
for (var x = 0; x < 26; x++) {
    var butt = document.querySelectorAll("button");
    butt[x].addEventListener("click", function () {
        guessFunction(this);
    });
}

function startGame() {
    canClick = true;

    $("iframe").replaceWith("<img id='photo' src='#' class='figure-img img-fluid rounded'>");
    image = document.querySelector("#photo");

    guess = [];
    random = Math.floor(Math.random() * wordList.length);

    image.src = basePath + imgList[random];
    cap.innerHTML = captionListHint[random];

    word = wordList[random];
    wordArray = word.split("");
    wordArrayBlank = word.split("");
    attempts = 6;


    //-----------Display Blank Words-----------//
    for (var x = 0; x < wordArrayBlank.length; x++) {
        if (wordArrayBlank[x] != " ") {
            wordArrayBlank[x] = " __ ";
        } else {
            wordArrayBlank[x] = "&nbsp &nbsp";
        }
    }
    document.querySelector("#blank").innerHTML = wordArrayBlank.join(" ");

    //----------------RELOAD GAME---------------//
    document.querySelector("#stone1").className = 'fadeIn';
    document.querySelector("#stone2").className = 'fadeIn';
    document.querySelector("#stone3").className = 'fadeIn';
    document.querySelector("#stone4").className = 'fadeIn';
    document.querySelector("#stone5").className = 'fadeIn';
    document.querySelector("#stone6").className = 'fadeIn';

    for (var x = 0; x < (butt.length - 1); x++) {
        butt[x].style.color = "#212529";
        butt[x].style.backgroundColor = "#f8f9fa";
        butt[x].style.fontWeight = "400";
    }
}

//------------Reveals Correct Guesses---------//
function guessFunction(letter) {

    if (canClick == false) {
        return false
    };

    var userGuess = letter.getAttribute('value');
    var counter = 0;

    for (var x = 0; x < wordArray.length; x++) {
        if (userGuess.toUpperCase() == wordArray[x].toUpperCase()) {
            wordArrayBlank[x] = wordArray[x];

            var butt = document.querySelector("button[value=" + userGuess + "]");

            butt.style.color = "yellow";
            butt.style.backgroundColor = "#dc3545";
            butt.style.fontWeight = "bolder";

        } else {
            //--------Collects Wrong Guesses------//
            counter++;
        }
    }

    //--------------Win State---------------//
    if (!wordArrayBlank.includes(" __ ")) {

        $("#photo").fadeOut(
            function () {
                $(this).attr('src', secondPath + imgList[random]).fadeIn(1000);
            });

        $("#caption").fadeOut(
            function () {
                $(this).html(captionListAnswer[random]).fadeIn(1000);
            });

        win++;
        document.querySelector("#score1").innerHTML = win;
    }

    //-------Color Wrong Guess---------------//
    if (counter == wordArray.length && !guess.includes(letter.value)) {
        guess.push(letter.value);
        var butt = document.querySelector("button[value=" + userGuess + "]");

        butt.style.color = "purple";
        butt.style.backgroundColor = "black";

        attempts--;

        switch (attempts) {
            case 5:
                document.querySelector("#stone1").className = 'fadeOut';
                break;
            case 4:
                document.querySelector("#stone6").className = 'fadeOut';
                break;
            case 3:
                document.querySelector("#stone2").className = 'fadeOut';
                break;
            case 2:
                document.querySelector("#stone5").className = 'fadeOut';
                break;
            case 1:
                document.querySelector("#stone3").className = 'fadeOut';
                break;
            case 0:
                document.querySelector("#stone4").className = 'fadeOut';
                $('#photo').replaceWith('<iframe width="560" height="315" src="https://www.youtube.com/embed/Ijrdwf7LPu0?autoplay=1&showinfo=0&controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe>');
                loss++
                document.querySelector("#score2").innerHTML = loss;
                document.querySelector("#blank").innerHTML = wordArray.join("");
                document.querySelector("#stone1").className = 'fadeIn';
                document.querySelector("#stone2").className = 'fadeIn';
                document.querySelector("#stone3").className = 'fadeIn';
                document.querySelector("#stone4").className = 'fadeIn';
                document.querySelector("#stone5").className = 'fadeIn';
                document.querySelector("#stone6").className = 'fadeIn';
                document.querySelector("#blank").innerHTML = wordArray.join(" ");
                canClick = false;
        }
    }
    if (canClick == true) {
        console.log("hello");
        document.querySelector("#blank").innerHTML = wordArrayBlank.join(" ");
    };
}

