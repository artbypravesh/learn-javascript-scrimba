let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let passengerCount = 0;
let countSave;

// Increment passenger counter
function increment() {
  passengerCount++;
  countEl.textContent = passengerCount;
}

// Save count and display previous entries
function save() {
  countSave = passengerCount + " - ";
  saveEl.textContent += countSave;
  resetCount();
}
