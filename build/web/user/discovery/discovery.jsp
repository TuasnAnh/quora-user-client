<%-- 
    Document   : discovery
    Created on : Nov 28, 2020, 12:29:46 PM
    Author     : ADMIN
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="discovery.css" rel="stylesheet"/>
        <link href="../homepage/homepage.css" rel="stylesheet"/>
        <link href="../user-global-css/globalStyle.css" rel="stylesheet" />

        <title>Discovery</title>
    </head>
    <body>
        <jsp:include page="../navbar/navbar.jsp" />

        <div class="page-body">
            <div class="body-wrapper">
                <jsp:include page="../topic-section/topic-section.jsp" />

                <div class="discovery-section">
                    <div class="discovery-wrapper">
                    </div>
                </div>
            </div>
        </div>
    </body>
    <script>
        setGray("discovery");
    </script>
    <script src="discovery.js" type="module"></script>

</html>
