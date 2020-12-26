/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onbload = loadTopicHeader();

async function loadTopicHeader() {
    const params = (new URL(window.location.href)).searchParams;
    const topicId = params.get("topicId");

    getTopicInfor(topicId);
//    await getTopicAnswerInfor(topicId);
}

function getTopicInfor(topicId) {
    const userId = checkUserLogin();
    const data = {
        userId,
        topicId,
        context: "getTopicInfor"
    }

    $.ajax({
        type: "POST",
        url: `${contextPath}/TopicServlet`,
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (response) {
            console.log(response);
            const topicImage = document.getElementById("topic-image");
            topicImage.src = response.topicImageUrl;
            const topicName = document.getElementById("topic-page-name");
            topicName.innerHTML = response.topicName;
            if (response.isFollowed) {
                topicFollowedUi(response.follower, topicId)
            } else {
                topicNotFollowedUi(response.follower, topicId)
            }
        }
    });
}

function followTopic() {
    console.log("follow topic action");
    const userId = checkUserLogin();
    const params = (new URL(window.location.href)).searchParams;
    const topicId = params.get("topicId");
    const data = {
        userId,
        topicId,
        context: "followTopic"
    }

    $.ajax({
        type: "POST",
        url: `${contextPath}/TopicServlet`,
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (response) {
            console.log(response);
            if (response.isFollowed === "true") {
                topicFollowedUi(response.follower, topicId)
            } else {
                topicNotFollowedUi(response.follower, topicId)
            }
        }
    });
}


let follow_topic_num = "";
let follow_topic_text = "";
let follow_topic_svg = "";

function topicFollowedUi(follower, topicid) {
    follow_topic_num = `follow-amount`;
    follow_topic_text = `follow-text`;
    follow_topic_svg = `topic-follow-svg`;
    const followTopicNum = document.getElementById(follow_topic_num);
    const followTopicText = document.getElementById(follow_topic_text);
    followTopicNum.innerHTML = follower;
    followTopicText.innerHTML = "Following";
}

function topicNotFollowedUi(follower, topicid) {
    follow_topic_num = `follow-amount`;
    follow_topic_text = `follow-text`;
    follow_topic_svg = `topic-follow-svg`;
    const followTopicNum = document.getElementById(follow_topic_num);
    const followTopicText = document.getElementById(follow_topic_text);
    followTopicNum.innerHTML = follower;
    followTopicText.innerHTML = "Follow";
}

