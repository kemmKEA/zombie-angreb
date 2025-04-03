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
