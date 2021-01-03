/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function setAnswerRed() {
    document.getElementById("search-answer-nav").style.color = "rgb(185, 43, 39)";
    document.getElementById("search-answer-nav").style.borderBottom = "2px solid rgb(185, 43, 39)";
    document.getElementById("search-answer-content").style.display = "block";
    document.getElementById("search-question-content").style.display = "none";
}

function setQuestionRed() {
    document.getElementById("search-question-nav").style.color = "rgb(185, 43, 39)";
    document.getElementById("search-question-nav").style.borderBottom = "2px solid rgb(185, 43, 39)";
    document.getElementById("search-question-content").style.display = "block";
    document.getElementById("search-answer-content").style.display = "none";
}

function setSearchNav(except) {
    document.getElementById("search-answer-nav").style.color = "black";
    document.getElementById("search-answer-nav").style.borderBottom = "none";
    document.getElementById("search-question-nav").style.color = "black";
    document.getElementById("search-question-nav").style.borderBottom = "none";

    switch (except) {
        case "answer":
            setAnswerRed();
            break;
        case "question":
            setQuestionRed();
            break;
    }
}