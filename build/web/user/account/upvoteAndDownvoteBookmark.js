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


let bm_upvote_num = "";
let bm_upvote_svg = "";
let bm_downvote_num = "";
let bm_downvote_svg = "";

let bm_checkUserUpvote = [];
let bm_checkUserDownvote = [];

function upvoteBookmark(post) {
   const { postid, userid } = post;
   if (checkUserBmDownvoted(postid, userid)) {
      bm_downvote_num = `b-downvote-num-${postid}`;
      bm_downvote_svg = `b-downvotesvg-${postid}`;
      const downvoteNum = document.getElementById(bm_downvote_num);
      const downvoteSvg = document.getElementById(bm_downvote_svg);
      downvoteNum.innerHTML = parseInt(downvoteNum.innerText, 10) - 1;
      downvoteSvg.style.fill = "none";
   }
   bm_upvote_num = `b-upvote-num-${postid}`;
   bm_upvote_svg = `b-upvotesvg-${postid}`;
   const upvoteNum = document.getElementById(bm_upvote_num);
   const upvoteSvg = document.getElementById(bm_upvote_svg);
   upvoteNum.innerHTML = parseInt(upvoteNum.innerText, 10) - 1;
   upvoteSvg.style.fill = "none";
   const check = checkUserBmUpvoted(postid, userid);
   if (!check) {
      bm_checkUserUpvote.push({ userid, postid });
      upvoteNum.innerHTML = parseInt(upvoteNum.innerText, 10) + 2;
      upvoteSvg.style.fill = "rgb(46, 105, 255)";
   }
}

function checkUserBmUpvoted(postid, userid) {
   if (bm_checkUserUpvote.length > 0) {
      for (let i = 0; i < bm_checkUserUpvote.length; i++) {
         const value = bm_checkUserUpvote[i];
         if (value.userid === userid && value.postid === postid) {
            bm_checkUserUpvote.splice(i, 1);
            return true;
         }
      }
   }
   return false;
}

function downvoteBookmark(post) {
   const { postid, userid } = post;
   if (checkUserBmUpvoted(postid, userid)) {
      bm_upvote_num = `b-upvote-num-${postid}`;
      bm_upvote_svg = `b-upvotesvg-${postid}`;
      const upvoteNum = document.getElementById(bm_upvote_num);
      const upvoteSvg = document.getElementById(bm_upvote_svg);
      upvoteNum.innerHTML = parseInt(upvoteNum.innerText, 10) - 1;
      upvoteSvg.style.fill = "none";
   }
   bm_downvote_num = `b-downvote-num-${postid}`;
   bm_downvote_svg = `b-downvotesvg-${postid}`;
   const downvoteNum = document.getElementById(bm_downvote_num);
   const downvoteSvg = document.getElementById(bm_downvote_svg);
   downvoteNum.innerHTML = parseInt(downvoteNum.innerText, 10) - 1;
   downvoteSvg.style.fill = "none";
   const check = checkUserBmDownvoted(postid, userid);
   if (!check) {
      bm_checkUserDownvote.push({ userid, postid });
      downvoteNum.innerHTML = parseInt(downvoteNum.innerText, 10) + 2;
      downvoteSvg.style.fill = "rgb(46, 105, 255)";
   }
}

function checkUserBmDownvoted(postid, userid) {
   if (bm_checkUserDownvote.length > 0) {
      for (let i = 0; i < bm_checkUserDownvote.length; i++) {
         const value = bm_checkUserDownvote[i];
         if (value.userid === userid && value.postid === postid) {
            bm_checkUserDownvote.splice(i, 1);
            return true;
         }
      }
   }
   return false;
}
