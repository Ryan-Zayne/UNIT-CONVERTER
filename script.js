const inputEl = document.getElementById("input-el"),
  buttonEl = document.getElementById("convert-btn"),
  lengthCard = document.getElementsByClassName("result-holder")[0],
  volumeCard = document.getElementsByClassName("result-holder")[1],
  massCard = document.getElementsByClassName("result-holder")[2];

function conversion() {
  const meterConv = inputEl.value * 3.28,
    feetConv = inputEl.value / 3.28,
    literConv = inputEl.value * 0.264,
    gallonConv = inputEl.value / 0.264,
    kilogramConv = inputEl.value * 2.204,
    poundsConv = inputEl.value / 2.204;

  if (inputEl.value > 0) {
    lengthCard.textContent = `${inputEl.value} meters = ${meterConv.toFixed(3)} feet | ${inputEl.value} feet = ${feetConv.toFixed(3)} meters`;

    volumeCard.textContent = `${inputEl.value} liters = ${literConv.toFixed(3)} gallons | ${inputEl.value} gallons = ${gallonConv.toFixed(3)} liters`;

    massCard.textContent = `${inputEl.value} kilograms = ${kilogramConv.toFixed(3)} pounds | ${inputEl.value} pounds = ${poundsConv.toFixed(3)} kilograms`;
  } else {
    window.location.reload();
  }
}

buttonEl.addEventListener("click", conversion);
