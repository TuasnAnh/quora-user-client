/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function hideQuestion({ questionid }) {
   const question = document.getElementById(`question-${questionid}`);
   question.style.display = "none";
}

