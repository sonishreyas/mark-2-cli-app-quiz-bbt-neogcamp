var readlineSync = require('readline-sync');
var score = 0;

var highscore = [
  {
    name:"Shreyas",
    score: 3
  },
  {
    name: "Raj",
    score: 2
  }
];

var questions = [
  {
    question: "What is the name of Sheldon's roommate?",
    answer: "Lenord"
  },
  {
    question: "What does Sheldon's mom call him?",
    answer: "Shelly"
  },
  {
    question: "Who is the only member of the boys to not hold a PhD ?",
    answer: "Howard"
  } 
];

function welcome(){
  var username = readlineSync.question("What's your name? ");
  console.log("Welcome "+ username + " let's see if you know The Big Bang Theory");
}

function play(question,answer)  {
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score += 1;
  } else  {
    console.log("wrong!");
  }
  console.log("Current Score: ", score);
  console.log("************");
}

function game() {
  for (var i=0; i< questions.length;i++)  {
    var currQues = questions[i];
    play(currQues.question,currQues.answer);
  }
}

function showScores() {
  console.log("YAY! You Scored: ", score);
  console.log("Check out the high scores");

  highscore.map(score => console.log(score.name, " : ", score.score))
}

welcome();
game();
showScores();