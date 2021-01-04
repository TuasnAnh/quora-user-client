<%-- 
    Document   : topic-header
    Created on : Nov 28, 2020, 2:42:28 PM
    Author     : ADMIN
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="topic.css" rel="stylesheet" />
        <link href="../user-global-css/globalStyle.css" rel="stylesheet" />

        <!--answer style-->
        <link href="../homepage/answer-card/answer-card.css" rel="stylesheet" />
        <link href="../homepage/answer-card/reportExtend.css" rel="stylesheet" />
        <!--question style-->
        <link href="../homepage/question-card/question-card.css" rel="stylesheet" />

        <script src="topic.js"></script>
        <script src="topicNav.js" type='module'></script>
        <script src="../homepage/answer-card/reportExtend.js" ></script>

        <title>Topic</title>
    </head>
    <body>
        <jsp:include page="../navbar/navbar.jsp" />
        <div class="page-body">
            <div class="body-wrapper">
                <jsp:include page="../topic-section/topic-section.jsp" />

                <!-------------------------New Feed section------------------------>
                <div class="newfeeds-section">
                    <jsp:include page="header/topic-header.jsp" />

                    <!------------------- answer ------------------->
                    <div id="topic-answer-content">
                        <div id="topic-answer-section"></div>
                        <div class="end-of-page">
                            <div class="load-more-answer-button load-more">
                                <span>Load more answers</span>
                            </div>
                        </div>
                    </div>
                    <!------------------- end of answer ------------------->
                    <div id="topic-question-content" >
                        <div id="topic-question-section"></div>
                        <div class="end-of-page">
                            <div class="load-more-question-button load-more">
                                <span>Load more questions</span>
                            </div>
                        </div>
                    </div>

                    <div class="end-of-page"></div>
                </div>
                <!-------------------------end of New Feed section------------------------>
            </div>
        </div>
    </body>

    <script>
        // set topic navbar
        setTopicNav("answer");
    </script>
    <script>
        // set app navbar
        setGray();
    </script>

</html>
