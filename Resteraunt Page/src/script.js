import "./style.css";
import nav from "./nav.js";
import { homeContent, heroImageContainer } from "./home.js";

//ref
const header = document.querySelector("header");
const content = document.querySelector("#content");

//append
header.appendChild(nav);
content.append(homeContent, heroImageContainer);
