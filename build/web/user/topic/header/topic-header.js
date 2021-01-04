/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {API_URL, contextPath} from "../../../js/global-variable.js";
import {checkTokenExpired} from "../../user-global-js/checkUserLogin.js";
import {htmlToElements} from "../../user-global-js/htmlToElement.js";

window.onbload = loadTopicHeader();
document.querySelector(".topic-follow-wrapper").onclick = function () {
    followTopic();
};


async function loadTopicHeader() {
    const params = (new URL(window.location.href)).searchParams;
    const topicId = params.get("topicId");
    getTopicInfor(topicId);
}

function getTopicInfor(topicId) {
    const data = {
        topicId,
    }
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${API_URL}/user/topic-information`, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            checkTokenExpired(response);
            const topicImage = document.getElementById("topic-image");
            topicImage.src = response.topicImageUrl;
            const topicName = document.getElementById("topic-page-name");
            topicName.innerHTML = response.topicName;
            console.log("hello");
            if (response.isFollowed) {
                topicFollowedUi(response.follower, topicId)
            } else {
                topicNotFollowedUi(response.follower, topicId)
            }
        }
    };

    xhr.send(JSON.stringify(data));
}

function followTopic() {
    const params = (new URL(window.location.href)).searchParams;
    const topicId = params.get("topicId");
    const data = {
        topicId,
    }

    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${API_URL}/user/follow-topic`, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            checkTokenExpired(response);
            if (response.isFollowed === "true") {
                topicFollowedUi(response.follower, topicId)
            } else {
                topicNotFollowedUi(response.follower, topicId)
            }
        }
    };

    xhr.send(JSON.stringify(data));
}


let follow_topic_num = "";
let follow_topic_text = "";
let follow_topic_svg = "";

function topicFollowedUi(follower) {
    console.log("followed");
    follow_topic_num = `follow-amount`;
    follow_topic_text = `follow-text`;
    follow_topic_svg = `topic-follow-svg`;
    const followTopicNum = document.getElementById(follow_topic_num);
    const followTopicText = document.getElementById(follow_topic_text);
    followTopicNum.innerHTML = follower;
    followTopicText.innerHTML = "Following";
}

function topicNotFollowedUi(follower) {
    console.log("follow");
    follow_topic_num = `follow-amount`;
    follow_topic_text = `follow-text`;
    follow_topic_svg = `topic-follow-svg`;
    const followTopicNum = document.getElementById(follow_topic_num);
    const followTopicText = document.getElementById(follow_topic_text);
    followTopicNum.innerHTML = follower;
    followTopicText.innerHTML = "Follow";
}

