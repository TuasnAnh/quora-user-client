<%-- 
    Document   : setting.jsp
    Created on : Jan 2, 2021, 10:20:57 AM
    Author     : ADMIN
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="../user-global-css/globalStyle.css" rel="stylesheet" />
        <link href="setting.css" rel="stylesheet" />
    </head>
    <title>Setting</title>
    <body>
        <jsp:include page="../navbar/navbar.jsp" />
        <div class="setting-wrapper">
            <div class="setting-container">
                <span class="banner">Setting</span>
                <div class="setting-body">
                    <div class="setting-class setting-employment">
                        <div class="showing-model">
                            <div class="f1 label">Employment</div>
                            <div class="f2 employment">No employment information</div>
                            <div class="f3 edit-employment" onclick="showEditEmployment()">Edit</div>
                        </div>
                        <div class="edit-model edit-employment-model">
                            <div class="model-row">
                                <div class="model-label">
                                    <span>New company:</span>
                                </div>
                                <input type="text" placeholder="Enter new company" class="model-input new-employment-input" />
                            </div>
                            <div class="flex-row">
                                <div class="submit-button edit-employment-button">
                                    <span>Submit</span>
                                </div>
                                <div class="cancel-button cancel-employment-button" onclick="hideEditEmployment()">
                                    <span>Cancel</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="setting-class setting-education">
                        <div class="showing-model">
                            <div class="f1 label">Education</div>
                            <div class="f2 education">No education information</div>
                            <div class="f3 edit-education" onclick="showEditEducation()">Edit</div>
                        </div>
                        <div class="edit-model edit-education-model">
                            <div class="model-row">
                                <div class="model-label">
                                    <span>New school:</span>
                                </div>
                                <input type="text" placeholder="Enter new school" class="model-input new-education-input" />
                            </div>
                            <div class="flex-row">
                                <div class="submit-button edit-education-button">
                                    <span>Submit</span>
                                </div>
                                <div class="cancel-button cancel-education-button" onclick="hideEditEducation()">
                                    <span>Cancel</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="setting-class setting-location">
                        <div class="showing-model">
                            <div class="f1 label">Location</div>
                            <div class="f2 location">No location information</div>
                            <div class="f3 edit-location" onclick="showEditLocation()">Edit</div>
                        </div>
                        <div class="edit-model edit-location-model">
                            <div class="model-row">
                                <div class="model-label">
                                    <span>New location:</span>
                                </div>
                                <input type="text" placeholder="Enter new location" class="model-input new-location-input" />
                            </div>
                            <div class="flex-row">
                                <div class="submit-button edit-location-button">
                                    <span>Submit</span>
                                </div>
                                <div class="cancel-button cancel-location-button" onclick="hideEditLocation()">
                                    <span>Cancel</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="setting-class setting-password">
                        <div class="showing-model">
                            <div class="change-pasword">change password</div>
                            <div class="f3 edit-password" onclick="showEditPassword()">Edit</div>
                        </div>
                        <div class="edit-model edit-password-model">
                            <div class="model-row">
                                <div class="model-label">
                                    <span>Old password:</span>
                                </div>
                                <input type="password" placeholder="Enter old password" class="model-input old-password-input" />
                            </div>
                            <div class="model-row">
                                <div class="model-label">
                                    <span>New password:</span>
                                </div>
                                <input type="password" placeholder="Enter new password" class="model-input new-password-input" />
                            </div>
                            <div class="flex-row">
                                <div class="submit-button edit-password-button">
                                    <span>Submit</span>
                                </div>
                                <div class="cancel-button cancel-password-button" onclick="hideEditPassword()">
                                    <span>Cancel</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
    <script src="setting.js"></script>
    <script src="settingAction.js" type="module"></script>
    <script>
                                    setGray();
    </script>
</html>
