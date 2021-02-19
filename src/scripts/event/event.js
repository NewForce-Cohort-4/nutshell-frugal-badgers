export const individualEvent = (event) => {
    return `
    <div id="event--${event.id}" class="eventCard">
    <p>${event.date}</p>
    <p>${event.name}</p>
    <p>${event.location}</p>
    </div>
    `
}