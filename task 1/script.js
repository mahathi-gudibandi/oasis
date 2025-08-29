let display = document.getElementById("display");

// Append values to display
function append(value) {
  display.value += value;
}

// Clear display
function clearDisplay() {
  display.value = "";
}

// Delete last character
function deleteChar() {
  display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}
