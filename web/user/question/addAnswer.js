/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {API_URL, contextPath} from "../../js/global-variable.js";
import {checkTokenExpired} from "../user-global-js/checkUserLogin.js";
import {htmlToElements} from "../user-global-js/htmlToElement.js";
import {setHideAction} from "../homepage/answer-card/answer-card.js";
import {upvote, downvote} from "../user-global-js/upvoteAndDownVoteAnswer.js";
import {addToBookmark} from "../user-global-js/addBookmark.js";
import {reportAnswer} from "../user-global-js/reportAnswer.js";

const cloudinaryUrl = "https://api.cloudinary.com/v1_1/tuasnanh/image/upload";
const cloudinary_upload_preset = "dutgkogi";

document.querySelector(".answer-button-wrapper").onclick = function () {
    openAnswerModel();
}
document.querySelector(".submit-button").onclick = function () {
    submitAnswer();
}
document.querySelector(".cancel-button").onclick = function () {
    cancelAnswer();
}

const fileUpload = document.getElementById("file-upload");
const list = [];
const answerModal = document.getElementById("write-answer-modal");
const params = (new URL(window.location.href)).searchParams;
const questionId = params.get("questionId");

// check change of textField
const boldButton = document.getElementById("bold-button");

textField.document.designMode = "On";

boldButton.addEventListener("click", () => {
    let cmd = boldButton.getAttribute("data-cmd");
    if (boldButton.name === "active") {
        boldButton.classList.toggle("active");
    }

    textField.document.execCommand(cmd, false, null);
});

let openAnswer = false;
function openAnswerModel() {
    if (!openAnswer) {
        openAnswer = true;
        answerModal.style.display = "block";
    }
}

function cancelAnswer() {
    answerModal.style.display = "none";
    openAnswer = false;
}

fileUpload.addEventListener("change", function (event) {
    const file = event.target.files[0];
    // console.log(file);
    if ((file.type === "image/png" || file.type === "image/jpeg") && file.size < 1024 * 1024) {
        document.getElementById("output").contentWindow.document.body.focus();
        const url = URL.createObjectURL(file);
        list.push({name: url, file: file});

        if (url) {
            const imgC = "<img id='img' src='" + url + "' ></img>";
            textField.document.execCommand("insertHTML", false, imgC);
            const img = textField.document.querySelectorAll("img");
            img.forEach((element) => {
                element.style.maxWidth = "100%";
            });
        }
    } else {
        console.log("not an image or image size too large");
    }
});

// get all content after submit
async function getAllContent() {
    const customId = `${Date.now()}`;
    const images = textField.document.querySelectorAll("img");
    for (let i = 0; i < images.length; i++) {
        for (let j = 0; j < list.length; j++) {
            if (images[i].src === list[j].name) {
                const formData = new FormData();
                formData.append("file", list[j].file);
                formData.append("upload_preset", cloudinary_upload_preset);
                formData.append("folder", "quora answer");

                const url = await uploadFileCloudinary(formData);
                images[i].src = url;
            }
        }
    }

    const answerContent = nodeToString(addHideDote(customId));
    addAnswerAction(answerContent);
}

// add answer action
function addAnswerAction(content) {
    const data = {
        content, questionId
    };
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${API_URL}/user/add-answer`, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            console.log(response);
        }
    };

    xhr.send(JSON.stringify(data));
}

// post image to cloudinary
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

// add hide dote to body content
function addHideDote(customId) {
    const content = textField.document.querySelector("body");
    const all = textField.document.body.getElementsByTagName("*");

    const firstText = textField.document.body.childNodes[0].data;
    console.log(firstText);

    if (!firstText && all[0].tagName === "IMG") {
        const hide = document.createElement("a");
        hide.setAttribute("id", `dots-${customId}`);
        hide.style.cursor = "pointer";
        hide.style.color = "#2e69ff";
        hide.innerHTML = ". . . more";
        // hide.onclick = hideDotes({ postid: `${customId}` });

        const more = document.createElement("span");
        more.setAttribute("id", `more-${customId}`);
        more.style.display = "none";
        more.innerHTML = content.innerHTML;
        // more.appendChild(content.cloneNode());

        const wrapper = document.createElement("span");
        wrapper.appendChild(hide);
        wrapper.appendChild(more);
        console.log("co anh o dau trang");
        console.log(wrapper);
        return wrapper;
    } else if (!firstText && all[0].tagName !== "IMG") {
        const hide = document.createElement("a");
        hide.setAttribute("id", `dots-${customId}`);
        hide.style.cursor = "pointer";
        hide.style.color = "#2e69ff";
        hide.innerHTML = ". . . more";
        // hide.onclick = hideDotes({ postid: `${customId}` });

        const more = document.createElement("span");
        more.setAttribute("id", `more-${customId}`);
        more.style.display = "none";
        for (let i = 1; i < all.length; i++) {
            more.appendChild(all[i]);
            // more.innerHTML = all[i].innerHTML;
        }

        const wrapper = document.createElement("span");
        wrapper.appendChild(all[0]);
        // wrapper.innerHTML = all[0].innerHTML;
        wrapper.appendChild(hide);
        wrapper.appendChild(more);

        console.log("Co 1 div o dau trang");
        console.log(wrapper);
        return wrapper;
    } else {
        const hide = document.createElement("a");
        hide.setAttribute("id", `dots-${customId}`);
        hide.style.cursor = "pointer";
        hide.style.color = "#2e69ff";
        hide.innerHTML = ". . . more";
        // hide.onclick = hideDotes({ postid: `${customId}` });

        const more = document.createElement("span");
        more.setAttribute("id", `more-${customId}`);
        more.style.display = "none";
        for (let i = 0; i < all.length; i++) {
            // console.log(all[i]);
            more.appendChild(all[i]);
            // more.innerHTML = all[i].innerHTML;
        }

        const wrapper = document.createElement("span");
        const firstTextDiv = document.createElement("span");
        firstTextDiv.innerHTML = firstText;
        wrapper.appendChild(firstTextDiv);
        wrapper.appendChild(hide);
        wrapper.appendChild(more);

        console.log("khong co anh o dau trang + khong co div nao");
        console.log(wrapper);
        return wrapper;
    }
}

function nodeToString(node) {
    var tmpNode = document.createElement("div");
    tmpNode.appendChild(node.cloneNode(true));
    var str = tmpNode.innerHTML;
    tmpNode = node = null; // prevent memory leaks in IE
    return str;
}


// hide dote - global function
function hideDotes( { postid }) {
    console.log("clicked");
    var dots = document.getElementById(`dots-${postid}`);
    var moreText = document.getElementById(`more-${postid}`);

    dots.style.display = "none";
    moreText.style.display = "block";
}

function clearInput() {
    list.length = 0;
    const output = document.getElementById("output");
    output.contentWindow.document.body.innerHTML = "";
}

async function submitAnswer() {
    await getAllContent();
    clearInput();
    cancelAnswer();
}



