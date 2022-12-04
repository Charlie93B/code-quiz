import { Questions } from "./questions.js";

const startScreen = document.getElementById('start-screen');
const questionDisplay = document.getElementById('questions');
const endScreen = document.getElementById('end-screen');
const feedback = document.getElementById('feedback');
const timer = document.getElementById('time');
const startButton = document.getElementById('start');
const submitButton = document.getElementById('submit');
const questionTitle = document.getElementById('question-title');
const choices = document.getElementById('choices');
const answerButtons = document.getElementById('answer'); 
const nextQuestion = document.getElementById('next-question');
const finalScore = document.getElementById('final-score');

// question set

let questionNumber = 0;
let score = 0;
let time = 75;


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
            nextQuestion.classList.toggle('hide');
            questionDisplay.classList.toggle('no-click');
            feedback.classList.toggle('hide');
            questionNumber += 1;
        })
    })
    
}

const checkCorrect = (answer) => {
    if(answer === 'true') {
        feedback.textContent = 'CORRECT!';
        score++;
    } 
    else {
        feedback.textContent = 'WRONG!';
    }
}

// event listeners

startButton.addEventListener('click', () => {
    startScreen.classList.toggle('hide');
    questionDisplay.classList.toggle('hide');
    displayQuestion();
    displayAnswers();
});

submitButton.addEventListener('click', () => {

})

nextQuestion.addEventListener('click', () => {
    choices.textContent = '';
    questionDisplay.classList.toggle('no-click');
    nextQuestion.classList.toggle('hide');
    feedback.classList.toggle('hide');
    if(questionNumber < Questions.length) {
        displayQuestion();
        displayAnswers();
    }
    else {
        questionDisplay.classList.toggle('hide');
        endScreen.classList.toggle('hide');
        finalScore.textContent = score;
    }
})






