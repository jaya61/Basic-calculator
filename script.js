const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
let input = "";

// Normal buttons
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("clear")) {
      input = "";
      display.value = "";
    }
     else if (btn.id === "equals") {
      calculate();
    } 
    else if (btn.id === "sqrt") {
      if (input === "") return;
      let value = parseFloat(input);
      if (value < 0) {
        display.value = "Error";
        input = "";
      } else {
        display.value = Math.sqrt(value);
        input = display.value;
      }
    } 
    else if (btn.id === "square") {
      if (input === "") return;
      let value = parseFloat(input);
      display.value = Math.pow(value, 2);
      input = display.value;
    } else {
      input += btn.textContent;
      display.value = input;
    }
  });
});

// Function for = button
function calculate() {
  try {
    if (input.includes("/0")) {
      display.value = "Error";
      input = "";
    } else {
      display.value = eval(input); // BODMAS
      input = display.value;
    }
  } catch {
    display.value = "Error";
    input = "";
  }
}

// Keyboard support
document.addEventListener("keydown", e => {
  if ("0123456789+-*/.".includes(e.key)) {
    input += e.key;
    display.value = input;
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    input = input.slice(0, -1);
    display.value = input;
  } else if (e.key === "Escape") {
    input = "";
    display.value = "";
  }
});
