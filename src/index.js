import { addTaskForm } from "./js/addTaskDom";
import { addProjectForm } from "./js/addProjectDom";
//import { projectTaskForm } from "./js/addTaskForProject";
import { defaultTasks } from "./js/addTask";

//document.body.append(projectTaskForm);

document.body.append(addTaskForm);
document.body.append(addProjectForm);

addTaskForm.style.display = "none";
addProjectForm.style.display = "none";

const addTaskButton = document.querySelector("#addTask");
addTaskButton.addEventListener("click", ()=> {
    addTaskForm.style.display = "block";
    addProjectForm.style.display = "none";
});

const addProjectButton = document.querySelector("#addProject");
addProjectButton.addEventListener("click", ()=> {
    addTaskForm.style.display = "none";
    addProjectForm.style.display = "block";
});  

console.log(defaultTasks);