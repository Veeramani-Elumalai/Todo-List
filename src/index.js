import { addTaskForm } from "./js/addTaskDom";
import { addProjectForm } from "./js/addProjectDom";
//import { projectTaskForm } from "./js/addTaskForProject";
import { defaultTasksList } from "./js/addTask";
import { projectList } from "./js/addProject";
import { defaultTaskContainer } from "./js/defaultTask";
import { displayTasks } from "./js/defaultTask";

//document.body.append(projectTaskForm);

document.body.append(addTaskForm);
document.body.append(addProjectForm);
document.body.append(defaultTaskContainer);

addTaskForm.style.display = "none";
addProjectForm.style.display = "none";
defaultTaskContainer.style.display = "none";

const addTaskButton = document.querySelector("#addTask");
addTaskButton.addEventListener("click", ()=> {
    addTaskForm.style.display = "block";
    addProjectForm.style.display = "none";
    defaultTaskContainer.style.display = "none";
    console.log(defaultTasksList);
});

const addProjectButton = document.querySelector("#addProject");
addProjectButton.addEventListener("click", ()=> {
    addTaskForm.style.display = "none";
    defaultTaskContainer.style.display = "none";
    addProjectForm.style.display = "block";
    console.log(projectList);
});  

const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", ()=> {
    addProjectForm.style.display = "none";
    addTaskForm.style.display = "none";
    defaultTaskContainer.style.display = "block";
    displayTasks();
    
});

