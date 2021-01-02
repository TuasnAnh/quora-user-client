<%-- 
    Document   : navbar
    Created on : Nov 28, 2020, 10:50:58 AM
    Author     : ADMIN
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

        <link href="../navbar/navbar.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="../user-global-css/globalStyle.css" />
        <link rel="stylesheet" href="../navbar/accountExtend.css" />
        <link rel="stylesheet" href="../navbar/reportNotification.css" />

        <title>Nav bar</title>
    </head>
    <body>
        <div class="page-header">
            <!---------------------page notification----------------->
            <div id="show-report-success">
                <span>The report has been successfully sent</span>
            </div>
            <div id="show-add-bookmark-success" style="background-color: green">
                <span>Added to Bookmarks</span>
            </div>
            <!------------------page nav bar------------------->
            <div class="container">
                <div class="header-logo">
                    <img src="../../assets/logo-trimed.png" alt="" />
                </div>
                <div class="header-content">
                    <a href="../homepage/homepage.jsp" class="home header-element-wrapper">
                        <div class="element-content">
                            <div class="element-logo">
                                <svg width="24px" height="24px" viewBox="0 0 24 24">
                                <g stroke="none" id="home-color" fill="#666" fill-rule="nonzero">
                                <path id="homesvg" d=""></path>
                                </g>
                                </svg>
                            </div>
                            <div id="home-txt" class="header-text">Home</div>
                        </div>
                    </a>
                    <a href="../discovery/discovery.jsp" class="discovery header-element-wrapper">
                        <div class="element-content">
                            <div class="element-logo">
                                <svg width="24px" height="24px" viewBox="0 0 24 24">
                                <g stroke="none" id="discover-color" fill="#666" fill-rule="nonzero">
                                <path id="discoversvg" d=""></path>
                                </g>
                                </svg>
                            </div>
                            <div id="discover-txt" class="header-text">Discovery</div>
                        </div>
                    </a>
                    <a href="../notification/question-notification.jsp" class="notification header-element-wrapper">
                        <div class="element-content">
                            <div class="element-logo">
                                <svg width="24px" height="24px" viewBox="0 0 24 24">
                                <g stroke="none" id="notice-color" fill="#666" fill-rule="nonzero">
                                <path id="noticesvg" d=""></path>
                                </g>
                                </svg>
                            </div>
                            <div id="notice-txt" class="header-text">Notification</div>
                            <div class="unseen-wrapper">
                                <span id="total-unseen"></span>
                            </div>
                        </div>
                    </a>
                    <div class="search-field">
                        <div class="form-container">
                            <div class="form-logo">
                                <svg width="16px" height="16px" viewBox="0 0 24 24">
                                <g
                                    stroke="#666"
                                    stroke-width="1.5"
                                    fill="none"
                                    fill-rule="evenodd"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    >
                                <path id="searchsvg" d=""></path>
                                </g>
                                </svg>
                            </div>
                            <div class="form-text-field">
                                <div class="search-input-field">
                                    <input class="search" type="text" width="100%" placeholder="Search Quora" autocomplete="chrome-off" value="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="account-extend-wrapper">
                        <a class="user-wrapper" onclick="showAccountExtend()">
                            <div class="user-container">
                                <div class="user-content">
                                    <img class="user-image" id="avatar" src="../../assets/mark.jpg" alt="" />
                                </div>
                            </div>
                        </a>
                        <div tabindex="-1" id="account-extend">
                            <a class="extend-header" href="../profile/profile.jsp">
                                <span id="extend-username"></span>
                                <div class="extend-svg">
                                    <svg width="24px" height="24px" viewBox="0 0 24 24">
                                    <g class="icon_svg-stroke" stroke="#666" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round">
                                    <polyline
                                        id="chevron"
                                        transform="translate(12.500000, 12.002415) scale(1, -1) rotate(-90.000000) translate(-12.500000, -12.002415) "
                                        points="5.49758463 8.50241537 12.4975846 15.5024154 19.5024154 8.50241537"
                                        ></polyline>
                                    </g>
                                    </svg>
                                </div>
                            </a>
                            <div class="extend-body">
                                <a href="../setting/setting.jsp">Setting</a>
                                <a id="logout-button" href="">Logout</a>
                            </div>
                        </div>
                    </div>
                    <button class="add-question-button">
                        <div class="question-button-wrapper">
                            <div class="question-button-content">Add Question</div>
                        </div>
                    </button>
                </div>
            </div>
        </div>

        <jsp:include page="../addquestion/addQuestion.jsp" />

    </body>
    <script src="../navbar/navbar.js"></script>
    <script src="../navbar/accountExtend.js"></script>
    <script src="../navbar/userInfor.js" type="module" ></script>
    <script src="../navbar/logout.js" type="module" ></script>
    <script src="../navbar/getTotalUnseenNotification.js" type="module" ></script>

</html>
