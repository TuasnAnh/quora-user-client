/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {API_URL, contextPath} from "./js/global-variable.js";
const loginButton = document.getElementById("login-button");
const email = document.getElementById("email");
const emailError = document.getElementById("email-error");
const emailEmpty = document.getElementById("email-empty");
const emailNotVerified = document.getElementById("email-not-verified");
const password = document.getElementById("password");
const passwordError = document.getElementById("pass-error");
const passwordEmpty = document.getElementById("pass-empty");

window.onload = function () {
    if (localStorage.getItem("firstLogin")) {
        window.location = contextPath + "/user/homepage/homepage.jsp";
    }
}

let exit = false;
loginButton.onclick = async function () {
    resetStyle();
    if (email.value === "") {
        email.style.borderColor = "red";
        emailEmpty.style.display = "block";
        exit = true;
    }
    if (password.value === "") {
        password.style.borderColor = "red";
        passwordEmpty.style.display = "block";
        exit = true;
    }
    if (exit) {
        exit = false;
        return;
    }

    const data = {
        email: email.value,
        password: password.value,
    };

    const response = await loginAction(data);
    console.log(response);
    switch (response.status) {
        case "email not found":
            emailNotFound();
            break;
        case "incorrect password":
            incorrectPassword();
            break;
        case "account not verified":
            accountNotVerified();
            break;
        case "login success":
            loginSuccess();
            break;
    }
};

async function loginAction(data) {
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", `${API_URL}/login`, true);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
        xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
        xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                resolve(response);
            }
        };

        xhr.send(JSON.stringify(data));
    });
}

function emailNotFound() {
    email.style.borderColor = "red";
    emailError.style.display = "block";
}

function incorrectPassword() {
    password.style.borderColor = "red";
    passwordError.style.display = "block";
}

function accountNotVerified() {
    email.style.borderColor = "red";
    emailNotVerified.style.display = "block";
}

function loginSuccess() {
    localStorage.setItem("firstLogin", true);
    window.location = contextPath + "/user/homepage/homepage.jsp";
}

function resetStyle() {
    email.style = null;
    emailError.style = null;
    emailEmpty.style = null;
    emailNotVerified.style = null;
    password.style = null;
    passwordError.style = null;
    passwordEmpty.style = null;
}
