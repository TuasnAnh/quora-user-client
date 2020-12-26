/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function showReportExtend(number) {
    const reportExtend = document.getElementById(`report-extend-${number}`);
    reportExtend.style.display = "flex";
    reportExtend.focus();
    reportExtend.addEventListener("blur", function () {
        setTimeout(() => {
            reportExtend.style.display = "none";
        }, 100);
    });
}

function showQuestionReportExtend(number) {
    const reportExtend = document.getElementById(`report-question-extend-${number}`);
    reportExtend.style.display = "flex";
    reportExtend.focus();
    reportExtend.addEventListener("blur", function () {
        setTimeout(() => {
            reportExtend.style.display = "none";
        }, 100);
    });
}



