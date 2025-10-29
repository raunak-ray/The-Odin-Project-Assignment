// DOM elements
const container = document.querySelector("#container");
const input = document.querySelector("#grid-size");
const button = document.querySelector("#generate");

// Default settings
const defaultValue = 4;
const hue = 0;
const saturation = 25;

// Generate new grid on button click
button.addEventListener('click', () => {
    const value = input.value;
    input.value = ""; 
    if (value > 0 && value <= 100) {
        container.innerHTML = ""; 
        createGrid(value);
    } else {
        alert("Please enter a value between 1 and 100.");
    }
});

// Create a single cell with hover darkening
function createSingleGrid(cellWidth, cellHeight) {
    const newDiv = document.createElement("div");
    newDiv.className = "grid";
    newDiv.style.width = `${cellWidth}px`;
    newDiv.style.height = `${cellHeight}px`;
    newDiv.style.boxSizing = "border-box";

    let brightness = 70;
    newDiv.addEventListener("mouseover", () => {
        brightness = Math.max(0, brightness - 2);
        newDiv.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${brightness}%)`;
    });

    container.append(newDiv);
}

// Create the full grid
function createGrid(gridSize) {
    const width = Math.floor(container.offsetWidth / gridSize);
    const height = Math.floor(container.offsetHeight / gridSize);

    for (let i = 0; i < gridSize * gridSize; i++) {
        createSingleGrid(width, height);
    }
}

// Initialize default grid
createGrid(defaultValue);
