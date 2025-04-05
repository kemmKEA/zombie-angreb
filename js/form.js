// have fat i slideren
const slider = document.querySelector("#farlighed");
const dangerValue = document.querySelector("#range-value");

// sæt en eventlistener på den som opdaterer, når jeg laver ændringer
slider.addEventListener("input", updateValue);

// min span skal opdate sin value (textContent)
function updateValue() {
  // console.log("updateValue");
  // console.log(slider.value);
  dangerValue.textContent = slider.value;

  if (slider.value > 49 && slider.value < 90) {
    console.log(`fareniveauet er ${slider.value}`);
    // slider.parentNode.style.accentColor = "var(--warning-color)";
    slider.style.backgroundColor = "var(--warning-color)";
  } else if (slider.value >= 90) {
    // slider.parentNode.style.accentColor = "var(--danger-color)";
    slider.style.backgroundColor = "var(--danger-color)";
  } else {
    // slider.parentNode.style.accentColor = "var(--info-color)";
    slider.style.backgroundColor = "var(--info-color)";
  }
}

// ***************************************************************************
// Summary kode
// ***************************************************************************

// resetter formen fra starten
document.querySelector("#webform").reset();

// Eventlistnere på knapperne
document.querySelector("#reset_btn").addEventListener("click", reset);
document.querySelector("#submit_btn").addEventListener("click", submitForm);

// Sender value af inputfelterne til Summary
function submitForm() {
  // viser Summary
  document.querySelector("#sum").style.display = "block";

  // forskellige inputfelter
  document.querySelector("#location-street").textContent = document.querySelector("#location-street").value;
  document.querySelector("#sumNumber").textContent = document.querySelector("#location-number").value;

  // select - option
  document.querySelector("#sumType").textContent = document.querySelector("#zombie-type").value;

  // radiobuttons
  document.querySelector("#sumAntal").textContent = document.querySelector('input[name="zombie-count"]:checked').value;

  // checkboxe ------------------------------------------------------------
  const checkboxes = document.querySelectorAll('input[name="behavior"]:checked');

  // Console log der viser hvad value er for vores checkbokse. (Man får kun en log
  // hvis man har udfyldt alle required input og tjekket en eller flere checkbokse af)
  console.log(checkboxes);

  // Laver et array
  const myArray = [];

  // Kalder funktionen lavListe for hvert element i checkboxes
  checkboxes.forEach(lavListe);

  // Pusher elementerne ind i myArray
  function lavListe(element) {
    myArray.push(element.value);
  }
  // Putter arrayet ind i summary og separerer med komma og mellemrum
  document.querySelector("#sumBehaviour").textContent = myArray.join(", ");
}

// Resetter Formen og skjuler Summary
function reset() {
  document.querySelector("#webform").reset();
  document.querySelector("#sum").style.display = "none";
}
