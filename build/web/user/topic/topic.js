/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function setAnswerRed() {
    document.getElementById("topic-answer-nav").style.color = "rgb(185, 43, 39)";
    document.getElementById("topic-answer-nav").style.borderBottom = "2px solid rgb(185, 43, 39)";
}

function setQuestionRed() {
    document.getElementById("topic-question-nav").style.color = "rgb(185, 43, 39)";
    document.getElementById("topic-question-nav").style.borderBottom = "2px solid rgb(185, 43, 39)";
}

function setTopicNav(except) {
    document.getElementById("topic-answer-nav").style.color = "black";
    document.getElementById("topic-answer-nav").style.borderBottom = "none";
    document.getElementById("topic-question-nav").style.color = "black";
    document.getElementById("topic-question-nav").style.borderBottom = "none";

    switch (except) {
        case "answer":
            setAnswerRed();
            break;
        case "question":
            setQuestionRed();
            break;
    }
}

