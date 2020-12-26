/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const question = document.getElementById("filter-question");
const answer = document.getElementById("filter-answer");
const topic = document.getElementById("filter-topic");
const announcements = document.getElementById("filter-announcements");

function setStyle(element) {
   element.style.backgroundColor = "rgba(185, 43, 39, 0.1)";
   element.style.color = "rgba(185, 43, 39, 1)";
   element.style.fontWeight = "500";
}

function setRed(element) {
   question.style = null;
   answer.style = null;
   announcements.style = null;

   switch (element) {
      case "question":
         setStyle(question);
         break;
      case "answer":
         setStyle(answer);
         break;
      case "topic":
         setStyle(topic);
         break;
      case "announcements":
         setStyle(announcements);
         break;
   }
}
