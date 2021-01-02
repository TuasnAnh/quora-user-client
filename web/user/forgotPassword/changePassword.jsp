<%-- 
    Document   : changePassword
    Created on : Jan 2, 2021, 6:25:54 PM
    Author     : ADMIN
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="forgotPassword2.css" rel="stylesheet" >
        <link href="../user-global-css/globalStyle.css" rel="stylesheet" >
    </head>
    <body>
        <div class="wrapper">
            <div class="card-wrapper">
                <div class="banner">Change password</div>
                <div class="code-container container">
                    <span>Enter code</span>
                    <input class="code-input" placeholder="code"/>
                </div>
                <div class="newPassword-container container">
                    <span>Password</span>
                    <input class="new-pass-input" type="password" placeholder="password"/>
                </div>
                <div class="password-too-short">Password must contain atleast 8 characters!.</div>
                <div class="code-wrong">Wrong code!</div>
                <div class="change-pass-button" >
                    <span>Change password</span>
                </div>
            </div>
        </div>
    </body>

    <script src="changePassword.js" type="module"></script>

</html>
