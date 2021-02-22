// messageForm.js: renderFunction to print complete chat window to DOM and activate event listner.
// Author: Jon Newton

import { getMessages, useMessages , getUsers , useUsers } from "./messageProvider.js";
import { printMessageForm } from "./message.js";
import { buildThreads } from "./threads.js";
import { chatStatusListner, sendMessageListner } from "./eventHub.js";

let messageTarget = document.getElementById("messages-container")

// let offlineState = undefined
// debugger

export const renderMessage = () => {
    let allUsers = [];

    getUsers().then(() => {
        allUsers = useUsers();
        
        }).then(getMessages().then(() => {
            let allMessages = useMessages();

            let domString = printMessageForm(allMessages, allUsers)
        
            
            messageTarget.innerHTML = domString
    
            buildThreads();
    
            chatStatusListner();
    
            sendMessageListner();

    
        }))
    
};