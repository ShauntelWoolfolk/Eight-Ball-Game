
var answers = [
"It is certain", 
"Without a doubt", 
"You may rely on it", 
"Most likely", 
"Better not tell you now",
"It is decidedly so", 
"Yes", 
"My sources say no",
"Signs point to yes",
"Don't count on it",  
"As I see it, yes", 
"Outlook not so good",
"Signs point to yes", 
"Reply hazy, try again", 
"Cannot predict now", 
"Yes - definitely",
];

window.onload = function() {
var eight = document.getElementById("eight");
var answer = document.getElementById("answer");
var eightball = document.getElementById("eight-ball");
var question = document.getElementById("question");

eightball.addEventListener("click", function() {

    if (question.value.length < 1) {

        alert('No Question Entered');
} 

else {
eight.innerText = "";
var num = Math.floor(Math.random() * Math.floor(answers.length));
answer.innerText = answers[num];
}
});
};
console.log(eightBall);