import { priorityButtonContainer } from "./priorityButtonDom";

const projectTaskContainer = document.createElement("div");
projectTaskContainer.id = "projectTaskContainer";

const projectTaskText = document.createElement("h2");
projectTaskText.textContent = "Project Task";

const projectTaskForm = document.createElement("form");
projectTaskForm.method = "get";

//Containers for input
const divTitle = document.createElement("div");
const divDueDate = document.createElement("div");
const divDescription = document.createElement("div");

//Input Task Name
const title = document.createElement("input");
title.type = "text";
title.className = "title";
const labelForTitle = document.createElement("label");
labelForTitle.htmlFor = "title";
labelForTitle.textContent = "Task Name:";

//Input Due Date
const dueDate = document.createElement("input");
dueDate.type = "date";
dueDate.className = "dueDate";
const labelForDueDate = document.createElement("label");
labelForDueDate.htmlFor = "dueDate";
labelForDueDate.textContent = "Due Date:";

//Description
const descriptionTextarea = document.createElement("textarea");
descriptionTextarea.className = "description";
descriptionTextarea.name = "description";
descriptionTextarea.rows = 5;
descriptionTextarea.cols = 40;
const labelForDescriptionTextArea = document.createElement("label");
labelForDescriptionTextArea.htmlFor = "description";
labelForDescriptionTextArea.textContent = "Description:";

//Submit button
const subimtButton = document.createElement("button");
subimtButton.textContent = "submit";
subimtButton.type = "submit";
subimtButton.id = "submitTaskInProject";
//Appending input elements into the container
divTitle.append(labelForTitle, title);
divDueDate.append(labelForDueDate, dueDate);
divDescription.append(labelForDescriptionTextArea, descriptionTextarea);

const clonedPriorityButtons = priorityButtonContainer.cloneNode(true);

//Appending all divs to the form
projectTaskForm.append(projectTaskText, divTitle, divDueDate, clonedPriorityButtons , divDescription, subimtButton);
projectTaskContainer.append(projectTaskForm);

export {projectTaskForm};