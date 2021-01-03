/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


// const editName = document.querySelector(".edit-name");
// const editEm = document.querySelector(".edit-employment");
// const editEdu = document.querySelector(".edit-education");
// const editLoca = document.querySelector(".edit-location");
// const editPass = document.querySelector(".edit-password");

const eEmModel = document.querySelector(".edit-employment-model");
const eEduModel = document.querySelector(".edit-education-model");
const eLocaModel = document.querySelector(".edit-location-model");
const ePassModel = document.querySelector(".edit-password-model");

const emInput = document.querySelector(".new-employment-input");
const edInput = document.querySelector(".new-education-input");
const locaInput = document.querySelector(".new-location-input");
const oldPassInput = document.querySelector(".old-password-input");
const newPassInput = document.querySelector(".new-password-input");

function showEditEmployment() {
    eEmModel.style.display = "flex";
}

function showEditEducation() {
    eEduModel.style.display = "flex";
}

function showEditLocation() {
    eLocaModel.style.display = "flex";
}

function showEditPassword() {
    ePassModel.style.display = "flex";
}

function hideEditEmployment() {
    eEmModel.style.display = "none";
    emInput.style = null;
    emInput.value = "";
}

function hideEditEducation() {
    eEduModel.style.display = "none";
    edInput.style = null;
    edInput.value = "";
}

function hideEditLocation() {
    eLocaModel.style.display = "none";
    locaInput.style = null;
    locaInput.value = "";
}

function hideEditPassword() {
    ePassModel.style.display = "none";
    oldPassInput.style = null;
    newPassInput.style = null;
    oldPassInput.value = "";
    newPassInput.value = "";
}
