document.addEventListener("DOMContentLoaded", function() {
  const questions = [
    { img: "images/strawberry cigarette.png", answers: ["Strawberry Cigarette", "Cigarette Strawberry", "Strawberry Smoke", "Smoke Strawberry"], correct: 0 },
    { img: "images/marry you.png", answers: ["Get Married", "Marry You", "We're Married", "Marry Me"], correct: 1 },
    { img: "images/knocking on heaven's door.png", answers: ["Knocking On Heaven's Door", "Knock Knock", "Knocking On Your Door", "Knock On the Door"], correct: 0 },
    { img: "images/counting star.png", answers: ["Three Stars", "Stars", "Pretty Stars", "Counting Star"], correct: 3},
    { img: "images/bleeding love.png", answers: ["Blood & Love", "Bleeding Love", "Love Bleeding", "Love to Death"], correct: 1},
    { img: "images/7 rings.png", answers: ["Rings", "7 Rings", "Ring 7", "5 Rings"], correct: 1},
    { img: "", answers: ["", "", "", ""], correct: 0},
    { img: "", answers: ["", "", "", ""], correct: 2},
    { img: "", answers: ["", "", "", ""], correct: 2},
    { img: "", answers: ["", "", "", ""], correct: 1},
    { img: "", answers: ["", "", "", ""], correct: 1},
    { img: "", answers: ["", "", "", ""], correct: 3},
    { img: "", answers: ["", "", "", ""], correct: 3},
    { img: "", answers: ["", "", "", ""], correct: 3},
    { img: "", answers: ["", "", "", ""], correct: 0},
    { img: "", answers: ["", "", "", ""], correct: 0},
    { img: "", answers: ["", "", "", ""], correct: 0},
    { img: "", answers: ["", "", "", ""], correct: 2},
    { img: "", answers: ["", "", "", ""], correct: 2},
    { img: "", answers: ["", "", "", ""], correct: 2},
    { img: "", answers: ["", "", "", ""], correct: 1},
    { img: "", answers: ["", "", "", ""], correct: 1},
    { img: "", answers: ["", "", "", ""], correct: 1},
    { img: "", answers: ["", "", "", ""], correct: 1},
    { img: "", answers: ["", "", "", ""], correct: 1},
    { img: "", answers: ["", "", "", ""], correct: 3},
    { img: "", answers: ["", "", "", ""], correct: 3},
    { img: "", answers: ["", "", "", ""], correct: 3},
    { img: "", answers: ["", "", "", ""], correct: 3},
    { img: "", answers: ["", "", "", ""], correct: 3},
    { img: "", answers: ["", "", "", ""], correct: 2},
    { img: "", answers: ["", "", "", ""], correct: 2},
    { img: "", answers: ["", "", "", ""], correct: 2},
    { img: "", answers: ["", "", "", ""], correct: 2},
    { img: "", answers: ["", "", "", ""], correct: 0},
    { img: "", answers: ["", "", "", ""], correct: 0},
    { img: "", answers: ["", "", "", ""], correct: 0},
    { img: "", answers: ["", "", "", ""], correct: 0},
    { img: "", answers: ["", "", "", ""], correct: 2},
    { img: "", answers: ["", "", "", ""], correct: 2},
    { img: "", answers: ["", "", "", ""], correct: 3},
    { img: "", answers: ["", "", "", ""], correct: 3},
    { img: "", answers: ["", "", "", ""], correct: 3},
    { img: "", answers: ["", "", "", ""], correct: 1},
    { img: "", answers: ["", "", "", ""], correct: 1},
    { img: "", answers: ["", "", "", ""], correct: 1},
    { img: "", answers: ["", "", "", ""], correct: 1},
    { img: "", answers: ["", "", "", ""], correct: 1},
    { img: "", answers: ["", "", "", ""], correct: 2},
    { img: "", answers: ["", "", "", ""], correct: 2},
    { img: "", answers: ["", "", "", ""], correct: 2}
  ];
  let usedQuestions = [];
  let score = 0;
  let timerId;

  function getRandomQuestion() {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * questions.length);
    } while (usedQuestions.includes(randomIndex));

    usedQuestions.push(randomIndex);
    if (usedQuestions.length === questions.length) {
      endGame();
      return null;
    }

    return questions[randomIndex];
  }


  function displayQuestion() {
    clearTimeout(timerId);
    const currentQuestion = getRandomQuestion();
    if (currentQuestion) {
      const questionImage = document.getElementById('questionImage');
      questionImage.src = currentQuestion.img; 
      const options = document.getElementById('answers');
      options.innerHTML = '';

      
      currentQuestion.answers.forEach((answer, index) => {

        const radio = document.createElement('input');
        radio.setAttribute('type', 'radio');
        radio.setAttribute('id', index);
        radio.setAttribute('value', answer);
        const label = document.createElement('label');
        label.setAttribute('for', index);
        label.textContent = answer;
        radio.addEventListener('click', function() { checkAnswer(index, currentQuestion.correct); });
        options.appendChild(radio);
        options.appendChild(label);

      });

      startTimer();
    }
  }

  function correctEffect() {
    const effectElement = document.createElement('div');
    effectElement.id = 'correctEffect';
    effectElement.textContent = '🎉';
    effectElement.style.fontSize = '60px';
    effectElement.style.position = 'absolute';
    effectElement.style.top = '55%';
    effectElement.style.left = '50%';
    effectElement.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(effectElement);
    setTimeout(() => {
      effectElement.remove();
    }, 1000); 
  }


  function secondChanceEffect() {
    const effectElement = document.createElement('div');
    effectElement.id = 'secondChanceEffect';
    effectElement.textContent = 'Try Again!';
    effectElement.style.fontSize = '70px';
    effectElement.style.position = 'absolute';
    effectElement.style.top = '55%';
    effectElement.style.left = '50%';
    effectElement.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(effectElement);
    setTimeout(() => {
      effectElement.remove();
    }, 1000); 
  }


  function checkAnswer(index, correctAnswer) {
    if (index === correctAnswer) {
      score++;
      correctEffect();
      document.getElementById('score').textContent = `Score: ${score}`;
      setTimeout(displayQuestion, 1000);
    } else {
      if (!secondChance) {
        secondChance = true;
        secondChanceEffect(); 
      } else {
        clearInterval(timerId); 
        endGame();
      }
    }
  }

  function startTimer() {
    let timeLeft = 20;
    document.getElementById('timer').textContent = timeLeft;
    timerId = setInterval(() => {
      timeLeft--;
      document.getElementById('timer').textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timerId);
        endGame();
      }
    }, 1000);
  }

  function endGame() {
    document.getElementById('finalScore').textContent = score;
    document.getElementById('gameOver').style.display = 'block';
    document.getElementById('game').style.display = 'none';
    createRestartButton();
  }
  
  function createRestartButton() {
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Start Over';
    restartButton.addEventListener('click', function() { restartGame(); });
    document.getElementById('gameOver').appendChild(restartButton);
  }

  function restartGame() {
    location.reload();
  }

  displayQuestion();
});
