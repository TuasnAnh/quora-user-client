<%-- 
    Document   : login
    Created on : Nov 27, 2020, 5:17:33 PM
    Author     : ADMIN
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="login.css" type="text/css" />
        <link rel="stylesheet" href="user/user-global-css/globalStyle.css" type="text/css"/>
        <title>Login</title>
    </head>
    <body>
        <div class="wrapper">
            <div class="container">
                <div class="card-wrapper">
                    <div class="card-content">
                        <div class="card-header">
                            <div class="card-header_wrapper">
                                <div class="card-header_logo">
                                    <img class="logo" src="assets/logo.png" alt="" />
                                </div>
                                <div class="card-header_slogan">A place to share knowledge and better understand the world</div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="register-wrapper">
                                <div id="register-form" style="display: none">
                                    <div class="form-title">
                                        <span class="text-bold">Register</span>
                                    </div>
                                    <div class="row flex-column">
                                        <label for="firstname" class="text-bold">First name</label>
                                        <input id="firstname" type="text" class="firstname" name="firstname" placeholder="Your first name" />
                                        <span id="fname-error">Required.  must be between 3 and 10 characters.</span>
                                    </div>
                                    <div class="row flex-column">
                                        <label for="lastname" class="text-bold">Last name</label>
                                        <input id="lastname" type="text" class="lastname" name="lastname" placeholder="Your last name" />
                                        <span id="lname-error">Required.  must be between 3 and 10 characters.</span>
                                    </div>
                                    <div class="row flex-column">
                                        <label for="email" class="text-bold">E-mail</label>
                                        <input id="re-email" type="text" class="email" name="email" placeholder="Your email" />
                                        <span id="re-email-empty">Email cannot be empty.</span>
                                        <span id="re-email-existed">Existed Email.</span>
                                        <span id="re-email-error">Must be a valid email.</span>
                                    </div>
                                    <div class="row flex-column">
                                        <label for="password" class="text-bold">Password</label>
                                        <input id="re-password" type="password" class="password" name="password" placeholder="Your password" />
                                        <span id="re-pass-empty">Password cannot be empty.</span>
                                        <span id="re-pass-error">Must contain at least 8 characters.</span>
                                    </div>
                                    <div class="register-action-field flex-row">
                                        <a href="#" style="font-size: 13px" onclick="handleRegisterModal()">To cancel</a>
                                        <input id="register-button" class="action-button text-bold" type="submit" value="Register" />
                                    </div>
                                </div>
                                <button id="register-route-button" onclick="handleRegisterModal()">Register with your email address</button>
                                <div id="register-priv" class="reistger-privacy">
                                    <span
                                        >By continuing, you acknowledge that you have accepted the <a href="#">Quora Terms of Service</a> and
                                        <a href="#">Privacy Policy</a> .</span
                                    >
                                </div>
                            </div>
                            <div class="login-wrapper">
                                <div id="login-form">
                                    <div class="form-title">
                                        <span class="text-bold">To log in</span>
                                    </div>
                                    <div class="row flex-column">
                                        <label for="email" class="text-bold">E-mail</label>
                                        <input id="email" type="text" class="email" name="email" placeholder="Your email" />
                                        <span id="email-error">No account found for this email.</span>
                                        <span id="email-empty">Email cannot be empty.</span>
                                        <span id="email-not-verified">Please verify your email.</span>
                                    </div>
                                    <div class="row flex-column">
                                        <label for="password" class="text-bold">Password</label>
                                        <input id="password" type="password" class="password" name="password" placeholder="Your password" />
                                        <span id="pass-error">Incorrect password.</span>                                        
                                        <span id="pass-empty">Password cannot be empty</span>
                                    </div>
                                    <div class="login-action-field flex-row">   
                                        <a href="#" style="font-size: 13px">Forgot password ?</a>
                                        <input id="login-button" class="action-button text-bold" type="submit" value="To log in" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <a href="#" class="">About</a>
                            <span> · </span>
                            <a href="#" class="">Jobs</a>
                            <span> · </span>
                            <a href="#" class="">Privacy</a>
                            <span> · </span>
                            <a href="#" class="">Conditions</a>
                            <span> · </span>
                            <a href="#" class="">Contact</a>
                            <span> · </span>
                            <a href="#" class="">Languages</a>
                            <span>· · · · · · © Quora inc. 2020</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
    <script>


    </script>
    <script src="login.js" type="module"></script>
    <script src="register.js" type="module"></script>
    <script>
        let openedRegister = false;

        function handleRegisterModal() {
            if (openedRegister) {
                document.getElementById("register-form").style.display = "none";
                document.getElementById("register-route-button").style.display = "block";
                document.getElementById("register-priv").style.display = "block";
                openedRegister = false;
            } else {
                document.getElementById("register-form").style.display = "block";
                document.getElementById("register-route-button").style.display = "none";
                document.getElementById("register-priv").style.display = "none";
                openedRegister = true;
            }
        }
    </script>
</html>
