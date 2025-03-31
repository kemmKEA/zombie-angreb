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
  this.style.fill = "#fff";
}
function headUnHighlight() {
  console.log("headUnHighlight");
  this.style.fill = "#f00";
}

function headInfo() {
  console.log("headInfo");

  animateBoxes();

  document.querySelector(".info-text > h2").textContent = "Hovedet!";
  document.querySelector(".info-text > article > p").textContent = "Lorem ipsum dolor sit amet, velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  document.querySelector("#efficiency").innerHTML = "<h3>Effektivitet</h3><p>Afhukning er supereffektivt og et af de bedste passificeringsaktiviteter man kan bruge. Også for zombier!</p>";
  document.querySelector("#requirement").innerHTML = "<h3>Styrke</h3><p>Det kræver en del styrke og træning at hugge hovedet af en zombie.</p>";
}
function shoulderInfo() {
  console.log("shoulderInfo");

  animateBoxes();

  document.querySelector(".info-text > h2").textContent = "Skulderen!";
  document.querySelector(".info-text > article > p").textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
  document.querySelector("#efficiency").innerHTML = "<h3>Effektivitet</h3><p>Det er rimelig nyttigt at hugge en arm af en zombie, og skal man gøre det, er skulderen et godt sted at hugge på.";
  document.querySelector("#requirement").innerHTML = "<h3>Styrke</h3><p>Hvis du kan svinge et scærd (helst en katana), så er det rimelig let.</p>";
}
function kneeInfo() {
  console.log("kneeInfo");

  animateBoxes();

  document.querySelector(".info-text > h2").textContent = "Knæet!";
  document.querySelector(".info-text > article > p").textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.";
  document.querySelector("#efficiency").innerHTML = "<h3>Effektivitet</h3><p>Ikke super effektivt, da en zombie allerede er langsom, så man får ikke så meget ud af at forstyrre dens balance.";
  document.querySelector("#requirement").innerHTML = "<h3>Styrke</h3><p>Det kræver ikke så meget. Det kan gøres med en træpind.</p>";
}

function animateBoxes() {
  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#efficiency").classList.add("fadeIn");
  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#requirement").classList.add("fadeIn");
  document.querySelector("#requirement").addEventListener("animationend", cleanup);
}

function cleanup() {
  console.log("cleanup");
  document.querySelector("#requirement").removeEventListener("animationend", cleanup);
  document.querySelector("#efficiency").classList.remove("fadeIn");
  document.querySelector("#requirement").classList.remove("fadeIn");
}
