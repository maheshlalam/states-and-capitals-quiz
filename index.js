var readlineSync = require('readline-sync');

var score = 0;

var userName = readlineSync.question("what's your name? ");
console.log('Hi! ' + userName +','+ ' welcome to mahesh quiz! ');

function play (question, answer) {
    var userAnswer = readlineSync.question(question);
 
    if(userAnswer === answer){
      //branching
      console.log("right!");
      score = score + 1 ;
      console.log("current score:", score);
      console.log("--------")
    } else {
      console.log("wrong!")
           console.log("current score:", score);
      console.log("--------")
 
    }
  }

  var questions = [{
    question:" 1) capital of andhra pradesh? ",
     answer:"amaravathi"
},{
     question:"2) capital of telangana? ",
    answer:"hyderabad"
},
{
  question:"3) capital of tamil nadu? ",
    answer:"chennai"

},
{
     question:"4) capital of karnataka? ",
    answer:"bangalore"
},
{
     question:"5) capital of maharashtra? ",
    answer:"mumbai"
},
{
     question:"6) capital of madhya pradesh? ",
    answer:"bhopal"
},
{
     question:"7) capital of goa? ",
    answer:"panaji"
},
{
     question:"8) capital of rajasthan? ",
    answer:"jaipur"
},
{
     question:"9) capital of assam? ",
    answer:"dispur"
},
{
     question:"10) capital of west bengal? ",
    answer:"kolkata"
},
];

for ( var i=0; i<questions.length; i++){
    var currentQuestion =questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
 
  console.log("YAY! you SCORED: ", score);
 