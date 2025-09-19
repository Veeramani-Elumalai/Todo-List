import { priorityButtonContainer } from "./priorityButtonDom";

const addTaskContainer = document.createElement("div");
addTaskContainer.id = "addTaskContainer";

const addTaskText = document.createElement("h2");
addTaskText.textContent = "Add Task";

const addTaskForm = document.createElement("form");
addTaskForm.method = "get";

//Containers for input
const divTitle = document.createElement("div");
const divDueDate = document.createElement("div");
const divDescription = document.createElement("div");

//Input Task Name
const title = document.createElement("input");
title.type = "text";
title.id = "title";
const labelForTitle = document.createElement("label");
labelForTitle.htmlFor = "title";
labelForTitle.textContent = "Task Name:";

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

const clonedPriorityButtons = priorityButtonContainer.cloneNode(true);

//Appending all divs to the form
addTaskForm.append(addTaskText, divTitle, divDueDate, clonedPriorityButtons , divDescription, subimtButton);
addTaskContainer.append(addTaskForm);

export {addTaskForm};