// messageForm.js: renderFunction to print complete chat window to DOM and activate event listner.
// Author: Jon Newton

import { getMessages, useMessages , sendMessage } from "./messageProvider.js";
import { printMessageForm } from "./message.js";
import { buildThreads } from "./threads.js";
import { chatStatusListner, sendMessageListner } from "./eventHub.js";

let messageTarget = document.getElementById("messages-container")

// let offlineState = undefined
// debugger

export const renderMessage = () => {
    
    getMessages().then(() => {
        let allMessages = useMessages();

        console.log(allMessages);

        let domString = printMessageForm(allMessages, 0)
    
        
        messageTarget.innerHTML = domString

        buildThreads();

        chatStatusListner();

        sendMessageListner();
        // for (const message of allMessages) {
            
        // }


    })
};