// Threads.js: Provides function with conditional to detect change from Online/Offline button event listners to print message threads OR Offline message.
// Author: Jon Newton

import {  } from "./eventHub.js";
import { getMessages, useMessages , sendMessage } from "./messageProvider.js";
import { printMessageThreads } from "./message.js";

// Declare empty string to hold the contents of the API call.
let chatStorage = "";
let useChatStorage = "";

// Document Selectors
const threadContainer = document.getElementById("m-history--span")
const sendField = document.getElementById("new-message--input")
const sendBtn = document.getElementById("message-submit--btn")


// Function to create a timestamp for new messages.
export const threadTimestamp = () => {
    return new Date().toISOString()
    // return Math.floor(Date.now() / 1000)
};

// Declare new variable to store boolean the current state of Offline toggle.
export const globalOfflineState = (chatState) => {
    if (!sessionStorage.getItem("chatOffline")) {
        debugger
        sessionStorage.setItem("chatOffline", true)
    } else if (sessionStorage.getItem("chatOffline" === undefined && chatState === undefined)){
        debugger
        sessionStorage.setItem("chatOffline", true)
    } else if (sessionStorage.getItem("chatOffline" !== "false" && chatState === undefined)){
        debugger
        sessionStorage.setItem("chatOffline", chatState)
    } else {
        debugger
        sessionStorage.setItem("chatOffline", false)
    }
};


export const recentMessages = () => {
    // Make global API call and return result to chatStorage
    const threadContainer = document.getElementById("m-history--span")
    getMessages().then(() => {chatStorage = useMessages() 
    
    // console.log(chatStorage);
    const mappedMessages = chatStorage.map(singleThread => {
    return printMessageThreads(singleThread)
    })
    const top10Messages = mappedMessages.slice(Math.max(mappedMessages.length - 10, 0)).join("")
    threadContainer.innerHTML = top10Messages
})
}


// Deactivate Chat field

function disableChat() {
    const inactiveChatMessage = `
    <div class="row-col-1 text-center d-flex justify-content-center align-items-center" id="messages-chat-offline--span"><strong>😴 Chat Offline</strong></div>
    `
    const threadContainer = document.getElementById("m-history--span")
    const sendField = document.getElementById("new-message--input")
    const sendBtn = document.getElementById("message-submit--btn")
    const offlineBtn = document.getElementById("message-offline--radio")
    
    debugger
    threadContainer.innerHTML = inactiveChatMessage
    sendBtn.setAttribute("disabled", "")
    sendField.setAttribute("disabled", "")
    offlineBtn.setAttribute("checked", "")
    sendBtn.classList.remove("btn-primary")
    sendBtn.classList.add("btn-dark")
};

// Activate Chat field
const enableChat = () => {
    const sendField = document.getElementById("new-message--input")
    const sendBtn = document.getElementById("message-submit--btn")
    const offlineBtn = document.getElementById("message-offline--radio")

    sendBtn.removeAttribute("disabled", "")
    sendField.removeAttribute("disabled", "")
    offlineBtn.removeAttribute("checked", "")
    sendBtn.classList.remove("btn-dark")
    sendBtn.classList.add("btn-primary")
    globalOfflineState(false)
};

// Create buildThreads function

export const buildThreads = (status) => {
    // const indexUserReturned = chatStorage[0]
    // const userShortName = indexUserReturned.user.full_name.split(" ")
    const threadContainer = document.getElementById("m-history--span")
    const sendField = document.getElementById("new-message--input")
    const sendBtn = document.getElementById("message-submit--btn")
    const checkGlobalOffline = sessionStorage.getItem("chatOffline")

        debugger
    
    if (status === undefined && checkGlobalOffline === "undefined") {
        // 1. Check for default chat-status state of undefined, print disabled chat message and disable send button.

        disableChat()
        debugger
    
    } else if (status !== undefined && checkGlobalOffline) {
        // 2. If status has a value, envoke the next series of conditionals
        debugger

        if (status.attributes.id.value === "message-online--radio" && checkGlobalOffline ) {
            // 2. a. If click event id equals message-online--radio and value equals on
            //      print activeChat string to DOM and disable buttons with updated classes.
     
            recentMessages()

            // threadContainer.innerHTML = activeChat
            enableChat()
            debugger
            
        } else if (status.attributes.id.value === "message-offline--radio" && checkGlobalOffline) {

            // 2. B. If click event id equals message-offline--radio and value equals on
            //      print disableMessage string to DOM and disable buttons with updated classes.
            debugger
            disableChat()
            debugger
            
        }
    } else if (status === undefined && checkGlobalOffline === "true") {
        disableChat(inactiveChatMessage)
        debugger
    } else if (status === undefined && checkGlobalOffline === "false") {
        recentMessages()

        // threadContainer.innerHTML = activeChat
        enableChat()
        debugger
    }       
};