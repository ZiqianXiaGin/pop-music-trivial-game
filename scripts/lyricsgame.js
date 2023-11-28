document.addEventListener("DOMContentLoaded", function() {
  const questions = [
    { question: "It's a beautiful night, we're looking for something dumb to do, _____", answers: ["Hey baby, I think I wanna marry you", "Hey baby, I think I'm in love with you", "Hey darling, I think I wanna marry you", "Hey darling, I think I like you"], correct: 0 },
    { question: "I wanna dance with somebody, _____", answers: ["I wanna feel the love with somebody", "I wanna feel the fire with somebody", "I wanna feel the heat with somebody", "I wanna make love with somebody"], correct: 2},
    { question: "I'm a Barbie girl, in a Barbie world, _____", answers: [" it's fantastic", "life in plastic", "you can brush my hair", "dress me everywhere"], correct: 1},
    {question: "Wake me up before you go-go, don't leave me hangin' on like a yo-yo, wake me up before you go-go, ________", answers: ["before you go-go, 'cause I'm not planning on going single", "before you go, 'cause I'm not planning on going solo", "before you go, 'cause I'm not planning on going single", "before you go-go, 'cause I'm not planning on going solo" ], correct: 3},
    {question: "Cause all of me, loves all of you, _____", answers: ["love your curves and all your edges", "love your body and all your edges", "love your curves and all your imperfections", "love your body and all of you"], correct: 0},
    {question: "Just shoot for the stars, _____", answers: ["if it feels right and aim for my heart", "if it aims for my heart", "if it feels good and aim for my heart", "if it feels right and target my heart"], correct: 0},
    {question: "So baby pull me closer in the back seat of your Rover, _____", answers: ["that I know you can't control", "that I know you can't afford", "that I know you can't support", "that I know you can't pay for"], correct: 1},
    {question: "Is it too late now to say sorry?  _____", answers: ["Cause I'm missing more than just your memory", "Cause I'm missing just your body", "Cause I'm kissing more than just your body", "Cause I'm missing more than just your body"], correct: 3},
    {question: "I came in like a wrecking ball, _____", answers: ["I never hit so quick in love", "I never fell so hard in love", "I never hit so hard in love", "I never fallen so deep in love"], correct: 2},
    {question: "I kissed a girl and I liked it, _____", answers: ["the taste of her berry chapstick", "the taste of her cherry lipstick", "the taste of her cherry chapstick", "the taste of her berry lipstick"], correct: 2},
    {question: "You're a shooting star I see, _____", answers: ["a vision of victory", "a vision of fantasy", "a vision of ecstasy", "a vision of happiness"], correct: 2},
    {question: "You're toxic, I'm slipping under, _____", answers: ["with a taste of a poison inferno", "with a taste of a sweet paradise", "with a lick of a poison paradise", "with a taste of a poison paradise"], correct: 3},
    {question: "Look at this photograph, _____", answers: ["every time I do, it makes me smile", "every time I do, it makes me happy", "every time I do, it makes me sad", "every time I do, it makes me laugh"], correct: 3},
    {question: "I'm your biggest fan, I'll follow you until you love me, _____", answers: ["papi, paparazzi", "papa, paparazzi", "daddy, paparazzi", "baba, paparazzi"], correct: 1},
    {question: "Hey, I just met you, and this is crazy, _____", answers: ["but here's my email", "but here's my number", "but here's my linkedin", "but there's my number"], correct: 1},
    {question: "But I'm a creep, I'm a weirdo, _____", answers: ["what the hell am I doing", "what the hell am I doing here", "what the heck am I doing here", "what the hell am I doing there"], correct: 1},
    {question: "He was a skater boy, she said see you later boy, _____", answers: ["he wasn't good enough for her", "she wasn't good enough for him", "they weren't good enough for each other", "I wasn't good enough for her"], correct: 0},
    {question: "Said I'm sorry, mama, never meant to hurt you, _____", answers: ["I never meant to break you", "I never meant to know you", "I never meant to make you", "I never meant to forget you"], correct: 2},
    {question: "Say you'll remember me, standing in a nice dress, _____", answers: ["staring at the sunrise, babe", "staring at the sunset, babe", "staring at the sunset, baby", "staring at the sunrise, baby"], correct: 1},
    {question: "I'm gonna pop some tags, _____", answers: ["only got thirty dollars in my pocket", "only got ten dollars in my pocket", "only got two dollars in my pocket", "only got twenty dollars in my pocket"], correct: 3},
    {question: "She was more like a beauty queen from a movie scene, _____", answers: ["I said don't care, but what do you mean", "I said don't mind, but why do you care","I said don't care, but what do you want", "I said don't mind, but what do you mean"], correct: 3},
    {question: "Hello, darkness, my old friend, _____", answers: ["I've come to chat with you again", "I've come to talk with you again", "I've come to speak to you again", "I've come to walk with you again"], correct: 1},
    {question: "Just a small town girl, _____", answers: ["living in a lonely world", "living in a big big world", "living in a tiny world", "living in an empty world"], correct: 0},
    {question: "We could have had it all, rolling in the deep, _____", answers: ["you had my heart inside of your heart", "you had my hand inside of your heart", "you had my heart inside of your hand", "you had my mind inside of your hand"], correct: 2},
    {question: "And I will always love you, _____", answers: ["I will always like you", "I will always love you", "will always love you", "I will only love you"], correct: 1},
    {question: "Cause I'm Slim Shady, yes I'm the real Shady, _____", answers: ["all you other Slim Shady are just imitating", "all you other Slim Shadys are just imitating", "all you other Shadys are just imitating", "all you Slim Shadys are just imitating"], correct: 1},
    {question: "There's a fire starting in my heart, _____", answers: ["reaching a fever pitch, it's taking me out the dark", "reaching a mad rush, it's bringing me out the dark", "reaching a mad rush, it's taking me out the dark", "reaching a fever pitch, it's bringing me out the dark"], correct: 3},
    {question: "I heard that you're settled down, _____", answers: ["that you found a woman and you're married now", "that you found a girl and you're engaged now", "that you found a lady and you're engaged now", "that you found a girl and you're married now"], correct: 3},
    {question: "I look and stare so deep in your eyes, _____", answers: ["I touch on you more and more every single time", "I touch you more and more every time", "I touch on you more and more every time", "I fall for you more and more every time"], correct: 2},
    {question: "Clap along if you feel like a room without a roof, _____", answers: ["because I'm delightful", "because I'm single", "because I'm happy", "because I'm cheerful"], correct: 2},
    {question: "My tea's gone cold, _____", answers: ["I'm wondering why I got out of here at all", "I'm wondering why I got out of bed at all", "I'm thinking why I got out of bed at all", "I'm thinking why I got out of here at all"], correct: 1},
    {question: "Oh, baby, baby, how was I supposed to know, _____", answers: ["that something wasn't right there", "that something wasn't right here", "that something wasn't correct here", "that something isn't right here"], correct: 1},
    {question: "I've paid my dues, time after time, _____", answers: ["I've done my sentence, but committed no crime", "I've done my sentence, but committed no fault", "I've done my years, but committed no crime", "I've done my sentence, but had no crime"], correct: 0},
    {question: "I found a love, for me, _____", answers: ["Darling, just dive right in and follow my lead", "Darling, just come right in and follow my lead", "Darling, just dive right in and follow my hand", "Baby, just dive right in and follow my lead"], correct: 0},
    {question: "Photo album on the counter, _____", answers: ["Your cheeks were turning pink", "Your cheeks were turning purple", "Your cheeks were turning blue", "Your cheeks were turning red"], correct: 3},
    {question: "Three little birds sat on my window, _____", answers: ["And they told me I need to worry", "And they told me I don't need to hurry", "And they told me I don't need to carry", "And they told me I don't need to worry"], correct: 3},
    {question: "I don't know about you, but I'm feeling 22, _____", answers: ["Everything will be just right if you keep me next to you", "Everything will be ok if you keep me next to you", "Everything will be alright if you keep me next to you", "Everything will be fine if you keep me next to you"], correct: 2},
    {question: "All that you got, skin to skin, oh my God, _____", answers: ["Don't you stop, girl", "Don't you stop, boy", "Don't you hurry, boy", "Don't you quit, boy"], correct: 1},
    {question: "I loved you dangerously, _____", answers: ["More than the air that I breath", "More than the air that I breathe", "More than the oxygen that I breathe", "More than the air that I inhale"], correct: 1},
    {question: "You never tell me that you love me, _____", answers: ["Oh, what a mess that you have made", "Oh, what a mess of me you've done", "Oh, what a crap of me you've made", "Oh, what a mess of me you've made"], correct: 3},
    {question: "Pictures I'm living through for now, _____", answers: ["Trying to remember all the good times", "Trying to remember all the good days", "Trying to remember all the good hours", "Trying to remember all the great times"], correct: 0},
    {question: "It's okay, life is a tough crowd, _____", answers: ["32 and still growin' up now", "22 and still growin' up now", "35 and still growin' up now", "28 and still growin' up now"], correct: 0},
    {question: "I found a place so safe, not a single tear, _____", answers: ["The first time in my life and now it's so clear", "The first time in my life and now it's so bright", "The third time in my life and now it's so clear", "The third time in my life and now it's so bright"], correct: 0},
    {question: "He was a punk, _____", answers: ["She did ballet", "She did piano", "She did singing", "She did guitar"], correct: 0},
    {question: "When the rain is blowing in your face, _____", answers: ["And the whole world is on your shoulder", "And the whole world is on your brain", "And the whole world is on your case", "And the whole world is on your side"], correct: 2},
    {question: "So what you tryin' to do to me? _____", answers: ["It's like we can stop, we're not enemies", "It's like we can't stop, we're enemies", "It's like we can stop, we're friend", "It's like we can't stop, we're rivals"], correct: 1},
    {question: "Your sugar, yes, please, _____", answers: ["Won't you come and pour it down on me?", "Won't you come and put it all on me?", "Won't you come and put it down on me?", "Won't you go and put it down on you?"], correct: 2},
    {question: "Hello, can you hear me? _____", answers: ["I'm in LA dreaming about who we used to be", "I'm in Boston dreaming about who we used to be", "I'm in California dreaming about who we used to be", "I'm in Seattle dreaming about who we used to be"], correct: 2},
    {question: "But I set fire to the rain, _____", answers: ["Watched it pour as I touched your hand", "Watched it sink as I touched your face", "Watched it sink as I touched your hand", "Watched it pour as I touched your face"], correct: 3},
    {question: "Everybody loves the things you do, _____", answers: ["From the way you move to the way you talk", "From the way you speak to the way you move", "From the way you talk to the way you laugh", "From the way you talk to the way you move"], correct: 3},
    {question: "Go easy on me, baby, _____", answers: ["I was still a kid", "I was still a child", "I was still a baby", "I was still young"], correct: 1}


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