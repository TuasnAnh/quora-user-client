const reportModel = document.getElementById("show-report-success");
const bookmark = document.getElementById("show-add-bookmark-success");

export function showReportSuccess() {
   reportModel.style.transform = "translate3d(0px, 50px, 0px)";
   setTimeout(() => {
      reportModel.style.transform = "translate3d(0px, -50px, 0px)";
   }, 1000);
}

export function showAddBookmarkSuccess() {
   bookmark.style.transform = "translate3d(0px, 50px, 0px)";
   setTimeout(() => {
      bookmark.style.transform = "translate3d(0px, -50px, 0px)";
   }, 1000);
}
