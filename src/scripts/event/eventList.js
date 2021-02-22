import { getEvents, useEvents } from "./eventDataProvider.js"
import {individualEvent} from './event.js'
//this module will create an html representation of the events that will end up in the events section after they have been added by completing the form
const eventToPrint = document.querySelector(".eventList")

//function to list the events after they have been added to the API 
export const eventList = () => {
    getEvents().then(() => {
        const events = useEvents()
        let eventListString = ""
        for(let i =0; i < events.length; i++){
            eventListString += individualEvent(events[i])
        }
        eventToPrint.innerHTML +=`${eventListString}`
    }

    )
}