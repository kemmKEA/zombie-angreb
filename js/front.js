// Version 1: One breaking only
// **********************************************
// const openBtn = document.querySelector(".news_card .read-more");
// const closeBtn = document.querySelector(".news_card dialog button");
// const dialog = document.querySelector(".news_card dialog");
// openBtn.addEventListener("click", openDialog);
// closeBtn.addEventListener("click", closeDialog);

// function openDialog() {
//   dialog.showModal();
// }
// function closeDialog() {
//   dialog.close();
// }
// **********************************************

// Version 2: with 3 sets of functions to make 3 breaking news work
// **********************************************
// const openBtn1 = document.querySelector(".news_card:first-of-type .read-more");
// const closeBtn1 = document.querySelector(".news_card:first-of-type dialog button");
// const dialog1 = document.querySelector(".news_card:first-of-type dialog");
// openBtn1.addEventListener("click", openDialog1);
// closeBtn1.addEventListener("click", closeDialog1);

// function openDialog1() {
//   dialog1.showModal();
// }
// function closeDialog1() {
//   dialog1.close();
// }

// const openBtn2 = document.querySelector(".news_card:nth-child(2) .read-more");
// const closeBtn2 = document.querySelector(".news_card:nth-child(2) dialog button");
// const dialog2 = document.querySelector(".news_card:nth-child(2) dialog");
// openBtn2.addEventListener("click", openDialog2);
// closeBtn2.addEventListener("click", closeDialog2);

// function openDialog2() {
//   dialog2.showModal();
// }
// function closeDialog2() {
//   dialog2.close();
// }

// const openBtn3 = document.querySelector(".news_card:nth-child(3) .read-more");
// const closeBtn3 = document.querySelector(".news_card:nth-child(3) dialog button");
// const dialog3 = document.querySelector(".news_card:nth-child(3) dialog");
// openBtn3.addEventListener("click", openDialog3);
// closeBtn3.addEventListener("click", closeDialog3);

// function openDialog3() {
//   dialog3.showModal();
// }
// function closeDialog3() {
//   dialog3.close();
// }
// **********************************************

// Version 3: Using querySelectorAll and forEach to make it work for several breaking news
// **********************************************
// function setupArticle(article) {
//   const openBtn = article.querySelector("article > button");
//   const dialog = article.querySelector("dialog");
//   const closeBtn = article.querySelector(".close-dialog");

//   openBtn.addEventListener("click", openDia);
//   function openDia() {
//     dialog.showModal();
//   }

//   closeBtn.addEventListener("click", function () {
//     dialog.close();
//   });
// }

// const articles = document.querySelectorAll(".news_card");

// articles.forEach(setupArticle);

// articles.forEach((article) => {
//   setupArticle(article);
// });
// articles.forEach(function (article) {
//   setupArticle(article);
// });
// **********************************************

// Version 4: Optimised into one statement
// **********************************************
// document.querySelectorAll(".news_card").forEach((article) => {
//   const openBtn = article.querySelector("article > button");
//   const dialog = article.querySelector("dialog");
//   const closeBtn = dialog.querySelector(".close-dialog");
//   openBtn.addEventListener("click", () => dialog.showModal());
//   closeBtn.addEventListener("click", () => dialog.close());
// });
// **********************************************
