// Function to check the user's answer
function checkAnswer() {
    // The correct answer
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Element to display feedback
    const feedbackElement = document.getElementById('feedback');

    // Check if an answer is selected and compare with correct answer
    if (userAnswer.value === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        // If no answer is selected or incorrect answer
        feedbackElement.textContent = userAnswer ? "That's incorrect. Try again!" : "Please select an answer.";
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
