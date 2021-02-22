import { saveTask } from './TaskDataProvider.js';
import { TaskList, CompletedTaskList } from './TaskList.js';

const contentTarget = document.querySelector(".taskFormContainer")

const render = () => {
    contentTarget.innerHTML = `
    <div class = "newTask">
    <button id="newTaskButton">Enter a New Task</button>
    <button id="showDoneTask">Show Completed Tasks</button>
    </div>`
}

export const newTaskButton = () => {
    render()

}

document.querySelector("body").addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "newTaskButton") {
        TaskForm()
    }
})

// the following builds the form - needs an input or property of the note
export const TaskForm = () => {
    contentTarget.innerHTML = `
    <fieldset>
    <input type="date" id = "date"></input>
    <input type="text" placeholder="Enter task here" id="task"> </input>
    <button id="saveTask">Save Task</button>
    </fieldset>
    `
}

//all of the following is for when the save button is clicked
contentTarget.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "saveTask") {
        //console.log("you clicked me")

        const newTask = {
            //gets the value or inputs and stores in an object
            date: document.querySelector("#date").value,
            task: document.querySelector("#task").value,
            completed: false,
            userId: sessionStorage.getItem("activeUser")
        }
        
        saveTask(newTask) //saves the task
        .then(TaskList) // Refreshes your list once you've saved your new one
        .then(newTaskButton) // then reset the new task button

    }
})

// Added by Vincent OLeary - Event listener for showing completed tasks
contentTarget.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "showDoneTask") {
        //console.log("you clicked me")
        CompletedTaskList() // Get list of every task for user
        newTaskButton() // then reset the new task button

    }
})

// Build the task form with a show Uncompleted Button for when only completed tasks are displayed
export const CompletedTaskForm = () => {
    contentTarget.innerHTML = `
    <div class = "newTask">
    <button id="newTaskButton">Enter a New Task</button>
    <button id="showDueTask">Show Uncompleted Tasks</button>
    </div>
    `
}

// Event listener to switch back to uncompleted tasks
contentTarget.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "showDueTask") {
        //console.log("you clicked me")
        TaskList() // Get list of every task for user
        newTaskButton() // then reset the new task button

    }
})