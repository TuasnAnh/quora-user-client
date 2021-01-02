/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {API_URL, contextPath} from "../../js/global-variable.js";
import {checkTokenExpired} from "../user-global-js/checkUserLogin.js";
import {htmlToElements} from "../user-global-js/htmlToElement.js";
import {setHideAction} from "./answer-card/answer-card.js";
import {upvote, downvote} from "../user-global-js/upvoteAndDownVoteAnswer.js";
import {addToBookmark} from "../user-global-js/addBookmark.js";
import {reportAnswer} from "../user-global-js/reportAnswer.js";

const newFeed = document.querySelector(".newfeed-content");

let page = 1;
let answerList = [];
let questionList = [];
window.onload = async function () {
    getUserGreeing();
    const answers = await getSuggestAnswer();
    checkTokenExpired(answers);
    addAnswerCard(answers);

    const questions = await getSuggestQuestion();
    checkTokenExpired(questions);
    addQuestionCard(questions);
}

let isGetting = false;
document.querySelector(".load-more-button").onclick = async function () {
    if (!isGetting) {
        isGetting = true;
        page += 1;
        const answers = await getSuggestAnswer();
        checkTokenExpired(answers);
        addAnswerCard(answers);

        const questions = await getSuggestQuestion();
        checkTokenExpired(questions);
        addQuestionCard(questions);
        isGetting = false;
    }
};

// get user greeting 
function getUserGreeing() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `${API_URL}/user/user-information`, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            checkTokenExpired(response);
            document.querySelector(".user-logo-image").src = response.url;
            document.getElementById("user-greeting-name").innerHTML = response.lastName + " " + response.firstName;
        }
    };
    xhr.send();
}

// get suggest answer 
function getSuggestAnswer() {
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", `${API_URL}/user/suggest-answer`, true);
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

        let lastId;
        if (answerList.length > 0) {
            lastId = answerList[answerList.length - 1];
        } else {
            lastId = -1;
        }
        xhr.send(JSON.stringify({lastId}));
//        xhr.send(JSON.stringify({page: page}));
    });
}

