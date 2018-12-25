

//-----------Create Word List-------------//
wordList = ["Spiderman", "Venom", "Iron Man", "Hawk Eye", "Hulk", "Black Panther", "Ant Man", "Black Widow", "Dead Pool", "Wolverine", "Cyclops", "Phoenix"];

//-------------Img List-----------------//
imgList = [
    "https://www.syfy.com/sites/syfy/files/wire/legacy/34038.jpg",
    "https://www.gannett-cdn.com/presto/2018/10/03/USAT/bb930017-108b-47cc-9d0b-47a5eefb734f-GW-PUBLICITY-00187_r.jpg?crop=5999,3374,x1,y62&width=3200&height=1680&fit=bounds",
    "https://i.ytimg.com/vi/yKHeEOoMw64/maxresdefault.jpg",
    "https://thecineasteslament.files.wordpress.com/2011/12/jeremy-renner.jpg",
    "https://dceptiongaming.files.wordpress.com/2016/02/1414472485.jpg",
    "https://media.vanityfair.com/photos/5a7a33609b38580e8603ca37/master/w_768,c_limit/Black-Panther.jpg",
    "http://images.fandango.com/images/fandangoblog/Marvel_AntMan-150601.jpg",
    "https://data.whicdn.com/images/136232434/original.jpg",
    "https://cdn-static.denofgeek.com/sites/denofgeek/files/2016/02/deadpool_face.jpg",
    "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/10/1489149452-wolverine-surprise-hugh-jackman-wants-to-be-wolverine-forever-and-here-s-how-he-can-do-it.jpeg?resize=480:*",
    "https://static1.srcdn.com/wordpress/wp-content/uploads/X-Men-Apocalypse-Cyclops-Tye-Sheridan-Hi-Res1.jpg",
    "https://i.amz.mshcdn.com/Wm09wUKlO6fa7l4jH0gDP3zhCkk=/950x534/filters:quality(90)/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F209004%2F24136897352_c5d0ac2fa3_o.jpg"
]

console.log(imgList[0]);


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

