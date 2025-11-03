import "./style.css";
import TODO from "./todo.js";
import Project from "./project.js";
import createTODO from "./createTODO.js";
import appendTODO from "./appendTODO.js";
import "./dom.js"

const addTODO = document.querySelector("#addTODO");
const dialog = document.querySelector("dialog");
const demoProject = new Project("Demo");
const form = dialog.querySelector("form");

addTODO.addEventListener("click", (event) => {
  dialog.showModal();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const title = formData.get("title");
  const description = formData.get("description") || "No Description Given";
  const priority = formData.get("priority");
  const dueDate = formData.get("dueDate");
  const todo = createTODO(title, description, priority, dueDate);
  appendTODO(demoProject, todo);
  dialog.close();
});

