document.querySelector("#headCircle").addEventListener("mouseover", headHighlight);
document.querySelector("#headCircle").addEventListener("mouseout", headUnHighlight);
document.querySelector("#headCircle").addEventListener("click", headInfo);
document.querySelector("#shoulderCircle").addEventListener("mouseover", headHighlight);
document.querySelector("#shoulderCircle").addEventListener("mouseout", headUnHighlight);
document.querySelector("#shoulderCircle").addEventListener("click", shoulderInfo);
document.querySelector("#kneeCircle").addEventListener("mouseover", headHighlight);
document.querySelector("#kneeCircle").addEventListener("mouseout", headUnHighlight);
document.querySelector("#kneeCircle").addEventListener("click", kneeInfo);

function headHighlight() {
  console.log("headHighlight");
  console.log(this);
  this.style.fill = "#fff";
}
function headUnHighlight() {
  console.log("headUnHighlight");
  this.style.fill = "#f00";
}
// function headHighlight2() {
//   console.log("headHighlight2");
//   document.querySelector("#shoulderCircle").style.fill = "#fff";
// }
// function headUnHighlight2() {
//   console.log("headUnHighlight2");
//   document.querySelector("#shoulderCircle").style.fill = "#f00";
// }
// function headHighlight3() {
//   console.log("headHighlight3");
//   document.querySelector("#kneeCircle").style.fill = "#fff";
// }
// function headUnHighlight3() {
//   console.log("headUnHighlight3");
//   document.querySelector("#kneeCircle").style.fill = "#f00";
// }

function headInfo() {
  console.log("headInfo");
  document.querySelector(".info-text > h2").textContent = "Hovedet!";
  document.querySelector(".info-text > article > p").textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  document.querySelector("#efficiency").innerHTML = "<h3>Effektivitet</h3>";
  document.querySelector("#efficiency").innerHTML += "<p>Hovedet er en vigtig del af kroppen, og det er vigtigt at holde det sundt og stærkt. Det er vigtigt at træne hovedet for at forbedre hukommelsen og koncentrationen.</p>";
  document.querySelector("#requirement").innerHTML = "<h3>Styrke</h3>";
  document.querySelector("#requirement").innerHTML += "<p>Det kræver en del styrke at hugge hovedet at en zombie, så det er bedst at gå i gang med at træne nu.</p>";
  // Fade in the text
  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#efficiency").classList.add("fadeIn");
  document.querySelector("#efficiency").addEventListener("animationend", clear);
}
function shoulderInfo() {
  console.log("shoulderInfo");
  document.querySelector(".info-text > h2").textContent = "Skulder!";
  document.querySelector(".info-text > article > p").textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  document.querySelector("#efficiency").innerHTML = "<h3>Effektivitet</h3>";
  document.querySelector("#efficiency").innerHTML += "<p>Det er meget hjælpsomt, hvis man kan få armen af zombien.</p>";
  document.querySelector("#requirement").innerHTML = "<h3>Styrke</h3>";
  document.querySelector("#requirement").innerHTML += "<p>Det er ikke så svært at få armen af en gammel zombie, da leddene bliver svagere med tiden.</p>";
}
function kneeInfo() {
  console.log("kneeInfo");
  document.querySelector(".info-text > h2").textContent = "Knæ!";
  document.querySelector(".info-text > article > p").textContent = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  document.querySelector("#efficiency").innerHTML = "<h3>Effektivitet</h3>";
  document.querySelector("#efficiency").innerHTML += "<p>Ar beskadige knæet kan gøre zombien lidt langsommere, men da den allerede er ret langsom, er det ikke så væsentligt.</p>";
  document.querySelector("#requirement").innerHTML = "<h3>Styrke</h3>";
  document.querySelector("#requirement").innerHTML += "<p>Det kræver ikke så meget at få en zombie ud af balance. Bare sørg for ikke at blive bidt ;)</p>";
}

function clear() {
  console.log("clear");
  document.querySelector("#efficiency").classList.remove("fadeIn");
  document.querySelector("#requirement").classList.remove("fadeIn");
}
