import { priorityButtonContainer } from "./priorityButtonDom";

const addTaskContainer = document.createElement("div");
addTaskContainer.id = "addTaskContainer";

const addTaskText = document.createElement("h2");

const addTaskForm = document.createElement("form");
addTaskForm.method = "get";

//Containers for input
const divTitle = document.createElement("div");
const divDueDate = document.createElement("div");
const divPriority = priorityButtonContainer;
const divDescription = document.createElement("div");

//Input Elements

//Input Task Name
const title = document.createElement("input");
title.type = "text";
title.id = "title";
const labelForTitle = document.createElement("label");
labelForTitle.htmlFor = "title";
labelForTitle.textContent = "Task Name:";

//Input Due Date
const dueDate = document.createElement("input");
title.type = "text";
title.id = "dueDate";
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

//Appending input elements into the container
divTitle.append(labelForTitle, title);
divDueDate.append(labelForDueDate, dueDate);
divDescription.append(labelForDescriptionTextArea, descriptionTextarea);

//Appending all divs to the form
addTaskForm.append(divTitle, divDueDate, divPriority, divDescription);
addTaskContainer.append(addTaskForm);

export {addTaskForm};