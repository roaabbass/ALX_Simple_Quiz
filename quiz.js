// Function to check the user's answer
function checkAnswer() {
    // The correct answer
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Element to display feedback
    const feedbackElement = document.getElementById('feedback');

    // Check if an answer is selected
   
   // Compare user's answer with the correct answer
if (userAnswer.value === correctAnswer) {
    feedbackElement.textContent = "Correct! Well done.";
} else if (userAnswer.value === null || userAnswer.value === "") {
    feedbackElement.textContent = "Please select an answer.";
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
