let countEl = document.getElementById("count-el");
let passengerCount = 0;

function increment() {
  passengerCount++;
  countEl.innerText = passengerCount;
}

function save() {
console.log(passengerCount);
}