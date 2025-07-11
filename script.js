const questions = [
  { text: "What does HTML stand for?", answer: "hypertext markup language" },
  { text: "What keyword is used to define a function in JavaScript?", answer: "function" },
  { text: "Which loop checks the condition after running the loop body once?", answer: "do while" },
  { text: "What does CSS stand for?", answer: "cascading style sheets" },
  { text: "What is the default port for HTTP?", answer: "80" }
];
let currentIndex = 0;
let score = 0;
let currentScoringCallback = null;
function showQuestion() {
  if (currentIndex < questions.length) {
    document.getElementById("questionText").innerText = questions[currentIndex].text;
    document.getElementById("answerInput").value = "";
  } else {
    document.getElementById("questionText").innerText = "✅ Quiz Complete!";
    document.getElementById("answerInput").style.display = "none";
    document.querySelector(".buttons").style.display = "none";
    document.getElementById("scoreOutput").innerText = `🎉 Your Score: ${score}/${questions.length}`;
  }
  updateProgressBar();
}

function nextQuestion(scoringCallback) {
  currentScoringCallback = scoringCallback;
  const userAnswer = document.getElementById("answerInput").value.trim().toLowerCase();
  const correctAnswer = questions[currentIndex].answer.toLowerCase();
  if (scoringCallback(userAnswer, correctAnswer)) 
    {
    score++;
    }

  currentIndex++;
  showQuestion();
}
function strictScoring(user, correct) {
  return user === correct;
}

function lenientScoring(user, correct) {
  return user.includes(correct) || correct.includes(user);
}

function updateProgressBar() {
  const progress = (currentIndex / questions.length) * 100;
  document.getElementById("progressBar").style.width = `${progress}%`;
}

window.onload = showQuestion;
