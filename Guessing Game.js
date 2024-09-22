let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

function checkGuess() {
    let gussesNumber = parseInt(userInput.value);
    if (gussesNumber > randomNumber) {
        gameResult.textContent = ("Too High! Try Agian.");
        gameResult.style.backgroundColor = "#1e217c";
    } else if (gussesNumber < randomNumber) {
        gameResult.textContent = ("Too Low! Try Agian.");
        gameResult.style.backgroundColor = "#1e217c";
    } else if (gussesNumber === randomNumber) {
        gameResult.textContent = ("Congratulations! You got it right.");
        gameResult.style.backgroundColor = "green";
    } else {
        gameResult.textContent = ("Invalid youser input!. Try Agian.");
        gameResult.style.backgroundColor = " red";

    }


}