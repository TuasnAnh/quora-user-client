/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {API_URL, contextPath} from "../../js/global-variable.js";
import {checkTokenExpired} from "../user-global-js/checkUserLogin.js";
import "../user-global-js/preventXSS.js";

const searchInput = document.querySelector(".search");

searchInput.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        if(searchInput.value.length > 0) {
            window.location = contextPath + "/user/search/search.jsp?q=" + searchInput.value.escape();
        }
    }
});

