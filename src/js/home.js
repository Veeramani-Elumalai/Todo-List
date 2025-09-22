import { defaultTaskContainer } from "./defaultTask";
import { displayTasks } from "./defaultTask";

const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", ()=> {
    console.log("Home Button Clicked!");
    document.body.append(defaultTaskContainer);
    defaultTaskContainer.style.display = "block";
    displayTasks();
    
});

export {homeButton};