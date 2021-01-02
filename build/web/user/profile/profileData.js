/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {API_URL, contextPath} from "../../js/global-variable.js";
import {checkTokenExpired} from "../user-global-js/checkUserLogin.js";
import {htmlToElements} from "../user-global-js/htmlToElement.js";

window.onload = function () {
    getUserInfor();
    getUserFollowedTopic();
}

function getUserInfor() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `${API_URL}/user/user-information`, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            checkTokenExpired(response);

            if (response.url) {
                document.getElementById("demo-avatar").src = response.url;
            }

            if (response.description) {
                document.getElementById("account-description").innerHTML = response.description;
            }

            if (response.credential) {
                document.getElementById("employment-text").innerHTML = "Works at " + response.credential;
            }

            if (response.location) {
                document.getElementById("location-text").innerHTML = "Lives in " + response.location;
            }

            if (response.school) {
                document.getElementById("education-text").innerHTML = "Studied at " + response.school;
            }

            document.getElementById("username").innerHTML = response.lastName + " " + response.firstName;
            document.getElementById("answer-number-amount").innerHTML = response.totalAnswer + " Answers";
            document.getElementById("question-number-amount").innerHTML = response.totalQuestion + " Questions";
            document.getElementById("bookmark-number-amount").innerHTML = response.totalBookmark + " Bookmarks";
        }
    };

    xhr.send();
}

function getUserFollowedTopic() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `${API_URL}/user/followed-topic`, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            checkTokenExpired(response);
            createFollowedTopicCards(response);
        }
    };

    xhr.send();
}

function createFollowedTopicCards(topics) {
    const topicWrapper = document.querySelector(".account-followed-topic");
    for (let i = 0; i < topics.length; i++) {
        const t = topics[i];
        const topic = '<a href="../topic/topic.jsp?topicId=' + t.tid +'" class="account-topic-element flex-row">\n\
                            <div class="img-topic-wrapper">\n\
                                <img src="' + t.topicImageUrl +'" alt="" />\n\
                            </div>\n\
                            <div class="flex-column">\n\
                                <span style="color: black" id="topic-name"><strong>' + t.topicName +'</strong></span>\n\
                            </div>\n\
                        </a>';
        topicWrapper.appendChild(htmlToElements(topic)[0]);
    }
}

    