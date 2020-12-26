<%-- 
    Document   : login
    Created on : Nov 27, 2020, 5:17:33 PM
    Author     : ADMIN
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="user/login/login.css" type="text/css" />
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
                                <form id="register-form" action="#" method="POST" style="display: none">
                                    <div class="form-title">
                                        <span class="text-bold">Register</span>
                                    </div>
                                    <div class="row flex-column">
                                        <label for="firstname" class="text-bold">First name</label>
                                        <input type="text" class="firstname" name="firstname" placeholder="Your first name" />
                                    </div>
                                    <div class="row flex-column">
                                        <label for="lastname" class="text-bold">Last name</label>
                                        <input type="text" class="lastname" name="lastname" placeholder="Your last name" />
                                    </div>
                                    <div class="row flex-column">
                                        <label for="email" class="text-bold">E-mail</label>
                                        <input type="text" class="email" name="email" placeholder="Your email" />
                                    </div>
                                    <div class="row flex-column">
                                        <label for="password" class="text-bold">Password</label>
                                        <input type="password" class="password" name="password" placeholder="Your password" />
                                    </div>
                                    <div class="register-action-field flex-row">
                                        <a href="#" style="font-size: 13px" onclick="handleRegisterModal()">To cancel</a>
                                        <input class="action-button button-disable text-bold" type="submit" value="Register" />
                                    </div>
                                </form>
                                <button id="register-route-button" onclick="handleRegisterModal()">Register with your email address</button>
                                <div id="register-priv" class="reistger-privacy">
                                    <span
                                        >By continuing, you acknowledge that you have accepted the <a href="#">Quora Terms of Service</a> and
                                        <a href="#">Privacy Policy</a> .</span
                                    >
                                </div>
                            </div>
                            <div class="login-wrapper">
                                <form id="login-form" action="#" method="POST">
                                    <div class="form-title">
                                        <span class="text-bold">To log in</span>
                                    </div>
                                    <div class="row flex-column">
                                        <label for="email" class="text-bold">E-mail</label>
                                        <input type="text" class="email" name="email" placeholder="Your email" />
                                    </div>
                                    <div class="row flex-column">
                                        <label for="password" class="text-bold">Password</label>
                                        <input type="password" class="password" name="password" placeholder="Your password" />
                                    </div>
                                    <div class="login-action-field flex-row">
                                        <a href="#" style="font-size: 13px">Forgot password ?</a>
                                        <input class="action-button button-disable text-bold" type="submit" value="To log in" />
                                    </div>
                                </form>
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

    <!--<script src="login.js"></script>-->
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
