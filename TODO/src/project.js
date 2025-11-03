class Project {
  constructor(name) {
    this.name = name;
    this.todo = [];
  }
  addTodo(todo) {
    this.todo.push(todo);
  }
  getTodo() {
    return this.todo;
    // return true;
  }
}

export default Project;
