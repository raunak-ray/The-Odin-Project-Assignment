import TODO from "./todo.js";

function createTODO(title, description, priority, dueDate) {
  const todo = new TODO({
    title,
    description,
    priority,
    dueDate,
  });
  return todo;
}

export default createTODO;