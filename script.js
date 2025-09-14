// ====================
// Part 1: Basics
// ====================

// Ask user for their age (input will be a string, so convert to number)
let userAge = parseInt(prompt("Please enter your age:"));
let message = "";

if (userAge >= 18) {
  message = "You are an adult!";
} else {
  message = "You are a minor!";
}

// Output result
document.getElementById("part1-result").textContent = "Age check: " + message;

// ====================
// Part 2: Functions
// ====================

// Function 1: Greeting
function showGreeting() {
  document.getElementById("function-result").textContent = "Hello! Welcome to JavaScript!";
}

// Function 2: Calculate total price
function calculateTotal(price, quantity) {
  let total = price * quantity;
  document.getElementById("function-result").textContent = `Total cost = ksh{total}`;
}


// ====================
// Part 3: Loops
// ====================

// Example 1: For loop
let fruits = ["Apple", "Banana", "Cherry", "Date"];
let list = document.getElementById("loop-list");

for (let i = 0; i < fruits.length; i++) {
  let li = document.createElement("li");
  li.textContent = fruits[i];
  list.appendChild(li);
}

// Example 2: While loop (countdown)
let countdown = 5;
console.log("Countdown:");
while (countdown > 0) {
  console.log(countdown);
  countdown--;
}


// ====================
// Part 4: DOM Manipulation
// ====================

// 1. Change text on button click
document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.getElementById("dom-text").textContent = "🎉 The text has changed!";
});

// 2. Toggle class on element
document.getElementById("toggleBtn").addEventListener("click", function() {
  document.getElementById("toggle-target").classList.toggle("highlight");
});

// 3. Create a new list item dynamically
document.getElementById("createElementBtn").addEventListener("click", function() {
  let li = document.createElement("li");
  li.textContent = "New dynamically added item";
  document.getElementById("dynamic-list").appendChild(li);
});

