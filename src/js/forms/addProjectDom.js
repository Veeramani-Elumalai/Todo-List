import { priorityButtonContainer } from "./priorityButtonDom";

const addProjectContainer = document.createElement("div");
addProjectContainer.id = "addProjectContainer";

const addProjectText = document.createElement("h2");
addProjectText.textContent = "Add Project"

const addProjectForm = document.createElement("form");
addProjectForm.method = "get";
addProjectForm.id = "addProjectFormData";

//Containers for input
const divTitle = document.createElement("div");
const divDueDate = document.createElement("div");   
const divDescription = document.createElement("div");

//Input Elements

//Input Task Name
const title = document.createElement("input");
title.type = "text";
title.className = "title";
title.name = "projectName"
const labelForTitle = document.createElement("label");
labelForTitle.htmlFor = "title";
labelForTitle.textContent = "Project Name:";

//Input Due Date
const dueDate = document.createElement("input");
dueDate.type = "date";
dueDate.className = "dueDate";
dueDate.name = "projectDueDate"
const labelForDueDate = document.createElement("label");
labelForDueDate.htmlFor = "dueDate";
labelForDueDate.textContent = "Due Date:";

//Description
const descriptionTextarea = document.createElement("textarea");
descriptionTextarea.className = "description";
descriptionTextarea.name = "projectDescription";
descriptionTextarea.rows = 5;
descriptionTextarea.cols = 40;
const labelForDescriptionTextArea = document.createElement("label");
labelForDescriptionTextArea.htmlFor = "description";
labelForDescriptionTextArea.textContent = "Description:";

//Submit button
const subimtButton = document.createElement("button");
subimtButton.type = "submit";
subimtButton.id = "submitProjectAdding";
subimtButton.textContent = "Submit";

//Appending input elements into the container
divTitle.append(labelForTitle, title);
divDueDate.append(labelForDueDate, dueDate);
divDescription.append(labelForDescriptionTextArea, descriptionTextarea);

const clonedPriorityButtons = priorityButtonContainer.cloneNode(true);

//Appending all divs to the form
addProjectForm.append(addProjectText, divTitle, divDueDate, clonedPriorityButtons, divDescription, subimtButton);
addProjectContainer.appendChild(addProjectForm);

export {addProjectForm};