  document.addEventListener("DOMContentLoaded", function() {
      const questions = [
      { question: "Who sang 'Love Story'", answers: ["Taylor Swift", "Ariana Grande", "Beyonce", "Adele"], correct: 0 },
      { question: "Who sang 'Shape of You'", answers: ["Shawn Mendes", "Justin Biber", "Ed Sheeran", "Bruno Mars"], correct: 2 },
      { question: "Who sang 'Love Yourself'", answers: ["Chris Martin", "Miley Cyrus", "Ariana Grande", "Justin Biber"], correct: 3 },
      { question: "Who sang 'Havana'", answers: ["Camila Cabello", "Shakira", "Billie Eilish", "Miley Cyrus"], correct: 0 },
      { question: "Who sang 'Seven (feat. Latto)'", answers: ["BTS", "Jung Kook", "Jimin", "V"], correct: 1 },
      { question: "Who sang 'Bad Guy'", answers: ["Camila Cabello", "Katy Perry", "Billie Eilish", "Adele"], correct: 2 },
      { question: "Who sang 'Uptown Funk'", answers: ["", "", "", ""], correct: 2 },
      { question: "Who sang 'Rolling in the Deep'", answers: ["", "", "", ""], correct: 1 },
      { question: "Who sang 'Firework'", answers: ["", "", "", ""], correct: 0 },
      { question: "Who sang 'Shake It Off'", answers: ["", "", "", ""], correct: 0 },
      { question: "Who sang 'Happy'", answers: ["", "", "", ""], correct: 3 },
      { question: "Who sang 'Hello'", answers: ["", "", "", ""], correct: 3 },
      { question: "Who sang 'Roar'", answers: ["", "", "", ""], correct: 3 },
      { question: "Who sang 'Thinking Out Loud'", answers: ["", "", "", ""], correct: 1 },
      { question: "Who sang ''", answers: ["", "", "", ""], correct: 1 },
      { question: "Who sang ''", answers: ["", "", "", ""], correct: 2 },
      { question: "Who sang ''", answers: ["", "", "", ""], correct: 0 },
      { question: "Who sang ''", answers: ["", "", "", ""], correct: 0 },
      { question: "Who sang ''", answers: ["", "", "", ""], correct: 0 },
      { question: "Who sang ''", answers: ["", "", "", ""], correct: 3 },
      { question: "Who sang ''", answers: ["", "", "", ""], correct: 3 },
      { question: "Who sang ''", answers: ["", "", "", ""], correct: 3 },
      { question: "Who sang ''", answers: ["", "", "", ""], correct: 2 },
      { question: "Who sang ''", answers: ["", "", "", ""], correct: 2 },
      { question: "Who sang ''", answers: ["", "", "", ""], correct: 1 },
      { question: "Who sang ''", answers: ["", "", "", ""], correct: 1 },
      { question: "Who sang ''", answers: ["", "", "", ""], correct: 2 },
      { question: "Who sang ''", answers: ["", "", "", ""], correct: 3 },
      { question: "Who sang ''", answers: ["", "", "", ""], correct: 3 },
      { question: "Who sang ''", answers: ["", "", "", ""], correct: 1 },
      { question: "Who sang ''", answers: ["", "", "", ""], correct: 0 },
      { question: "Who sang ''", answers: ["", "", "", ""], correct: 0 },
      { question: "Who sang ''", answers: ["", "", "", ""], correct: 2 },
      { question: "Who sang ''", answers: ["", "", "", ""], correct: 1 },
      { question: "Who sang ''", answers: ["", "", "", ""], correct: 1 },
      { question: "Who sang ''", answers: ["", "", "", ""], correct: 2 },
      { question: "Who sang ''", answers: ["", "", "", ""], correct: 3 },
      { question: "Who sang ''", answers: ["", "", "", ""], correct: 1 },
      { question: "Who sang ''", answers: ["", "", "", ""], correct: 3 },
      { question: "Who sang ''", answers: ["", "", "", ""], correct: 0 },
      { question: "Who sang ''", answers: ["", "", "", ""], correct: 0 },
      { question: "Who sang ''", answers: ["", "", "", ""], correct: 0 },
      { question: "Who sang ''", answers: ["", "", "", ""], correct: 0 },
      { question: "Who sang ''", answers: ["", "", "", ""], correct: 2 },
      { question: "Who sang ''", answers: ["", "", "", ""], correct: 2 },
      { question: "Who sang ''", answers: ["", "", "", ""], correct: 3 },
      { question: "Who sang ''", answers: ["", "", "", ""], correct: 1 },
      { question: "Who sang ''", answers: ["", "", "", ""], correct: 3 },
      { question: "Who sang ''", answers: ["", "", "", ""], correct: 2 },
      { question: "Who sang ''", answers: ["", "", "", ""], correct: 1 },
      { question: "Who sang ''", answers: ["", "", "", ""], correct: 1 },
      ]
    


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
            /*const button = document.createElement('button');
            button.textContent = answer;
            button.addEventListener('click', function() { checkAnswer(index, currentQuestion.correct); });
            options.appendChild(button);*/
    
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