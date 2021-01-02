/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import {API_URL, contextPath} from "../../js/global-variable.js";
import {checkTokenExpired} from "../user-global-js/checkUserLogin.js";

window.onload = getTotalUnseen();

const unseenWrapper = document.querySelector(".unseen-wrapper");

function getTotalUnseen() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `${API_URL}/user/get-total-unseen`, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            if (response.totalUnseen > 0) {
                unseenWrapper.style.display = "flex";
                document.getElementById("total-unseen").innerHTML = response.totalUnseen;
            } else {
                unseenWrapper.style.display = "none";
            }
        }
    };

    xhr.send();
}