  document.addEventListener("DOMContentLoaded", function() {
      const questions = [
      { question: "Who sang 'Love Story'", answers: ["Taylor Swift", "Ariana Grande", "Beyonce", "Adele"], correct: 0 },
      { question: "Who sang 'Shape of You'", answers: ["Shawn Mendes", "Justin Biber", "Ed Sheeran", "Bruno Mars"], correct: 2 },
      { question: "Who sang 'Love Yourself'", answers: ["Chris Martin", "Miley Cyrus", "Ariana Grande", "Justin Biber"], correct: 3 },
      { question: "Who sang 'Havana'", answers: ["Camila Cabello", "Shakira", "Billie Eilish", "Miley Cyrus"], correct: 0 },
      { question: "Who sang 'Seven (feat. Latto)'", answers: ["BTS", "Jung Kook", "Jimin", "V"], correct: 1 },
      { question: "Who sang 'Bad Guy'", answers: ["Camila Cabello", "Katy Perry", "Billie Eilish", "Adele"], correct: 2 },
      { question: "Who sang 'Uptown Funk'", answers: ["Justin Timberlake", " Pharrell Williams", "Mark Ronson ft. Bruno Mars", "John Legend"], correct: 2 },
      { question: "Who sang 'Rolling in the Deep'", answers: ["Beyoncé", "Adele", "Lady Gaga", "Sia"], correct: 1 },
      { question: "Who sang 'Firework'", answers: ["Katy Perry", "Rihanna", "Miley Cyrus", "Britney Spears"], correct: 0 },
      { question: "Who sang 'Shake It Off'", answers: ["Taylor Swift", "Selena Gomez", "Katy Perry", "Demi Lovato"], correct: 0 },
      { question: "Who sang 'Happy'", answers: ["Bruno Mars", "Adam Levine", "Jason Mraz", "Pharrell Williams"], correct: 3 },
      { question: "Who sang 'Hello'", answers: ["Sam Smith", "John Legend", "Alicia Keys", "Adele"], correct: 3 },
      { question: "Who sang 'Roar'", answers: ["Kesha", "Pink", "Christina Aguilera", "Katy Perry"], correct: 3 },
      { question: "Who sang 'Thinking Out Loud'", answers: ["James Blunt", "Ed Sheeran", "Sam Smith", "Lorde"], correct: 1 },
      { question: "Who sang 'All About That Bass'", answers: ["Taylor Swift", "Meghan Trainor", "Jessie J", "Carly Rae Jepsen"], correct: 1 },
      { question: "Who sang 'Let Her Go'", answers: ["Katy Perry", "OneRepublic", "Passenger", "Coldplay"], correct: 2 },
      { question: "Who sang 'Counting Star'", answers: ["OneRepublic", "Maroon 5", "DJ Snake", "Coldplay"], correct: 0 },
      { question: "Who sang 'Havana'", answers: ["Camila Cabello", "Selena Gomez", "Dua Lipa", "Becky G"], correct: 0 },
      { question: "Who sang 'Can't Stop the Feeling'", answers: ["Justin Timberlake", "Adam Levine", "Pharrell Williams", "Robin Thicke"], correct: 0 },
      { question: "Who sang 'Sorry'", answers: ["Justin Timberlake", " Zayn Malik", "Imagine Dragons", "Justin Bieber"], correct: 3 },
      { question: "Who sang 'Stay With Me'", answers: ["Adele", "Hozier", "The Chainsmokers", "Sam Smith"], correct: 3 },
      { question: "Who sang 'Closer'", answers: ["Maroon 5", "Imagine Dragons", "The Chainsmokers", "The Chainsmokers ft. Halsey"], correct: 3 },
      { question: "Who sang 'Senorita'", answers: ["Becky G", "Camila Cabello", "Shawn Mendes & Camila Cabello", "Shawn Mendes"], correct: 2 },
      { question: "Who sang 'Lean On'", answers: ["DJ Khaled", "Tones and I", "Major Lazer & DJ Snake ft. MØ", "Kendrick Lamar"], correct: 2 },
      { question: "Who sang 'Despacito'", answers: ["Ricky Martin", "Luis Fonsi ft. Daddy Yankee", "Daddy Yankee", "Drake"], correct: 1 },
      { question: "Who sang 'Dance Monkey'", answers: ["Sia", "Tones and I", "Halsey", "Kendrick Lamar"], correct: 1 },
      { question: "Who sang 'Hotline Bling'", answers: ["Kendrick Lamar", "J. Cole", "Drake", "Jason Mraz"], correct: 2 },
      { question: "Who sang 'Believer'", answers: ["Fall Out Boy", "Imagine Dragon", "Charlie Puth", "Imagine Dragons"], correct: 3 },
      { question: "Who sang 'Radioactive'", answers: ["The Script", "One Direction", "Shawn Mendes", "Imagine Dragons"], correct: 3 },
      { question: "Who sang 'Wake Me Up'", answers: ["Calvin Harris", "Avicii", "Lewis Capaldi", "John Legend"], correct: 1 },
      { question: "Who sang 'Sugar'", answers: ["Maroon 5", "Train", "Jason Mraz", "Bruno Major"], correct: 0 },
      { question: "Who sang 'Attention'", answers: ["Charlie Puth", "Shawn Mendes", "Bruno Mars", "Jason Mraz"], correct: 0 },
      { question: "Who sang 'Perfect'", answers: ["John Legend", "James Blunt", "Ed Sheeran", " Lana Del Rey"], correct: 2 },
      { question: "Who sang 'Let It Go'", answers: ["Kristen Bell", "Idina Menzel", "Demi Lovato", "Rihanna"], correct: 1 },
      { question: "Who sang 'What Do You Mean'", answers: ["Nick Jonas", "Justin Bieber", "Drake", "The Weeknd"], correct: 1 },
      { question: "Who sang 'Love Me Like You Do'", answers: ["Lana Del Rey", "Sia", "Ellie Goulding", "Calvin Harris"], correct: 2 },
      { question: "Who sang 'Chandelier'", answers: ["Lady Gaga", "Rihanna", "Miley Cyrus", "Sia"], correct: 3 },
      { question: "Who sang 'All of Me'", answers: ["Michael Bublé", "John Legend", "Bruno Mars", "Bruno Major"], correct: 1 },
      { question: "Who sang 'Faded'", answers: ["The Chainsmokers", "Calvin Harris", "Avicii", "Alan Walker"], correct: 3 },
      { question: "Who sang 'Cheap Thrills'", answers: ["Sia", "Meghan Trainor", "Katy Perry", "Olivia Rodrigo"], correct: 0 },
      { question: "Who sang 'Someone Like You'", answers: ["Adele", "Doja Cat", "Harry Styles", "Dua Lipa"], correct: 0 },
      { question: "Who sang 'Innocence'", answers: ["Avril Lavigne", "Billie Eilish", "Kristen Bell", "Shawn Mendes"], correct: 0 },
      { question: "Who sang 'Flowers'", answers: ["Miley Cyrus", "Jason Mraz", "Bruno Mars", "Olivia Rodrigo"], correct: 0 },
      { question: "Who sang 'Cupid'", answers: ["FIFTY", "Twice", "FIFTY FIFTY", "Red Velvet"], correct: 2 },
      { question: "Who sang 'Vampire'", answers: ["Billie Eilish", "Joshua Bassett", "Olivia Rodrigo", "Katy Perry"], correct: 2 },
      { question: "Who sang 'Paint The Town Red'", answers: ["Katy Perry", "Christina Aguilera", "Ethel Cain", "Doja Cat"], correct: 3 },
      { question: "Who sang 'What Was I Made For'", answers: ["Shawn Mendes", "Billie Eilish", "Harry Style", "Olivia Rodrigo"], correct: 1 },
      { question: "Who sang 'As It Was'", answers: ["One Direction", "Zayn Malik", "Niall Horan", "Harry Styles"], correct: 3 },
      { question: "Who sang 'American Teenager'", answers: ["Liam Payne", "Bruno Mars", "Ethel Cain", "James Arthur"], correct: 2 },
      { question: "Who sang 'Drivers license'", answers: ["Ed Sheeran", "Olivia Rodrigo", "Lewis Capaldi", "James Blunt"], correct: 1 },
      { question: "Who sang 'Levitating'", answers: ["Selena Gomez", "Dua Lipa", "Christina Aguilera", "Pink"], correct: 1 },
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
        secondChance = false; 
        clearTimeout(timerId);
        const currentQuestion = getRandomQuestion();
        if (currentQuestion) {
          document.getElementById('question').textContent = currentQuestion.question;
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