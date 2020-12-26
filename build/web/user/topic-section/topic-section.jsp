<%-- 
    Document   : topic-section.jsp
    Created on : Nov 28, 2020, 11:16:52 AM
    Author     : ADMIN
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="../topic-section/topic-section.css" rel="stylesheet" />
        <title>JSP Page</title>
    </head>
    <body>
        <div class="topic-section">
            <!----------------- topic block ------------------>
            <div class="topic-section-content">
                <div class="topic-block-wrapper">
                    <a href="../topic/topic.jsp" class="topic-block-container">
                        <div class="topicicon-wrapper">
                            <div class="topicicon-container">
                                <img class="topicicon-image" src="../../assets/mark.jpg" alt="" />
                            </div>
                        </div>
                        <div class="topic-name">
                            <div>Webside</div>
                        </div>
                    </a>
                </div>
                <div class="topic-block-wrapper">
                    <a href="../topic/topic.jsp" class="topic-block-container">
                        <div class="topicicon-wrapper">
                            <div class="topicicon-container">
                                <img class="topicicon-image" src="../../assets/mark.jpg" alt="" />
                            </div>
                        </div>
                        <div class="topic-name">
                            <div>Webside Programming</div>
                        </div>
                    </a>
                </div>
            </div>
            <!----------------- end topic block ------------------>
            <a href="../discovery/discovery.jsp" class="discover-topic-button">
                <div class="add-logo-container">
                    <svg width="18px" height="18px" viewBox="0 0 24 24">
                    <g stroke="#666" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4.5,12 L19.5,12"></path>
                    <path d="M12,4.5 L12,19.5"></path>
                    </g>
                    </svg>
                </div>
                <div class="discover-text">Discover Topics</div>
            </a>
            <div class="divide-line"></div>
            <div class="copinfor">
                <span>
                    <a href="#" class="">About</a>
                    <span> · </span>
                    <a href="#" class="">Careers</a>
                    <span> · </span>
                    <a href="#" class="">Temps</a>
                    <span> · </span>
                    <a href="#" class="">Privacy</a>
                    <span> · </span>
                    <a href="#" class="">Acceptable Use</a>
                    <span> · </span>
                    <a href="#" class="">Businesses</a>
                </span>
            </div>
        </div>
    </body>
    <script src="../topic-section/topic-section.js" ></script>
</html>
