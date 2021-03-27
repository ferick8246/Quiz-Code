// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

// sound effects
var sfxRight = new Audio ("assets/sfx/correct.wav");
var sfxWrong = new Audio ("assets/sfx/correct.wav");

function startQuiz() {
    // start screen hide 
    var startScreenE1 = document.getElementById("start-screen")
    startScreenE1.setAttribute("class", "hide");
    
    // un*hide questions section 
    questionsEl.removeAttribute("class")

    // start timer
  timerId = setInterval(clockTick, 1000);

  // show starting time
  timerEl.textContent = time;

  getQuestion();
}

function getQuestion(){
    //get current question object from array
var currentQuestion = questions[currentQuestionIndex];


}