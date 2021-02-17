let pastMessages = [];

export const sendMessage = (thread) => {
    return fetch('http://localhost:8088/messages', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(thread)
    })
};

export const getMessages = () => {
    return fetch('http://localhost:8088/messages')
    .then(m => m.json())
    .then(parsedMessages => {
        pastMessages = parsedMessages
    })
};

export const useMessages = () => pastMessages.slice();

