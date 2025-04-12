// ***************************************************************************
// Slider kode
// ***************************************************************************

// // have fat i slideren
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

// skjuler summary fra start
document.querySelector("#sum").style.display = "none";

// resetter formen fra start
document.querySelector("#webform").reset();

// Eventlistner på "SUBMIT" knappen
document.querySelector("#submit_btn").addEventListener("click", submitForm);

// Eventlistner på "Godkend og luk" knappen
document.querySelector("#reset_btn").addEventListener("click", reset);

// Sender value af inputfelterne til Summary
function submitForm() {
  // viser Summary
  document.querySelector("#sum").style.display = "block";

  // forskellige inputfelter mm.
  document.querySelector("#sumStreet").textContent = document.querySelector("#location-street").value;
  document.querySelector("#sumNumber").textContent = document.querySelector("#location-number").value;
  document.querySelector("#sumCity").textContent = document.querySelector("#location_city").value;
  document.querySelector("#sumZip").textContent = document.querySelector("#location_zipcode").value;
  // select - option
  document.querySelector("#sumType").textContent = document.querySelector("#zombie-type").value;
  // slider
  document.querySelector("#sumDanger").textContent = document.querySelector("#farlighed").value;
  // textarea
  document.querySelector("#sumStory").textContent = document.querySelector("#beskrivelse").value;
  // flere inputfelter
  document.querySelector("#sumName").textContent = document.querySelector("#name").value;
  document.querySelector("#sumEmail").textContent = document.querySelector("#email").value;
  document.querySelector("#sumCode").textContent = document.querySelector("#area-code").value;
  document.querySelector("#sumPhone").textContent = document.querySelector("#telefon").value;

  // radiobutton-gruppen
  document.querySelector("#sumAntal").textContent = document.querySelector('input[name="antal"]:checked').value;

  // checkbox-gruppen ------------------------------------------------------------

  const checkboxes = document.querySelectorAll('input[name="behavior"]:checked');

  console.log(checkboxes);

  // Laver et array
  const myArray = [];

  console.log(myArray);

  // Kalder funktionen lavListe for hvert element i checkboxes
  checkboxes.forEach(lavListe);

  // Pusher værdien af elementerne fra nodelisten ind i myArray
  function lavListe(element) {
    myArray.push(element.value);
  }
  console.log(myArray);

  // Putter arrayet ind i summary og separerer med komma og mellemrum
  document.querySelector("#sumBehaviour").textContent = myArray.join(", ");
}

// Resetter Formen og skjuler Summary
function reset() {
  document.querySelector("#webform").reset();
  document.querySelector("#sum").style.display = "none";
  updateValue();
}
