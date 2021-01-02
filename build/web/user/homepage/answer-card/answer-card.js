/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

export function hideDotes(customId, questionId) {
    const dots = document.getElementById(`dots-${customId}`);
    const moreText = document.getElementById(`more-${customId}`);
    const demoImage = document.getElementById("demo-image-" + questionId);

    dots.style.display = "none";
    moreText.style.display = "block";
    demoImage.style.display = "none";
}
 
export function hideAnswer( { answerid }) {
    const answer = document.getElementById(`answer-${answerid}`);
    answer.style.display = "none";
}

export function setHideAction(questionId) {
    const hides = document.querySelectorAll("[id^='dots-']");
    for (let i = 0; i < hides.length; i++) {
        const id = hides[i].getAttribute("id");
        const customId = id.split("-")[1];
        hides[i].addEventListener("click", function () {
            hideDotes(customId, questionId);
        });
    }
}
