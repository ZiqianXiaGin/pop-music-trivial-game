
    document.addEventListener("DOMContentLoaded", function() {
      const questions = [
      { question: "Romeo take me, somewhere we can be alone", answers: ["Taylor Swift", "Ariana Grande", "Beyonce", "Adele"], correct: 0 },
      { question: "Romeo ", answers: ["Taylor Swift", "Ariana Grande", "Beyonce", "Adele"], correct: 0 },
      { question: "Romeo take me, ", answers: ["Taylor Swift", "Ariana Grande", "Beyonce", "Adele"], correct: 0 },
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
          document.getElementById('question').textContent = currentQuestion.question;
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