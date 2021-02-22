import { getEvents, useEvents } from "./eventDataProvider.js"
import {individualEvent} from './event.js'
//this module will create an html representation of the events that will end up in the events section after they have been added by completing the form
const eventToPrint = document.querySelector(".eventList")

//function to list the events after they have been added to the API 
export const eventList = () => {
    getEvents().then(() => {
        const allEvents = useEvents()
        let eventListString = ""
        let activeEvents = allEvents.filter(oneEvent => {
            const userID = sessionStorage.getItem('activeUser')

            if (oneEvent.userID === userID){
                return oneEvent
            }
        })
        // defining a variable to sort the current user's events by date
        let sortedEvents = activeEvents.sort((a, b) => {
            return new Date (a.date) - new Date (b.date)
        })

        for(let i =0; i < sortedEvents.length; i++){
            eventListString += individualEvent(sortedEvents[i])
        }
        eventToPrint.innerHTML +=`${eventListString}`
    }

    )
}