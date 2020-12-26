/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


let upvote_num = "";
let upvote_svg = "";
let downvote_num = "";
let downvote_svg = "";

let checkUserUpvote = [];
let checkUserDownvote = [];

function upvote(post) {
   const { postid, userid } = post;
   if (checkUserDownvoted(postid, userid)) {
      downvote_num = `downvote-num-${postid}`;
      downvote_svg = `downvotesvg-${postid}`;
      const downvoteNum = document.getElementById(downvote_num);
      const downvoteSvg = document.getElementById(downvote_svg);
      downvoteNum.innerHTML = parseInt(downvoteNum.innerText, 10) - 1;
      downvoteSvg.style.fill = "none";
   }
   upvote_num = `upvote-num-${postid}`;
   upvote_svg = `upvotesvg-${postid}`;
   const upvoteNum = document.getElementById(upvote_num);
   const upvoteSvg = document.getElementById(upvote_svg);
   upvoteNum.innerHTML = parseInt(upvoteNum.innerText, 10) - 1;
   upvoteSvg.style.fill = "none";
   const check = checkUserUpvoted(postid, userid);
   if (!check) {
      checkUserUpvote.push({ userid, postid });
      upvoteNum.innerHTML = parseInt(upvoteNum.innerText, 10) + 2;
      upvoteSvg.style.fill = "rgb(46, 105, 255)";
   }
}

function checkUserUpvoted(postid, userid) {
   if (checkUserUpvote.length > 0) {
      for (let i = 0; i < checkUserUpvote.length; i++) {
         const value = checkUserUpvote[i];
         if (value.userid === userid && value.postid === postid) {
            checkUserUpvote.splice(i, 1);
            return true;
         }
      }
   }
   return false;
}

function downvote(post) {
   const { postid, userid } = post;
   if (checkUserUpvoted(postid, userid)) {
      upvote_num = `upvote-num-${postid}`;
      upvote_svg = `upvotesvg-${postid}`;
      const upvoteNum = document.getElementById(upvote_num);
      const upvoteSvg = document.getElementById(upvote_svg);
      upvoteNum.innerHTML = parseInt(upvoteNum.innerText, 10) - 1;
      upvoteSvg.style.fill = "none";
   }
   downvote_num = `downvote-num-${postid}`;
   downvote_svg = `downvotesvg-${postid}`;
   const downvoteNum = document.getElementById(downvote_num);
   const downvoteSvg = document.getElementById(downvote_svg);
   downvoteNum.innerHTML = parseInt(downvoteNum.innerText, 10) - 1;
   downvoteSvg.style.fill = "none";
   const check = checkUserDownvoted(postid, userid);
   if (!check) {
      checkUserDownvote.push({ userid, postid });
      downvoteNum.innerHTML = parseInt(downvoteNum.innerText, 10) + 2;
      downvoteSvg.style.fill = "rgb(46, 105, 255)";
   }
}

function checkUserDownvoted(postid, userid) {
   if (checkUserDownvote.length > 0) {
      for (let i = 0; i < checkUserDownvote.length; i++) {
         const value = checkUserDownvote[i];
         if (value.userid === userid && value.postid === postid) {
            checkUserDownvote.splice(i, 1);
            return true;
         }
      }
   }
   return false;
}
