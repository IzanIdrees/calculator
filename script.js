const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let resetDisplay = false;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (button.classList.contains("number") || button.classList.contains("operator")) {
      if (resetDisplay) {
        currentInput = "";
        resetDisplay = false;
      }
      currentInput += value;
      display.textContent = currentInput;
    } 
    else if (button.classList.contains("clear")) {
      currentInput = "";
      display.textContent = "0";
    } 
    else if (button.classList.contains("equal")) {
      try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
      } catch {
        display.textContent = "Error";
        currentInput = "";
      }
      resetDisplay = true;
    }
  });
});