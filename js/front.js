// uden brug af =>

// function openDialog(dialog) {
//   dialog.showModal();
// }

// function closeDialog(dialog) {
//   dialog.close();
// }

function setupArticle(article) {
  const openBtn = article.querySelector(".read-more");
  const dialog = article.querySelector("dialog");
  const closeBtn = dialog.querySelector(".close-dialog");

  openBtn.addEventListener("click", function () {
    // openDialog(dialog);
    dialog.showModal();
  });

  closeBtn.addEventListener("click", function () {
    // closeDialog(dialog);
    dialog.close();
  });
}

const articles = document.querySelectorAll(".news_card");

articles.forEach(function (article) {
  setupArticle(article);
});

// optimeret version:
// document.querySelectorAll(".news_card").forEach((article) => {
//   const openBtn = article.querySelector("article > button");
//   const dialog = article.querySelector("dialog");
//   const closeBtn = dialog.querySelector(".close-dialog");
//   openBtn.addEventListener("click", () => dialog.showModal());
//   closeBtn.addEventListener("click", () => dialog.close());
// });
