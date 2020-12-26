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

        <script src="../../js/jquery.js" ></script>
        <script src="../user-global-js/globalVariable.js" ></script>
        <script src="../user-global-js/checkUserLogin.js" ></script>
        <title>Discovery</title>
    </head>
    <body>
        <jsp:include page="../navbar/navbar.jsp" />

        <div class="page-body">
            <div class="body-wrapper">
                <jsp:include page="../topic-section/topic-section.jsp" />

                <div class="discovery-section">
                    <div class="discovery-wrapper">
                        <div class="discovery-header">
                            <span class="discovery-title">Discover Topics</span>
                            <span class="discovery-hint">Topic you might like</span>
                        </div>

                        <!----------------discovery block--------------->
                        <div class="discovery-content flex-row">
                            <div class="dis-icon  flex-row">
                                <img src="../../assets/mark.jpg" alt="">
                            </div>
                            <div class="dis-infor flex-column">
                                <span class="dis-name">Web Development</span>
                                <span class="dis-followers">555k followers</span>
                            </div>
                        </div>
                        <!----------------end of discovery block--------------->
                        <div class="discovery-content flex-row">
                            <div class="dis-icon  flex-row">
                                <img src="../../assets/mark.jpg" alt="">
                            </div>
                            <div class="dis-infor flex-column">
                                <span class="dis-name">Web Development</span>
                                <span class="dis-followers">555k followers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
    <script>
        setGray("discovery");
    </script>
    <script src="discovery.js" type="text/javascript"></script>

</html>
