<%-- 
    Document   : topic-header
    Created on : Nov 28, 2020, 2:45:55 PM
    Author     : ADMIN
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="header/topic-header.css" rel="stylesheet" />
        <link href="../user-global-css/globalStyle.css" rel="stylesheet" />

        <title>Topic</title>
    </head>
    <body>
        <div class="topic-infor flex-row">
            <div class="topic-avatar">
                <img id="topic-image" alt="" />
            </div>
            <div class="flex-column" style="flex: 1; padding-left: 10px">
                <span id="topic-page-name" style="font-weight: bold; font-size: 20px; margin-bottom: 9px">Topic name</span>
                <div class="flex-row" style="justify-content: space-between">
                    <div class="topic-follow-wrapper flex-row" onclick="followTopic()">
                        <div class="topic-follow-icon flex-row">
                            <svg width="24" height="24" viewBox="0 0 24 24">
                            <g
                                stroke="#2f6aff"
                                stroke-width="1.5"
                                fill="none"
                                fill-rule="evenodd"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                >
                            <path
                                id="topic-follow-svg"
                                d="M13.5 19.5h-6a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v6M8 12.5v-4h4v4H8zM14.5 9H16h-1.5zm0 3H16h-1.5zM8 15.5h8-8zm9 4h5M19.5 17v5"
                                ></path>
                            </g>
                            </svg>
                        </div>
                        <span id="follow-text" class="topic-follow-text">Follow</span>
                        <span id="follow-amount">20</span>
                    </div>
                    <!-- resuse report button -->
                    <div class="report-button">
                        <div class="report-button-svg">
                            <svg width="24px" height="24px" viewBox="0 0 24 24">
                            <g id="reportsvg" stroke-width="1.5" stroke="#666" fill="none" fill-rule="evenodd">
                            <path
                                d="M5,14 C3.8954305,14 3,13.1045695 3,12 C3,10.8954305 3.8954305,10 5,10 C6.1045695,10 7,10.8954305 7,12 C7,13.1045695 6.1045695,14 5,14 Z M12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 Z M19,14 C17.8954305,14 17,13.1045695 17,12 C17,10.8954305 17.8954305,10 19,10 C20.1045695,10 21,10.8954305 21,12 C21,13.1045695 20.1045695,14 19,14 Z"
                                ></path>
                            </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="topic-navbar">
            <a onclick="enableTopicAnswer()"s id="topic-answer-nav">
                <span>Answer</span>
            </a>
            <a onclick="enableTopicQuestion()" id="topic-question-nav">
                <span>Question</span>
            </a>
        </div>
    </body>
    <script src="header/topic-header.js" ></script>
</html>
