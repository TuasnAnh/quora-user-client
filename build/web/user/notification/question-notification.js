/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {API_URL, contextPath} from "../../js/global-variable.js";
import {checkTokenExpired} from "../user-global-js/checkUserLogin.js";
import {htmlToElements} from "../user-global-js/htmlToElement.js";
import {removeNotification} from "./removeNotification.js";

const notiWrapper = document.querySelector(".notification-content");

window.onload = function () {
    markAsSeen();
    getQuestionNotification();
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

    xhr.send(JSON.stringify({type: "NEW_ANSWER"}));
}

function getQuestionNotification() {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${API_URL}/user/get-notification`, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            addQuestionNoticeCard(response);
        }
    };

    xhr.send(JSON.stringify({type: "NEW_ANSWER"}));
}

function addQuestionNoticeCard(cards) {
    for (let i = 0; i < cards.length; i++) {
        const c = cards[i];
        const date = c.time.split(" ")[0];
        const time = c.time.split(" ")[1];
        const card = '<div  class="notification-wrapper notification-wrapper-' + c.notiId + '">\n\
                  <div class="noti-header">\n\
                            <div class="noti-time">Date: ' + date + '&nbsp;&nbsp;&nbsp;At: ' + time + '</div>\n\
                            <div class="remove-noti remove-noti-' + c.notiId + '">\n\
                                <svg width="24px" height="24px" viewBox="0 0 24 24">\n\
                                <g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke="#666666" stroke-width="1.5">\n\
                                <path\n\
                                    d="M12,6 L12,18"\n\
                                    transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000)"\n\
                                    ></path>\n\
                                <path\n\
                                    d="M18,12 L6,12"\n\
                                    transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000)"\n\
                                    ></path>\n\
                                </g>\n\
                                </svg>\n\
                            </div>\n\
                        </div>\n\
                  <div class="noti-content">' + c.content + '</div>\n\
                  <a href="../question/question.jsp?questionId=' + c.questionId + '" class="noti-instruction">Click to view in question!</a>\n\
               </div>';
        notiWrapper.appendChild(htmlToElements(card)[0]);
        
        addRemoveNoti(c.notiId);
    }
}

function addRemoveNoti(notiId) {
    document.querySelector(".remove-noti-"+notiId).onclick = async function() {
        const check = await removeNotification(notiId);
        if(check.isRemoved) {
            document.querySelector(".notification-wrapper-"+notiId).style.display = "none";
        }
    }
}