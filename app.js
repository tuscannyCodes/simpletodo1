//VARIABLES

const inputBox = document.getElementById("mainInput");
const makeToDoButton = document.getElementById("makeToDoButton");
const clearToDoButton = document.getElementById("clearToDoButton");
let todoUl = document.getElementById("todoList");

//FUNCTIONS

const inputboxHandler = () => {
  let toDo = inputBox.value;
  let newTodo = document.createElement("li");
  newTodo.textContent = toDo;
  todoUl.appendChild(newTodo);

  inputBox.value = "";
  console.log(todoUl);
};

const clearList = () => {
  while (todoUl.hasChildNodes()) {
    todoUl.removeChild(todoUl.firstChild);
  }
};

//LISTENERS
makeToDoButton.addEventListener("click", inputboxHandler);
clearToDoButton.addEventListener("click", clearList);
