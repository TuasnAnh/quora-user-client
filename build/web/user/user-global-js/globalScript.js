//function showAddQuestionModel() {
//    console.log("show model");
//    document.getElementsByTagName("body")[0].style.overflow = "hidden";
//    const block = document.getElementById("addquestion-container");
//    block.style.display = "flex";
//}
//
//function exitAddQuestionModel() {
//    document.getElementsByTagName("body")[0].style.overflow = "visible";
//    const body = document.getElementById("addquestion-container");
//    body.style.display = "none";
//    
//    const chooseInput = document.querySelector(".choose-topic-button-value");
//    const questionInput = document.getElementById("question-input-content");
//    chooseInput.innerHTML = "Choose Topic";
//    questionInput.value = "";
//}

// make textarea auto resize when user typing
window.onload = function () {
    const tx = document.getElementsByTagName("textarea");
    for (let i = 0; i < tx.length; i++) {
        tx[i].addEventListener("input", OnInput, false);
    }
}


function OnInput() {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
}
