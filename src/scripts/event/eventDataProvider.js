let events = []

export const useEvents = () => events.slice()

export const getEvents = () => {
    return fetch ('http://localhost:8088/events')
    .then(response => response.json())
    .then(parsedEvents => {
        events = parsedEvents
    })
}

export const saveEvent = events => {
    return fetch(`http://localhost:8088/events`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(events)
    })
}