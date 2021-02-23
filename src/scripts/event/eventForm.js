//this module will create a new event button and when that button is clicked a form to input information about a new event will populate along with an add event button to push the new event into the events section of the page
// -- Thomas Frazier

// selects an ID from the index.html and assigns it
const contentTarget = document.querySelector(".eventContainer")
const eventHub = document.querySelector(".eventList")

//renders a button to the initial page load
const render = () => {
    contentTarget.innerHTML = `
    <div class="newEvent">
        <button id="newEventButton">Create Event</button>
    </div>
    `
}

//Function to create the section where the events will be stored
export const myEvents = () => {
    eventHub.innerHTML = `
    <div class="events">
    <h2>My Events</h2>
    </div>`
}

//function that calls that render function above
export const newEventButton = () => {
    render()
}

//function that when called will print the form to fill each event that is to be added
export function eventForm () {
contentTarget.innerHTML = `
<div action="">
    <fieldset>
        <label for="event-date">Event Date</label>
        <input type="date" id="event-date">
    </fieldset>
    <fieldset>
        <label for="event-name">Event Name</label>
        <input type="text" id="event-name">
    </fieldset>
    <fieldset>
        <label for="location">Location</label>
        <input type="text" id="event-location">
    </fieldset>
    <button id="addEventButton">Add to my events</button>
</div>

`
}
