import { getTask, useTask, moveNote, uncheckTask } from './TaskDataProvider.js';
import { Task, CheckedTask } from './Tasks.js';
import { newTaskButton, CompletedTaskForm } from './TaskForm.js'

const taskContainer = document.querySelector(".tasklistContainer");

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

// Event listener to track when tasks are marked completed
//taskContainer.addEventListener("change", (eventObject)=> {
//    console.log("You checked a task")
//    console.log(eventObject.target.id)
//    if (eventObject.target.id.startsWith("completeNote")){
//        const idToMove = eventObject.target.id.split("--")[1]
//        // Call the moveNote function and pass in the appropriate id
//        // Then call TaskList to refresh the list of tasks 
//        moveNote(idToMove)
//        .then(TaskList) // then shows all left over tasks
//        .then(newTaskButton) // then reset the new task button to be clear
//    }
//})

// Added by Vincent OLeary - functionality for showing completed tasks
export const CompletedTaskList = () => { // in charge of getting the tasks and printing them
    getTask() //gets task lists from database
    .then(() => {
        let allTasks = useTask();
        let taskListHTMLString = "";
        
        // Filter for only completed tasks
        
        allTasks = allTasks.filter((currentTask) => {
            return currentTask.completed 
        })

        for (let currentTaskInLoop of allTasks){
            taskListHTMLString += CheckedTask(currentTaskInLoop)
        };
        taskContainer.innerHTML = `<h2>Completed Task List</h2>${taskListHTMLString}`
        CompletedTaskForm()
        
    }) 
}

// Run a function on click to see if checkbox is checked or empty
taskContainer.addEventListener("change", (eventObject)=> {
    // Show the end state of the checkbox, True = was checked by user, False = was unchecked
    console.log(eventObject.target.checked)
    // If the checkbox was checked complete by user, update the database and reload list of ToDos, otherwise do reverse
    if (eventObject.target.checked === true) {
        const idToMove = eventObject.target.id.split("--")[1]
        // Call the moveNote function and pass in the appropriate id
        // Then call TaskList to refresh the list of tasks 
        moveNote(idToMove)
        .then(TaskList) // then shows all left over tasks
        .then(newTaskButton) // then reset the new task button to be clear
    } else if (eventObject.target.checked === false) {
        const idToMove = eventObject.target.id.split("--")[1]
        // Call the moveNote function and pass in the appropriate id
        // Then call TaskList to refresh the list of tasks 
        uncheckTask(idToMove)
        .then(CompletedTaskList) // then shows updated list of completed tasks
        .then(newTaskButton) // then reset the new task button to be clear
    }
})