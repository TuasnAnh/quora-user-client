/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import {API_URL, contextPath} from "../../js/global-variable.js";
import {checkTokenExpired} from "../user-global-js/checkUserLogin.js";
import {htmlToElements} from "../user-global-js/htmlToElement.js";

const notiWrapper = document.querySelector(".notification-content");

window.onload = function () {
    markAsSeen();
    getAnswerNotification();
}

function markAsSeen() {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${API_URL}/user/notification-mark-as-seen`, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            if (response === "Mark success") {
                console.log(response);
            }
        }
    };

    xhr.send(JSON.stringify({type: "NEW_VOTE"}));
}

function getAnswerNotification() {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${API_URL}/user/get-notification`, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            addAnswerNoticeCard(response);
        }
    };

    xhr.send(JSON.stringify({type: "NEW_VOTE"}));
}

function addAnswerNoticeCard(cards) {
    for (let i = 0; i < cards.length; i++) {
        const c = cards[i];
        const date = c.time.split(" ")[0];
        const time = c.time.split(" ")[1];
        const card = '<a href="../question/question.jsp?questionId=' + c.questionId + '" class="notification-wrapper">\n\
                  <div class="noti-time">Date: ' + date + '&nbsp;&nbsp;&nbsp;At: ' + time + '</div>\n\
                  <div class="noti-content">' + c.content + '</div>\n\
                  <div class="noti-instruction">Click to view in question!</div>\n\
               </a>';
        notiWrapper.appendChild(htmlToElements(card)[0]);
    }
}