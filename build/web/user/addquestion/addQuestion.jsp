<%-- 
    Document   : addQuestion
    Created on : Nov 28, 2020, 11:05:35 AM
    Author     : ADMIN
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="../user-global-css/addQuestion.css" rel="stylesheet"/>
        <link href="../user-global-css/globalStyle.css" rel="stylesheet"/>
        <title></title>
    </head>
    <body>
        <div id="addquestion-container">
            <div class="addquestion-block">
                <div class="addquestion-header flex-row">
                    <span>Add Question</span>
                    <div class="hide-post" style="cursor: pointer" onclick="exitAddQuestionModel()">
                        <svg width="24px" height="24px" viewBox="0 0 24 24">
                        <g id="hidesvg" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke="#666666" stroke-width="1.5">
                        <path
                            d="M12,6 L12,18"
                            transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) "
                            ></path>
                        <path
                            d="M18,12 L6,12"
                            transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) "
                            ></path>
                        </g>
                        </svg>
                    </div>
                </div>
                <div class="addquestion-content">
                    <div class="add-tips">
                        <span><strong>Tips on getting good answers quickly</strong></span>
                        <ul>
                            <li>Make sure your question has not been asked already</li>
                            <li>Keep your question short and to the point</li>
                            <li>Double-check grammar and spelling</li>
                        </ul>
                    </div>
                    <div class="choice-topic-field">
                        <div class="choose-topic-button" onclick="showShooseTopicList()">
                            <span class="choose-topic-button-value">Choose Topic</span>
                            <img src="https://img.icons8.com/android/24/000000/expand-arrow.png"/>
                        </div>
                        <div class="choose-topic-value-wrapper">
                        </div>
                    </div>
                    <div class="question-input-field">
                        <textarea
                            id="question-input-content"
                            width="100%"
                            rows="1"
                            placeholder='Start your question with "What", "How", "Why", etc.'
                            autocomplete="chrome-off"
                            ></textarea>
                    </div>
                </div>
                <div class="addquestion-footer flex-row">
                    <div class="cancel-wrapper" onclick="exitAddQuestionModel()">
                        <span>Cancel</span>
                    </div>
                    <button class="add-question-action" onclick="addQuestion()">
                        <span>Add Question</span>
                    </button>
                </div>
            </div>
        </div>
    </body>
    <script src="../addquestion/addQuestion.js" type="module"></script>
</html>
