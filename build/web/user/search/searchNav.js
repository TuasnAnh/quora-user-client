/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {API_URL, contextPath} from "../../js/global-variable.js";
import {checkTokenExpired} from "../user-global-js/checkUserLogin.js";
import {htmlToElements} from "../user-global-js/htmlToElement.js";
import {setHideAction} from "../homepage/answer-card/answer-card.js";
import {upvote, downvote} from "../user-global-js/upvoteAndDownVoteAnswer.js";
import {addToBookmark} from "../user-global-js/addBookmark.js";
import {reportAnswer} from "../user-global-js/reportAnswer.js";

let questionSearched = false;
let answerList = [];
let questionList = [];

const searchA = document.getElementById("search-answer-nav");
const searchQ = document.getElementById("search-question-nav");

const searchAnswer = document.getElementById("search-answer-section");
const searchQuestion = document.getElementById("search-question-section");

window.onload = function () {
    const params = (new URL(window.location.href)).searchParams;
    const searchKey = params.get("q");

    getSearchAnswer(searchKey);
}

// only search once
searchQ.onclick = function () {
    if (!questionSearched) {
        questionSearched = true;
        const params = (new URL(window.location.href)).searchParams;
        const searchKey = params.get("q");
        getSearchQuestion(searchKey);
    }
    setSearchNav("question");
}

searchA.onclick = function () {
    setSearchNav("answer");
}

// load more button action
let isGetting = false;
document.querySelector(".load-more-answer-button").onclick = async function () {
    if (!isGetting) {
        isGetting = true;
        const params = (new URL(window.location.href)).searchParams;
        const searchKey = params.get("q");
        getSearchAnswer(searchKey);
        isGetting = false;
    }
};

document.querySelector(".load-more-question-button").onclick = async function () {
    if (!isGetting) {
        isGetting = true;
        const params = (new URL(window.location.href)).searchParams;
        const searchKey = params.get("q");
        getSearchQuestion(searchKey);
        isGetting = false;
    }
};

function getSearchAnswer(searchKey) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${API_URL}/user/search-answer`, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            checkTokenExpired(response);
            if (response.length < 5) {
                document.querySelector(".load-more-answer-button").style.display = "none";
            } else {
                document.querySelector(".load-more-answer-button").style.display = "flex";
            }
            addSearchAnswerCard(response);
        }
    };

    let lastId;
    if (answerList.length > 0) {
        lastId = answerList[answerList.length - 1];
    } else {
        lastId = -1;
    }
    answerList.length = 0;
    xhr.send(JSON.stringify({lastId, key: searchKey}));
}

function getSearchQuestion(searchKey) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${API_URL}/user/search-question`, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            checkTokenExpired(response);
            if (response.length < 10) {
                document.querySelector(".load-more-question-button").style.display = "none";
            } else {
                document.querySelector(".load-more-question-button").style.display = "flex";
            }
            addSearchQuestionCard(response);
        }
    };

    let lastId;
    if (questionList.length > 0) {
        lastId = questionList[questionList.length - 1];
    } else {
        lastId = -1;
    }
    questionList.length = 0;
    xhr.send(JSON.stringify({lastId, key: searchKey}));
}


function addSearchAnswerCard(answers) {
    for (let i = 0; i < answers.length; i++) {
        const a = answers[i];
        let userUrl = "../../assets/mark.jpg";
        let userCredential = "";
        let answerDemo = "../../assets/logo-trimed.png";
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
                            <div class="answer-demo-image" id="demo-image-' + a.answerId + '">\n\
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
        searchAnswer.appendChild(htmlToElements(answer)[0]);

//         set upvote , downvote action
        setVoteAction(a.answerId);
        // set add to bookamrk action
        setBookmarkAction(a.answerId);
        // set report action
        setReportAction(a.answerId);
    }
    // set show hide action
    setHideAction(answerList);
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

function addSearchQuestionCard(questions) {
    for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        questionList.push(q.questionId);
        const question = '<div class="question-block-content">\n\
                            <div class="flex-row" style="justify-content: space-between">\n\
                                <div class="question-header flex-row">\n\
                                    <span>Question added</span>\n\
                                    &nbsp<span>·</span>&nbsp\n\
                                    <a href="../topic/topic.jsp?topicId=' + q.topicId + '" class="topic-text">' + q.topicName + '</a>\n\
                                </div>\n\
                            </div>\n\
                            <a href="../question/question.jsp?questionId=' + q.questionId + '" class="question-content">' + q.content + '</a>\n\
                            <div class="question-footer flex-row">\n\
                                <a id="answer-amount">' + q.totalAnswer + ' Answers</a>\n\
                                &nbsp<span>·</span>&nbsp\n\
                                <span>Last followed&nbsp</span>\n\
                                <span id="answer-last-followed">' + q.time + '</span>\n\
                            </div>\n\
                        </div>';

        searchQuestion.appendChild(htmlToElements(question)[0]);
    }
}