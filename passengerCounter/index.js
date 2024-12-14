let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let passengerCount = 0;

// Increment passenger counter
function increment() {
  passengerCount++;
  countEl.textContent = passengerCount;
}

// Decrement passenger counter
function decrement() {
  if (!(passengerCount <= 0)) {
    passengerCount--;
    countEl.textContent = passengerCount;
  }
}

// Resets passenger counter and count display
function resetCount() {
  passengerCount = 0;
  countEl.textContent = passengerCount;
}

// Save count and display previous entries
function save() {
  let countSave;

  countSave = passengerCount + " - ";
  saveEl.textContent += countSave;
  resetCount();
}
