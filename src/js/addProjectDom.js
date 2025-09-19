import { priorityButtonContainer } from "./priorityButtonDom";

const addProjectContainer = document.createElement("div");
addProjectContainer.id = "addProjectContainer";

const addProjectText = document.createElement("h2");
addProjectText.textContent = "Add Project"

const addProjectForm = document.createElement("form");
addProjectForm.method = "get";

//Containers for input
const divTitle = document.createElement("div");
const divDueDate = document.createElement("div");   
const divDescription = document.createElement("div");

//Input Elements

//Input Task Name
const title = document.createElement("input");
title.type = "text";
title.id = "title";
const labelForTitle = document.createElement("label");
labelForTitle.htmlFor = "title";
labelForTitle.textContent = "Project Name:";

//Input Due Date
const dueDate = document.createElement("input");
dueDate.type = "date";
dueDate.id = "dueDate";
const labelForDueDate = document.createElement("label");
labelForDueDate.htmlFor = "dueDate";
labelForDueDate.textContent = "Due Date:";

//Description
const descriptionTextarea = document.createElement("textarea");
descriptionTextarea.id = "description";
descriptionTextarea.name = "description";
descriptionTextarea.rows = 5;
descriptionTextarea.cols = 40;
const labelForDescriptionTextArea = document.createElement("label");
labelForDescriptionTextArea.htmlFor = "description";
labelForDescriptionTextArea.textContent = "Description:";

//Submit button
const subimtButton = document.createElement("button");
subimtButton.type = "submit";
subimtButton.id = "submitButton";
subimtButton.textContent = "Submit";

//Appending input elements into the container
divTitle.append(labelForTitle, title);
divDueDate.append(labelForDueDate, dueDate);
divDescription.append(labelForDescriptionTextArea, descriptionTextarea);

//Appending all divs to the form
addProjectForm.append(addProjectText, divTitle, divDueDate, priorityButtonContainer, divDescription, subimtButton);
addProjectContainer.append(addProjectForm);

export {addProjectForm};