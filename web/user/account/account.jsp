<%-- 
    Document   : account
    Created on : Nov 28, 2020, 8:32:45 PM
    Author     : ADMIN
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="account.css" rel="stylesheet" />
        <link href="accountAnswer.css" rel="stylesheet" />
        <link href="accountBookmark.css" rel="stylesheet" />
        <link href="accountQuestion.css" rel="stylesheet" />
        <link href="../homepage/answer-card/answer-card.css" rel="stylesheet" />
        <!--<link href="../homepage/question-card/question-card.css" rel="stylesheet" />-->
        <link href="../user-global-css/globalStyle.css" rel="stylesheet" />

        <title>Account</title>
    </head>
    <body>
        <jsp:include page="../navbar/navbar.jsp" />
        <div class="account-wrapper">
            <div class="account-content">
                <div class="account-profile">
                    <div class="profile-header flex-column">
                        <div class="profile-header-image flex-row">
                            <div class="user-avatar">
                                <img src="../../assets/mark.jpg" alt="" />
                                <div class="edit-avatar">
                                    <svg width="24px" height="24px" viewBox="0 0 24 24">
                                    <g
                                        stroke="none"
                                        fill="none"
                                        fill-rule="evenodd"
                                        transform="translate(11.500000, 12.500000) rotate(-315.000000) translate(-11.500000, -12.500000) translate(9.500000, 2.500000)"
                                        >
                                    <path
                                        d="M2,0 L2,0 C3.1045695,-2.02906125e-16 4,0.8954305 4,2 L4,16 L2.00256278,20 L9.48676901e-20,16 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z"
                                        id="pen_body"
                                        class="icon_svg-stroke"
                                        stroke="white"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        ></path>
                                    <polygon
                                        id="pen_tip"
                                        class="icon_svg-fill_as_stroke"
                                        fill="#666"
                                        transform="translate(2.000000, 18.750000) scale(1, -1) translate(-2.000000, -18.750000) "
                                        points="2 17.5 3.25 20 0.75 20"
                                        ></polygon>
                                    </g>
                                    </svg>
                                </div>
                            </div>
                            <div class="user-name flex-column">
                                <div class="user-name-group flex-row">
                                    <span id="username">Đặng Tuấn Anh</span>
                                </div>
                            </div>
                        </div>
                        <div class="profile-header-description flex-column">
                            <a
                                href="#"
                                id="account-description"
                                class="user-description"
                                onclick="openEditDescription()"
                                style="color: #939598; font-size: 15px"
                                >Write a description about your self</a
                            >
                            <div id="edit-description-modal">
                                <div class="edit-input-wrapper">
                                    <textarea id="description-input" width="100%" rows="3" autocomplete="chrome-off"></textarea>
                                </div>
                                <div class="edit-button-wrapper flex-row">
                                    <div class="update-button" onclick="updateDes()">
                                        <span>Update</span>
                                    </div>
                                    <div class="cancel-button" onclick="closeEditDescription()">
                                        <span>Cancel</span>
                                    </div>
                                </div>
                            </div>
                            <span id="follower-amount" style="color: #939598; font-size: 13px">0 follower</span>
                        </div>
                    </div>
                    <div class="profile-navbar flex-row">
                        <a id="answer-nav" class="navbar-element" onclick="showUserAnswer()">
                            <span id="answer-number-amount">0 Answer</span>
                        </a>
                        <a id="question-nav" class="navbar-element" onclick="showUserQuestion()">
                            <span id="question-number-amount">0 Question</span>
                        </a>
                        <a id="bookmark-nav" class="navbar-element" onclick="showUserBookmark()">
                            <span id="bookmark-number-amount">0 Bookmark</span>
                        </a>
                    </div>
                    <div class="profile-content">
                        <div id="user-answer-wrapper">
                            <div class="profile-sub-navbar flex-row">
                                <div class="account-answer-counter">
                                    <span>0 Answers</span>
                                </div>
                            </div>
                            <div class="answer-in-account-page">
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
                                    <a href="../question/question.jsp" class="answer-question" style="color: black">Why are current American politics so divided?</a>
                                    <div class="answer-full-content">
                                        <span
                                            >Due to the confluence of several reasons: Half of Americans long for a fantasy past, while the other half long for a
                                            fantasy future:<a id="dots-1" style="cursor: pointer; color: #2e69ff" onclick="hideDotes({postid: 1})"> . . . more</a>
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
                                                <g id="upvotesvg-1" stroke-width="1.5" stroke="#666" fill="none" fill-rule="evenodd" stroke-linejoin="round">
                                                <polygon points="12 4 3 15 9 15 9 20 15 20 15 15 21 15"></polygon>
                                                </g>
                                                </svg>
                                            </div>
                                            <div  id="upvote-num-1" class="vote-number">10</div>
                                        </div>
                                        <div class="downvote-button flex-row">
                                            <div class="downvote-button-svg" onclick="downvote({postid: 1, userid: 1})">
                                                <svg width="24px" height="24px" viewBox="0 0 24 24">
                                                <g id="downvotesvg-1" stroke="#666" fill="none" stroke-width="1.5" fill-rule="evenodd" stroke-linejoin="round">
                                                <polygon
                                                    transform="translate(12.000000, 12.000000) rotate(-180.000000) translate(-12.000000, -12.000000) "
                                                    points="12 4 3 15 9 15 9 20 15 20 15 15 21 15"
                                                    ></polygon>
                                                </g>
                                                </svg>
                                            </div>
                                            <div  id="downvote-num-1" class="vote-number">10</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="user-question-wrapper">
                            <div class="profile-sub-navbar flex-row">
                                <div class="account-question-counter">
                                    <span>0 Questions</span>
                                </div>
                            </div>
                            <div class="question-block-content">
                                <div class="flex-row" style="justify-content: space-between">
                                    <div class="question-header flex-row">
                                        <span>Question added</span>
                                        &nbsp<span>·</span>&nbsp
                                        <a href="#" class="topic-text">Web Development</a>
                                    </div>
                                </div>
                                <a href="../question/question.jsp" class="question-content">Can you style SVG with CSS?</a>
                                <div class="question-footer flex-row">
                                    <a id="answer-amount">1 Answer</a>
                                    &nbsp<span>·</span>&nbsp
                                    <span>Last followed&nbsp</span>
                                    <span id="answer-last-followed">November 15</span>
                                </div>
                            </div>
                        </div>
                        <div id="user-bookmark-wrapper">
                            <div class="profile-sub-navbar flex-row">
                                <div class="account-Bookmarks-counter">
                                    <span>0 Bookmarks</span>
                                </div>
                            </div>
                            <div id="bookmark-1" class="answer-in-bookmark-page">
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
                                    <div class="remove-bookmark" onclick="removeBookmark({bookmarkid: 1})">
                                        <svg width="24px" height="24px" viewBox="0 0 24 24">
                                        <g stroke-width="1.5" stroke="#2e69ff" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                                        <polygon class="icon_svg-fill" points="10.5012125 16 5.00242498 20 5 8 16 8 16 20"></polygon>
                                        <polyline points="8.00018899 5.92307692 8 5 19 5 19 17 18.0028546 16.2746434"></polyline>
                                        </g>
                                        </svg>
                                    </div>
                                </div>
                                <div class="answer-content">
                                    <a href="../question/question.jsp" class="answer-question" style="color: black">Why are current American politics so divided?</a>
                                    <div class="answer-full-content">
                                        <span
                                            >Due to the confluence of several reasons: Half of Americans long for a fantasy past, while the other half long for a
                                            fantasy future:<a id="bookmark-dots-1" style="cursor: pointer; color: #2e69ff" onclick="hideBookmarkDotes({bookmarkid: 1})"> . . . more</a>
                                            <span id="bookmark-more-1" style="display: none">
                                                <br />
                                                <img src="../../assets/answer-image-1.jpg" alt="" /> <br /><br />
                                                Nobody wants to compromise, despite total agreement that there SHOULD be compromise:<br /><br />
                                                <img src="../../assets/answer-image-2.jpg" alt="" /> <br /><br />
                                            </span>
                                        </span>
                                    </div>
                                    <div class="answer-demo-image" onclick="hideDotes({bookmarkid: 1})">
                                        <img src="../../assets/answer-image-1.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="answer-interactive-button flex-row">
                                    <div class="interactive-button flex-row">
                                        <div class="upvote-button flex-row">
                                            <div class="upvote-button-svg" onclick="upvoteBookmark({postid: 1, userid: 1})">
                                                <svg width="24px" height="24px" viewBox="0 0 24 24">
                                                <g id="b-upvotesvg-1" stroke-width="1.5" stroke="#666" fill="none" fill-rule="evenodd" stroke-linejoin="round">
                                                <polygon points="12 4 3 15 9 15 9 20 15 20 15 15 21 15"></polygon>
                                                </g>
                                                </svg>
                                            </div>
                                            <div id="b-upvote-num-1" class="vote-number">10</div>
                                        </div>
                                        <div class="downvote-button flex-row">
                                            <div class="downvote-button-svg" onclick="downvoteBookmark({postid: 1, userid: 1})">
                                                <svg width="24px" height="24px" viewBox="0 0 24 24">
                                                <g id="b-downvotesvg-1" stroke="#666" fill="none" stroke-width="1.5" fill-rule="evenodd" stroke-linejoin="round">
                                                <polygon
                                                    transform="translate(12.000000, 12.000000) rotate(-180.000000) translate(-12.000000, -12.000000) "
                                                    points="12 4 3 15 9 15 9 20 15 20 15 15 21 15"
                                                    ></polygon>
                                                </g>
                                                </svg>
                                            </div>
                                            <div id="b-downvote-num-1" class="vote-number">10</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="account-infor">
                    <div class="account-credential">
                        <div class="credential-title">Credential & HighLights</div>
                        <div class="employment-credential flex-row" style="margin-bottom: 5px">
                            <div class="credential-svg">
                                <svg width="24px" height="24px" viewBox="0 0 24 24">
                                <g stroke="#666" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                                <path
                                    d="M20.5,11 L20.5,18 C20.5,18.5522847 20.0522847,19 19.5,19 L4.5,19 C3.94771525,19 3.5,18.5522847 3.5,18 L3.5,11 M10.40625,15 L5.625,15 C4.45139491,15 3.5,13.9766509 3.5,12.7142857 L3.5,7 L3.5,7 L20.5,7 L20.5,12.7142857 C20.5,13.9766509 19.5486051,15 18.375,15 L13.59375,15 M9,7 L9,6 C9,4.8954305 9.8954305,4 11,4 L11,4 L13,4 C14.1045695,4 15,4.8954305 15,6 L15,7 M11,13.5 L13,13.5 C13.2761424,13.5 13.5,13.7238576 13.5,14 L13.5,16 C13.5,16.2761424 13.2761424,16.5 13,16.5 L11,16.5 C10.7238576,16.5 10.5,16.2761424 10.5,16 L10.5,14 C10.5,13.7238576 10.7238576,13.5 11,13.5 Z"
                                    ></path>
                                </g>
                                </svg>
                            </div>
                            <span id="employment-text" class="credential-text">Add employment credential</span>
                        </div>
                        <div class="education-credential flex-row" style="margin-bottom: 5px">
                            <div class="credential-svg">
                                <svg width="24px" height="24px" viewBox="0 0 24 24">
                                <g stroke="#666" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                                <path
                                    d="M2.5,9.5 L12,5 L21.5,9.5 L12,14 L2.5,9.5 Z M20,10.5 L20,16.5 M6.5,12 C6.5,14 6.5,15 6.5,15 C6.5,16.5048582 9.00219538,18 12,18 C14.9978046,18 17.5,16.4986226 17.5,15 C17.5,15 17.5,14 17.5,12 M20,16.5 L18,20 L22,20 L20,16.5 Z"
                                    ></path>
                                </g>
                                </svg>
                            </div>
                            <span id="education-text" class="credential-text">Add education credential</span>
                        </div>
                        <div class="location-credential flex-row" style="margin-bottom: 5px">
                            <div class="credential-svg">
                                <svg width="24px" height="24px" viewBox="0 0 24 24">
                                <g stroke="#666" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round">
                                <path
                                    d="M12,13 C13.6568542,13 15,11.6568542 15,10 C15,8.34314575 13.6568542,7 12,7 C10.3431458,7 9,8.34314575 9,10 C9,11.6568542 10.3431458,13 12,13 Z M12,20.73 C16.6375,16.5 19,12.9 19,10.2 C19,6.2235498 15.8659932,3 12,3 C8.13400675,3 5,6.2235498 5,10.2 C5,12.9 7.3625,16.41 12,20.73 L12,20.73 Z"
                                    ></path>
                                </g>
                                </svg>
                            </div>
                            <span id="location-text" class="credential-text">Add location credential</span>
                        </div>
                    </div>
                    <div class="account-followed-topic">
                        <div class="account-topic-title">Followed topic</div>
                        <div class="account-topic-element flex-row">
                            <div class="img-topic-wrapper">
                                <img src="../../assets/mark.jpg" alt="" />
                            </div>
                            <div class="flex-column">
                                <span id="topic-name-1"><strong>Mark Xoan</strong></span>
                                <span id="topic-user-answered-1" style="color: #939598">0 answer</span>
                            </div>
                        </div>
                        <div class="account-topic-element flex-row">
                            <div class="img-topic-wrapper">
                                <img src="../../assets/mark.jpg" alt="" />
                            </div>
                            <div class="flex-column">
                                <span id="topic-name-2"><strong>Mark Xoan</strong></span>
                                <span id="topic-user-answered-2" style="color: #939598">0 answer</span>
                            </div>
                        </div>
                        <div class="account-topic-button">
                            <div class="flex-row">
                                <span>View more</span>
                                <div class="svg-wrapper">
                                    <svg width="20px" height="20px" viewBox="0 0 24 24">
                                    <g class="icon_svg-stroke" stroke="#666" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round">
                                    <polyline points="5 8.5 12 15.5 19.0048307 8.5"></polyline>
                                    </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
    <script src="../navbar/navbar.js"></script>
    <script src="../user-global-js/upvoteAndDownVoteAnswer.js"></script>
    <script src="account.js" ></script>
    <script src="showEditForm.js" ></script>
    <script src="removeBookmark.js" ></script>
    <script src="upvoteAndDownvoteBookmark.js" ></script>
    <script src="../homepage/answer-card/answer-card.js" ></script>

    <script>
                                                setGray();
                                                setRedNav("answer");
    </script>

</html>
