<%-- 
    Document   : filter
    Created on : Nov 28, 2020, 2:02:57 PM
    Author     : ADMIN
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="filter/filter.css" rel="stylesheet">
        <link href="../user-global-css/globalStyle.css" rel="stylesheet"/>
        <title>JSP Page</title>
    </head>
    <body>
        <div class="notification-filters">
            <div class="filter-header">Filters</div>
            <a href="question-notification.jsp" id="filter-question" >
                <span>Questions</span>
            </a>
            <a href="answer-notification.jsp" id="filter-answer">
                <span>Answers</span>
            </a>
            <a href="admin-notification.jsp" id="filter-announcements">
                <span>Announcements</span>
            </a>
        </div>
    </body>
    <script src="filter/filter.js" ></script>
</html>
