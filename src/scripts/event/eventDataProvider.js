let events = [] // empty array to hold the events

export const useEvents = () => events.slice() // function to copy the fetched events array so we don't mess witht the original

//define a function to fetch all the events in a user's account
export const getEvents = () => {
    return fetch ('http://localhost:8088/events') 
    .then(response => response.json())
    .then(parsedEvents => {
        events = parsedEvents
    })
}
// define a function to save each event and post it to the API
export const saveEvent = events => {
    return fetch(`http://localhost:8088/events`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(events)
    })
}