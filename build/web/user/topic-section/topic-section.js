
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//

window.onload = getFollowedTopic();

function createFollowedTopicCards(topics) {
    const topicWrapper = document.querySelector(".topic-section-content");
    for (let i = 0; i < topics.length; i++) {
        const topic = '<div class="topic-block-wrapper">\n\
                        <a href="' + '../topic/topic.jsp?topicId=' + topics[i].tid + '" class="topic-block-container">\n\
                            <div class="topicicon-wrapper">\n\
                                <div class="topicicon-container">\n\
                                    <img class="topicicon-image" src="' + topics[i].topicImageUrl + '" alt="" />\n\
                                </div>\n\
                            </div>\n\
                            <div class="topic-name">\n\
                                <div>' + topics[i].topicName + '</div>\n\
                            </div>\n\
                        </a>\n\
                    </div>';

        topicWrapper.appendChild(htmlToElements(topic)[0]);
    }
}

async function getFollowedTopic() {
    const userId = checkUserLogin();

    await $.ajax({
        type: "POST",
        url: `${contextPath}/TopicServlet`,
        contentType: "application/json",
        data: JSON.stringify({userId: userId, context: "getFollowedTopic"}),
        success: function (response) {
            console.log(response);
            createFollowedTopicCards(response);
        }
    });
}


function htmlToElements(html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content.childNodes;
}



