import { projectList, activeProject } from "../constructors/addProject";
import { projectTaskForm } from "../forms/addTaskForProjectDom";

//Projects
const projectListContainer = document.createElement("div");
projectListContainer.className = "projectListContainer";

export function displayProjects(){
    projectListContainer.innerHTML = '';

    projectList.forEach((projects, index) =>{
        const project = document.createElement("div");
        project.className = "project"

        const name = document.createElement("h3");
        name.textContent = projects.projectName;
        
        const dueDate = document.createElement("h4");
        dueDate.textContent = projects.projectDueDate;

        const priority = document.createElement("p");
        priority.textContent = projects.projectPriority;

        const description = document.createElement("p");
        description.textContent = projects.projectDescription;

        const addProjectBtn = document.createElement("button");
        addProjectBtn.textContent = "Add Tasks"
        addProjectBtn.addEventListener('click', () => {
            //activeProject = projectItem;
            projectTaskForm.style.display = "block";
        })
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete"
        deleteBtn.addEventListener('click', () => {
            projectList.splice(index, 1);
            displayProjects();
            console.log("del btn clicked");
            
        });

        projectListContainer.append(name, dueDate, priority, description, addProjectBtn, deleteBtn);
        projectListContainer.append(project);
    })
}

//Project Tasks
const projectTasksHome = document.createElement("div");
projectTasksHome.className = "projectTaskHome";

export function displayProjectTasks(){
    projectTasksHome.innerHTML = '';

    if (!activeProject || !activeProject.projectTaskArray) {
        console.error("No active project or tasks to display.");
        return;
    }


    activeProject.projectTaskArray.forEach((tasks, index) =>{
        const task = document.createElement("div");
        task.className = "tasks";

        const name = document.createElement("h3");
        name.textContent = tasks.taskName;    

        const dueDate = document.createElement("h4");
        dueDate.textContent = tasks.taskDueDate;

        const priority = document.createElement("p");
        priority.textContent = tasks.taskPriority;

        const description = document.createElement("p");
        description.textContent = tasks.taskDescription;

        const deleteTaskBtn = document.createElement("button");
        deleteTaskBtn.textContent = "Delete Task";
        deleteTaskBtn.addEventListener("click", ()=> {
           activeProject.projectTaskArray.splice(index, 1);
           displayProjectTasks();
        });

        task.append(name, dueDate, priority, description, deleteTaskBtn);
        projectTasksHome.append(task);
    });

}

export { projectListContainer };   
export { projectTasksHome }; 