import { addProjectForm } from "./addProjectDom";

const projectList = [];

class addProject {
    constructor(projectName, projectDueDate, projectPriority, projectDescription){
        this.projectName = projectName;
        this.projectDueDate = projectDueDate;
        this.projectPriority = projectPriority;
        this.projectDescription = projectDescription; 
    }   
}

addProjectForm.addEventListener("submit", function(event){
    event.preventDefault();

    const projectName = addProjectForm.querySelector(".title").value;
    const projectDueDate = addProjectForm.querySelector(".dueDate").value;
    const projectPriority = addProjectForm.querySelector("input[name='priority']:checked").value;
    const projectDescription = addProjectForm.querySelector(".description").value;

    const newProject = new addProject(projectName, projectDueDate, projectPriority, projectDescription);

    projectList.push(newProject);
    addProjectForm.style.display = 'none';
    addProjectForm.reset();   
});

export { projectList };