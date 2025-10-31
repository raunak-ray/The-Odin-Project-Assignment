import "./style.css";
import nav from "./nav.js";

//ref
const header = document.querySelector("header");

header.appendChild(nav);

//event listener for nav
const childList = nav.childNodes;
childList.forEach((child) => {
  child.addEventListener("click", () => {
    const currentActive = document.querySelector(".active")
    currentActive ? currentActive.classList.remove("active") : null
    child.classList = "active";
    console.log(child);
  });
});
