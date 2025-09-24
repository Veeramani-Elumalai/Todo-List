import { defaultTasksList } from "../constructors/addTask";

const defaultTaskContainer = document.createElement("div");
defaultTaskContainer.className = "defaultTaskContainer";

export function displayTasks(){
    defaultTaskContainer.innerHTML = "";

    defaultTasksList.forEach((task, index) =>{
        const tasks = document.createElement("div");
        tasks.className = "tasks"

        const name = document.createElement("h3");
        name.textContent = task.taskName;
        
        const dueDate = document.createElement("h4");
        dueDate.textContent = task.taskDueDate;

        const priority = document.createElement("p");
        priority.textContent = task.taskPriority;

        const description = document.createElement("p");
        description.textContent = task.taskDescription;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete"
        deleteBtn.addEventListener('click', () => {
            defaultTasksList.splice(index, 1);
            displayTasks();
        });

        tasks.append(name, dueDate, priority, description, deleteBtn);
        defaultTaskContainer.append(tasks);
    })
}


export { defaultTaskContainer }