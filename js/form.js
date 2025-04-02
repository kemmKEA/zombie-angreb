document.addEventListener("DOMContentLoaded", () => {
  resetForm(); // Reset the form on page load
  startEventlistnere(); // Initialize event listeners
});

// Function to reset the form
function resetForm() {
  if (form) {
    form.reset(); // Reset all form fields to their default values
    dateField.style.display = "none"; // Ensure the date field is hidden by default
  }
}

let selectedOption;
let message;

// Select the form element
const form = document.querySelector("form");
const summarySection = document.querySelector("#form-summary .placeholder");
const zombieTypeSelect = document.getElementById("zombie-type");
const zombieInfoDiv = document.getElementById("zombie-info");

// opretter constanter for datofeltet
const todayNoRadio = document.querySelector("#today-no");
const todayYesRadio = document.querySelector("#today-yes");
const dateField = document.querySelector("#date-field");
const todayField = document.querySelector("#today-field");

// opretter constanter for farlighed (range feltet)
const rangeInput = document.getElementById("farlighed");
const rangeValue = document.getElementById("range-value");

//opretter constanter for select feltet og option elementer
const select = document.querySelector("#select");
const options = document.querySelectorAll("option");

// funktion der tilføjer eventlistnere til de forskellige forminput
function startEventlistnere() {
  // tilføjer eventlistnere for radiobuttons og range input
  todayNoRadio.addEventListener("change", showHideDateField);
  todayYesRadio.addEventListener("change", showHideDateField);

  // tilføjer eventlistner for range input feltet
  rangeInput.addEventListener("input", displayRangeValue);
  // Add event listener for the select element
  zombieTypeSelect.addEventListener("change", updateSummary);
  zombieTypeSelect.addEventListener("change", updateZombieInfo);
}

// funktion der viser eller skjuler datofeltet
function showHideDateField() {
  if (this === todayNoRadio) {
    dateField.style.display = "block";
  } else if (this === todayYesRadio) {
    dateField.style.display = "none";
  }
}

function displayRangeValue() {
  rangeValue.textContent = rangeInput.value; // Update the text content with the current range value
}

// funktion der opdaterer Summary når en ny type zombie vælges
function updateSummary() {
  // få fat i den valgte option (zombie-type)
  selectedOption = zombieTypeSelect.options[zombieTypeSelect.selectedIndex].text;

  // Put en tekst ind i Summary
  message = "Du har valgt: " + selectedOption;
  summarySection.textContent = message;
  //   eller:
  //   summarySection.textContent = `Du har valgt: ${selectedOption}`;
}

function updateZombieInfo() {
  const selectedValue = zombieTypeSelect.value;

  // Define additional text for each zombie type using if-else
  let infoText = "";
  if (selectedValue === "klassisk-romero-zombie") {
    infoText = "Den originale zombie – langsom, stønner og ustoppelig i flok. Den slæber sig afsted uden mål eller mening og reagerer mest på larm og bevægelse. Let at undslippe enkeltvis, men dødsensfarlig i store mængder.";
  } else if (selectedValue === "loebe-zombie") {
    infoText = "Denne zombie løber! Hurtig, rasende og uden nogen form for impulskontrol. Den er ikke strategisk – bare brutal. Den går ikke – den sprinter, og du bør gøre det samme.";
  } else if (selectedValue === "intelligens-zombie") {
    infoText = "En skræmmende type. Tænker, planlægger og dirigerer andre zombier. Den kan åbne døre, bruge redskaber og genkende mønstre. Hvis den bærer slips eller læsebriller – løb.";
  } else if (selectedValue === "influencer-zombie") {
    infoText = "En socialt bevidst, men totalt umoralsk forrådnet zombie. Deler hvert bid og skræmmende øjeblik med sine følgere. Ofte iført crop-top og ring light. Farligere for psyken end kroppen.";
  } else if (selectedValue === "mutations-zombie") {
    infoText = "Et produkt af eksperimenter, atomkraft eller noget meget værre. Har måske ekstra lemmer, en glød eller pansret hud. Opfører sig uforudsigeligt og kan være næsten umulig at dræbe.";
  } else if (selectedValue === "kendis-zombie") {
    infoText = "En glamourøs zombie med rester af tidligere status. Stadig genkendelig og populær – og derfor endnu mere farlig i menneskemængder. Kan tiltrække fans, selv når den forsøger at spise dem.";
  } else {
    // Hide the div by removing the visible class
    zombieInfoDiv.classList.remove("visible");
  }

  // Update the content of the zombie-info div
  zombieInfoDiv.innerHTML = `<p><strong>${zombieTypeSelect.options[zombieTypeSelect.selectedIndex].text}</strong></p>
                             <p>${infoText}</p>`;

  // Show the div by adding the visible class
  zombieInfoDiv.classList.add("visible");
}
