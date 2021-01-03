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

const answerNav = document.getElementById("answer-nav");
const questionNav = document.getElementById("question-nav");
const bookmarkNav = document.getElementById("bookmark-nav");

const userAnswerWrapper = document.getElementById("user-answer-wrapper");
const userQuestionWrapper = document.getElementById("user-question-wrapper");
const userBookmarkWrapper = document.getElementById("user-bookmark-wrapper");

const userAnswer = document.getElementById("user-answer-content");
const userQuestion = document.getElementById("user-question-content");
const userBookmark = document.getElementById("user-bookmark-content");

let answerPage = 1;
let questionPage = 1;
let bookmarkPage = 1;
let answerList = [];
let questionList = [];
let bookmarkList = [];

// load more button action
let isGetting = false;
document.querySelector(".load-more-answer-button").onclick = async function () {
    if (!isGetting) {
        isGetting = true;
        getUserAnswer();
        isGetting = false;
    }
};

document.querySelector(".load-more-question-button").onclick = async function () {
    if (!isGetting) {
        isGetting = true;
        getUserQuestion();
        isGetting = false;
    }
};

document.querySelector(".load-more-bookmark-button").onclick = async function () {
    if (!isGetting) {
        isGetting = true;
        getUserBookmark();
        isGetting = false;
    }
};

window.onload = showUserAnswer();
answerNav.onclick = function () {
    showUserAnswer();
}
questionNav.onclick = function () {
    showUserQuestion();
}
bookmarkNav.onclick = function () {
    showUserBookmark();
}

function showUserAnswer() {
    userAnswerWrapper.style.display = "block";
    userQuestionWrapper.style.display = "none";
    userBookmarkWrapper.style.display = "none";
    userQuestion.innerHTML = "";
    userBookmark.innerHTML = "";
    answerList.length = 0;
    questionPage = 1;
    bookmarkPage = 1;
    setRedNav("answer");
    getUserAnswer();
}

function showUserQuestion() {
    userAnswerWrapper.style.display = "none";
    userQuestionWrapper.style.display = "block";
    userBookmarkWrapper.style.display = "none";
    userAnswer.innerHTML = "";
    userBookmark.innerHTML = "";
    questionList.length = 0;
    answerPage = 1;
    bookmarkPage = 1;
    setRedNav("question");
    getUserQuestion();
}

function showUserBookmark() {
    userAnswerWrapper.style.display = "none";
    userQuestionWrapper.style.display = "none";
    userBookmarkWrapper.style.display = "block";
    userQuestion.innerHTML = "";
    userAnswer.innerHTML = "";
    bookmarkList.length = 0;
    answerPage = 1;
    questionPage = 1;
    setRedNav("bookmark");
    getUserBookmark();
}

function getUserAnswer() {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${API_URL}/user/user-answer`, true);
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
            addUserAnswerCard(response);
        }
    };

    let lastId;
    if (answerList.length > 0) {
        lastId = answerList[answerList.length - 1];
    } else {
        lastId = -1;
    }
    xhr.send(JSON.stringify({lastId}));
//    xhr.send(JSON.stringify({page: answerPage}));
}

function addUserAnswerCard(answers) {
    for (let i = 0; i < answers.length; i++) {
        const a = answers[i];
        let userUrl = "../../assets/mark.jpg";
        let userCredential = "";
        let answerDemo = "../../assets/answer-image-1.jpg";
        let upvoteStyle = "none";
        let downvoteStyle = "none";
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

        answerList.push(a.answerId);
        const answer = '<div id="answer-' + a.answerId + '" class="answer-in-account-page">\n\
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
                        </div>\n\
                    </div>';
        userAnswer.appendChild(htmlToElements(answer)[0]);

//         set upvote , downvote action
        setVoteAction(a.answerId);
    }
    // set show hide action
    setHideAction(answerList);
}

function getUserBookmark() {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${API_URL}/user/user-bookmark`, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            checkTokenExpired(response);
            if (response.length < 10) {
                document.querySelector(".load-more-bookmark-button").style.display = "none";
            } else {
                document.querySelector(".load-more-bookmark-button").style.display = "flex";
            }
            addUserBookmarkCard(response);
        }
    };

    let lastId;
    if (bookmarkList.length > 0) {
        lastId = bookmarkList[bookmarkList.length - 1];
    } else {
        lastId = -1;
    }
    xhr.send(JSON.stringify({lastId}));
}

function addUserBookmarkCard(bookmarks) {
    for (let i = 0; i < bookmarks.length; i++) {
        const a = bookmarks[i];
        let userUrl = "../../assets/mark.jpg";
        let userCredential = "";
        let answerDemo = "../../assets/answer-image-1.jpg";
        let upvoteStyle = "none";
        let downvoteStyle = "none";
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

        bookmarkList.push(a.answerId);
        const answer = '<div id="bookmark-' + a.answerId + '" class="answer-in-account-page">\n\
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
                                    <a style="color:black; font-size: 13px; font-weight: bold" href="../account/account.jsp?id=' + a.authorId + '" class="poster-name">' + a.authorName + '</a>\n\
                                    &nbsp<span>·</span>&nbsp\n\
                                    <span style="color: #939598">' + a.time.split(" ")[0] + '</span>\n\
                                </div>\n\
                                <div class="poster-description">\n\
                                    <span>' + userCredential + '</span>\n\
                                </div>\n\
                            </div>\n\
                            <div style="cursor: pointer" class="remove-bookmark-' + a.answerId + '">\n\
                                <svg width="24px" height="24px" viewBox="0 0 24 24">\n\
                                <g stroke-width="1.5" stroke="#2e69ff" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">\n\
                                <polygon class="icon_svg-fill" points="10.5012125 16 5.00242498 20 5 8 16 8 16 20"></polygon>\n\
                                <polyline points="8.00018899 5.92307692 8 5 19 5 19 17 18.0028546 16.2746434"></polyline>\n\
                                </g>\n\
                                </svg>\n\
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
                        </div>\n\
                    </div>';
        userBookmark.appendChild(htmlToElements(answer)[0]);

//         set upvote , downvote action
        setVoteAction(a.answerId);
        // set remove bookmark action
        setRemoveBookmark(a.answerId);
    }
    // set show hide action
    setHideAction(bookmarkList);
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

function setRemoveBookmark(answerId) {
    document.querySelector(".remove-bookmark-" + answerId).addEventListener("click", async function () {
        const response = await removeBookmarkAction(answerId);
        if (response.status === "removed") {
            document.getElementById("bookmark-" + answerId).style.display = "none";
        }
    });
}

function removeBookmarkAction(answerId) {
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", `${API_URL}/user/add-bookmark`, true);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
        xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
        xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                resolve(response);
            }
        };

        xhr.send(JSON.stringify({answerId}));
    });
}

function getUserQuestion() {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${API_URL}/user/user-question`, true);
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
            addUserQuestionCard(response);
        }
    };

    let lastId;
    if (questionList.length > 0) {
        lastId = questionList[questionList.length - 1];
    } else {
        lastId = -1;
    }
    xhr.send(JSON.stringify({lastId}));
}

function addUserQuestionCard(questions) {
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

        userQuestion.appendChild(htmlToElements(question)[0]);
    }
}