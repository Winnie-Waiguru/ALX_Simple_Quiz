document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("submit-answer")
    .addEventListener("click", function checkAnswer() {
      let correctAnswer = "4";
      let userAnswer = document.querySelector(
        'input[name="quiz"]:checked'
      )?.value;
      const feedback = document.getElementById("feedback");

      if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
      } else {
        feedback.textContent = "That's incorrect. Try again!";
      }
    });
});
