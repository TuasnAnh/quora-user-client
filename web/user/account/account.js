/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const question = document.getElementById("question-nav");
const answer = document.getElementById("answer-nav");
const bookmark = document.getElementById("bookmark-nav");

function setStyle(element) {
    element.style.color = "rgba(185, 43, 39, 1)";
    element.style.borderBottom = "2px solid rgba(185, 43, 39, 1)";
}

function setRedNav(element) {
    question.style = null;
    answer.style = null;
    bookmark.style = null;

    switch (element) {
        case "question":
            setStyle(question);
            break;
        case "answer":
            setStyle(answer);
            break;
        case "bookmark":
            setStyle(bookmark);
            break;
    }
}

const userAnswer = document.getElementById("user-answer-wrapper");
const userQuestion = document.getElementById("user-question-wrapper");
const userBookmark = document.getElementById("user-bookmark-wrapper");


function showUserAnswer() {
    userAnswer.style.display = "block";
    userQuestion.style.display = "none";
    userBookmark.style.display = "none";
    setRedNav("answer");
}

function showUserQuestion() {
    userAnswer.style.display = "none";
    userQuestion.style.display = "block";
    userBookmark.style.display = "none";
    setRedNav("question");
}

function showUserBookmark() {
    userAnswer.style.display = "none";
    userQuestion.style.display = "none";
    userBookmark.style.display = "block";
    setRedNav("bookmark");
}
