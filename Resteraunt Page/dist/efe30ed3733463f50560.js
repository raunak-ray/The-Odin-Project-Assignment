// ---------------- MAIN ENTRY SCRIPT ----------------

// Import styles and modules
import "./style.css";
import nav from "./nav.js";
import { homeContent, heroImageContainer } from "./home.js";

// Get references to DOM elements
const header = document.querySelector("header");
const content = document.querySelector("#content");

// Append navigation to header
header.appendChild(nav);

// Append homepage content and hero section
content.append(homeContent, heroImageContainer);
