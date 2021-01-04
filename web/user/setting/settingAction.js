/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {API_URL, contextPath} from "../../js/global-variable.js";
import {checkTokenExpired, logout} from "../user-global-js/checkUserLogin.js";

const emValue = document.querySelector(".employment");
const eduValue = document.querySelector(".education");
const locaValue = document.querySelector(".location");

const editEm = document.querySelector(".edit-employment-button");
const editEdu = document.querySelector(".edit-education-button");
const editLoca = document.querySelector(".edit-location-button");
const editPass = document.querySelector(".edit-password-button");

const emInput = document.querySelector(".new-employment-input");
const edInput = document.querySelector(".new-education-input");
const locaInput = document.querySelector(".new-location-input");
const oldPassInput = document.querySelector(".old-password-input");
const newPassInput = document.querySelector(".new-password-input");


window.onload = function () {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `${API_URL}/user/user-information`, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            checkTokenExpired(response);
            if (response.credential) {
                emValue.innerHTML = "Working at " + response.credential;
            }
            if (response.school) {
                eduValue.innerHTML = "Studied at " + response.school;
            }
            if (response.location) {
                locaValue.innerHTML = "living at " + response.location;
            }
        }
    };

    xhr.send();
}

editEm.onclick = function () {
    if (emInput.value.length === 0) {
        emInput.style.borderColor = "red";
        emInput.placeholder = "Please enter your company";
    } else {
        editEmploymentAction();
    }
}

editEdu.onclick = function () {
    if (edInput.value.length === 0) {
        edInput.style.borderColor = "red";
        edInput.placeholder = "Please enter your education";
    } else {
        editEducationAction();
    }
}

editLoca.onclick = function () {
    if (locaInput.value.length === 0) {
        locaInput.style.borderColor = "red";
        locaInput.placeholder = "Please enter your location";
    } else {
        editLocationAction();
    }
}

let close = false;
editPass.onclick = function () {
    if (newPassInput.value.length === 0) {
        newPassInput.style.borderColor = "red";
        newPassInput.placeholder = "Can't be empty";
        close = true;
    }
    
    if (newPassInput.value.length < 8) {
        newPassInput.style.borderColor = "red";
        newPassInput.value = "";
        newPassInput.placeholder = "Must longer than 8 characters";
        close = true;
    }

    if (oldPassInput.value.length === 0) {
        oldPassInput.style.borderColor = "red";
        oldPassInput.placeholder = "Can't be empty";
        close = true;
    } 

    if (!close) {
        changePasswordAction();
    } else {
        close = false;
    }
}


function editEmploymentAction() {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${API_URL}/user/add-credential`, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            checkTokenExpired(response);
            if (response === "insert credential success") {
                emValue.innerHTML = "Working at " + emInput.value;
            }
            hideEditEmployment();
        }
    };

    xhr.send(JSON.stringify({credential: emInput.value}));
}

function editEducationAction() {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${API_URL}/user/add-education`, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            checkTokenExpired(response);
            if (response === "insert education success") {
                eduValue.innerHTML = "Studied at " + edInput.value;
            }
            hideEditEducation();
        }
    };

    xhr.send(JSON.stringify({school: edInput.value, degreeType: "none", graduateTime: "none"}));
}

function editLocationAction() {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${API_URL}/user/add-location`, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            checkTokenExpired(response);
            if (response === "insert location success") {
                locaValue.innerHTML = "Working at " + locaInput.value;
            }
            hideEditLocation();
        }
    };

    xhr.send(JSON.stringify({location: locaInput.value}));
}

function changePasswordAction() {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${API_URL}/user/change-password`, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            checkTokenExpired(response);
            if (response.message === "wrong password") {
                oldPassInput.style.borderColor = "red";
                oldPassInput.value = "";
                newPassInput.value = "";
                newPassInput.style = null;
                newPassInput.splaceholder = "Enter new password";
                oldPassInput.placeholder = "Wrong password!";
            } else {
                logoutAction();
            }
        }
    };

    xhr.send(JSON.stringify({newPassword: newPassInput.value, oldPassword: oldPassInput.value}));
}

function logoutAction() {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${API_URL}/logout`, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            checkTokenExpired(response);
            logout();
        }
    };

    xhr.send();
}

 