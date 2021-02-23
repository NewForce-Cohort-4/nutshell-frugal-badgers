//The functions on this module represent the different types of cards that will be displayed when a user create's events for themselves
// -- Thomas Frazier 

//individual representation fo each event
export const individualEvent = (event) => {
    return `
    <div id="event--${event.id}" class="eventCard">
    <p>${event.date}</p>
    <p>${event.event}</p>
    <p>${event.location}</p>
    </div>
    `
}
// function to represent the first event a user has and show it's signifigance against the one's contained in individualEvent by using bold tags and header tags
export const boldEvent = (event) => {
    return `
    <div id="event--${event.id}" class="boldEventCard">
    <p><b>${event.date}</b></p>
    <h3>${event.event}</h3>
    <h3>${event.location}</h3>
    </div>
    `
}