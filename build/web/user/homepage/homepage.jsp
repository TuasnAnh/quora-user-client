<%-- 
    Document   : hompage.jsp
    Created on : Nov 28, 2020, 11:23:10 AM
    Author     : ADMIN
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="homepage.css" rel="stylesheet" />
        <link href="answer-card/answer-card.css" rel="stylesheet" />
        <link href="../user-global-css/globalStyle.css" rel="stylesheet" />
        <link href="answer-card/reportExtend.css" rel="stylesheet" />
        <link href="question-card/question-card.css" rel="stylesheet" />

        <script src="../../js/jquery.js" ></script>s
        <script src="../user-global-js/globalVariable.js" ></script>
        <script src="../user-global-js/checkUserLogin.js" ></script>
        <!-----------------------  answer script ----------------------->
        <script src="answer-card/answer-card.js"></script>
        <script src="answer-card/reportExtend.js"></script>
        <!-----------------------  question script ----------------------->
        <script src="question-card/question-card.js"></script>

        <!-----------------------  upvote downvote script ----------------------->
        <script src="../user-global-js/upvoteAndDownVoteAnswer.js"></script>
        <title>home page</title>
    </head>
    <body>
        <%--<jsp:include page="../navbar/navbar.jsp" />--%>
        <%@include file="../navbar/navbar.jsp" %>
        <div class="page-body">
            <div class="body-wrapper">
                <jsp:include page="../topic-section/topic-section.jsp" />
                <!-------------------------New Feed section------------------------>
                <div class="newfeeds-section">
                    <!------------------- greeting ------------------>
                    <div class="greeting-question" onclick="showAddQuestionModel()">
                        <div class="greeting-header">
                            <div class="user-logo-wrapper">
                                <img class="user-logo-image" src="../../assets/mark.jpg" alt="" />
                            </div>
                            <div class="user-name">
                                <div>Mark Zuckerberg</div>
                            </div>
                        </div>
                        <div class="greeting-content">
                            <span>What is your question?</span>
                        </div>
                    </div>
                    <!------------------- end of greeting ------------------->

                    <!------------------- answer ------------------->
                    <div id="answer-1" class="answer-wrapper">
                        <div class="answer-header">
                            <div class="header-infor flex-row">
                                <p>Answer</p>
                                <p>&nbsp·&nbsp</p>
                                <a href="#">Topic name</a>
                            </div>
                            <div class="hide-post" onclick="hideAnswer({answerid: 1})">
                                <svg width="24px" height="24px" viewBox="0 0 24 24">
                                <g id="hidesvg" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke="#666666" stroke-width="1.5">
                                <path
                                    d="M12,6 L12,18"
                                    transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) "
                                    ></path>
                                <path
                                    d="M18,12 L6,12"
                                    transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) "
                                    ></path>
                                </g>
                                </svg>
                            </div>
                        </div>
                        <div class="answer-poster-infor">
                            <div class="poster-avatar">
                                <img class="poster-avatar-image" src="../../assets/mark.jpg" alt="" />
                            </div>
                            <div class="poster-infor">
                                <div class="flex-row">
                                    <div class="poster-name">Dang Tuan Anh</div>
                                    &nbsp<span>·</span>&nbsp
                                    <span style="color: #939598">October 15, 2020</span>
                                </div>
                                <div class="poster-description">
                                    <span>4th years student at PTIT</span>
                                </div>
                            </div>
                        </div>
                        <div class="answer-content">
                            <div class="answer-title">
                                <a href="../question/question.jsp?questionId=2" style="color: black">Why are current American politics so divided?</a>
                            </div>
                            <div class="answer-full-content">
                                <span
                                    >Due to the confluence of several reasons: Half of Americans long for a fantasy past, while the other half long for a
                                    fantasy future:<a id="dots-1" style="cursor: pointer; color: #2e69ff" onclick="hideDotes({postid: '1'})"> . . . more</a>
                                    <span id="more-1" style="display: none">
                                        <br />
                                        <img src="../../assets/answer-image-1.jpg" alt="" /> <br /><br />
                                        Nobody wants to compromise, despite total agreement that there SHOULD be compromise:<br /><br />
                                        <img src="../../assets/answer-image-2.jpg" alt="" /> <br /><br />
                                    </span>
                                </span>
                            </div>
                            <div class="answer-demo-image" onclick="hideDotes({postid: 1})">
                                <img src="../../assets/answer-image-1.jpg" alt="" />
                            </div>
                        </div>
                        <div class="answer-interactive-button flex-row">
                            <div class="interactive-button flex-row">
                                <div class="upvote-button flex-row">
                                    <div class="upvote-button-svg" onclick="upvote({postid: 1, userid: 1})">
                                        <svg width="24px" height="24px" viewBox="0 0 24 24">
                                        <g
                                            id="upvotesvg-1"
                                            stroke-width="1.5"
                                            stroke="rgb(46, 105, 255)"
                                            fill="none"
                                            fill-rule="evenodd"
                                            stroke-linejoin="round"
                                            >
                                        <polygon points="12 4 3 15 9 15 9 20 15 20 15 15 21 15"></polygon>
                                        </g>
                                        </svg>
                                    </div>
                                    <span id="upvote-num-1" class="vote-number">10</span>
                                </div>
                                <div class="downvote-button flex-row">
                                    <div class="downvote-button-svg" onclick="downvote({postid: 1, userid: 1})">
                                        <svg width="24px" height="24px" viewBox="0 0 24 24">
                                        <g
                                            id="downvotesvg-1"
                                            stroke="rgb(46, 105, 255)"
                                            fill="none"
                                            stroke-width="1.5"
                                            fill-rule="evenodd"
                                            stroke-linejoin="round"
                                            >
                                        <polygon
                                            transform="translate(12.000000, 12.000000) rotate(-180.000000) translate(-12.000000, -12.000000) "
                                            points="12 4 3 15 9 15 9 20 15 20 15 15 21 15"
                                            ></polygon>
                                        </g>
                                        </svg>
                                    </div>
                                    <span id="downvote-num-1" class="vote-number">10</span>
                                </div>
                            </div>
                            <div class="report-button-wrapper">     
                                <div class="report-button" onclick="showReportExtend('1')">
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
                                <div tabindex="-2" id="report-extend-1" class="report-extend">
                                    <span onclick="showAddBookmarkSuccess()">Bookmarks</span>
                                    <span onclick="showReportSuccess()">Report</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-------------------end of answer ------------------->

                    <!------------------- question ------------------->
                    <div class="question-block">
                        <div class="question-block-header flex-row">
                            <div class="question-logo">
                                <svg width="24px" height="24px" viewBox="0 0 24 24">
                                <g
                                    id="questionsvg"
                                    stroke="#666"
                                    stroke-width="1.5"
                                    fill="none"
                                    fill-rule="evenodd"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    >
                                <path
                                    d="M15.0037473,18.5 C15.0037473,16.7206263 15.0037473,15.8306263 15.0037473,15.83 C17.3666743,14.7057707 19,12.2909208 19,9.5 C19,5.63400675 15.8659932,2.5 12,2.5 C8.13400675,2.5 5,5.63400675 5,9.5 C5,12.2916985 6.63423594,14.7017006 8.99822794,15.8255267 C8.99822794,15.8255267 8.99822794,16.7170178 8.99822794,18.5 L15.0037473,18.5 Z M12,8 L10,11 L14,11 L12,14 M9.76460414,20.5003969 C10.3139024,21.1136855 11.1118833,21.4996031 12,21.4996031 C12.886481,21.4996031 13.6831579,21.1151057 14.2323583,20.5037832"
                                    ></path>
                                </g>
                                </svg>
                            </div>
                            <span>Questions for you</span>
                        </div>

                        <!-- question block -->
                        <div id="question-1" class="question-block-content">
                            <div class="flex-row" style="justify-content: space-between">
                                <div class="question-header flex-row">
                                    <span>Question added</span>
                                    &nbsp<span>·</span>&nbsp
                                    <a href="#" class="topic-text">Web Development</a>
                                </div>
                                <div class="hide-post" onclick="hideQuestion({questionid: 1})">
                                    <svg width="24px" height="24px" viewBox="0 0 24 24">
                                    <g id="hidesvg" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke="#666666" stroke-width="1.5">
                                    <path
                                        d="M12,6 L12,18"
                                        transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) "
                                        ></path>
                                    <path
                                        d="M18,12 L6,12"
                                        transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) "
                                        ></path>
                                    </g>
                                    </svg>
                                </div>
                            </div>
                            <a href="../question/question.jsp?questionId=1" class="question-content">Can you style SVG with CSS?</a>
                            <div class="question-footer flex-row">
                                <a id="answer-amount">1 Answer</a>
                                &nbsp<span>·</span>&nbsp
                                <span>Last followed&nbsp</span>
                                <span id="answer-last-followed">November 15</span>
                            </div>
                        </div>
                        <!-- end of question block -->
                    </div>
                    <!-------------------end of question ------------------->

                    <div class="end-of-page"></div>
                </div>
                <!-------------------------end of New Feed section------------------------>
            </div>
        </div>
        <!----------------------- end of content ----------------------->

    </body>
    <!-----------------------  report script ----------------------->
    <script src="../user-global-js/showReportSuccess.js"></script>
    <script>
                                    setGray("home");
    </script>
</html>
