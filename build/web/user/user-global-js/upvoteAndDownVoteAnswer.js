/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {API_URL} from "../../js/global-variable.js";
import {checkTokenExpired} from "../user-global-js/checkUserLogin.js";

export async function upvote(answerId) {
    const response = await upvoteAction(answerId);
    console.log(response);
    if (response.status === "no vote") {
        document.getElementById("upvotesvg-" + answerId).style.fill = "none";
        document.getElementById("downvotesvg-" + answerId).style.fill = "none";
    } else if (response.status === "upvote") {
        document.getElementById("upvotesvg-" + answerId).style.fill = "rgb(46, 105, 255)";
        document.getElementById("downvotesvg-" + answerId).style.fill = "none";
    }
    document.getElementById("upvote-num-" + answerId).innerHTML = response.upvote;
    document.getElementById("downvote-num-" + answerId).innerHTML = response.downvote;
}

function upvoteAction(answerId) {
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", `${API_URL}/user/upvote`, true);
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

export async function downvote(answerId) {
    const response = await downvoteAction(answerId);
    console.log(response);
    if (response.status === "no vote") {
        document.getElementById("upvotesvg-" + answerId).style.fill = "none";
        document.getElementById("downvotesvg-" + answerId).style.fill = "none";
    } else if (response.status === "downvote") {
        document.getElementById("upvotesvg-" + answerId).style.fill = "none";
        document.getElementById("downvotesvg-" + answerId).style.fill = "rgb(46, 105, 255)";
    }
    document.getElementById("upvote-num-" + answerId).innerHTML = response.upvote;
    document.getElementById("downvote-num-" + answerId).innerHTML = response.downvote;
}

function downvoteAction(answerId) {
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", `${API_URL}/user/downvote`, true);
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
