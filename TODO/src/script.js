import "./style.css";
import TODO from "./todo.js";
import Project from "./project.js";
import createTODO from "./createTODO.js";
import appendTODO from "./appendTODO.js";

const addTODO = document.querySelector("#addTODO");
const dialog = document.querySelector("dialog");
// const submit = document.querySelector("#submit");
const project = new Project("Demo");

addTODO.addEventListener("click", (event) => {
  dialog.showModal();
  const form = dialog.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const title = formData.get("title");
    const description = formData.get("description") || "No Description Given";
    const priority = formData.get("priority");
    const dueDate = formData.get("dueDate");
    const todo = createTODO(title, description, priority, dueDate);
    appendTODO(project, todo);
    console.log(project.getTodo());
    dialog.close();
  });
});

// submit.addEventListener("click", (event) => {
//   event.preventDefault()
//   const formData = new FormData(form)
//   console.log(formData);

//   dialog.close();
// })
// const project1 = new Project("demo");

// const todo1 = new TODO({
//   title: "Complete DSA",
//   dueDate: "2025/11/10",
//   priority: "high",
// });
// const todo2 = new TODO({
//   title: "Read OS chapter",
//   description: "Memory management",
//   priority: "medium",
// });

// project1.addTodo(todo1);
// project1.addTodo(todo2);
// console.log(project1.getTodo());

// for (const { title, description, dueDate, priority } of project1.getTodo()) {
//   console.log(`${title} - ${priority} priority (Due: ${dueDate})`);
// }
