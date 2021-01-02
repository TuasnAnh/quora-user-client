<%-- 
    Document   : question
    Created on : Nov 28, 2020, 6:48:02 PM
    Author     : ADMIN
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="question.css" rel="stylesheet" />
        <link href="../user-global-css/globalStyle.css" rel="stylesheet" />
        <link href="../homepage/answer-card/answer-card.css" rel="stylesheet" />
        <link href="../homepage/answer-card/reportExtend.css" rel="stylesheet" />

        <script src="../homepage/answer-card/reportExtend.js" ></script>

        <title>Question</title>
    </head>
    <body>
        <jsp:include page="../navbar/navbar.jsp" />

        <div class="page-body">
            <div class="question-wrapper">
                <div class="question-topic flex-row">
                    <span>Topic:</span>
                    <span id="topic-name"></span>
                </div>
                <span id="question-title"></span>
                <div class="question-interactive-button">
                    <div class="answer-button-wrapper">
                        <div class="answer-button-icon">
                            <svg width="24px" height="24px" viewBox="0 0 24 24">
                            <g id="" transform="translate(2.500000, 3.500000)" stroke="none" stroke-width="1.5" fill="none" fill-rule="evenodd">
                            <g
                                id=""
                                transform="translate(9.000000, 9.000000) rotate(-315.000000) translate(-9.000000, -9.000000) translate(7.000000, -1.000000)"
                                >
                            <path
                                d="M2,8.8817842e-16 L2,8.8817842e-16 L2,8.8817842e-16 C3.1045695,6.85269983e-16 4,0.8954305 4,2 L4,16 L2.00256278,20 L0,16 L0,2 L0,2 C-1.35267774e-16,0.8954305 0.8954305,1.09108686e-15 2,8.8817842e-16 Z"
                                id=""
                                class="icon_svg-stroke"
                                stroke="#2e69ff"
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
                            <path
                                d="M12,16 L17,16 L17,11 M7,1 L2,1 L2,6"
                                id="bg"
                                class="icon_svg-stroke"
                                stroke="#2e69ff"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                ></path>
                            </g>
                            </svg>
                        </div>
                        <span>Answer</span>
                    </div>
                </div>
                <div id="write-answer-modal">
                    <div class="answer-input-function flex-row">
                        <div id="bold-button" data-cmd="bold" class="answer-function">
                            <svg width="24px" height="24px" viewBox="0 0 24 24">
                            <g id="bold" stroke="none" fill="none" fill-rule="evenodd">
                            <path
                                d="M12.7794246,20 L6,20 L6,4 L12.6015693,4 C15.5309503,4 17.2781168,5.51905752 17.2781168,7.99168399 C17.2781168,9.68814969 16.0959024,11.1628552 14.5475153,11.4067914 L14.5475153,11.6063756 C16.5457716,11.7616078 18,13.3582814 18,15.4206514 C18,18.2259182 16.0017437,20 12.7794246,20 Z M9.15954664,6.56133056 L9.15954664,10.6306306 L11.5344377,10.6306306 C13.2397559,10.6306306 14.1708806,9.88773389 14.1708806,8.6015246 C14.1708806,7.32640333 13.3025283,6.56133056 11.7959895,6.56133056 L9.15954664,6.56133056 Z M9.15954664,17.4386694 L11.9738448,17.4386694 C13.7942459,17.4386694 14.7776809,16.6292446 14.7776809,15.1323631 C14.7776809,13.6687457 13.7628596,12.8925849 11.9006103,12.8925849 L9.15954664,12.8925849 L9.15954664,17.4386694 Z"
                                id="B"
                                class="icon_svg-fill_as_stroke"
                                fill="#666666"
                                ></path>
                            </g>
                            </svg>
                        </div>
                        <label class="answer-function" for="file-upload">
                            <svg width="24px" height="24px" viewBox="0 0 24 24">
                            <defs><path d="M5,4.5 L5,18.5 L2,18.5 L2,4.5 L2,0.5 L18.5,0.5 L18.5,4.5 L5,4.5 Z" id="path-1"></path></defs>
                            <g id="photos" stroke="none" class="icon_svg-fill_as_stroke" fill="#666666" fill-rule="evenodd">
                            <path
                                d="M8,7 C7.72385763,7 7.5,7.22385763 7.5,7.5 L7.5,19.5 C7.5,19.7761424 7.72385763,20 8,20 L20,20 C20.2761424,20 20.5,19.7761424 20.5,19.5 L20.5,7.5 C20.5,7.22385763 20.2761424,7 20,7 L8,7 Z M8,5.75 L20,5.75 C20.9664983,5.75 21.75,6.53350169 21.75,7.5 L21.75,19.5 C21.75,20.4664983 20.9664983,21.25 20,21.25 L8,21.25 C7.03350169,21.25 6.25,20.4664983 6.25,19.5 L6.25,7.5 C6.25,6.53350169 7.03350169,5.75 8,5.75 Z"
                                id="front"
                                fill-rule="nonzero"
                                ></path>
                            <path
                                d="M17.5,9 C16.9477153,9 16.5,9.44771525 16.5,10 C16.5,10.5522847 16.9477153,11 17.5,11 C18.0522847,11 18.5,10.5522847 18.5,10 C18.5,9.44771525 18.0522847,9 17.5,9 Z M17.5,7.75 C18.7426407,7.75 19.75,8.75735931 19.75,10 C19.75,11.2426407 18.7426407,12.25 17.5,12.25 C16.2573593,12.25 15.25,11.2426407 15.25,10 C15.25,8.75735931 16.2573593,7.75 17.5,7.75 Z"
                                id="circle"
                                fill-rule="nonzero"
                                ></path>
                            <path
                                d="M7.51086426,16.3161398 L7.51086426,20 L20.5108643,20 L20.5108643,16.3176136 C18.7812561,15.3914799 17.7009263,14.9284131 17.2698749,14.9284131 C16.6232978,14.9284131 14.6635332,16.3168432 14.0133169,16.3176136 C13.3631007,16.318384 11.4041401,14.0184785 10.7610483,14.0183328 C10.3323204,14.0182356 9.24892571,14.7841713 7.51086426,16.3161398 Z M14.1853213,14.9636194 C14.3909978,14.869742 14.5911778,14.7666161 15.0527381,14.5208411 C16.3483964,13.8309185 16.6820249,13.6784131 17.2698749,13.6784131 C18.0022858,13.6784131 19.1439621,14.1677752 21.1009221,15.2156464 C21.507238,15.4332118 21.7608643,15.8567153 21.7608643,16.3176136 L21.7608643,20 C21.7608643,20.6903559 21.2012202,21.25 20.5108643,21.25 L7.51086426,21.25 C6.82050832,21.25 6.26086426,20.6903559 6.26086426,20 L6.26086426,16.3161398 C6.26086426,15.9572681 6.41510756,15.6157069 6.68432727,15.3784103 C8.74951432,13.5581055 9.86691258,12.7681301 10.7613316,12.7683328 C11.2843915,12.7684514 11.6719119,12.9778697 12.2043358,13.3817264 C12.4750916,13.5871015 12.693573,13.7738875 13.2112546,14.2307693 C13.6714166,14.6368818 13.8743813,14.8100294 14.0768016,14.9628622 C14.0910184,14.9735963 14.1047799,14.9838532 14.1180624,14.9936249 C14.1388732,14.9845124 14.1614435,14.9745179 14.1853213,14.9636194 Z"
                                id="land"
                                fill-rule="nonzero"
                                ></path>
                            <mask id="mask-2" fill="white"><use xlink:href="#path-1"></use></mask>
                            <g id="mask"></g>
                            <path
                                d="M4.5,3.5 C4.22385763,3.5 4,3.72385763 4,4 L4,16 C4,16.2761424 4.22385763,16.5 4.5,16.5 L16.5,16.5 C16.7761424,16.5 17,16.2761424 17,16 L17,4 C17,3.72385763 16.7761424,3.5 16.5,3.5 L4.5,3.5 Z M4.5,2.25 L16.5,2.25 C17.4664983,2.25 18.25,3.03350169 18.25,4 L18.25,16 C18.25,16.9664983 17.4664983,17.75 16.5,17.75 L4.5,17.75 C3.53350169,17.75 2.75,16.9664983 2.75,16 L2.75,4 C2.75,3.03350169 3.53350169,2.25 4.5,2.25 Z"
                                id="back"
                                fill-rule="nonzero"
                                mask="url(#mask-2)"
                                ></path>
                            </g>
                            </svg>
                            <input type="file" id="file-upload" style="display: none" />
                        </label>
                    </div>
                    <div class="answer-input-wrapper">
                        <iframe id="output" name="textField"></iframe>
                    </div>
                    <div class="answer-field-button-wrapper flex-row">
                        <div class="submit-button">
                            <span>Update</span>
                        </div>
                        <div class="cancel-button">
                            <span>Cancel</span>
                        </div>
                    </div>
                </div>
                <div id="number-answer"></div>

                <div class="question-answer-wrapper">
                </div>

                <div class="end-of-page">
                    <div class="load-more-button">
                        <span>Load more answers</span>
                    </div>
                </div>
            </div>
        </div>
    </body>
    <script src="question.js" type="module"></script>
    <script src="addAnswer.js" type="module"></script>
    <script>
        setGray();
    </script>

</html>
