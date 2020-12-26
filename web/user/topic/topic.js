/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = loadTopicPageContent();

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

const topicAnswer = document.getElementById("topic-answer-section");
const topicQuestion = document.getElementById("topic-question-section");


function showTopicAnswer() {
    topicAnswer.style.display = "block";
    topicQuestion.style.display = "none";
}

function showTopicQuestion() {
    topicQuestion.style.display = "block";
    topicAnswer.style.display = "none";
}

async function loadTopicPageContent() {
    const params = (new URL(window.location.href)).searchParams;
    const topicId = params.get("topicId");

//    await getTopicAnswerInfor(topicId);
}


function getTopicAnswerInfor(topicId) {
    const userId = checkUserLogin();
    const data = {
        userId,
        topicId,
        context: "getTopicAnswer"
    }

    $.ajax({
        type: "POST",
        url: `${contextPath}/TopicServlet`,
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (response) {
            console.log(response);
        }
    });
}

function getTopicQuestionInfor(topicId) {
    const data = {
        topicId,
        context: "getTopicQuestion"
    }

    $.ajax({
        type: "POST",
        url: `${contextPath}/TopicServlet`,
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (response) {
            console.log(response);
            addTopicQuestionCard(response);
        }
    });
}

function addTopicQuestionCard(questions) {
    const questionWrapper = document.getElementById("topic-question-section");
    for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        const question = '<div class="question-block-content">\n\
                            <div class="flex-row" style="justify-content: space-between">\n\
                                <div class="question-header flex-row">\n\
                                    <span>Question added</span>\n\
                                    &nbsp<span>·</span>&nbsp\n\
                                    <a href="#" class="topic-text">' + q.topicName + '</a>\n\
                                </div>\n\
                                <div class="hide-post">\n\
                                    <svg width="24px" height="24px" viewBox="0 0 24 24">\n\
                                    <g id="hidesvg" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke="#666666"\n\
                                       stroke-width="1.5">\n\
                                    <path d="M12,6 L12,18"\n\
                                          transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) ">\n\
                                    </path>\n\
                                    <path d="M18,12 L6,12"\n\
                                          transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) ">\n\
                                    </path>\n\
                                    </g>\n\
                                    </svg>\n\
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

        questionWrapper.appendChild(htmlToElements(question)[0]);
    }
}