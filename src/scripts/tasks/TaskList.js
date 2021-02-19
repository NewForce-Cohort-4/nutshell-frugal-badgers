import { getTask, useTask, moveNote } from './TaskDataProvider.js';
import { Task } from './Tasks.js';

const taskContainer = document.querySelector(".tasklistContainer");

const eventHub = document.querySelector(".tasklistContainer")

export const TaskList = () => { // in charge of getting the tasks and printing them
    getTask() //gets task lists from database
    .then(() => {
        let allTasks = useTask();
        let taskListHTMLString = "";
        
        //filter for completed tasks
        
            allTasks = allTasks.filter((currentTask) => {
                return !currentTask.completed 
            })

        for (let currentTaskInLoop of allTasks){
            taskListHTMLString += Task(currentTaskInLoop)
        };
        taskContainer.innerHTML = `<h2>Task List</h2>${taskListHTMLString}`
        
    }) 
}

eventHub.addEventListener("change", (eventObject)=> {
        console.log("you clicked me")
        console.log(eventObject.target.id)
    if (eventObject.target.id.startsWith("completeNote")){
    const idToMove = eventObject.target.id.split("--")[1]
    //Call the moveNote function and pass in the appropriate id
    // Then call TaskList to refresh the list of tasks 
    moveNote(idToMove)
    .then(TaskList) // then shows all left over tasks

}
})