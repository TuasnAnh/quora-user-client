/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//
//function checkUserLogin() {
//    const userid = localStorage.getItem("id");
//    if(userid) {
//        return userid;
//    } else {
//        window.location = contextPath;
//    }
//}
import {API_URL, contextPath} from "../../js/global-variable.js";

export function checkUserLogin() {
    const firstLogin = localStorage.getItem("firstLogin");
    if (!firstLogin) {
        window.location = contextPath + "/login.jsp";
    }
}

export function checkTokenExpired(response) {
    if (response.authError) {
        logout();
    }
}

export function logout() {
    localStorage.clear();
    window.location = contextPath + "/login.jsp";
}


