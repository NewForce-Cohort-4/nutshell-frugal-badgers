const eventHub = document.querySelector("body")

document.querySelector("body").addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "#newButtonContainer") {
        TaskForm()
    }
})
