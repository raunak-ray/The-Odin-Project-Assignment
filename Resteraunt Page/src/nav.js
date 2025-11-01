// ---------------- CREATE NAVIGATION BAR ----------------

// Create nav container and buttons
const nav = document.createElement("nav");
const home = document.createElement("button");
const menu = document.createElement("button");
const about = document.createElement("button");
const shop = document.createElement("button");

// Add text to buttons
home.innerText = "Home";
menu.innerText = "Menu";
about.innerText = "About";
shop.innerText = "Shop";

// Set default active page
home.classList = "active";

// Add all buttons to the nav element
nav.append(home, menu, about, shop);

// ---------------- EVENT LISTENERS ----------------

// Toggle 'active' class on nav button click
nav.childNodes.forEach((child) => {
  child.addEventListener("click", () => {
    // Remove current active class (if any)
    const currentActive = document.querySelector(".active");
    if (currentActive) currentActive.classList.remove("active");

    // Set clicked button as active
    child.classList = "active";

    // Debugging log
    console.log(`${child.innerText} clicked`);
  });
});

// Export navigation element for use in main script
export default nav;
