// Question
const DB_Quiz = [{
    question: "Di bawah ini merupakan tag javascript yang dapat disisipkan pada dokumen HTML",
    answer: ['<js>', '<javascript>', '<script>', '<jquery>']
},
{
    question: "Di bawah adalah sintak javascript untuk mengambil elemen HTML secara spesifik pada atribut ID",
    answer: ['document.getElementById(“demo”);', 'document.getElementByName(“demo”);', 'document.getElementsByClassName(“demo”);', 'document.getElementsByTagName(“demo”);']
},
{
    question: "Kita dapat menambahkan sintak javascript dalam dokumen HTML pada bagian",
    answer: ['Di dalam tag <head>', 'Di dalam tag <body>', 'Bisa di dalam tag <head> maupun<body>', 'Tidak bisa keduanya']
},
{
    question: "Berikut sintak yang benar untuk menulis kalimat Hello World",
    answer: ['document.line(“Hello Wordl”)', 'document.show(“Hello Wordl”)', 'document.alert(“Hello Wordl”)', 'document.write(“Hello Wordl”)']
},
{
    question: "Bagaimana membuat komentar di javascript",
    answer: ['<!–ini komentar–>', '*ini komentar*', '//ini komentar', '/* ini komentar */']
}
]

// Answer
const Correct_Answer = [2, 0, 2, 3, 2];

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