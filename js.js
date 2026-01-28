const progressBar = document.getElementById("progressBar");
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

sections.forEach(section => {
  observer.observe(section);
});
const buttons = document.querySelectorAll(".choice");
const result = document.getElementById("result");
  
buttons.forEach(button => {
    button.addEventListener("click", () => {
      if (button.textContent === "2") {
        result.textContent = "Correct! 🎉";
        result.style.color = "limegreen";
      } else {
        result.textContent = "Try again!";
        result.style.color = "red";
      }
    });
});
const quiz = [
    {
      question: "How many electrons fit in the first shell?",
      answers: ["2", "4", "8"],
      correct: "2"
    },
    {
      question: "What is in the nucleus?",
      answers: ["Electrons", "Protons & neutrons", "Photons"],
      correct: "Protons & neutrons"
    },
    {
      question: "How many protons and electrons are in the element sodium",
      answers: ["11", "29", "10"],
      correct: "11"
    },
    {
      question: "How many neutrons are in the element sodium",
      answers: ["11.99", "13", "12"],
      correct: "12"
    }
    
];
  
  let current = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");
  const feedbackEl = document.getElementById("feedback");
  const scoreEl = document.getElementById("score");
  const nextBtn = document.getElementById("next");
  
  function loadQuestion() {
    feedbackEl.textContent = "";
    answersEl.innerHTML = "";
  
    const q = quiz[current];
    questionEl.textContent = q.question;
  
    q.answers.forEach(answer => {
      const btn = document.createElement("button");
      btn.textContent = answer;
      btn.onclick = () => checkAnswer(answer);
      answersEl.appendChild(btn);
    });
  
    scoreEl.textContent = `Score: ${score}`;
    const progress = (current / quiz.length) * 100;
    progressBar.style.width = progress + "%";
  }
  
  function checkAnswer(answer) {
    if (answer === quiz[current].correct) {
      feedbackEl.textContent = "Correct! 🎉";
      score++;
    } else {
      feedbackEl.textContent = "Wrong ❌";
    }
    scoreEl.textContent = `Score: ${score}`;
  }
  
  nextBtn.onclick = () => {
    current++;
    progressBar.style.width = ((current) / quiz.length) * 100 + "%";
    if (current < quiz.length) {
      loadQuestion();
    } else {
      questionEl.textContent = "Quiz finished!";
      answersEl.innerHTML = "";
      nextBtn.style.display = "none";
    }
  };
  
  loadQuestion();
  
    
