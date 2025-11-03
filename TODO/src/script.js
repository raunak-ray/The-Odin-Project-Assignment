import "./style.css";
import TODO from "./todo.js";
import Project from "./project.js";

const project1 = new Project("demo");

const task1 = new TODO(
  "complete os",
  "complete os till ca4",
  "05/11/2025",
  "high"
);
const task2 = new TODO(
  "complete se",
  "complete se till ca4",
  "07/11/2025",
  "medium"
);

project1.addTodo(task1);
project1.addTodo(task2);
console.log(project1.getTodo());


for (const { title, description, dueDate, priority } of project1.getTodo()) {
    console.log(`${title} - ${priority} priority (Due: ${dueDate})`);
  }