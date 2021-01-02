/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {API_URL, contextPath} from "../../js/global-variable.js";
import {checkTokenExpired} from "../user-global-js/checkUserLogin.js";
import {htmlToElements} from "../user-global-js/htmlToElement.js";

if (window.location.href.includes("homepage")) {
    const greeting = document.querySelector(".greeting-question");
    greeting.onclick = showAddQuestionModel;
}

const hidePost = document.querySelector(".hide-post");
const chooseTopic = document.querySelector(".choose-topic-button");
const cancel = document.querySelector(".cancel-wrapper");
const add = document.querySelector(".add-question-action");
const showAddQuestion = document.querySelector(".question-button-content");

hidePost.onclick = exitAddQuestionModel;
chooseTopic.onclick = showShooseTopicList;
cancel.onclick = exitAddQuestionModel;
add.onclick = addQuestion;
showAddQuestion.onclick = showAddQuestionModel;


let displayTopicList = false;

async function showShooseTopicList() {
    const list = document.querySelector(".choose-topic-value-wrapper");

    if (!displayTopicList) {
        const topics = await getChoosableTopic();
        console.log(topics);
        createChoosableTopicCards(topics);
        list.style.display = "block";
        displayTopicList = true;
    } else {
        list.style.display = "none";
        displayTopicList = false;
        list.innerHTML = "";
    }
}


function getChoosableTopic() {
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", `${API_URL}/user/followed-topic`, true);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
        xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
        xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                checkTokenExpired(response);
                resolve(response);
            }
        };

        xhr.send();
    });
}

function createChoosableTopicCards(topics) {
    const list = document.querySelector(".choose-topic-value-wrapper");

    for (let i = 0; i < topics.length; i++) {
        const topic = '<div id="topic-value-' + i + '" class="choose-topic-value flex-row" >\n\
                                <div class="choose-topic-image">\n\
                                    <img src="' + topics[i].topicImageUrl + '" />\n\
                                </div>\n\
                                <span id="choose-topic-name-' + topics[i].tid + '">' + topics[i].topicName + '</span>\n\
                            </div>';

        list.appendChild(htmlToElements(topic)[0]);
        document.getElementById("topic-value-" + i).addEventListener("click", function () {
            chooseThisTopic(topics[i].tid);
        });
    }
}

let currentChoosingTopic = -1;
function chooseThisTopic(topicid) {
    const list = document.querySelector(".choose-topic-value-wrapper");
    const topicChoosed = document.querySelector(".choose-topic-button-value");
    const topicName = document.getElementById("choose-topic-name-" + topicid);

    currentChoosingTopic = topicid;
    topicChoosed.innerHTML = topicName.innerHTML;
    list.style.display = "none";
    displayTopicList = false;
    list.innerHTML = "";
}


async function addQuestion() {
    if (currentChoosingTopic > -1) {
        if (document.getElementById("question-input-content").value.length > 0) {
            const response = await addQuestionAction();
            if (response === "success") {
                exitAddQuestionModel()
            } else {
                console.log("failed add question");
            }
        }
    }
}

function addQuestionAction() {
    return new Promise((resolve) => {
        const content = document.getElementById("question-input-content");
        const data = {
            topicId: currentChoosingTopic,
            content: content.value,
        }
        const xhr = new XMLHttpRequest();
        xhr.open("POST", `${API_URL}/user/add-question`, true);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
        xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
        xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                resolve(response);
            }
        };
        xhr.send(JSON.stringify(data));
    });
}


function showAddQuestionModel() {
    console.log("show model");
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    const block = document.getElementById("addquestion-container");
    block.style.display = "flex";
}

function exitAddQuestionModel() {
    document.getElementsByTagName("body")[0].style.overflow = "visible";
    const body = document.getElementById("addquestion-container");
    body.style.display = "none";

    const chooseInput = document.querySelector(".choose-topic-button-value");
    const questionInput = document.getElementById("question-input-content");
    chooseInput.innerHTML = "Choose Topic";
    questionInput.value = "";
}