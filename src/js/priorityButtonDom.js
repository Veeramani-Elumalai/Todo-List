const priorityButtonContainer = document.createElement("div");
priorityButtonContainer.className = "priorityButtonContainer";

const priorityText = document.createElement("p");
priorityText.textContent = "Priority:"

const priorityName = "priority";

//Priority1
const priorityOne = document.createElement("input");
priorityOne.type = "radio";
priorityOne.id = "priorityOne"; 
priorityOne.name = priorityName;
priorityOne.value = "1";
priorityOne.checked = true;
const labelPriorityOne = document.createElement("label");
labelPriorityOne.htmlFor = "priorityOne";
labelPriorityOne.textContent = "#1";

//Priority2
const priorityTwo = document.createElement("input");
priorityTwo.type = "radio";
priorityTwo.id = "priorityTwo";
priorityTwo.name = priorityName;
priorityTwo.value = "2";
const labelPriorityTwo = document.createElement("label");
labelPriorityTwo.htmlFor = "priorityTwo";
labelPriorityTwo.textContent = "#2";

//Priority3
const priorityThree = document.createElement("input");
priorityThree.type = "radio";
priorityThree.id = "priorityThree";
priorityThree.name = priorityName;
priorityThree.value = "3";
const labelPriorityThree = document.createElement("label");
labelPriorityThree.htmlFor = "priorityThree";
labelPriorityThree.textContent = "#3";

priorityButtonContainer.append(priorityText, priorityOne, labelPriorityOne, priorityTwo, labelPriorityTwo, priorityThree, labelPriorityThree);

export {priorityButtonContainer};