/* The tasklist.js is used for printing the tasks to the DOM. The eventListener is in charge of removing the task once it's marked complete.
Author: Sophia Spaulding*/

import { getTask, useTask, moveNote } from './TaskDataProvider.js';
import { Task } from './Tasks.js';

const taskContainer = document.querySelector(".tasklistContainer");
const titleTarget = document.querySelector(".task_header")
const eventHub = document.querySelector(".tasklistContainer")

export const TaskList = () => { // in charge of getting the tasks and printing them
    titleTarget.innerHTML = `<h2>Task List</h2>`
    getTask() //gets task lists from database
    .then(() => {
    const allTasksList = useTask();
        
    // Loop over each task and save only the tasks linked to the userId when logged in
        //filter for completed tasks
            let allTasks = allTasksList.filter(currentTask => {
                // Save the current user's ID
                const userID = sessionStorage.getItem('activeUser')

                // Add task to array only if it matches the current user's ID
                if (currentTask.userID === userID ) {
                   // console.log("it worked")
                    return currentTask.userID 
                }
            })

        //filter for completed tasks
        allTasks = allTasks.filter((currentTask) => {
            return !currentTask.completed
        })

        taskContainer.innerHTML = allTasks.map(currentTask => {
            return Task(currentTask)
        }).join("")
        
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