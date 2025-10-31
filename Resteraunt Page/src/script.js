import "./style.css";
import nav from "./nav.js";

//ref
const header = document.querySelector("header");
const contentImages = document.querySelector("#homeContentImages")
const heroImage = document.querySelector("#heroImage")
const childContentImages = contentImages.childNodes;

childContentImages.forEach((image) => {
    image.addEventListener("click", () => {
        console.log(image.getAttribute("src"))
        const imageSrc = image.getAttribute("src");
        heroImage.src = imageSrc
    })
})

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
