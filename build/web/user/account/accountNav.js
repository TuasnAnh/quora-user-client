import {API_URL, contextPath} from "../../js/global-variable.js";
import {checkTokenExpired} from "../user-global-js/checkUserLogin.js";
import {htmlToElements} from "../user-global-js/htmlToElement.js";
import {setHideAction} from "../homepage/answer-card/answer-card.js";
import {upvote, downvote} from "../user-global-js/upvoteAndDownVoteAnswer.js";
import {addToBookmark} from "../user-global-js/addBookmark.js";
import {reportAnswer} from "../user-global-js/reportAnswer.js";

const answerNav = document.getElementById("answer-nav");
const questionNav = document.getElementById("question-nav");

const userAnswerWrapper = document.getElementById("user-answer-wrapper");
const userQuestionWrapper = document.getElementById("user-question-wrapper");

const userAnswer = document.getElementById("user-answer-content");
const userQuestion = document.getElementById("user-question-content");

let answerPage = 1;
let questionPage = 1;
let answerList = [];
let questionList = [];

const params = (new URL(window.location.href)).searchParams;
const userId = params.get("id");

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

window.onload = showUserAnswer();
answerNav.onclick = function () {
    showUserAnswer();
}
questionNav.onclick = function () {
    showUserQuestion();
}

function showUserAnswer() {
    answerList.length = 0;
    userAnswerWrapper.style.display = "block";
    userQuestionWrapper.style.display = "none";
    userQuestion.innerHTML = "";
    questionPage = 1;
    setRedNav("answer");
    getUserAnswer();
}

function showUserQuestion() {
    questionList.length = 0;
    userAnswerWrapper.style.display = "none";
    userQuestionWrapper.style.display = "block";
    userAnswer.innerHTML = "";
    answerPage = 1;
    setRedNav("question");
    getUserQuestion();
}

function getUserAnswer() {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${API_URL}/user/user-answer?id=` + userId, true);
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

        if (a.isUpvote) {
            upvoteStyle = "rgb(46, 105, 255)";
        }
        if (a.isDownvote) {
            downvoteStyle = "rgb(46, 105, 255)";
        }

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

function setVoteAction(answerId) {
    document.querySelector(".upvote-button-svg-" + answerId).addEventListener("click", function () {
        upvote(answerId);
    });
    document.querySelector(".downvote-button-svg-" + answerId).addEventListener("click", function () {
        downvote(answerId);
    });
}

function getUserQuestion() {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${API_URL}/user/user-question?id=` + userId, true);
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