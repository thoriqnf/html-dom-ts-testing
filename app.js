"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetInput = exports.displayInputValue = void 0;
// Function to display the input value with the selected color
const displayInputValue = (inputField, displayText, colorSelect) => {
    const inputValue = inputField.value;
    const selectedColor = colorSelect.value;
    displayText.textContent = `You typed: ${inputValue}`;
    displayText.style.color = selectedColor;
};
exports.displayInputValue = displayInputValue;
// Function to reset the input and displayed text
const resetInput = (inputField, displayText) => {
    inputField.value = "";
    displayText.textContent = "";
    displayText.style.color = "black";
};
exports.resetInput = resetInput;
// Add event listeners in your application logic if necessary
const inputField = document.getElementById("inputField");
const displayButton = document.getElementById("displayButton");
const colorSelect = document.getElementById("colorSelect");
const resetButton = document.getElementById("resetButton");
const displayText = document.getElementById("displayText");
if (displayButton && resetButton && inputField && colorSelect && displayText) {
    displayButton.addEventListener("click", () => (0, exports.displayInputValue)(inputField, displayText, colorSelect));
    resetButton.addEventListener("click", () => (0, exports.resetInput)(inputField, displayText));
}
