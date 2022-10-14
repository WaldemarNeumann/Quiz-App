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

let currentQustion = 0;


function startGame() {
    document.getElementById('game-start').classList.add('d-none');
    document.getElementById('card-right').style = 'display:';
}

function init() {
    document.getElementById('amountQustion').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {

    if (currentQustion >= questions.length) {
        //TOdo Show End Screen
    } else {
        let question = questions[currentQustion];

        document.getElementById('currentQqustions').innerHTML = currentQustion + 1;

        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer-1').innerHTML = question['answer_1'];
        document.getElementById('answer-2').innerHTML = question['answer_2'];
        document.getElementById('answer-3').innerHTML = question['answer_3'];
        document.getElementById('answer-4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = questions[currentQustion];
    console.log('Ausgewählte Antwort is', selection);
    let selectedQuestionNumbers = selection.slice(-1);
    console.log('Ausgewählte Fragen-Nummer', selectedQuestionNumbers);
    console.log('Richtige Antwort', question['right_answer']);

    let idOfRightAnswers = `answer-${question['right_answer']}`;

    if (selectedQuestionNumbers == question['right_answer']) {
        console.log('Antwort ist richtig');
        document.getElementById(selection).classList.add('bg-success');
    } else {
        console.log('Antwort ist Falsch');
        document.getElementById(selection).classList.add('bg-danger');
        document.getElementById(idOfRightAnswers).classList.add('bg-success');
    }

    document.getElementById('nextQuestion').disabled = false;
}

function nextQustion() {

    currentQustion++;
    document.getElementById('nextQuestion').disabled = true;
    resetButtons()
    showQuestion();

}

function resetButtons() {
    document.getElementById('answer-1').classList.remove('bg-success');
    document.getElementById('answer-1').classList.remove('bg-danger');
    document.getElementById('answer-2').classList.remove('bg-success');
    document.getElementById('answer-2').classList.remove('bg-danger');
    document.getElementById('answer-3').classList.remove('bg-success');
    document.getElementById('answer-3').classList.remove('bg-danger');
    document.getElementById('answer-4').classList.remove('bg-success');
    document.getElementById('answer-4').classList.remove('bg-danger');
}