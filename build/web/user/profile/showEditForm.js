/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {API_URL, contextPath} from "../../js/global-variable.js";
import {checkTokenExpired} from "../user-global-js/checkUserLogin.js";

const openDes = document.getElementById("account-description");
const updateButtom = document.querySelector('.update-button');
const cancelButton = document.querySelector('.cancel-button');

openDes.onclick = function () {
    openEditDescription();
}

updateButtom.onclick = function () {
    updateDes();
}

cancelButton.onclick = function () {
    closeEditDescription();
}

const description = document.getElementById("account-description");
const desModal = document.getElementById("edit-description-modal");
const textarea = document.getElementById("description-input");

function openEditDescription() {
    desModal.style.display = "block";
    description.style.display = "none";
    textarea.focus();
}

function closeEditDescription() {
    desModal.style.display = "none";
    description.style.display = "block";
}

async function updateDes() {
    if (textarea.value.length > 0) {
        const response = await addDescription();
        if (response === "insert description success") {
            description.innerHTML = textarea.value;
        }
        closeEditDescription();
    }
}

function addDescription() {
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", `${API_URL}/user/add-description`, true);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
        xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
        xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                checkTokenExpired(response);
                resolve(response);
            }
        };

        xhr.send(JSON.stringify({content: textarea.value}));
    });

}