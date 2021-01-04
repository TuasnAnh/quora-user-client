/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {API_URL, contextPath} from "../../js/global-variable.js";
import "../user-global-js/preventXSS.js";

const input = document.querySelector(".email-input");
const emailInvalid = document.querySelector(".email-invalid");
const emailWrong = document.querySelector(".email-wrong");

document.querySelector(".change-button").onclick = function () {
    if (input.value.length <= 0 || !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input.value)) {
        emailWrong.style.display = "none";
        emailInvalid.style.display = "block";
        return;
    }
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${API_URL}/user/forgot-email`, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const message = JSON.parse(xhr.responseText);
            console.log(message);
            if (message === "wrong email") {
                emailWrong.style.display = "block";
                emailInvalid.style.display = "none";
            } else {
                window.location = contextPath + "/user/forgotPassword/changePassword.jsp";
            }
        }
    };

    xhr.send(JSON.stringify({email: input.value.escape()}));
}
