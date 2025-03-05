// this functtion will generate a number
function RandomNumber()
{
    let digits = new Set();
    while (digits.size < 4)
    {
        let randomDigit = Math.floor(Math.random()*10);
        digits.add(randomDigit);
    }
    return Array.from(digits).join("");
}

// this function will do the checking stuff and then add the result to the last empty div
let startGameButton = document.getElementById("StartButton")
startGameButton.addEventListener('click',startgame )
function startgame ()
{
    let secretNumber = RandomNumber();
    document.getElementById('GuessNumber').value = secretNumber ;
    document.getElementById('GuessNumber').disabled = true ;
    document.getElementById('GuessNumber').type = 'password' ;
    console.log(secretNumber);
}

let giveUpButton = document.getElementById('giveUpButton')
giveUpButton.addEventListener('click',GiveUp)
function GiveUp()
{
    document.getElementById('GuessNumber').type = 'text' ;
}

let checkbutton = document.getElementById("checkbutton")
checkbutton.addEventListener('click',checkNumbers)
function checkNumbers() {
    let ComputerNumber = document.getElementById('GuessNumber').value;
    let UserNumber = document.getElementById('UserNumber').value;

    let feedbackMessage = '';
    
    // Check if the User's guess matches the Computer's number
    if (ComputerNumber === UserNumber) {
        alert("Congratulations! You guessed the correct number!")
        feedbackMessage = "Congratulations! You guessed the correct number!";
    } else {
        let correctDigits = 0;
        let correctPositions = 0;

        // Compare each digit of the user's guess with the computer's number
        for (let i = 0; i < 4; i++) {
            if (ComputerNumber[i] === UserNumber[i]) {
                correctPositions++; // Correct digit in the correct position
            } else if (ComputerNumber.includes(UserNumber[i])) {
                correctDigits++; // Correct digit but wrong position
            }
        }

        feedbackMessage = 
            `Your guess: ${UserNumber} <br>` +
            `${correctDigits} digits are correct but in the wrong position. <br>` +
            `${correctPositions} digits are in the correct position.`;
    }

    // Store the result in the div
    let resultDiv = document.querySelector('.result');
    let resultText = document.createElement('p');
    resultText.innerHTML = feedbackMessage; 
    resultDiv.appendChild(resultText);
    document.getElementById('UserNumber').value = '';
}


