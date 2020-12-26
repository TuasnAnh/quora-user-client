/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

let displayTopicList = false;

async function showShooseTopicList() {
    const list = document.querySelector(".choose-topic-value-wrapper");

    if (!displayTopicList) {
        const topics = await getChoosableTopic();
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
        const userId = checkUserLogin();
        const xhr = new XMLHttpRequest();
        xhr.open("POST", `${contextPath}/TopicServlet`, true);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
        xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
        xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                resolve(response);
            }
        };

        xhr.send(JSON.stringify({userId: userId, context: "getFollowedTopic"}));
    });
}

function createChoosableTopicCards(topics) {
    const list = document.querySelector(".choose-topic-value-wrapper");

    for (let i = 0; i < topics.length; i++) {
        const topic = '<div class="choose-topic-value flex-row" onclick="chooseThisTopic(' + topics[i].tid + ')">\n\
                                <div class="choose-topic-image">\n\
                                    <img src="' + topics[i].topicImageUrl + '" />\n\
                                </div>\n\
                                <span id="choose-topic-name-' + topics[i].tid + '">' + topics[i].topicName + '</span>\n\
                            </div>';

        list.appendChild(htmlToElements(topic)[0]);
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


function addQuestion() {
    if (currentChoosingTopic > -1) {
        const userId = checkUserLogin();
        const content = document.getElementById("question-input-content");

        console.log(content.value);
        if (content.value.length > 0) {
            const data = {
                userId,
                topicId: currentChoosingTopic,
                content: content.value,
                context: "addQuestion"
            }

            $.ajax({
                type: "POST",
                url: `${contextPath}/QuestionServlet`,
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(data),
                success: function (response) {
                    console.log(response);
                    if (response === "success") {
                        exitAddQuestionModel()
                    } else {
                        console.log("failed add question");
                    }
                }
            });
        }
    }
}

async function addQuestion() {
    if (currentChoosingTopic > -1) {
        const response = await addQuestionAction();
        if (response === "success") {
            exitAddQuestionModel()
        } else {
            console.log("failed add question");
        }
    }
}

function addQuestionAction() {
    return new Promise((resolve) => {
        const userId = checkUserLogin();
        const content = document.getElementById("question-input-content");
        const data = {
            userId,
            topicId: currentChoosingTopic,
            content: content.value,
            context: "addQuestion"
        }
        const xhr = new XMLHttpRequest();
        xhr.open("POST", `${contextPath}/QuestionServlet`, true);
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