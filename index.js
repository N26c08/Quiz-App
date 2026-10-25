const question = {
  title: "Was ist die Hauptstadt von Deutschland?",
  answers: ["Hamburg", "München", "Berlin", "Hannover"],
  answer: 2,
};
const question2 = {
  title: "Was ist die Hauptstadt von Italien?",
  answers: ["Rom", "Mailand", "Neapel", "Turin"],
  answer: 0,
};
const question3 = {
  title: "Welcher Ball ist der kleinste?",
  answers: ["Basketball", "Fußball", "Volleyball", "Golfball"],
  answer: 3,
};
const question4 = {
  title: "Wer malte die Mona Lisa?",
  answers: ["Leonardo da Vinci", "Leonardo DiCaprio ", "van Gogh", "Picasso"],
  answer: 0,
};
const question5 = {
  title: "Was ergibt 5+5 = ?",
  answers: [1, 10, 6, 9],
  answer: 1,
};

let questions = [question, question2, question3, question4, question5];
let buttonsIds = ["answer-one", "answer-two", "answer-three", "answer-four"];
let currentQuestion = -1;
let answered = false;

function renderQuestion(getQuestions) {
  const titleQuestion = document.getElementById("question");
  titleQuestion.textContent = getQuestions.title;
  for (let i = 0; i < buttonsIds.length; i++) {
    const buttonsAnswer = document.getElementById(buttonsIds[i]);
    buttonsAnswer.textContent = getQuestions.answers[i];
  }
}
const nextButton = document.getElementById("next");
nextButton.addEventListener("click", function () {
  currentQuestion++;
  if (currentQuestion === questions.length) {
    currentQuestion = 0;
  }
  const titleQuestion = document.getElementById("question");
  titleQuestion.style.display = "block";
  const buttonsAnswer = document.querySelector(".answerbuttons");
  buttonsAnswer.style.display = "grid";

  renderQuestion(questions[currentQuestion]);
  resetAnswers();
  answered = false;
});
for (let i = 0; i < buttonsIds.length; i++) {
  const clickButton = document.getElementById(buttonsIds[i]);

  clickButton.addEventListener("click", function () {
    if (answered === true) {
      return;
    }
    answered = true;
    if (questions[currentQuestion].answer === i) {
      clickButton.classList.add("answer-right");
      alert("Richtig");
    } else {
      clickButton.classList.add("answer-wrong");
      const correctButton = document.getElementById(
        buttonsIds[questions[currentQuestion].answer],
      );
      correctButton.classList.add("answer-right");
      alert("Falsch");
    }
  });
}

function resetAnswers() {
  for (let i = 0; i < buttonsIds.length; i++) {
    const button = document.getElementById(buttonsIds[i]);
    button.classList.remove("answer-right", "answer-wrong");
  }
}

const solutionButton = document.getElementById("solution");

solutionButton.addEventListener("click", function () {
  if (currentQuestion === -1) {
    return;
  }

  const correctButton = document.getElementById(
    buttonsIds[questions[currentQuestion].answer],
  );

  correctButton.classList.add("answer-right");
  answered = true;
});
