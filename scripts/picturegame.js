document.addEventListener("DOMContentLoaded", function() {
  const questions = [
    { img: "images/strawberry cigarette.png", answers: ["Strawberry Cigarette", "Cigarette Strawberry", "Strawberry Smoke", "Smoke Strawberry"], correct: 0 },
    { img: "images/marry you.png", answers: ["Get Married", "Marry You", "We're Married", "Marry Me"], correct: 1 },
    { img: "images/knocking on heaven's door.png", answers: ["Knocking On Heaven's Door", "Knock Knock", "Knocking On Your Door", "Knock On the Door"], correct: 0 },
    { img: "images/counting star.png", answers: ["Three Stars", "Stars", "Pretty Stars", "Counting Star"], correct: 3},
    { img: "images/bleeding love.png", answers: ["Blood & Love", "Bleeding Love", "Love Bleeding", "Love to Death"], correct: 1},
    { img: "images/7 rings.png", answers: ["Rings", "7 Rings", "Ring 7", "5 Rings"], correct: 1},
    { img: "images/24k magic.png", answers: ["24k Magic", "Gold Magic", "Golden Magic", "20k Magic"], correct: 0},
    { img: "images/a whole new world.png", answers: ["Queen & King", "A New Life", "A Whole New World", "A New Beginning"], correct: 2},
    { img: "images/back to December.png", answers: ["December Back", "Return in December", "Back to December", "Back to Winter"], correct: 2},
    { img: "images/bad blood.png", answers: ["Terrible Blood", "Bad Blood", "Awful Blood", "Worst Blood"], correct: 1},
    { img: "images/bad guy.png", answers: ["Evil Person", "Bad Guy", "Terrible Man", "Villain"], correct: 1},
    { img: "images/bury a friend.png", answers: ["Hide a Buddy", "Bury a Man", "Burial Friend", "Bury a Friend"], correct: 3},
    { img: "images/can you feel the love tonight.png", answers: ["Feel Love This Evening", "Can You Feel the Love", "Touch Love Tonight", "Can You Feel the Love Tonight"], correct: 3},
    { img: "images/city of stars.png", answers: ["Town of Skies", "City of Starlight", "Starry Night", "City of Stars"], correct: 3},
    { img: "images/dance monkey.png", answers: ["Dance Monkey", "Monkey Groove", "Dancing Monkey", "Monkey Dance"], correct: 0},
    { img: "images/dangerous woman.png", answers: ["Dangerous Woman", "Dangerous Lady", "Hazardous Girl", "Dangerous Girl"], correct: 0},
    { img: "images/driver's license.png", answers: ["Driver's License", "Car License", "Driving Permit", "Driving License"], correct: 0},
    { img: "images/flowers.png", answers: ["FLower", "Blossoms", "Flowers", "Floral"], correct: 2},
    { img: "images/good 4 u.png", answers: ["Good to U", "Great for You", "Good 4 U", "Fine 4 U"], correct: 2},
    { img: "images/grenade.png", answers: ["War", "Bomb", "Grenade", "Explosion"], correct: 2},
    { img: "images/hello.png", answers: ["Hi", "Hello", "Wave", "Hey There"], correct: 1},
    { img: "images/homesick.png", answers: ["Missing Home", "Homesick", "Longing for Home", "Sick at Home"], correct: 1},
    { img: "images/jingle bells.png", answers: ["Bells Ringing", "Jingle Bells", "Christmas Bells", "Jingling Bells"], correct: 1},
    { img: "images/kiss me more.png", answers: ["Kiss Me", "Kiss Me More", "Kiss Me Again", "Give Me Another Kiss"], correct: 1},
    { img: "images/nasa.png", answers: ["Future", "NASA", "Universe", "Space"], correct: 1},
    { img: "images/ocean eyes.png", answers: ["Sea Gaze", "Ocean View", "Look at the Ocean", "Ocean Eyes"], correct: 3},
    { img: "images/old town road.png", answers: ["Old Town Street", "Ancient Town", "Old Town", "Old Town Road"], correct: 3},
    { img: "images/one kiss.png", answers: ["Solo Kiss", "Single Kiss", "One Peck", "One Kiss"], correct: 3},
    { img: "images/Part of Your World.png", answers: ["Part of that World", "Part of the Sea", "Little Mermaid", "Part of Your World"], correct: 3},
    { img: "images/party in the usa.png", answers: ["Party in America", "Party in New York", "Party in the States", "Party in the USA"], correct: 3},
    { img: "images/peaches.png", answers: ["Booty", "Palm Springs", "Peaches", "Fruits & Trees"], correct: 2},
    { img: "images/poker face.png", answers: ["Poker", "Pokerface", "Poker Face", "Card Face"], correct: 2},
    { img: "images/purple rain.png", answers: ["Rain On Me", "Purple Umbrella", "Purple Rain", "Purple Downfall"], correct: 2},
    { img: "images/rain on me.png", answers: ["Rain to Me", "Shower on Me", "Rain On Me", "Rainfall on Us"], correct: 2},
    { img: "images/red.png", answers: ["Red", "Circle & Square", "Ruby", "Red Shapes"], correct: 0},
    { img: "images/roar.png", answers: ["Roar", "Shout", "Growl", "Scream"], correct: 0},
    { img: "images/Santa Claus Is Coming to Town.png", answers: ["Santa Claus is Coming to Town", "St. Nick is Coming to Town", "Jesus is Coming to Town", "Christmas is Coming"], correct: 0},
    { img: "images/secret love song.png", answers: ["Secret Love Song", "Hidden Affection", "Private Love Song", "Love Song"], correct: 0},
    { img: "images/set fire to the rain.png", answers: ["Burn Raindrops", "Set Fire in Rain", "Set Fire to the Rain", "Burn in Rain"], correct: 2},
    { img: "images/single ladies.png", answers: ["Unmarried Women", "Single Girls", "Single Ladies", "Solo Ladies"], correct: 2},
    { img: "images/sweetener.png", answers: ["Sweets", "Candies", "Sugary Additive", "Sweetener"], correct: 3},
    { img: "images/talking to the moon.png", answers: ["Talking at Night", "Speaking to the Moon", "Chatting at Night", "Talking to the Moon"], correct: 3},
    { img: "images/vampire.png", answers: ["Bloodsucker", "Vampires", "Undead", "Vampire"], correct: 3},
    { img: "images/welcome to new york.png", answers: ["Welcome to USA", "Welcome to New York", "Welcome to the Liberty Statue", "Welcome to NYC"], correct: 1},
    { img: "images/when i was your man.png", answers: ["I Used to be Your Man", "When I was Your Man", "I was Your Man", "When I Used to Be Your Guy"], correct: 1},
    { img: "images/when we were young.png", answers: ["When We were Babies", "When We were Young", "When We were Children", "In Our Youth"], correct: 1},
    { img: "images/you should see me in a crown.png", answers: ["You Should See Me in a Tiara", "You Should See Me in a Crown", "I'm in a Crown", "You Should Look at Me in a Crown"], correct: 1},
    { img: "images/yummy.png", answers: ["Delicious", "Yummy", "Tasty", "Scrumptious"], correct: 1},
    { img: "images/starry night.png", answers: ["Starry Starry Night", "Beautiful Night", "Starry Night", "Pretty Night"], correct: 2},
    { img: "images/When the Party's Over.png", answers: ["When the Party Ends", "After the Party's Over", "When the Party's Over", "After the Party Ends"], correct: 2},
    { img: "images/wish you were gay.png", answers: ["Wish You Are Gay", "Wish You to be Gay", "Wish You Were Gay", "I Thought You were Gay"], correct: 2}
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
    secondChance = false;
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
