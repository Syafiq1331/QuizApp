// Question
const DB_Quiz = [{
        question: "1 + 1 = ? str",
        answer: ['11', '2', '22', '0']
    },
    {
        question: "Sop dibalik ?",
        answer: ['Pos', 'Ops', 'Spo', 'Tumpah']
    },
    {
        question: "Programmer itu ?",
        answer: ['lemah', 'Cengeng', 'Tangguh', 'Apa?']
    },
    {
        question: "Apa itu javascript ?",
        answer: ['Nothing', 'Bahasa native', 'bahasa English', 'bahasa pemprograman']
    },
    {
        question: "Sebutkan bahasa pemprograman?",
        answer: ['HTML', 'CSS', 'Golang', 'Markdown']
    }
]

// Answer
const Correct_Answer = [1, 0, 2, 3, 2];

// Event

function startQuiz() {
    document.getElementById('opening-window').style.display = "none";

    document.getElementById('quiz-window').style.display = 'block';
}

let current_q = 0;
let totalScore = 0;
let saved_answer = [];

document.addEventListener("DOMContentLoaded", function (event) {
    setUpQuestion();
});

function setUpQuestion() {
    document.getElementById('question').innerText = DB_Quiz[current_q]['question'];

    document.getElementById('choiceText0').innerText = DB_Quiz[current_q]['answer'][0];
    document.getElementById('choiceText1').innerText = DB_Quiz[current_q]['answer'][1];
    document.getElementById('choiceText2').innerText = DB_Quiz[current_q]['answer'][2];
    document.getElementById('choiceText3').innerText = DB_Quiz[current_q]['answer'][3];
}

function nextQuestion() {
    current_q++;

    saveAnswer();

    if (current_q > DB_Quiz.length - 1)
        stopQuiz();

    resetState();
    setUpQuestion();
}

function resetState() {
    const chooseAnswer = document.querySelector('input[name="choices"]:checked')
    if (chooseAnswer != null)
        chooseAnswer.checkScore = false;
}

function stopQuiz() {
    checkScore()

    document.getElementById('quiz-window').style.display = 'none';

    document.getElementById('closing-window').style.display = "block";

    document.getElementById('scoreText').innerHTML = `Score kamu adalah ${totalScore} `;

    return;
}

function saveAnswer() {
    const answer = document.querySelector('input[name="choices"]:checked');

    if (answer != null) {
        saved_answer.push(parseInt(answer.getAttribute('data-id')));
    } else {
        saved_answer.push[0];
    }
}

function checkScore() {
    for (let i = 0; i < saved_answer.length; i++) {
        if (saved_answer[i] == Correct_Answer[i])
            totalScore += 100;
    }
}