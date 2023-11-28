document.addEventListener("DOMContentLoaded", function() {
    const questions = [
      { question: "Romeo take me, somewhere we can be alone", answers: ["Taylor Swift", "Ariana Grande", "Beyonce", "Adele"], correct: 0 },
      
    ];
    let currentQuestion = 0;
    let score = 0;
    let timerId;
  
    function displayQuestion() {
      clearTimeout(timerId);
      if (currentQuestion < questions.length) {
        document.getElementById('question').textContent = questions[currentQuestion].question;
        const options = document.getElementById('answers');
        options.innerHTML = '';
        questions[currentQuestion].answers.forEach((answer, index) => {
          const button = document.createElement('button');
          button.textContent = answer;
          button.onclick = () => checkAnswer(index);
          options.appendChild(button);
        });
        startTimer();
      } else {
        endGame();
    }
  }
    function endGame() {
    alert('Game Over! Your score is: ' + score);
  }
  
    function startTimer() {
      let timeLeft = 10;
      document.getElementById('timer').textContent = timeLeft;
      timerId = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;
        if (timeLeft <= 0) {
          clearInterval(timerId);
          currentQuestion++;
          displayQuestion();
        }
      }, 1000);
    }
  
    function checkAnswer(index) {
      clearInterval(timerId);
      if (index === questions[currentQuestion].correct) {
        score++;
        document.getElementById('score').textContent = `Score: ${score}`;
      }
      currentQuestion++;
      displayQuestion();
    }
  
    displayQuestion();
  });