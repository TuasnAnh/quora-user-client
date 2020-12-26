/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function hideDotes({postid}) {
   var dots = document.getElementById(`dots-${postid}`);
   var moreText = document.getElementById(`more-${postid}`);

   dots.style.display = "none";
   moreText.style.display = "block";
}

function hideAnswer({ answerid }) {
   const answer = document.getElementById(`answer-${answerid}`);
   answer.style.display = "none";
}

