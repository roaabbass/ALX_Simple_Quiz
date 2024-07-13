function checkAnswer() {
    const correctAnswer = "4"; // Identify the correct answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked'); // Retrieve the user's answer

    if (userAnswer) {
        const feedback = document.getElementById("feedback");
        if (userAnswer.value === correctAnswer) { // Compare user's answer with the correct answer
            feedback.textContent = "Correct! Well done."; // Provide feedback for the correct answer
        } else {
            feedback.textContent = "That's incorrect. Try again!"; // Provide feedback for the incorrect answer
        }
    } else {
        alert("Please select an answer."); // Alert if no answer is selected
    }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer); // Add an event listener to the "Submit Answer" button
