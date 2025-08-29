// PART 1: Variables, Data Types, Conditionals
function greetUser() {
  let name = document.getElementById("nameInput").value;
  
  if (name.trim() === "") {
    document.getElementById("greetingText").textContent = "Please enter your name!";
  } else {
    document.getElementById("greetingText").textContent = `Hello, name! 👋`;
  

// PART 2: Functions
function calculateTotal(amount, taxRate) {
  let total = amount + (amount * taxRate);
  document.getElementById("totalResult").textContent = `Total amount is:${total.toFixed(2)}`;
}

// Another reusable function
function formatName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

// PART 3: Loops
function showFruits() {
  const fruits = ["Apple", "Banana", "Orange", "Mango"];
  const list = document.getElementById("fruitList");
  list.innerHTML = ""; // Clear list

  fruits.forEach(fruit => {
    const li = document.createElement("li");
    li.textContent = fruit;
    list.appendChild(li);
  });
}

function countdown() {
  let count = 5;
  const output = document.getElementById("countText");
  output.textContent = "";

  let interval = setInterval(() => {
    output.textContent = 'Countdown:{count}';
    count--;
    if (count < 0) {
      clearInterval(interval);
      output.textContent = "Time's up!";
    }
  }, 1000);
}

// PART 4: DOM Interactions
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
    }
