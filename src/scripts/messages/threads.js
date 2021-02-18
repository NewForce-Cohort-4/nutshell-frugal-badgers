// Threads.js: Provides function with conditional to detect change from Online/Offline button event listners to print message threads OR Offline message.
// Author: Jon Newton

import {  } from "./eventHub.js";
import { getMessages, useMessages , sendMessage } from "./messageProvider.js";

// Declare empty string to hold the contents of the API call.
let chatStorage = "";

// Make global API call and return result to chatStorage
getMessages().then(() => chatStorage = useMessages()).then(() => {return chatStorage})


// Function to create a timestamp for new messages.
export const threadTimestamp = () => {
    return new Date().toISOString()
    // return Math.floor(Date.now() / 1000)
};

// Create buildThreads function

export const buildThreads = (status) => {
    const indexUserReturned = chatStorage[0]
    const userShortName = indexUserReturned.user.full_name.split(" ")
    const threadContainer = document.getElementById("m-history--span")
    const sendBtn = document.getElementById("message-submit--btn")
    const inactiveChatMessage = `
        <div class="row-col-1 text-center d-flex justify-content-center align-items-center" id="messages-chat-offline--span"><strong>😴 Chat Offline</strong></div>
        `

    if (status === undefined || status === "") {
        // 1. Check for default chat-status state of undefined, print disabled chat message and disable send button.

        threadContainer.innerHTML = inactiveChatMessage
        sendBtn.toggleAttribute("disabled")
        sendBtn.classList.remove("btn-primary")
        sendBtn.classList.add("btn-dark")
    
    } else if (status !== undefined || status !== "") {
        // 2. If status has a value, envoke the next series of conditionals
        
        if (status.attributes.id.value === "message-online--radio" && status.value === "on") {
            // 2. a. If click event id equals message-online--radio and value equals on
            //      print activeChat string to DOM and disable buttons with updated classes.
            
            let activeChat = `
            <div class="row-col-1 p-1 d-block m-rec--block">Goodbye Earth!</div>
            <div class="row-col-1 p-1 d-block m-sent--block">${userShortName[0]}: ${indexUserReturned.message} ${threadTimestamp()}</div>
            `

            threadContainer.innerHTML = activeChat
            sendBtn.toggleAttribute("disabled")
            sendBtn.classList.remove("btn-dark")
            sendBtn.classList.add("btn-primary")
            
        } else if (status.attributes.id.value === "message-offline--radio" && status.value === "on") {

            // 2. B. If click event id equals message-offline--radio and value equals on
            //      print disableMessage string to DOM and disable buttons with updated classes.

            threadContainer.innerHTML = inactiveChatMessage
            sendBtn.toggleAttribute("disabled")
            sendBtn.classList.remove("btn-primary")
            sendBtn.classList.add("btn-dark")
        }
    }        
};