/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function removeBookmark( {bookmarkid}) {
    const bookmark = document.getElementById(`bookmark-${bookmarkid}`);
    bookmark.style.display = "none";
}

function hideBookmarkDotes({bookmarkid}) {
    var dots = document.getElementById(`bookmark-dots-${bookmarkid}`);
    var moreText = document.getElementById(`bookmark-more-${bookmarkid}`);

    dots.style.display = "none";
    moreText.style.display = "block";
}