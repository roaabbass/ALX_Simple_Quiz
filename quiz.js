function checkAnswer() {
    const correctAnswer = "4";
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    if (userAnswer) {
        const feedback = document.getElementById("feedback");
        if (userAnswer.value === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        alert("Please select an answer.");
    }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);
