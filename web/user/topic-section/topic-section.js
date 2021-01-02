
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//
import {checkTokenExpired} from "../user-global-js/checkUserLogin.js";
import {API_URL} from "../../js/global-variable.js";
import {htmlToElements} from "../user-global-js/htmlToElement.js";

window.onload = getFollowedTopic();

function createFollowedTopicCards(topics) {
    const topicWrapper = document.querySelector(".topic-section-content");
    for (let i = 0; i < topics.length; i++) {
        const topic = '<div class="topic-block-wrapper">\n\
                        <a href="' + '../topic/topic.jsp?topicId=' + topics[i].tid + '" class="topic-block-container">\n\
                            <div class="topicicon-wrapper">\n\
                                <div class="topicicon-container">\n\
                                    <img class="topicicon-image" src="' + topics[i].topicImageUrl + '" alt="" />\n\
                                </div>\n\
                            </div>\n\
                            <div class="topic-name">\n\
                                <div>' + topics[i].topicName + '</div>\n\
                            </div>\n\
                        </a>\n\
                    </div>';

        topicWrapper.appendChild(htmlToElements(topic)[0]);
    }
}

function getFollowedTopic() {

    const xhr = new XMLHttpRequest();
    xhr.open("GET", `${API_URL}/user/followed-topic`, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
//            resolve(response);
            console.log(response);
            checkTokenExpired(response);
            createFollowedTopicCards(response);
        }
    };

    xhr.send();

}




