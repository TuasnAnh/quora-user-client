/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {API_URL} from "../../js/global-variable.js";
import {checkTokenExpired} from "./checkUserLogin.js";
import {showReportSuccess} from "./showReportSuccess.js";

export function reportAnswer(answerId) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${API_URL}/user/report-answer`, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const isRepored = JSON.parse(xhr.responseText);
            checkTokenExpired(isRepored);
            if (isRepored) {
                showReportSuccess();
            }
        }
    };
    xhr.send(JSON.stringify({answerId}));
}