/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const description = document.getElementById("account-description");
const desModal = document.getElementById("edit-description-modal");
const textarea = document.getElementById("description-input");

function openEditDescription() {
   desModal.style.display = "block";
   description.style.display = "none";
   textarea.focus();
}

function closeEditDescription() {
   desModal.style.display = "none";
   description.style.display = "block";
}

function updateDes() {
   if (textarea.value.length > 0) {
      description.innerHTML = textarea.value;
      closeEditDescription();
   }
}
