/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {API_URL, contextPath} from "../../js/global-variable.js";
import {checkTokenExpired} from "../user-global-js/checkUserLogin.js";
import {htmlToElements} from "../user-global-js/htmlToElement.js";


window.onload = async function () {
    const topics = await getSuggestTopic();
    createDiscoveryTopicCards(topics);
}

function getSuggestTopic() {
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", `${API_URL}/user/suggest-topic`, true);
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


function createDiscoveryTopicCards(topics) {
    const topicWrapper = document.querySelector(".discovery-wrapper");

    for (let i = 0; i < topics.length; i++) {
        const topic = '<a href = "' + '../topic/topic.jsp?topicId=' + topics[i].tid + '" class="discovery-content flex-row">\n\
                            <div class="dis-icon  flex-row">\n\
                                <img src="' + topics[i].topicImageUrl + '" alt="">\n\
                            </div>\n\
                            <div class="dis-infor flex-column">\n\
                                <span class="dis-name">' + topics[i].topicName + '</span>\n\
                                <span class="dis-followers">' + topics[i].follower + " Followers" + '</span>\n\
                            </div>\n\
                        </a>';

        topicWrapper.appendChild(htmlToElements(topic)[0]);
    }
}
