let questions = [{
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Wer hat Javascript erfunden",
        "answer_1": "Firma Netscape",
        "answer_2": "Bill Gates",
        "answer_3": "Mark Zuckerberg",
        "answer_4": "John Atanasoff",
        "right_answer": 1
    },
    {
        "question": "Wie heißt die erste Programmiererin der Geschichte",
        "answer_1": "Marlyn Meltzer",
        "answer_2": "Frances Elizabeth",
        "answer_3": "Jean Bartik",
        "answer_4": "Ada Lovelace",
        "right_answer": 4
    },
    {
        "question": "Wer ist der Erfinder von Apple",
        "answer_1": "Martin Fowler ",
        "answer_2": "Steve Wozniak",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Linus Benedict Torvalds ",
        "right_answer": 2
    },
    {
        "question": "Erfinder der Programmiersprache C",
        "answer_1": "Dennis Ritchie ",
        "answer_2": "Larry Page",
        "answer_3": "Sergey Brin",
        "answer_4": "Linus Benedict Torvalds",
        "right_answer": 1
    },
    {
        "question": "Zitat von Stephen Hawking",
        "answer_1": "Die Digitalisierung ersetzt den Menschen nicht, sie erweitert vielmehr seine Möglichkeiten.",
        "answer_2": "Wen Sie einen Scheißprozess digitalisieren, dann haben Sie einen scheiß digitalen Prozess.",
        "answer_3": "KI ist wahrscheinlich das Beste oder das Schlimmste, was der Menschheit passieren kann.",
        "answer_4": "Walking on water and developing software from a specification are easy if both are frozen.",
        "right_answer": 3
    }

];

let rightquestions = 0;
let currentQuestion = 0;
let audio_wrong = new Audio('audio/wrong.mp3');
let audio_right = new Audio('audio/right.mp3');

function startGame() {
    document.getElementById('questionsbody').style = '';
    document.getElementById('start-game').style = 'display: none';
}

function init() {
    document.getElementById('numberOfQuestions').innerHTML = questions.length;


    showQuestion()
}

function showQuestion() {

    if (gameIsOver()) {
        showEndScreen();
    } else {
        updateProgressBar()
        updateToNextQuestion();
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (rightAnswerSelected(selectedQuestionNumber, question)) {

        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightquestions++;
        audio_right.play();
        addReactivateButton()

    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        audio_wrong.play();
        addReactivateButton();

    }

    document.getElementById('next-button').disabled = false;
}

function rightAnswerSelected(selectedQuestionNumber, question) {
    return selectedQuestionNumber == question['right_answer'];
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButton()
    showQuestion()

}

function resetAnswerButton() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame() {
    document.getElementById('endscreen').style = 'display: none';
    document.getElementById('questionsbody').style = '';

    rightquestions = 0;
    currentQuestion = 0;

    init()
}

function showEndScreen() {

    document.getElementById('endscreen').style = '';
    document.getElementById('questionsbody').style = 'display: none';

    document.getElementById('amount-questions').innerHTML = questions.length;
    document.getElementById('amount-right-questions').innerHTML = rightquestions;
}

function gameIsOver() {
    return currentQuestion >= questions.length
}

function updateProgressBar() {
    let procent = currentQuestion / questions.length;
    procent = Math.round(procent * 100);

    document.getElementById('progress-bar').innerHTML = `${procent} %`;
    document.getElementById('progress-bar').style = `width: ${procent}%;`;
}

function updateToNextQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('questions-number').innerHTML = currentQuestion + 1;

    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];

    removeDeactivateButton();
}

function removeDeactivateButton() {
    document.getElementById('answer_1').classList.remove("deactivate-button");
    document.getElementById('answer_2').classList.remove("deactivate-button");
    document.getElementById('answer_3').classList.remove("deactivate-button");
    document.getElementById('answer_4').classList.remove("deactivate-button");
}

function addReactivateButton() {
    document.getElementById('answer_1').classList.add("deactivate-button");
    document.getElementById('answer_2').classList.add("deactivate-button");
    document.getElementById('answer_3').classList.add("deactivate-button");
    document.getElementById('answer_4').classList.add("deactivate-button");
}