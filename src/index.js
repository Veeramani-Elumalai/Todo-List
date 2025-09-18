import { addTaskForm } from "./js/addTaskDom";

const addTaskButton = document.querySelector("#addTask");
addTaskButton.addEventListener("click", ()=> {
    document.body.append(addTaskForm);
})