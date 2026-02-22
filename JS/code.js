let secretNumber = Math.floor(Math.random() * 20) + 1;
let attempts = 0;

function checkGuess() {
    const guess = Number(document.getElementById("guess").value);
    const message = document.getElementById("message");
    const attemptsDisplay = document.getElementById("attempts");

    if (!guess) {
        message.innerText = "Digite um número!";
        return;
    }

    attempts++;
    attemptsDisplay.innerText = attempts;

    if (guess === secretNumber) {
        message.innerText = "🎉 Você acertou!";
        secretNumber = Math.floor(Math.random() * 20) + 1;
        attempts = 0;
    } 
    else if (guess < secretNumber) {
        message.innerText = "📉 Muito baixo!";
    } 
    else {
        message.innerText = "📈 Muito alto!";
    }
}