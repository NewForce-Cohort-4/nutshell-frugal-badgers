/* This is the eventListner for the new task button. 
Author: Sophia Spaulding */

const eventHub = document.querySelector("body")
// Clickevent for the new task button
document.querySelector("body").addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "#newButtonContainer") {
        TaskForm()
    }
})
