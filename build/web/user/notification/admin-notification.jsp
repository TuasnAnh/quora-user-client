<%-- 
    Document   : question-notification
    Created on : Nov 28, 2020, 2:11:00 PM
    Author     : ADMIN
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="admin-notification.css" rel="stylesheet" />        
        <link href="notification.css" rel="stylesheet" />
        <link href="../user-global-css/globalStyle.css" rel="stylesheet" />

        <title>Admin Notification</title>
    </head>
    <body>
        <jsp:include page="../navbar/navbar.jsp" />
        <div class="page-body">
            <div class="body-wrapper">
                <jsp:include page="filter/filter.jsp" />
                <div class="notification-content">
                    <div class="notification-header">Notifications</div>
                </div>
            </div>
        </div>
    </body>
    <script src="admin-notification.js" type="module"></script>
    <script>
        setGray("notification");
        setRed("announcements")
    </script>


</html>
