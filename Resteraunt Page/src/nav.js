//take ref

const nav = document.createElement("nav");
const home = document.createElement("button");
const menu = document.createElement("button");
const about = document.createElement("button");
const shop = document.createElement("button");

//add text
home.innerText = "Home";
home.classList = "active"
menu.innerText = "Menu";
menu.classList = ""
about.innerText = "About";
about.classList = ""
shop.innerText = "Shop";
shop.classList = ""

nav.appendChild(home);
nav.appendChild(menu);
nav.appendChild(about);
nav.appendChild(shop);

export default nav;
