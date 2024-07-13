// Function to check the user's answer
function checkAnswer() {
    // The correct answer
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Element to display feedback
    const feedbackElement = document.getElementById('feedback');

    // Default feedback message
    let feedbackMessage = "Please select an answer.";

    // Check if an answer is selected
    if (userAnswer) {
        // Check if user's answer is correct
        feedbackMessage = (userAnswer.value === correctAnswer) ? "Correct! Well done." : "That's incorrect. Try again!";
    }

    // Display feedback message
    feedbackElement.textContent = feedbackMessage;
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
