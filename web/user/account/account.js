/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const question = document.getElementById("question-nav");
const answer = document.getElementById("answer-nav");

function setStyle(element) {
    element.style.color = "rgba(185, 43, 39, 1)";
    element.style.borderBottom = "2px solid rgba(185, 43, 39, 1)";
}

function setRedNav(element) {
    question.style = null;
    answer.style = null;

    switch (element) {
        case "question":
            setStyle(question);
            break;
        case "answer":
            setStyle(answer);
            break;
    }
}

