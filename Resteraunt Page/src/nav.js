//take ref

const nav = document.createElement("nav");
const home = document.createElement("button");
const menu = document.createElement("button");
const about = document.createElement("button");
const shop = document.createElement("button");

//add text
home.innerText = "Home";
home.classList = "active";
menu.innerText = "Menu";
menu.classList = "";
about.innerText = "About";
about.classList = "";
shop.innerText = "Shop";
shop.classList = "";

nav.append(home, menu, about, shop);

//event listener for nav
const childList = nav.childNodes;
childList.forEach((child) => {
  child.addEventListener("click", () => {
    const currentActive = document.querySelector(".active");
    currentActive ? currentActive.classList.remove("active") : null;
    child.classList = "active";
    console.log(child);
  });
});

export default nav;
