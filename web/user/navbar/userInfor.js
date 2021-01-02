/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {API_URL, contextPath} from "../../js/global-variable.js";
import {checkTokenExpired} from "../user-global-js/checkUserLogin.js";

getUserInfor();

function getUserInfor() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `${API_URL}/user/user-information`, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            checkTokenExpired(response);
            setUserNavbar(response);
        }
    };

    xhr.send();
}

function setUserNavbar(user) {
    document.getElementById("avatar").src = user.url;
    document.getElementById("extend-username").innerHTML = user.lastName + " " + user.firstName;
}