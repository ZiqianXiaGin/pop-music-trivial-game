document.addEventListener('DOMContentLoaded', () => {
    const timerElement = document.getElementById('timer');
    const answersContainer = document.querySelector('.answers');
    const scoreTrackerElement = document.getElementById('score');
    let currentQuestion = 0;
    let countdown;
    let timer;
    let score = 0; 
  
    const questions = [
      {
        image: '我的image.jpg',
        options: ['Strawberry Cigarettes', 'Cigarettes Strawberry', 'Strawberry Smoke', 'Smoke Strawberry'],
        answer: 'Strawberry Cigarettes'
      },
      {
        image: '我的image.jpg',
        options: ['Three Stars', 'Counting Stars', 'All of the Stars', 'Stars'],
        answer: 'Counting Stars'
      }
    
    ];
  
    function displayQuestion() {
      countdown = 10;
      timerElement.textContent = countdown;
  
        //如果没有更多问题，结束游戏
      if (currentQuestion >= questions.length) {
        alert('Game Over! Your score: ' + score);
        return; 
      }
  
      // load图像，记得replace image
      const imageHtml = `<img src="${questions[currentQuestion].image}" alt="Question Image"/>`;
      document.querySelector('.image-container').innerHTML = imageHtml;
  
      // load选择的答案
      answersContainer.innerHTML = '';
      questions[currentQuestion].options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => handleAnswer(option);
        answersContainer.appendChild(button);
      });
  
      // 让timer重新开始
      clearInterval(timer);
      startCountdown();
    }
  
    function updateScore() {
      scoreTrackerElement.textContent = score;
    }
  
    function startCountdown() {
      timer = setInterval(() => {
        countdown--;
        timerElement.textContent = countdown;
  
        if (countdown <= 0) {
          clearInterval(timer);
          timerElement.textContent = '0';
          alert('Time is up!');
          endGame();
        }
      }, 1000);
    }
  
    function handleAnswer(selectedOption) {
      clearInterval(timer);
      //如果答对了，加一分
      if (selectedOption === questions[currentQuestion].answer) {
        score++; 
        updateScore();
      //进行到下一题
        currentQuestion++; 
        displayQuestion();
      } else {
        // 答错了
        endGame();
      }
    }
  
    function endGame() {
      alert('Game Over! Your score is: ' + score);
    }
  
    // 重启记分
    updateScore();
  
    // 重新开始第一题
    displayQuestion();
  });