import { projectList } from "./addProject";
import { projectTaskForm } from "./addTaskForProjectDom";
import { displayTasks } from "./defaultTask";

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


export { projectListContainer };