// messageForm.js: renderFunction to print complete chat window to DOM and activate event listner.
// Author: Jon Newton

import { getMessages, useMessages , getUsers , useUsers } from "./messageProvider.js";
import { printMessageForm } from "./message.js";
import { buildThreads } from "./threads.js";
import { chatStatusListner, sendMessageListner } from "./eventHub.js";

let messageTarget = document.getElementById("messages-container")


export const renderMessage = () => {
    let allUsers = [];

    getUsers().then(() => {
        // Get users from API and store the array returned
        allUsers = useUsers()
        
        }).then(getMessages().then(() => {
            // Nested API call to collect messages and ensure functions have access to user list.
            let allMessages = useMessages();

            // Printer function is passed the messages and user arrays.
            let domString = printMessageForm(allMessages, allUsers)
        
            // Apply HTML elements to container element
            messageTarget.innerHTML = domString
    
            // Envoke function to build chat threads
            buildThreads();
    
            // Enable event listners for HTML elements once printed.
            chatStatusListner();
            sendMessageListner();

        }))
    
};