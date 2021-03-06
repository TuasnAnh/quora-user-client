<%-- 
    Document   : account
    Created on : Nov 28, 2020, 8:32:45 PM
    Author     : ADMIN
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="account.css" rel="stylesheet" />
        <link href="accountAnswer.css" rel="stylesheet" />
        <link href="accountBookmark.css" rel="stylesheet" />
        <link href="accountQuestion.css" rel="stylesheet" />
        <link href="../homepage/answer-card/answer-card.css" rel="stylesheet" />
        <link href="../user-global-css/globalStyle.css" rel="stylesheet" />
        <link href="../homepage/answer-card/reportExtend.css" rel="stylesheet" />

        <script src="../homepage/answer-card/reportExtend.js" ></script>

        <title>Account</title>
    </head>
    <body>
        <jsp:include page="../navbar/navbar.jsp" />
        <div class="account-wrapper">
            <div class="account-content">
                <div class="account-profile">
                    <div class="profile-header flex-column">
                        <div class="profile-header-image flex-row">
                            <div class="user-avatar">
                                <img id="demo-avatar" src="../../assets/mark.jpg" alt="" />
                            </div>
                            <div class="user-name flex-column">
                                <div class="user-name-group flex-row">
                                    <span id="username"></span>
                                </div>
                            </div>
                        </div>
                        <div class="profile-header-description flex-column">
                            <div
                                id="account-description"
                                class="user-description"
                                style="color: #939598; font-size: 15px"
                                >No description.</div>
                        </div>
                    </div>
                    <div class="profile-navbar flex-row">
                        <a id="answer-nav" class="navbar-element">
                            <span id="answer-number-amount">0 Answer</span>
                        </a>
                        <a id="question-nav" class="navbar-element">
                            <span id="question-number-amount">0 Question</span>
                        </a>
                    </div>
                    <div class="profile-content">
                        <div id="user-answer-wrapper">
                            <div id="user-answer-content"></div>
                            <div class="end-of-page">
                                <div class="load-more-answer-button load-more">
                                    <span>Load more answers</span>
                                </div>
                            </div>
                        </div>
                        <div id="user-question-wrapper">
                            <div id="user-question-content"></div>
                            <div class="end-of-page">
                                <div class="load-more-question-button load-more">
                                    <span>Load more questions</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="account-infor">
                    <div class="account-credential">
                        <div class="credential-title">Credential & HighLights</div>
                        <div class="employment-credential flex-row" style="margin-bottom: 5px; display: none">
                            <div class="credential-svg">
                                <svg width="24px" height="24px" viewBox="0 0 24 24">
                                <g stroke="#666" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                                <path
                                    d="M20.5,11 L20.5,18 C20.5,18.5522847 20.0522847,19 19.5,19 L4.5,19 C3.94771525,19 3.5,18.5522847 3.5,18 L3.5,11 M10.40625,15 L5.625,15 C4.45139491,15 3.5,13.9766509 3.5,12.7142857 L3.5,7 L3.5,7 L20.5,7 L20.5,12.7142857 C20.5,13.9766509 19.5486051,15 18.375,15 L13.59375,15 M9,7 L9,6 C9,4.8954305 9.8954305,4 11,4 L11,4 L13,4 C14.1045695,4 15,4.8954305 15,6 L15,7 M11,13.5 L13,13.5 C13.2761424,13.5 13.5,13.7238576 13.5,14 L13.5,16 C13.5,16.2761424 13.2761424,16.5 13,16.5 L11,16.5 C10.7238576,16.5 10.5,16.2761424 10.5,16 L10.5,14 C10.5,13.7238576 10.7238576,13.5 11,13.5 Z"
                                    ></path>
                                </g>
                                </svg>
                            </div>
                            <span id="employment-text" class="credential-text"></span>
                        </div>
                        <div class="education-credential flex-row" style="margin-bottom: 5px; display: none">
                            <div class="credential-svg">
                                <svg width="24px" height="24px" viewBox="0 0 24 24">
                                <g stroke="#666" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                                <path
                                    d="M2.5,9.5 L12,5 L21.5,9.5 L12,14 L2.5,9.5 Z M20,10.5 L20,16.5 M6.5,12 C6.5,14 6.5,15 6.5,15 C6.5,16.5048582 9.00219538,18 12,18 C14.9978046,18 17.5,16.4986226 17.5,15 C17.5,15 17.5,14 17.5,12 M20,16.5 L18,20 L22,20 L20,16.5 Z"
                                    ></path>
                                </g>
                                </svg>
                            </div>
                            <span id="education-text" class="credential-text"></span>
                        </div>
                        <div class="location-credential flex-row" style="margin-bottom: 5px; display: none">
                            <div class="credential-svg">
                                <svg width="24px" height="24px" viewBox="0 0 24 24">
                                <g stroke="#666" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round">
                                <path
                                    d="M12,13 C13.6568542,13 15,11.6568542 15,10 C15,8.34314575 13.6568542,7 12,7 C10.3431458,7 9,8.34314575 9,10 C9,11.6568542 10.3431458,13 12,13 Z M12,20.73 C16.6375,16.5 19,12.9 19,10.2 C19,6.2235498 15.8659932,3 12,3 C8.13400675,3 5,6.2235498 5,10.2 C5,12.9 7.3625,16.41 12,20.73 L12,20.73 Z"
                                    ></path>
                                </g>
                                </svg>
                            </div>
                            <span id="location-text" class="credential-text"></span>
                        </div>
                    </div>
                    <div class="account-followed-topic">
                        <div class="account-topic-title">Followed topic</div>
                    </div>
                </div>
            </div>
        </div>
    </body>
    <script src="account.js" ></script>
    <script src="accountNav.js" type="module"></script>
    <script src="accountData.js" type="module"></script>

    <script>
        setGray();
        setRedNav("answer");
    </script>

</html>
