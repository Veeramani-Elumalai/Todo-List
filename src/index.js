import { addTaskForm } from "./js/addTaskDom";
import { addProjectForm } from "./js/addProjectDom";
import { projectTaskForm } from "./js/addTaskForProjectDom";
import { defaultTasksList } from "./js/addTask";
import { projectList } from "./js/addProject";
import { defaultTaskContainer } from "./js/defaultTask";
import { displayTasks } from "./js/defaultTask";
import { projectListContainer } from "./js/projectList";
import { displayProjects } from "./js/projectList";
import { projectTasksHome } from "./js/projectList";
import { displayProjectTasks } from "./js/projectList";

document.body.append(addTaskForm);
document.body.append(addProjectForm);
document.body.append(defaultTaskContainer);
document.body.append(projectListContainer);
document.body.append(projectTaskForm);
document.body.append(projectTasksHome);


addTaskForm.style.display = "none";
addProjectForm.style.display = "none";
defaultTaskContainer.style.display = "none";
projectListContainer.style.display = "none";
projectTaskForm.style.display = "none";
projectTasksHome.style.display = "none";

const addTaskButton = document.querySelector("#addTask");
addTaskButton.addEventListener("click", ()=> {
    addTaskForm.style.display = "block";
    addProjectForm.style.display = "none";
    projectTaskForm.style.display = "none";
    projectListContainer.style.display = "none";
    defaultTaskContainer.style.display = "none";
    projectTasksHome.style.display = "none";
    console.log(defaultTasksList);
});

const addProjectButton = document.querySelector("#addProject");
addProjectButton.addEventListener("click", ()=> {
    addTaskForm.style.display = "none";
    defaultTaskContainer.style.display = "none";
    projectListContainer.style.display = "none";
    projectTaskForm.style.display = "none";
    projectTasksHome.style.display = "none";
    addProjectForm.style.display = "block";
    console.log(projectList);
});  

const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", ()=> {
    addProjectForm.style.display = "none";
    addTaskForm.style.display = "none";
    projectListContainer.style.display = "none";
    projectTaskForm.style.display = "none";
    projectTasksHome.style.display = "block";
    defaultTaskContainer.style.display = "block";
    displayTasks();
    displayProjectTasks();
});

const projectsButton = document.querySelector("#projects");
projectsButton.addEventListener("click", ()=> {
    addProjectForm.style.display = "none";
    addTaskForm.style.display = "none";
    defaultTaskContainer.style.display = "none"; 
    projectListContainer.style.display = "block";
    projectTasksHome.style.display = "none";
    displayProjects();
})

