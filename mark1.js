var readlinesync = require("readline-sync")
var uerName = readlinesync.question("what's you name? ")
console.log("Welcome",uerName,"do you know Radhika")
score=0
function play(question,answer){
    var userAnswer =readlinesync.question(question);
    if (userAnswer==answer){
        console.log("....Right....")
        score=score+1
    }else{
        console.log("....Wrong....")
    }
    console.log("current score is ",score)
    console.log("................")
    } 
    var questions=
    [{
    question:"....What's your name?....",
    answer:"....Radhika...."  
    },{
    question:"....What's your father name?....",
    answer:"....Motilal...."            
    },{
    question:"....what's your mother name?....",
    answer:"....Manti...."
    },{
    question:"....How is year you are....?",
    answer:"....21...."
    },{
    question:"....What you like?....",
    answer:"....music...."
    },{
    question:"....what are you doing in study?....",
    answer:"....graduation...."
    },{
    question:"....what is your hobby?....",
    answer:"gardning"
    },{
    question:"....Which subject you like?....",
    answer:"....History...."
    },{
    question:"what is your hobby?",
    answer:"gardning"
    },{
    question:"....Which movie ypu like?....",
    answer:"....shersha..."
    },{
    question:"....Which actor you like?....",
    answer:"shahid kapoor"
    },{
    question:"....which reality show you like?....",
    answer:"....sa re ga ma pa...."
    },{
    question:"....which female actor you like?....",
    answer:"....shrdha kapoor...."
    },{
    question:"....Do you enjoy coding?....",
    answer:"....yes...."
    },{
    question:"....you complet your python?....",
    answer:"....yes...."
    },{
    question:"....in python which topic you most like?....",
    answer:"....list..."
    }]

for (var i=0; i<questions.length; i++){
    var currentQuetion=questions[i]
    play(currentQuetion.question,currentQuetion.answer)
}
console.log("you score",score)