// Data Provider Module
// Stores functions to access API allowing retrevial of past messages and sending current messages.
// Author: Jon Newton

let pastMessages = [];
let currentUsers = [];

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
    return fetch('http://localhost:8088/messages?_expand=user')
    .then(m => m.json())
    .then(parsedMessages => {
        pastMessages = parsedMessages
    })
};

export const useMessages = () => pastMessages.slice();

export const getUsers = () => {
    return fetch('http://localhost:8088/users')
    .then(u => u.json())
    .then(parsedUsers => {
        currentUsers = parsedUsers;
    })
};

export const useUsers = () => currentUsers.slice();