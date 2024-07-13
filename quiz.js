// Function to check the user's answer
function checkAnswer() {
    // The correct answer
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Element to display feedback
    const feedbackElement = document.getElementById('feedback');

    // Check if an answer is selected
    if (userAnswer === null) {
        feedbackElement.textContent = "Please select an answer.";
    } else if (userAnswer.value === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the "Submit Answer" button
document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit-answer');
    if (submitButton) {
        submitButton.addEventListener('click', checkAnswer);
    }
});
