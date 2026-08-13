let flashcards = [
    {
        question: "What is HTML?",
        answer: "HTML stands for HyperText Markup Language and is used to structure web pages."
    },
    {
        question: "What is CSS?",
        answer: "CSS stands for Cascading Style Sheets and is used to style and design web pages."
    },
    {
        question: "What is JavaScript?",
        answer: "JavaScript is a programming language used to make web pages interactive."
    },
    {
        question: "What is Python?",
        answer: "Python is a high-level, interpreted programming language known for its simple syntax."
    },
    {
        question: "What is SQL?",
        answer: "SQL stands for Structured Query Language and is used to manage and query databases."
    },
    {
        question: "What is DBMS?",
        answer: "DBMS stands for Database Management System and is used to store, manage, and retrieve data."
    },
    {
        question: "What is an Algorithm?",
        answer: "An algorithm is a step-by-step procedure used to solve a problem or perform a task."
    },
    {
        question: "What is a Data Structure?",
        answer: "A data structure is a way of organizing and storing data so it can be accessed and processed efficiently."
    },
    {
        question: "What is an API?",
        answer: "API stands for Application Programming Interface and allows different software applications to communicate with each other."
    },
    {
        question: "What is Git?",
        answer: "Git is a distributed version control system used to track changes in source code."
    }
];

let currentIndex = 0;
let editingIndex = null;

const question = document.getElementById("question");
const answer = document.getElementById("answer");
const counter = document.getElementById("counter");

const showAnswer = document.getElementById("showAnswer");
const previous = document.getElementById("previous");
const next = document.getElementById("next");

const addCard = document.getElementById("addCard");
const editCard = document.getElementById("editCard");
const deleteCard = document.getElementById("deleteCard");

const formContainer = document.getElementById("formContainer");
const questionInput = document.getElementById("questionInput");
const answerInput = document.getElementById("answerInput");

const saveCard = document.getElementById("saveCard");
const cancelForm = document.getElementById("cancelForm");


function displayCard() {

    if (flashcards.length === 0) {
        question.textContent = "No flashcards available";
        answer.textContent = "";
        counter.textContent = "0 / 0";
        return;
    }

    question.textContent = flashcards[currentIndex].question;
    answer.textContent = flashcards[currentIndex].answer;

    answer.classList.add("hidden");

    counter.textContent =
        `${currentIndex + 1} / ${flashcards.length}`;
}


showAnswer.addEventListener("click", function () {

    answer.classList.toggle("hidden");

    if (answer.classList.contains("hidden")) {
        showAnswer.textContent = "Show Answer";
    } else {
        showAnswer.textContent = "Hide Answer";
    }

});


next.addEventListener("click", function () {

    if (flashcards.length === 0) return;

    currentIndex++;

    if (currentIndex >= flashcards.length) {
        currentIndex = 0;
    }

    displayCard();
});


previous.addEventListener("click", function () {

    if (flashcards.length === 0) return;

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = flashcards.length - 1;
    }

    displayCard();
});


addCard.addEventListener("click", function () {

    editingIndex = null;

    questionInput.value = "";
    answerInput.value = "";

    formContainer.classList.remove("hidden");
});


editCard.addEventListener("click", function () {

    if (flashcards.length === 0) return;

    editingIndex = currentIndex;

    questionInput.value = flashcards[currentIndex].question;
    answerInput.value = flashcards[currentIndex].answer;

    formContainer.classList.remove("hidden");
});


saveCard.addEventListener("click", function () {

    const newQuestion = questionInput.value.trim();
    const newAnswer = answerInput.value.trim();

    if (newQuestion === "" || newAnswer === "") {
        alert("Please enter both question and answer.");
        return;
    }

    if (editingIndex === null) {

        flashcards.push({
            question: newQuestion,
            answer: newAnswer
        });

        currentIndex = flashcards.length - 1;

    } else {

        flashcards[editingIndex].question = newQuestion;
        flashcards[editingIndex].answer = newAnswer;
    }

    formContainer.classList.add("hidden");

    displayCard();
});


cancelForm.addEventListener("click", function () {

    formContainer.classList.add("hidden");

});


deleteCard.addEventListener("click", function () {

    if (flashcards.length === 0) return;

    const confirmDelete =
        confirm("Are you sure you want to delete this flashcard?");

    if (!confirmDelete) return;

    flashcards.splice(currentIndex, 1);

    if (currentIndex >= flashcards.length) {
        currentIndex = flashcards.length - 1;
    }

    displayCard();
});


displayCard();