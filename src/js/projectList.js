import { projectList } from "./addProject";
//import { projectTaskForm } from "./addTaskForProject";

const projectListContainer = document.createElement("div");
projectListContainer.className = "projectListContainer";

export function displayProjects(){
    projectListContainer.innerHTML = '';

    projectList.forEach((projectList, index) =>{
        const project = document.createElement("div");
        project.className = "project"

        const name = document.createElement("h3");
        name.textContent = projectList.projectName;
        
        const dueDate = document.createElement("h4");
        dueDate.textContent = projectList.projectDueDate;

        const priority = document.createElement("p");
        priority.textContent = projectList.projectPriority;

        const description = document.createElement("p");
        description.textContent = projectList.projectDescription;

        const addProjectBtn = document.createElement("button");
        addProjectBtn.textContent = "Add Tasks"
        addProjectBtn.addEventListener('click', () => {
            //document.body.append(projectTaskForm);

        })

        projectListContainer.append(name, dueDate, priority, description, addProjectBtn);
        projectListContainer.append(project);
    })
}


export { projectListContainer };