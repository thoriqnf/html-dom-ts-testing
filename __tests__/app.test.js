"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@testing-library/jest-dom");
const jsdom_1 = require("jsdom");
const app_1 = require("../app");
describe("DOM Manipulation", () => {
    let dom;
    let container;
    let inputField;
    let displayText;
    let colorSelect;
    beforeEach(() => {
        dom = new jsdom_1.JSDOM(`
      <html>
        <body>
          <input type="text" id="inputField" placeholder="Type something...">
          <button id="displayButton">Display Input</button>
          <select id="colorSelect">
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
          <button id="resetButton">Reset</button>
          <p id="displayText"></p>
        </body>
      </html>
    `);
        container = dom.window.document.body;
        // Set up DOM elements
        inputField = container.querySelector("#inputField");
        displayText = container.querySelector("#displayText");
        colorSelect = container.querySelector("#colorSelect");
        // Define window for the global context
        global.window = dom.window;
    });
    test("displays input text in selected color", () => {
        // Simulate user input and color selection
        inputField.value = "Hello, World!";
        colorSelect.value = "red";
        // Call the function directly
        (0, app_1.displayInputValue)(inputField, displayText, colorSelect);
        // Assertions
        expect(displayText.textContent).toBe("You typed: Hello, World!");
        expect(displayText.style.color).toBe("red");
    });
    test("resets input and displayed text", () => {
        // Set initial values
        inputField.value = "Hello, World!";
        displayText.textContent = "You typed: Hello, World!";
        displayText.style.color = "red";
        // Call the reset function directly
        (0, app_1.resetInput)(inputField, displayText);
        // Assertions
        expect(inputField.value).toBe("");
        expect(displayText.textContent).toBe("");
        expect(displayText.style.color).toBe("black");
    });
});
