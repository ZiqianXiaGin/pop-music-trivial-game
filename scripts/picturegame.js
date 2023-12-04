document.addEventListener("DOMContentLoaded", function() {
  const questions = [
    { img: "images/strawberry cigarette.png", answers: ["Strawberry Cigarette", "Cigarette Strawberry", "Strawberry Smoke", "Smoke Strawberry"], correct: 0 },
    { img: "images/marry you.png", answers: ["Get Married", "Marry You", "We're Married", "Marry Me"], correct: 1 },
    { img: "images/knocking on heaven's door.png", answers: ["Knocking On Heaven's Door", "Knock Knock", "Knocking On Your Door", "Knock On the Door"], correct: 0 },
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
      const questionContainer = document.getElementById('question');
      questionContainer.innerHTML = ''; 


      const image = document.createElement('img');
      image.src = currentQuestion.img;
      image.alt = 'Question Image';
      questionContainer.appendChild(image);

      const options = document.getElementById('answers');
      options.innerHTML = '';

      currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.addEventListener('click', function() { checkAnswer(index, currentQuestion.correct); });
        options.appendChild(button);
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


  function checkAnswer(index, correctAnswer) {
    clearInterval(timerId);
    if (index === correctAnswer) {
      score++;
      correctEffect();
      document.getElementById('score').textContent = `Score: ${score}`;
      setTimeout(displayQuestion, 1000);
    }
    else {
      endGame ();
    }
  }

  function startTimer() {
    let timeLeft = 10;
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