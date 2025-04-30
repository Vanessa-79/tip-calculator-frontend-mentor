// Get references to HTML elements using their IDs and classes
// input fields for bill amount and number of people, tip buttons, custom tip input, and result display elements
const billInput = document.getElementById("bill"); 
const peopleInput = document.getElementById("people"); 
const tipButtons = document.querySelectorAll(".tip-btn"); 
const customTipInput = document.querySelector(".custom-tip"); 
const tipAmountElement = document.getElementById("tip-amount"); 
const totalPerPersonElement = document.getElementById("total-per-person"); // Element to display total per person

// Button to reset the calculator
const resetButton = document.querySelector(".reset-btn"); 

// Variables to store the current state of the calculator
let bill = 0; 
let tipPercentage = 0; 
let numberOfPeople = 0; 

// Function to calculate and display the tip and total amount per person
function calculateTip() {
  // Only calculate if all required values are provided and greater than 0
  if (bill > 0 && tipPercentage > 0 && numberOfPeople > 0) {
    // Calculate tip amount per person
    const tipAmount = (bill * (tipPercentage / 100)) / numberOfPeople;

    // Calculate total amount per person
    const totalPerPerson = bill / numberOfPeople + tipAmount;

    // Update the display with calculated values, formatted to 2 decimal places
    tipAmountElement.textContent = `$${tipAmount.toFixed(2)}`;
    totalPerPersonElement.textContent = `$${totalPerPerson.toFixed(2)}`;

    // Enable the reset button since we have valid calculations
    resetButton.disabled = false;
  }
}

// Function to reset all inputs and calculations to their initial state
function reset() {
  // Reset all state variables
  bill = 0;
  tipPercentage = 0;
  numberOfPeople = 0;

  // Clear all input fields
  billInput.value = "";
  peopleInput.value = "";
  customTipInput.value = "";

  // Remove active state from all tip buttons
  tipButtons.forEach((btn) => btn.classList.remove("active"));

  // Reset displayed amounts to zero
  tipAmountElement.textContent = "$0.00";
  totalPerPersonElement.textContent = "$0.00";

  // Disable reset button
  resetButton.disabled = true;
}



// Listen for changes in bill input
billInput.addEventListener("input", (e) => {
  // Convert input to number, use 0 if invalid
  bill = parseFloat(e.target.value) || 0;
  calculateTip(); // Recalculate whenever bill changes
});

// Listen for changes in number of people input
peopleInput.addEventListener("input", (e) => {
  numberOfPeople = parseInt(e.target.value) || 0; 
  calculateTip(); // Recalculate whenever number of people changes
});

// Listen for clicks on tip percentage buttons
tipButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active state from all buttons
    tipButtons.forEach((b) => b.classList.remove("active"));
    // Add active state to clicked button
    btn.classList.add("active");
    // Clear custom tip input
    customTipInput.value = "";
    // Get tip percentage from button text (remove % symbol)
    tipPercentage = parseFloat(btn.textContent);
    calculateTip();
  });
});

// Listen for changes in custom tip input
customTipInput.addEventListener("input", (e) => {
  // Remove active state from pre-set tip buttons
  tipButtons.forEach((btn) => btn.classList.remove("active"));
  // Update tip percentage with custom value
  tipPercentage = parseFloat(e.target.value) || 0;
  calculateTip(); 
});

// Listen for reset button clicks
resetButton.addEventListener("click", reset);

// Initialize the calculator in reset state
reset();
