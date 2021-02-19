import {saveEvent} from './eventDataProvider.js'
import {eventForm} from './eventForm.js'
import {eventList} from './eventList.js'
//This module will handle all of the click events that happen on the events section of this application


// selects an ID from the index.html and assigns it
const contentTarget = document.querySelector(".eventContainer")

//click event to print the form to the DOM after the "create event" button is clicked
contentTarget.addEventListener("click", clickEvent => {
    //checking to see if the ID matches the buttons ID
    if(clickEvent.target.id === "newEventButton") {
        //call the form function
        eventForm()
    }
})

// this click event will send the event created to the my events section of the page by clicking the add event button
contentTarget.addEventListener("click", clickEvent => {
    //target the add event button's ID
    if(clickEvent.target.id === "addEventButton") {
        console.log("you clicked the add event button")
    //assign variables for each key/value pair
    let eventDate = document.getElementById("event-date")
    let eventName = document.getElementById("event-name")
    let eventLocation = document.getElementById("event-location")
    //making an object representation of an event
    const eventToSave = {
        "date": eventDate.value,
        "event": eventName.value,
        "location": eventLocation.value,
        "userID": sessionStorage.getItem("activeUser")
    }   
    //call the save event function to save the event to the API
        saveEvent(eventToSave)
        console.log(eventToSave)
    }
})

