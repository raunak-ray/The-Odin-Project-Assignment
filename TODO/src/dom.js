import Project from "./project.js";
const content = document.querySelector("#content");
const projectContainer = document.querySelectorAll(".projectName");

let activeProject = "";

projectContainer.forEach((child) => {
  child.addEventListener("click", (event) => {
    for (const ch of projectContainer) {
      ch.classList.remove("active")
    }
    child.classList.add("active");
    activeProject = checkActive();
    console.log(activeProject.getTodo());
  });
});

function checkActive() {
  for (const child of projectContainer) {
    if (child.classList.contains("active")) {
      return child.innerHTML;
    }
  }
  return null;
}
