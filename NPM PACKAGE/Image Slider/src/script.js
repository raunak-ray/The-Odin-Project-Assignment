// main.js
import "./style.css";
import { imageUrls } from "./data.js";
import { createNavigationDots } from "./navigation.js";
import { Slider } from "./slider.js";

// DOM references
const smallContainer = document.querySelector("#smallContainer");
const forwardBtn = document.querySelector("#forward");
const backwardBtn = document.querySelector("#backward");
const navigationContainer = document.querySelector("#navigation");

// Create navigation dots
const navigationDots = createNavigationDots(navigationContainer, imageUrls.length);

// Initialize slider
new Slider({
  container: smallContainer,
  navigationDots,
  forwardBtn,
  backwardBtn,
});
