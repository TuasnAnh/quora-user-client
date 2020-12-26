/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = async function () {
    const userid = checkUserLogin();
    await getSuggestTopic(userid);
}

async function getSuggestTopic(userId) {
    await $.ajax({
        type: "POST",
        url: `${contextPath}/TopicServlet`,
        contentType: "application/json",
        data: JSON.stringify({userId: userId, context: "getSuggestTopic"}),
        success: function (response) {
            console.log(response);
            createDiscoveryTopicCards(response);
        }
    });
}

function htmlToElements(html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content.childNodes;
}

function createDiscoveryTopicCards(topics) {      
    const topicWrapper = document.querySelector(".discovery-wrapper");

      for (let i = 0; i < topics.length; i++) {
        const topic = '<a href = "' + '../topic/topic.jsp?topicId=' + topics[i].tid + '" class="discovery-content flex-row">\n\
                            <div class="dis-icon  flex-row">\n\
                                <img src="' + topics[i].topicImageUrl + '" alt="">\n\
                            </div>\n\
                            <div class="dis-infor flex-column">\n\
                                <span class="dis-name">' + topics[i].topicName +'</span>\n\
                                <span class="dis-followers">' + topics[i].follower + " Followers" +'</span>\n\
                            </div>\n\
                        </a>';

        topicWrapper.appendChild(htmlToElements(topic)[0]);
    }
}
