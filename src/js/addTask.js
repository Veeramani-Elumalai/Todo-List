import { addTaskForm } from "./addTaskDom";

const defaultTasks = [];

class addTask{
    constructor(taskName, taskDueDate, taskPriority, taskDescription){
        this.taskName = taskName;
        this.taskDueDate = taskDueDate;
        this.taskPriority = taskPriority;
        this.taskDescription = taskDescription;
    }
}

addTaskForm.addEventListener("submit", function(event){
    event.preventDefault();

    const taskName = document.querySelector(".title").value;
    const taskDueDate = document.querySelector(".dueDate").value;
    const taskPriority = document.querySelector("input[name='priority']:checked").value;
    const taskDescription = document.querySelector(".description").value;

    const newTask = new addTask(taskName, taskDueDate, taskPriority, taskDescription);

    defaultTasks.push(newTask);
    addTaskForm.style.display = 'none';
    addTaskForm.reset();
})

export { defaultTasks };