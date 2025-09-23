import { addProjectForm } from "./addProjectDom";
import { projectTaskForm } from "./addTaskForProjectDom";

const projectList = [];
let activeProject = null;

class addProject {
    constructor(projectName, projectDueDate, projectPriority, projectDescription){
        this.projectName = projectName;
        this.projectDueDate = projectDueDate;
        this.projectPriority = projectPriority;
        this.projectDescription = projectDescription; 
        this.tasks = [];
    }   
}

class projectSubTask {
    constructor (taskName, taskDueDate, taskPriority, taskDescription){
        this.taskName = taskName;
        this.taskDueDate = taskDueDate;
        this.taskPriority = taskPriority;
        this.taskDescription = taskDescription;
    }
}

//Project
addProjectForm.addEventListener("submit", function(event){
    event.preventDefault();

    const projectName = addProjectForm.querySelector(".title").value;
    const projectDueDate = addProjectForm.querySelector(".dueDate").value;
    const projectPriority = addProjectForm.querySelector("input[name='priority']:checked").value;
    const projectDescription = addProjectForm.querySelector(".description").value;

    const newProject = new addProject(projectName, projectDueDate, projectPriority, projectDescription);

    projectList.push(newProject);
    activeProject = newProject;
    addProjectForm.style.display = 'none';
    addProjectForm.reset();   
});


//Project Tasks
projectTaskForm.addEventListener("click", function(event) {
    event.preventDefault();

    const taskName = document.querySelector(".title").value;
    const taskDueDate = document.querySelector(".dueDate").value;
    const taskPriority = document.querySelector("input[name='priority']:checked").value;
    const taskDescription = document.querySelector(".description").value;

    const newTaskProject = new projectSubTask(taskName, taskDueDate, taskPriority, taskDescription);
    
    activeProject.tasks.push(newTaskProject);
    projectTaskForm.style.display = 'none';
    projectTaskForm.reset();
})


export { projectList };