function addAnswerCard(answers) {
    for (let i = 0; i < answers.length; i++) {
        const a = answers[i];
        let userUrl = "../../assets/mark.jpg";
        let userCredential = "";
        let answerDemo = "../../assets/answer-image-1.jpg";
        let upvoteStyle = "none";
        let downvoteStyle = "none";
        let bookmarkStyle = "black";
        let bookmarkState = "Bookmark";
        if (a.url) {
            userUrl = a.url;
        }

        if (a.authorCredential) {
            userCredential = a.authorCredential;
        }

        const hasImage = a.content.match(/https:[/]+res.cloudinary.com[\w\d/!@#$%^&*();:.,><?]+/g);
        if (hasImage !== null) {
            answerDemo = hasImage[0];
        }

        if (a.isUpvote)
            upvoteStyle = "rgb(46, 105, 255)";
        if (a.isDownvote)
            downvoteStyle = "rgb(46, 105, 255)";
        if (a.isBookmarked) {
            bookmarkStyle = "blue";
            bookmarkState = "Bookmarked";
        }

        answerList.push(a.answerId);
        const answer = '<div id="answer-' + a.answerId + '" class="answer-wrapper">\n\
                        <div class="answer-header">\n\
                            <div class="header-infor flex-row">\n\
                                <p>Answer</p>\n\
                                <p>&nbsp·&nbsp</p>\n\
                                <a href="' + contextPath + "/user/topic/topic.jsp?topicId=" + a.topicId + '">' + a.topicName + '</a>\n\
                            </div>\n\
                        </div>\n\
                        <div class="answer-poster-infor">\n\
                            <div class="poster-avatar">\n\
                                <img class="poster-avatar-image" src="' + userUrl + '" alt="" />\n\
                            </div>\n\
                            <div class="poster-infor">\n\
                                <div class="flex-row">\n\
                                    <a style="color:black" href="../account/account.jsp?id=' + a.authorId + '" class="poster-name">' + a.authorName + '</a>\n\
                                    &nbsp<span>·</span>&nbsp\n\
                                    <span style="color: #939598">' + a.time.split(" ")[0] + '</span>\n\
                                </div>\n\
                                <div class="poster-description">\n\
                                    <span>' + userCredential + '</span>\n\
                                </div>\n\
                            </div>\n\
                        </div>\n\
                        <div class="answer-content">\n\
                            <div class="answer-title">\n\
                                <a href="../question/question.jsp?questionId=' + a.questionId + '" style="color: black">' + a.question + '</a>\n\
                            </div>\n\
                            <div class="answer-full-content">' + a.content + '</div>\n\
                            <div class="answer-demo-image" id="demo-image-' + a.questionId + '">\n\
                                <img src="' + answerDemo + '" alt="" />\n\
                            </div>\n\
                        </div>\n\
                        <div class="answer-interactive-button flex-row">\n\
                            <div class="interactive-button flex-row">\n\
                                <div class="upvote-button flex-row">\n\
                                    <div style="cursor: pointer;" class="upvote-button-svg-' + a.answerId + '">\n\
                                        <svg width="24px" height="24px" viewBox="0 0 24 24">\n\
                                        <g\n\
                                            id="upvotesvg-' + a.answerId + '"\n\
                                            stroke-width="1.5"\n\
                                            stroke="rgb(46, 105, 255)"\n\
                                            fill="' + upvoteStyle + '"\n\
                                            fill-rule="evenodd"\n\
                                            stroke-linejoin="round"\n\
                                            >\n\
                                        <polygon points="12 4 3 15 9 15 9 20 15 20 15 15 21 15"></polygon>\n\
                                        </g>\n\
                                        </svg>\n\
                                    </div>\n\
                                    <span id="upvote-num-' + a.answerId + '" class="vote-number">' + a.upvote + '</span>\n\
                                </div>\n\
                                <div class="downvote-button flex-row">\n\
                                    <div style="cursor: pointer;" class="downvote-button-svg-' + a.answerId + '">\n\
                                        <svg width="24px" height="24px" viewBox="0 0 24 24">\n\
                                        <g\n\
                                            id="downvotesvg-' + a.answerId + '"\n\
                                            stroke="rgb(46, 105, 255)"\n\
                                            fill="' + downvoteStyle + '"\n\
                                            stroke-width="1.5"\n\
                                            fill-rule="evenodd"\n\
                                            stroke-linejoin="round"\n\
                                            >\n\
                                        <polygon\n\
                                            transform="translate(12.000000, 12.000000) rotate(-180.000000) translate(-12.000000, -12.000000) "\n\
                                            points="12 4 3 15 9 15 9 20 15 20 15 15 21 15"\n\
                                            ></polygon>\n\
                                        </g>\n\
                                        </svg>\n\
                                    </div>\n\
                                    <span id="downvote-num-' + a.answerId + '" class="vote-number">' + a.downvote + '</span>\n\
                                </div>\n\
                            </div>\n\
                            <div class="report-button-wrapper">\n\
                                <div class="report-button" onclick="showReportExtend(' + a.answerId + ')">\n\
                                    <div class="report-button-svg">\n\
                                        <svg width="24px" height="24px" viewBox="0 0 24 24">\n\
                                        <g id="reportsvg" stroke-width="1.5" stroke="#666" fill="none" fill-rule="evenodd">\n\
                                        <path\n\
                                            d="M5,14 C3.8954305,14 3,13.1045695 3,12 C3,10.8954305 3.8954305,10 5,10 C6.1045695,10 7,10.8954305 7,12 C7,13.1045695 6.1045695,14 5,14 Z M12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 Z M19,14 C17.8954305,14 17,13.1045695 17,12 C17,10.8954305 17.8954305,10 19,10 C20.1045695,10 21,10.8954305 21,12 C21,13.1045695 20.1045695,14 19,14 Z"\n\
                                            ></path>\n\
                                        </g>\n\
                                        </svg>\n\
                                    </div>\n\
                                </div>\n\
                                <div tabindex="-2" id="report-extend-' + a.answerId + '" class="report-extend">\n\
                                    <span style="color: ' + bookmarkStyle + '" id="add-bookmark-' + a.answerId + '">' + bookmarkState + '</span>\n\
                                    <span id="report-answer-' + a.answerId + '">Report</span>\n\
                                </div>\n\
                            </div>\n\
                        </div>\n\
                    </div>';
        newFeed.appendChild(htmlToElements(answer)[0]);
        // set show hide action
        setHideAction(a.questionId);
//         set upvote , downvote action
        setVoteAction(a.answerId);
        // set add to bookamrk action
        setBookmarkAction(a.answerId);
        // set report action
        setReportAction(a.answerId);
    }
}

function setVoteAction(answerId) {
    document.querySelector(".upvote-button-svg-" + answerId).addEventListener("click", function () {
        upvote(answerId);
    });
    document.querySelector(".downvote-button-svg-" + answerId).addEventListener("click", function () {
        downvote(answerId);
    });
}

function setBookmarkAction(answerId) {
    document.getElementById("add-bookmark-" + answerId).addEventListener("click", function () {
        addToBookmark(answerId);
    });
}

function setReportAction(answerId) {
    document.getElementById("report-answer-" + answerId).addEventListener("click", function () {
        reportAnswer(answerId);
    });
}

// get question cart 
function getSuggestQuestion() {
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", `${API_URL}/user/suggest-question`, true);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
        xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
        xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                resolve(response);
            }
        };

        let lastId;
        if (questionList.length > 0) {
            lastId = questionList[questionList.length - 1];
        } else {
            lastId = -1;
        }
        xhr.send(JSON.stringify({lastId}));
    });
}

