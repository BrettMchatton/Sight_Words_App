// Variables *******************************************
const nextBTN = document.getElementById("next-btn");
const startBTN = document.getElementById("start-btn");
const wordDisplay = document.getElementById("word-display");
const wordBox = document.getElementById("word-box");
var randomNumber = 0;


//Open Display *****************************************
startBTN.style.display = 'block';
nextBTN.style.display = 'none';
wordDisplay.style.display = 'none';
wordBox.style.display = 'none';

// Button Clicks  ***************************************
startBTN.addEventListener('click', function () {
    randomNumber = Math.floor((Math.random() * 100) + 1);
    changeWord();

    startBTN.style.display = 'none';
    nextBTN.style.display = 'block';
    wordDisplay.style.display = 'block';
    wordBox.style.display = 'block';
});

nextBTN.addEventListener('click', function () {
    randomNumber = Math.floor((Math.random() * 100) + 1);
    changeWord();
});

// Change Word *****************************************
function changeWord() {
    //Word one ****************************
    if (randomNumber == 1) {
        wordDisplay.innerHTML = 'I';
    }
    //Word two
    else if (randomNumber == 2) {
        wordDisplay.innerHTML = 'like';
    }
    //Word three
    else if (randomNumber == 3) {
        wordDisplay.innerHTML = 'the';
    }
    //Word four
    else if (randomNumber == 4) {
        wordDisplay.innerHTML = 'and';
    }
    //Word five
    else if (randomNumber == 5) {
        wordDisplay.innerHTML = 'as';
    }
    //Word six
    else if (randomNumber == 6) {
        wordDisplay.innerHTML = 'at';
    }
    //Word seven
    else if (randomNumber == 7) {
        wordDisplay.innerHTML = 'see';
    }
    //Word eight
    else if (randomNumber == 8) {
        wordDisplay.innerHTML = 'we';
    }
    //Word nine
    else if (randomNumber == 9) {
        wordDisplay.innerHTML = 'a';
    }
    //Word ten
    else if (randomNumber == 10) {
        wordDisplay.innerHTML = 'to';
    }

    // 11-20 ******************************************

    //Word eleven 
    else if (randomNumber == 11) {
        wordDisplay.innerHTML = 'can';
    }
    //Word twelve
    else if (randomNumber == 12) {
        wordDisplay.innerHTML = 'had';
    }
    //Word thirteen
    else if (randomNumber == 13) {
        wordDisplay.innerHTML = 'in';
    }
    //Word fourteen
    else if (randomNumber == 14) {
        wordDisplay.innerHTML = 'it';
    }
    //Word fifteen
    else if (randomNumber == 15) {
        wordDisplay.innerHTML = 'come';
    }
    //Word sixteen
    else if (randomNumber == 16) {
        wordDisplay.innerHTML = 'my';
    }
    //Word seventeen
    else if (randomNumber == 17) {
        wordDisplay.innerHTML = 'with';
    }
    //Word eighteen
    else if (randomNumber == 18) {
        wordDisplay.innerHTML = 'what';
    }
    //Word nineteen
    else if (randomNumber == 19) {
        wordDisplay.innerHTML = 'you';
    }
    //Word twenty
    else if (randomNumber == 20) {
        wordDisplay.innerHTML = 'are';
    }

    // 21-30 ******************************************

    //Word twenty-one 
    else if (randomNumber == 21) {
        wordDisplay.innerHTML = 'now';
    }
    //Word twenty-two
    else if (randomNumber == 22) {
        wordDisplay.innerHTML = 'not';
    }
    //Word twenty-three
    else if (randomNumber == 23) {
        wordDisplay.innerHTML = 'is';
    }
    //Word twenty-four
    else if (randomNumber == 24) {
        wordDisplay.innerHTML = 'of';
    }
    //Word twenty-five
    else if (randomNumber == 25) {
        wordDisplay.innerHTML = 'so';
    }
    //Word twenty-six
    else if (randomNumber == 26) {
        wordDisplay.innerHTML = 'but';
    }
    //Word twenty-seven
    else if (randomNumber == 27) {
        wordDisplay.innerHTML = 'from';
    }
    //Word twenty-eight
    else if (randomNumber == 28) {
        wordDisplay.innerHTML = 'on';
    }
    //Word twenty-nine
    else if (randomNumber == 29) {
        wordDisplay.innerHTML = 'this';
    }
    //Word thirty
    else if (randomNumber == 30) {
        wordDisplay.innerHTML = 'be';
    }

    // 31-40 ******************************************

    //Word thirty-one
    else if (randomNumber == 31) {
        wordDisplay.innerHTML = 'that';
    }
    //Word thirty-two
    else if (randomNumber == 32) {
        wordDisplay.innerHTML = 'will';
    }
    //Word thirty-three
    else if (randomNumber == 33) {
        wordDisplay.innerHTML = 'your';
    }
    //Word thirty-four
    else if (randomNumber == 34) {
        wordDisplay.innerHTML = 'for';
    }
    //Word thirty-five
    else if (randomNumber == 35) {
        wordDisplay.innerHTML = 'they';
    }
    //Word thirty-six
    else if (randomNumber == 36) {
        wordDisplay.innerHTML = 'up';
    }
    //Word thirty-seven
    else if (randomNumber == 37) {
        wordDisplay.innerHTML = 'his';
    }
    //Word thirty-eight
    else if (randomNumber == 38) {
        wordDisplay.innerHTML = 'them';
    }
    //Word thirty-nine
    else if (randomNumber == 39) {
        wordDisplay.innerHTML = 'said';
    }
    //Word fourty
    else if (randomNumber == 40) {
        wordDisplay.innerHTML = 'then';
    }

    // 41-50 ******************************************

    //Word fourty-one
    else if (randomNumber == 41) {
        wordDisplay.innerHTML = 'was';
    }
    //Word fourty-two
    else if (randomNumber == 42) {
        wordDisplay.innerHTML = 'all';
    }
    //Word fourty-three
    else if (randomNumber == 43) {
        wordDisplay.innerHTML = 'she';
    }
    //Word fourty-four
    else if (randomNumber == 44) {
        wordDisplay.innerHTML = 'when';
    }
    //Word fourty-five
    else if (randomNumber == 45) {
        wordDisplay.innerHTML = 'by';
    }
    //Word fourty-six
    else if (randomNumber == 46) {
        wordDisplay.innerHTML = 'he';
    }
    //Word fourty-seven
    else if (randomNumber == 47) {
        wordDisplay.innerHTML = 'there';
    }
    //Word fourty-eight
    else if (randomNumber == 48) {
        wordDisplay.innerHTML = 'or';
    }
    //Word fourty-nine
    else if (randomNumber == 49) {
        wordDisplay.innerHTML = 'were';
    }
    //Word fifty
    else if (randomNumber == 50) {
        wordDisplay.innerHTML = 'word';
    }

    // 51-60 ******************************************

    //Word fifty-one
    else if (randomNumber == 51) {
        wordDisplay.innerHTML = 'do';
    }
    //Word fifty-two
    else if (randomNumber == 52) {
        wordDisplay.innerHTML = 'have';
    }
    //Word fifty-three
    else if (randomNumber == 53) {
        wordDisplay.innerHTML = 'one';
    }
    //Word fifty-four
    else if (randomNumber == 54) {
        wordDisplay.innerHTML = 'out';
    }
    //Word fifty-five
    else if (randomNumber == 55) {
        wordDisplay.innerHTML = 'their';
    }
    //Word fifty-six
    else if (randomNumber == 56) {
        wordDisplay.innerHTML = 'use';
    }
    //Word fifty-seven
    else if (randomNumber == 57) {
        wordDisplay.innerHTML = 'an';
    }
    //Word fifty-eight
    else if (randomNumber == 58) {
        wordDisplay.innerHTML = 'each';
    }
    //Word fifty-nine
    else if (randomNumber == 59) {
        wordDisplay.innerHTML = 'which';
    }
    //Word sixty
    else if (randomNumber == 60) {
        wordDisplay.innerHTML = 'how';
    }

    // 61-70 ******************************************

    //Word sixty-one
    else if (randomNumber == 61) {
        wordDisplay.innerHTML = 'if';
    }
    //Word sixty-two
    else if (randomNumber == 62) {
        wordDisplay.innerHTML = 'other';
    }
    //Word sixty-three
    else if (randomNumber == 63) {
        wordDisplay.innerHTML = 'about';
    }
    //Word sixty-four
    else if (randomNumber == 64) {
        wordDisplay.innerHTML = 'many';
    }
    //Word sixty-five
    else if (randomNumber == 65) {
        wordDisplay.innerHTML = 'these';
    }
    //Word sixty-six
    else if (randomNumber == 66) {
        wordDisplay.innerHTML = 'some';
    }
    //Word sixty-seven
    else if (randomNumber == 67) {
        wordDisplay.innerHTML = 'her';
    }
    //Word sixty-eight
    else if (randomNumber == 68) {
        wordDisplay.innerHTML = 'would';
    }
    //Word sixty-nine
    else if (randomNumber == 69) {
        wordDisplay.innerHTML = 'make';
    }
    //Word seventy
    else if (randomNumber == 70) {
        wordDisplay.innerHTML = 'him';
    }

    // 71-80 ******************************************

    //Word seventy-one 
    else if (randomNumber == 71) {
        wordDisplay.innerHTML = 'into';
    }
    //Word seventy-two
    else if (randomNumber == 72) {
        wordDisplay.innerHTML = 'time';
    }
    //Word seventy-three
    else if (randomNumber == 73) {
        wordDisplay.innerHTML = 'has';
    }
    //Word seventy-four
    else if (randomNumber == 74) {
        wordDisplay.innerHTML = 'look';
    }
    //Word seventy-five
    else if (randomNumber == 75) {
        wordDisplay.innerHTML = 'two';
    }
    //Word seventy-six
    else if (randomNumber == 76) {
        wordDisplay.innerHTML = 'more';
    }
    //Word seventy-seven
    else if (randomNumber == 77) {
        wordDisplay.innerHTML = 'write';
    }
    //Word seventy-eight
    else if (randomNumber == 78) {
        wordDisplay.innerHTML = 'go';
    }
    //Word seventy-nine
    else if (randomNumber == 79) {
        wordDisplay.innerHTML = 'number';
    }
    //Word eighty
    else if (randomNumber == 80) {
        wordDisplay.innerHTML = 'no';
    }

    // 81-90 ******************************************

    //Word eighty-one
    else if (randomNumber == 81) {
        wordDisplay.innerHTML = 'way';
    }
    //Word eighty-two
    else if (randomNumber == 82) {
        wordDisplay.innerHTML = 'could';
    }
    //Word eighty-three
    else if (randomNumber == 83) {
        wordDisplay.innerHTML = 'people';
    }
    //Word eighty-four
    else if (randomNumber == 84) {
        wordDisplay.innerHTML = 'than';
    }
    //Word eighty-five
    else if (randomNumber == 85) {
        wordDisplay.innerHTML = 'first';
    }
    //Word eighty-six
    else if (randomNumber == 86) {
        wordDisplay.innerHTML = 'water';
    }
    //Word eighty-seven
    else if (randomNumber == 87) {
        wordDisplay.innerHTML = 'been';
    }
    //Word eighty--eight
    else if (randomNumber == 88) {
        wordDisplay.innerHTML = 'call';
    }
    //Word eighty-nine
    else if (randomNumber == 89) {
        wordDisplay.innerHTML = 'who';
    }
    //Word ninety
    else if (randomNumber == 90) {
        wordDisplay.innerHTML = 'am';
    }

    // 91-100 ******************************************

    //Word ninety-one
    else if (randomNumber == 91) {
        wordDisplay.innerHTML = 'its';
    }
    //Word ninety-two
    else if (randomNumber == 92) {
        wordDisplay.innerHTML = 'find';
    }
    //Word ninety-three
    else if (randomNumber == 93) {
        wordDisplay.innerHTML = 'long';
    }
    //Word ninety-four
    else if (randomNumber == 94) {
        wordDisplay.innerHTML = 'down';
    }
    //Word ninety-five
    else if (randomNumber == 95) {
        wordDisplay.innerHTML = 'day';
    }
    //Word ninety-six
    else if (randomNumber == 96) {
        wordDisplay.innerHTML = 'did';
    }
    //Word ninety-seven
    else if (randomNumber == 97) {
        wordDisplay.innerHTML = 'get';
    }
    //Word ninety-eight
    else if (randomNumber == 98) {
        wordDisplay.innerHTML = 'made';
    }
    //Word ninety-nine
    else if (randomNumber == 99) {
        wordDisplay.innerHTML = 'may';
    }
    //Word one-hundred
    else if (randomNumber == 100) {
        wordDisplay.innerHTML = 'part';
    }

    


    //Error ****************************************
    else {
        wordDisplay.innerHTML = 'word not assigned';
        console.error('word not assigned');
    }
};
