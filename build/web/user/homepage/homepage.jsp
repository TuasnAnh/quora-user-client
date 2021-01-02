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

        <script src="../user-global-js/globalScript.js" type="module"></script>
        <!-----------------------  answer script ----------------------->
        <script src="answer-card/reportExtend.js"></script>
        <!-----------------------  question script ----------------------->
        <script src="question-card/question-card.js" type="module"></script>

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
                    <div class="greeting-question">
                        <div class="greeting-header">
                            <div class="user-logo-wrapper">
                                <img class="user-logo-image" alt="" />
                            </div>
                            <div class="user-name">
                                <div id="user-greeting-name"></div>
                            </div>
                        </div>
                        <div class="greeting-content">
                            <span>What is your question?</span>
                        </div>
                    </div>
                    <!------------------- end of greeting ------------------->
                    <div class="newfeed-content">
                    </div>
                    
                    <div class="end-of-page">
                        <div class="load-more-button">
                            <span>Load more post</span>
                        </div>
                    </div>
                </div>
                <!-------------------------end of New Feed section------------------------>
            </div>
        </div>
        <!----------------------- end of content ----------------------->

    </body>
    <!-----------------------  report script ----------------------->
    <script src="homepage.js" type="module" ></script>
    <script>
        setGray("home");
    </script>
</html>
