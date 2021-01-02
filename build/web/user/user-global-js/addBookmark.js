/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {API_URL} from "../../js/global-variable.js";
import {checkTokenExpired} from "./checkUserLogin.js";
import {showAddBookmarkSuccess} from "./showReportSuccess.js";

//add-bookmark-id

export async function addToBookmark(answerId) {
    const response = await addBookmarkAction(answerId);
    if (response.status === "added") {
        document.getElementById("add-bookmark-" + answerId).style.color = "blue";
        document.getElementById("add-bookmark-" + answerId).innerHTML = "Bookmarked";
        showAddBookmarkSuccess();
    } else {
        document.getElementById("add-bookmark-" + answerId).style.color = "black";
        document.getElementById("add-bookmark-" + answerId).innerHTML = "Bookmark";
    }
}

function addBookmarkAction(answerId) {
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", `${API_URL}/user/add-bookmark`, true);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
        xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
        xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                resolve(response);
            }
        };

        xhr.send(JSON.stringify({answerId: answerId}));
    });
}