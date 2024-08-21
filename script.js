//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let questionImage = document.getElementById('question-image');
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
const confettiContainer = document.querySelector('#confetti-container');
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;


//Questions and Options array

const quizArray = [
  {
    id: "0",
    question: "Guess the Country Flag on Europe?",
    options: ["Germany", "Albania", "Argentina", "Algeria"],
    correct: "Albania",
    image: "flags/al-flag.gif",
  },
  {
    id: "1",
    question: "Guess the Country Flag on Europe?",
    options: ["Australia", "United Kingdom", "Chile", "Iceland"],
    correct: "United Kingdom",
    image: "flags/uk-flag.gif",
  },
  {
    id: "2",
    question: "Guess the Country Flag on Europe?",
    options: ["Belgium", "Brazil", "Egypt", "Germany"],
    correct: "Germany",
    image: "flags/gm-flag.gif",
  },
  {
    id: "3",
    question: "Guess the Country Flag on Europe?",
    options: ["Russia", "Croatia", "France", "Sweden"],
    correct: "France",
    image: "flags/fr-flag.gif",
  },
  {
    id: "4",
    question: "Guess the Country Flag on Europe?",
    options: ["Mexico", "Italy", "Portugal", "India"],
    correct: "Italy",
    image: "flags/it-flag.gif",
  },
  {
    id: "5",
    question: "Guess the Country Flag on Europe?",
    options: ["Romania", "Andorra", "Turkey", "Venezuela"],
    correct: "Romania",
    image: "flags/ro-flag.gif",
  },
  {
    id: "6",
    question: "Guess the Country Flag on Asia?",
    options: ["Saudi Arabia", "Turkey", "Vietnam", "Portugal"],
    correct: "Turkey",
    image: "flags/tu-flag.gif",
  },
  {
    id: "7",
    question: "Guess the Country Flag on Asia?",
    options: ["United Kingdom", "Egypt", "China", "Croatia"],
    correct: "China",
    image: "flags/ch-flag.gif",
  },
  {
    id: "8",
    question: "Guess the Country Flag on Europe?",
    options: ["Maldives", "Spain", "Portugal", "Mexico"],
    correct: "Spain",
    image: "flags/sp-flag.gif",
  },
  {
    id: "9",
    question: "Guess the Country Flag on Europe?",
    options: ["Poland", "Monaco", "Norway", "Russia"],
    correct: "Poland",
    image: "flags/pl-flag.gif",
  },
  {
    id: "10",
    question: "Guess the Country Flag on Europe?",
    options: ["Denmark", "Austria", "Belgium", "Canada"],
    correct: "Austria",
    image: "flags/au-flag.gif",
  },
  {
    id: "11",
    question: "Guess the Country Flag on Asia?",
    options: ["Mali", "India", "Ireland", "Iceland"],
    correct: "India",
    image: "flags/in-flag.gif",
  },
  {
    id: "12",
    question: "Guess the Country Flag on Asia?",
    options: ["Iran", "Japan", "Pakistan", "Vietnam"],
    correct: "Japan",
    image: "flags/ja-flag.gif",
  },
  {
    id: "13",
    question: "Guess the Country Flag on Middle East?",
    options: ["Cyprus", "Armenia", "Saudi Arabia", "U.A.E"],
    correct: "Saudi Arabia",
    image: "flags/sa-flag.gif",
  },
  {
    id: "14",
    question: "Guess the Country Flag on Europe?",
    options: ["Brunei", "Ukraine", "Turkey", "Canada"],
    correct: "Ukraine",
    image: "flags/up-flag.gif",
  },
  {
    id: "15",
    question: "Guess the Country Flag on Asia?",
    options: ["Malaysia", "Indonesia", "United Kingdom", "United States"],
    correct: "Malaysia",
    image: "flags/my-flag.gif",
  },
  {
    id: "16",
    question: "Guess the Country Flag on Asia?",
    options: ["Sudan", "Japan", "South Korea", "North Korea"],
    correct: "South Korea",
    image: "flags/ks-flag.gif",
  },
  {
    id: "17",
    question: "Guess the Country Flag of Island?",
    options: ["Monaco", "Australia", "United Kingdom", "Malaysia"],
    correct: "Australia",
    image: "flags/as-flag.gif",
  },
  {
    id: "18",
    question: "Guess the Country Flag on South America?",
    options: ["Cuba", "Brazil", "Mexico", "Argentina"],
    correct: "Brazil",
    image: "flags/br-flag.gif",
  },
  {
    id: "19",
    question: "Guess the Country Flag on South America?",
    options: ["Costa Rica", "Ecuador", "Argentina", "Venezuela"],
    correct: "Argentina",
    image: "flags/ar-flag.gif",
  },
  {
    id: "20",
    question: "Guess the Country Flag on America?",
    options: ["Canada", "United States", "Malaysia", "Brazil"],
    correct: "United States",
    image: "flags/us-flag.gif",
  },
  {
    id: "21",
    question: "Guess the Country Flag on America?",
    options: ["China", "Canada", "Cameroon", "Argentina"],
    correct: "Canada",
    image: "flags/ca-flag.gif",
  },
  {
    id: "22",
    question: "Guess the Country Flag on America?",
    options: ["Bahamas", "Mexico", "Italy", "Jamaica"],
    correct: "Mexico",
    image: "flags/mx-flag.gif",
  },
  {
    id: "23",
    question: "Guess the Country Flag on South America?",
    options: ["Spain", "Colombia", "Cuba", "Costa Rica"],
    correct: "Colombia",
    image: "flags/co-flag.gif",
  },
  {
    id: "24",
    question: "Guess the Country Flag on Europe?",
    options: ["Brazil", "Iceland", "Italy", "Norway"],
    correct: "Iceland",
    image: "flags/ic-flag.gif",
  },
  {
    id: "25",
    question: "Guess the Country Flag on Europe?",
    options: ["Belgium", "Ireland", "Italy", "Kuwait"],
    correct: "Ireland",
    image: "flags/ei-flag.gif",
  },
  {
    id: "26",
    question: "Guess the Country Flag on South America?",
    options: ["Ecuador", "Mexico", "Colombia", "Egypt"],
    correct: "Ecuador",
    image: "flags/ec-flag.gif",
  },
  {
    id: "27",
    question: "Guess the Country Flag on Asia?",
    options: ["Singapore", "Mexico", "Germany", "Tunisia"],
    correct: "Singapore",
    image: "flags/sn-flag.gif",
  },
  {
    id: "28",
    question: "Guess the Country Flag on South America?",
    options: ["Zambia", "Mexico", "Uruguay", "Venezuela"],
    correct: "Uruguay",
    image: "flags/uy-flag.gif",
  },
  {
    id: "29",
    question: "Guess the Country Flag on Europe?",
    options: ["Monaco", "Mexico", "Italy", "Denmark"],
    correct: "Monaco",
    image: "flags/mn-flag.gif",
  },
];

//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray.length) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
     /* //confetti Effect
      confettiContainer.innerHTML =`
            <div id="confetti-container">
              <div class="card">
                <p>Congratulations, you have successfully created a confetti</p>
              </div>
            </div>
          `;
          
          confettiContainer.appendChild(div); */
      //confetti show function
      const showConfetti = () => {
        const confetti = document.createElement('div');
        confetti.textContent = '🏳️';
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * innerWidth + 'px';
        confettiContainer.appendChild(confetti);
      
        setTimeout(() => {
          confetti.remove();
        }, 5000);
      };
      setInterval(() => {
        showConfetti();
      }, 400);
      //user score
      userScore.innerHTML =
        "Your score is " + scoreCount + " out of " + questionCount + "</br>You Scored " + ((100 * scoreCount) / questionCount).toFixed(0) + "%";
    } else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";
      //display quiz
      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);

    //Flag Image
        div.innerHTML +=`
        <img id="question-image" src="${i.image}" alt="flag" width="99%">
        `;
        quizContainer.appendChild(div);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}

//initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};