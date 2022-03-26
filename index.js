const prompt = require('prompt-sync')();

HangManPictures = ["\n  +---+\n  |   |\n      |\n      |\n      |\n      |\n=========",

    "\n  +---+\n  |   |\n  O   |\n      |\n      |\n      |\n=========",

    "\n  +---+\n  |   |\n  O   |\n  |   |\n      |\n      |\n=========",

    "\n  +---+\n  |   |\n  O   |\n /|   |\n      |\n      |\n=========",

    "\n  +---+\n  |   |\n  O   |\n /|\\  |\n      |\n      |\n=========",

    "\n  +---+\n  |   |\n  O   |\n /|\\  |\n /\    |\n      |\n=========",

    "\n  +---+\n  |   |\n  O   |\n /|\\  |\n / \\  |\n      |\n========="
]
wordList = ["the", "to", "of", "and", "a", "an", "in", "that", "have", "for", "not", "with", "from", "will", "once", "would", "there", "their", "what", "which", "doctor", "time", "take", "year", "good", "dear", "people", "could", "state", "back", "bench", "used", "given", "mostly", "history", "information", "govenment", "system", "computer", "system", "hello", "world", "reading", "theory", "law", "order", "europe", "africa", "asia", "oceania", "america", "antarctica", "video", "tape", "country", "sweden"]

function wrong() {
    wrongCount++;
    pointsLeft = 7 - wrongCount;
    console.log("You have gotten " + wrongCount + " guesses wrong\nYou have " + pointsLeft + " left")
    wrongInputArray[wrongCount] = input
    switch (wrongCount) {
        case 1:
            console.log(HangManPictures[0]);
            break;
        case 2:
            console.log(HangManPictures[1]);
            break;
        case 3:
            console.log(HangManPictures[2]);
            break;
        case 4:
            console.log(HangManPictures[3]);
            break;
        case 5:
            console.log(HangManPictures[4]);
            break;
        case 6:
            console.log(HangManPictures[5]);
            break;
        case 7:
            console.log(HangManPictures[6]);
            break;
    }
    console.log("Blurred Word is " + blurredArray);

}

function playHangman() {
    word = wordList[Math.floor(Math.random() * wordList.length)];
    //console.log("Word is " + word);
    console.log("Word has the length of " + word.length)
    blurredArray = []
    for (i = 0; i < word.length; i++) {
        blurredArray[i] = "_"
    }
    console.log("Blurred Word is " + blurredArray);
    wrongCount = 0;
    wrongInputArray = [];

    while (true) {
        input = prompt("What is your input letter? ");
        input = input.toLowerCase();
        if (word == input) {
            console.log("\nCorrect " + word + " is the correct word");
            break;
        } else if (input.length != 1) {
            wrong()
        } else {
            // correct
            if (word.indexOf(input) != -1) {
                console.log("\nYes that is correct " + input + " is in the word");
                indices = [];
                for (i = 0; i < word.length; i++) {
                    if (word[i] === input) indices.push(i);
                }
                for (i = 0; i < indices.length; i++) {
                    blurredArray[indices[i]] = input
                }
                console.log("Blurred Word is " + blurredArray);

            }

            // incorrect
            else {
                console.log(input.toUpperCase() + " is not in the word");
                if (wrongInputArray.indexOf(input) != -1) {
                    console.log("\nThat letter has already been  used and is known to be wrong, Try entering another letter")
                } else {
                    wrong()
                }
            }
            // win screen
            blurredString = blurredArray.join()
            for (i = 0; i < word.length; i++) {
                blurredString = blurredString.replace(",", "")
            }
            if (blurredString == word) {
                console.log("\nCorrect " + word + " is the correct word")
                break;
            }
            // lose screen
            if (wrongCount == 7) {
                console.log("Game lost\nThe word was " + word)
                break;
            }
            // Displays wrong charcter
            if (wrongCount >= 1) {
                console.log("Wrong inputs are(" + wrongInputArray + ")")
            }
        }
    }
}
playHangman();
//play again?
while (true) {
    playAgain = prompt("Do you want to play again (yes/no)")
    if (playAgain == "yes" || playAgain == "Yes" || playAgain == "y" || playAgain == "Y") {
        console.log("\n\n\n\n\n\n\n\n\n\nPlaying again")
        playHangman()
    } else {
        console.log("Done! Game Over")
        break;
    }
}