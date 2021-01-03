<%-- 
    Document   : search
    Created on : Jan 3, 2021, 5:51:06 PM
    Author     : ADMIN
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="search.css" rel="stylesheet" />
        <link href="../user-global-css/globalStyle.css" rel="stylesheet" />

        <!--answer style-->
        <link href="../homepage/answer-card/answer-card.css" rel="stylesheet" />
        <link href="../homepage/answer-card/reportExtend.css" rel="stylesheet" />
        <!--question style-->
        <link href="../homepage/question-card/question-card.css" rel="stylesheet" />

        <script src="../homepage/answer-card/reportExtend.js" ></script>

        <title>Search</title>

    </head>
    <body>
        <jsp:include page="../navbar/navbar.jsp" />
        <div class="page-body">
            <div class="body-wrapper">
                <!-------------------------New Feed section------------------------>
                <div class="newfeeds-section">
                    <div class="search-navbar">
                        <a id="search-answer-nav">
                            <span>Answer</span>
                        </a>
                        <a id="search-question-nav">
                            <span>Question</span>
                        </a>
                    </div>

                    <!------------------- answer ------------------->
                    <div id="search-answer-content">
                        <div id="search-answer-section"></div>
                        <div  class="end-of-page">
                            <div class="load-more-answer-button load-more">
                                <span>Load more answers</span>
                            </div>
                        </div>
                    </div>
                    <!------------------- end of answer ------------------->
                    <div id="search-question-content" >
                        <div id="search-question-section"></div>
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

    <script src="search.js" ></script>
    <script src="searchNav.js" type="module" ></script>
    <script>
        setGray();
        setSearchNav("answer");
    </script>
</html>