function addQuestionCard(questions) {
    if (questions.length > 0) {
        let question = "";
        question += '<div class="question-block">\n\
                        <div class="question-block-header flex-row">\n\
                            <div class="question-logo">\n\
                                <svg width="24px" height="24px" viewBox="0 0 24 24">\n\
                                <g\n\
                                    id="questionsvg"\n\
                                    stroke="#666"\n\
                                    stroke-width="1.5"\n\
                                    fill="none"\n\
                                    fill-rule="evenodd"\n\
                                    stroke-linecap="round"\n\
                                    stroke-linejoin="round"\n\
                                    >\n\
                                <path\n\
                                    d="M15.0037473,18.5 C15.0037473,16.7206263 15.0037473,15.8306263 15.0037473,15.83 C17.3666743,14.7057707 19,12.2909208 19,9.5 C19,5.63400675 15.8659932,2.5 12,2.5 C8.13400675,2.5 5,5.63400675 5,9.5 C5,12.2916985 6.63423594,14.7017006 8.99822794,15.8255267 C8.99822794,15.8255267 8.99822794,16.7170178 8.99822794,18.5 L15.0037473,18.5 Z M12,8 L10,11 L14,11 L12,14 M9.76460414,20.5003969 C10.3139024,21.1136855 11.1118833,21.4996031 12,21.4996031 C12.886481,21.4996031 13.6831579,21.1151057 14.2323583,20.5037832"\n\
                                    ></path>\n\
                                </g>\n\
                                </svg>\n\
                            </div>\n\
                            <span>Questions for you</span>\n\
                        </div>';
        for (let i = 0; i < questions.length; i++) {
            const q = questions[i];
            questionList.push(q.questionId);
            question += '<div id="question-' + q.questionId + '" class="question-block-content">\n\
                            <div class="flex-row" style="justify-content: space-between">\n\
                                <div class="question-header flex-row">\n\
                                    <span>Question added</span>\n\
                                    &nbsp<span>·</span>&nbsp\n\
                                    <a href="' + contextPath + "/user/topic/topic.jsp?topicId=" + q.topicId + '" class="topic-text">' + q.topicName + '</a>\n\
                                </div>\n\
                            </div>\n\
                            <a href="../question/question.jsp?questionId=' + q.questionId + '" class="question-content">' + q.content + '</a>\n\
                            <div class="question-footer flex-row">\n\
                                <a id="answer-amount">' + q.totalAnswer + ' Answer</a>\n\
                                &nbsp<span>·</span>&nbsp\n\
                                <span>Time&nbsp</span>\n\
                                <span style="font-size: 15px" id="answer-last-followed">' + q.time + '</span>\n\
                            </div>\n\
                        </div>';
        }
        question += '</div>';
        newFeed.appendChild(htmlToElements(question)[0]);
    }
}

