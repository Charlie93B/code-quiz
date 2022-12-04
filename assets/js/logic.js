import { Questions } from "./questions.js";

const startScreen = document.getElementById('start-screen');
const questionDisplay = document.getElementById('questions');
const endScreen = document.getElementById('end-screen');
const feedback = document.getElementById('feedback');
const time = document.getElementById('time');
const startButton = document.getElementById('start');
const submitButton = document.getElementById('submit');
const questionTitle = document.getElementById('question-title');
const choices = document.getElementById('choices');
const answerButtons = document.getElementById('answer'); 

// question set

let questionNumber = 0;

const displayQuestion = () => {
    questionTitle.textContent = Questions[questionNumber].question;
}

const displayAnswers = () => {
    Questions[questionNumber].answers.forEach((item) => {
        let button = document.createElement('button');
        button.textContent = item[0];
        button.setAttribute('data-correct', item[1])
        button.id = 'answer'
        choices.appendChild(button);
        button.addEventListener('click', () => {
            let isCorrect = button.getAttribute('data-correct');
            checkCorrect(isCorrect);
        })
    })
    
}

const checkCorrect = (answer) => {
    if(answer === 'true') {
        feedback.textContent = 'CORRECT!';
    } 
    else {
        feedback.textContent = 'WRONG!';
    }
}

// event listeners

startButton.addEventListener('click', () => {
    startScreen.classList.toggle('hide');
    questionDisplay.classList.toggle('hide');
    feedback.classList.toggle('hide');
    displayQuestion();
    displayAnswers();
});

submitButton.addEventListener('click', () => {

})






