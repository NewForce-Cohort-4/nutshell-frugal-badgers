import { getEvents, useEvents } from "./eventDataProvider.js"
import {individualEvent, boldEvent} from './event.js'

//this module will create an html representation of the events that will end up in the events section after they have been added by completing the form
const eventToPrint = document.querySelector(".eventList")

//function to list the events after they have been added to the API 
export const eventList = () => {
    getEvents().then(() => {
        //assign variables to access the events from the data provider
        const allEvents = useEvents()
        let eventListString = ""
        //filter through the events to target their id and store them by their id
        let activeEvents = allEvents.filter(oneEvent => {
            const userID = sessionStorage.getItem('activeUser')
            // add event to each users event list by their id
            if (oneEvent.userID === userID){
                return oneEvent
            }
        })
        // defining a variable to sort the current user's events by date
        let sortedEvents = activeEvents.sort((a, b) => {
            return new Date (a.date) - new Date (b.date)
        })
        // loop through the events and target the first event to make it bold 
        for(let i =0; i < 1; i++){
            eventListString = boldEvent(sortedEvents[i])
        }
        //loop through rest of the events and print them 
        for(let i =1; i < sortedEvents.length; i++){
            eventListString += individualEvent(sortedEvents[i])
        } 
        eventToPrint.innerHTML +=`${eventListString}`
    }

    )
}