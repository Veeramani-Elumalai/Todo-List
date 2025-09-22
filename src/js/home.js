import { defaultTasks } from "./addTask";

const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", ()=> {
    console.log("Home Button Clicked!");
    
});

export {homeButton};