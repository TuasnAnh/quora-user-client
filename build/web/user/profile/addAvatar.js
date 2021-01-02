/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import {API_URL, contextPath} from "../../js/global-variable.js";
import {checkTokenExpired} from "../user-global-js/checkUserLogin.js";
import {htmlToElements} from "../user-global-js/htmlToElement.js";

const fileUpload = document.getElementById("file-upload");
const cloudinaryUrl = "https://api.cloudinary.com/v1_1/tuasnanh/image/upload";
const cloudinary_upload_preset = "dutgkogi";

fileUpload.addEventListener("change", async function (event) {
    const file = event.target.files[0];
    // console.log(file);
    if ((file.type === "image/png" || file.type === "image/jpeg") && file.size < 1024 * 1024) {

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", cloudinary_upload_preset);
        formData.append("folder", "quora answer");

        const url = await uploadFileCloudinary(formData);
        console.log(url);
        await addAvatar(url);
        document.getElementById("demo-avatar").src = url;

    } else {
        console.log("not an image or image size too large");
    }
});

function uploadFileCloudinary(formData) {
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", cloudinaryUrl, true);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks

        xhr.onreadystatechange = function (e) {
            if (xhr.readyState == 4 && xhr.status == 200) {
                const response = JSON.parse(xhr.responseText);
                const url = response.secure_url;
                resolve(url);
            }
        };

        xhr.send(formData);
    });
}

function addAvatar(url) {
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", `${API_URL}/user/add-avatar`, true);
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

        xhr.send(JSON.stringify({url: url}));
    });

}