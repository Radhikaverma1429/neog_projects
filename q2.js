var readlinesync = require('readline-sync');
var score=0;
var questionOne="i am older than 25 "
var answerOne = "yes"
function play(question,answer){
    var userAswer = readlinesync.question(question);
    console.log("you Entered" + userAswer);
    if (userAswer==answer){
    console.log("Right")
    score=score+1
    console.log("score is: "+score)
    }else{
    console.log("Rong")
    score=score-1
    console.log("score is: "+score)
    }
}
play(questionOne,answerOne)
var questionTwo="I belong in city of delhi"
var answerTwo = "no"
play(questionTwo,answerTwo)



// var userAswer = readlinesync.question(questionTwo);
// console.log("you Entered" + userAswer);
// if (userAswer==answerTwo){
//   console.log("Right")
//   score=score+1
//   console.log("score is: "+score)
// }else{
//   console.log("Rong")
//   score=score-1
//   console.log("score is: "+score)
// }