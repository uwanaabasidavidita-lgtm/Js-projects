
let questionsArr = [{question: "What is the capital of France?", options: ["London", "Paris", "Berlin", "Rome"]}, {question: "What is the largest planet in our solar system?", options: ["Saturn", "Jupiter", "Neptune", "Uranus"]}, {question: "What is the smallest country in the world?", options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"]}];
let answersArr = [{answer: "Paris"}, {answer: "Jupiter"}, {answer: "Vatican City"}];
let score = 0;
function startQuiz() {
    let startTimes = Date.now();

    for (let i = 0; i < questionsArr.length; i++) {
     let startTime = Date.now();
    let userAnswer = prompt(`${questionsArr[i].question}\nOptions: ${questionsArr[i].options.join(", ")}`);
    if (userAnswer === answersArr[i].answer) {
        score++;
        console.log("Correct!");
    }
    else if (userAnswer !== answersArr[i].answer) {
        console.log("Incorrect. The correct answer is " + answersArr[i].answer + ".");
    }
    let endTime = Date.now() - startTime;
    let endTimeInSeconds = (endTime / 1000).toFixed(2);
    console.log(`Time taken: ${endTimeInSeconds} seconds.`);
}
let totalTime = Date.now() - startTimes;
let totalTimeInSeconds = (totalTime / 1000).toFixed(2);
console.log(`Total time taken: ${totalTimeInSeconds} seconds.`);
}
startQuiz();
if (score === 0){
    console.log("Better luck next time!");
}
if(score === 1){
    console.log("Not bad, but you can do better!");
}
if(score === 2){
    console.log("Good job! You have a solid understanding of the material.");
}
if(score === 3){
    console.log("Excellent work! You have a strong grasp of the material.");
}
console.log(`Your final score is ${score} out of ${questionsArr.length}.`);
