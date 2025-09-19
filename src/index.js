import { addTaskForm } from "./js/addTaskDom";
import { addProjectForm } from "./js/addProjectDom";

const addTaskButton = document.querySelector("#addTask");
addTaskButton.addEventListener("click", ()=> {
    document.body.append(addTaskForm);
    addProjectForm.remove();
})

const addProjectButton = document.querySelector("#addProject");
addProjectButton.addEventListener("click", ()=> {
    addTaskForm.remove();
    document.body.append(addProjectForm);
})  