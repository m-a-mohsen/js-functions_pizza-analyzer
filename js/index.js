// console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

// it worked only with global variables declaration 
let pizzaSize1= Number(pizzaInput1.value)
let pizzaSize2 = Number(pizzaInput2.value)

pizzaInput1.addEventListener("input", () => {
  // write your code here
  // variables update and re-run calculation with each input change
  pizzaSize1= Number(pizzaInput1.value);
  calculatePizzaGain(pizzaSize1,pizzaSize2);
  updatePizzaDisplay(pizza1,pizzaSize1);
  updateOutputColor(pizzaSize1, pizzaSize2)
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
  pizzaSize2= Number(pizzaInput2.value);
  calculatePizzaGain(pizzaSize1,pizzaSize2)
  updatePizzaDisplay(pizza2,pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2)
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  let area1 = diameter1 * Math.PI;
  let area2 = diameter2 * Math.PI;
  let pizzaGain = (area2 - area1) / area1 * 100;
  output.innerHTML = Math.round(pizzaGain)
  }


// Task 2
// define the function updatePizzaDisplay here
function updatePizzaDisplay(pizzaElement, newSize) {
  let newDisplaySize = newSize / 24 * 100;
  pizzaElement.style.width = `${newDisplaySize}px`
}

// Task 3
// define the function updateOutputColor here
function updateOutputColor(size1, size2) {
  console.log(outputSection.style)
  console.log({size1},{size2})
  if (size2 < size1) {
    outputSection.style.backgroundColor ="var(--red)"
  }}
