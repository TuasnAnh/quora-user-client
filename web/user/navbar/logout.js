/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {API_URL, contextPath} from "../../js/global-variable";

function logout() {
    //TODO: call log out in api
    localStorage.clear();
    window.location = contextPath + "/login.jsp";
}