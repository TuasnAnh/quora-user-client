/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {API_URL, contextPath} from "./js/global-variable.js";
import "./user/user-global-js/preventXSS.js";

const registerButton = document.getElementById("register-button");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const emailRe = document.getElementById("re-email");
const passRe = document.getElementById("re-password");

const fnameError = document.getElementById("fname-error");
const lnameError = document.getElementById("lname-error");
const reEmailEmpty = document.getElementById("re-email-empty");
const reEmailError = document.getElementById("re-email-error");
const reEmailExisted = document.getElementById("re-email-existed");
const rePassEmpty = document.getElementById("re-pass-empty");
const rePassError = document.getElementById("re-pass-error");

let exitRe = false;
registerButton.onclick = async function () {
    resetReStyle();
    if (firstName.value.length < 3 || firstName.value.length > 10) {
        firstName.style.borderColor = "red";
        fnameError.style.display = "block";
        exitRe = true;
    }

    if (lastName.value.length < 3 || lastName.value.length > 10) {
        lastName.style.borderColor = "red";
        lnameError.style.display = "block";
        exitRe = true;
    }

    if (passRe.value === "") {
        passRe.style.borderColor = "red";
        rePassEmpty.style.display = "block";
        exitRe = true;
    } else if (passRe.value.length < 8) {
        passRe.style.borderColor = "red";
        rePassError.style.display = "block";
        exitRe = true;
    }

    if (emailRe.value === "") {
        emailRe.style.borderColor = "red";
        reEmailEmpty.style.display = "block";
        exitRe = true;
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailRe.value)) {
        emailRe.style.borderColor = "red";
        reEmailError.style.display = "block";
        exitRe = true;
    }

    if (!exitRe) {
        const response = await register();
        console.log(response.status);
        if (response.status === "Success") {
            alert("A verification link has been sent to you email account");
        } else if (response.status === "Duplicate Email") {
            emailRe.style.borderColor = "red";
            reEmailExisted.style.display = "block";
        }
    }
    exitRe = false;
    
}

function register() {
    return new Promise((resolve) => {
        const data = {
            firstname: firstName.value.escape(),
            lastname: lastName.value.escape(),
            email: emailRe.value.escape(),
            password: passRe.value.escape(),
        }

        const xhr = new XMLHttpRequest();
        xhr.open("POST", `${API_URL}/register`, true);
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
    })
}

function resetReStyle() {
    firstName.style = null;
    lastName.style = null;
    emailRe.style = null;
    passRe.style = null;
    fnameError.style = null;
    lnameError.style = null;
    reEmailEmpty.style = null;
    reEmailError.style = null;
    reEmailExisted.style = null;
    rePassError.style = null;
    rePassEmpty.style = null;
}