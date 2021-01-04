<%-- 
    Document   : emailPage
    Created on : Jan 2, 2021, 6:24:52 PM
    Author     : ADMIN
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="forgotPassword.css" rel="stylesheet" >
        <link href="../user-global-css/globalStyle.css" rel="stylesheet" >

        <title></title>
    </head>
    <body>
        <div class="wrapper">
            <div class="card-wrapper">
                <div class="banner">Enter email</div>
                <div class="input-container">
                    <input class="email-input" placeholder="email"/>
                    <div class="change-button" >
                        <span>Send email</span>
                    </div>
                </div>
                <div class="email-invalid">*Invalid email!</div>
                <div class="email-wrong">*Wrong email!</div>
            </div>
        </div>
    </body>
    <script src="addEmail.js" type="module"></script>
</html>
