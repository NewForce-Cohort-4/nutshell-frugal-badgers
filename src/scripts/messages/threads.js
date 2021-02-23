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

// Function to scroll chat threads to bottom
export const scrollChatBottom = () => {
    if (sessionStorage.getItem("chatOffline") === "false") {
        // debugger
        document.getElementById('m-history--span').scrollTop = 100;
    }
};

// Function to clear chat field on send
export const clearChat = () => {
    document.getElementById("new-message--input").value = "";
};

// Function to use with eventListner to implement real-time chats.
export const realTimeChat = (event) => {
    if (event.oldValue <= event.key) {
        buildThreads();
    }
};

// Write messageIndex to local storage
export const updateChatIndex = (x) => {
    window.localStorage.setItem("messageValue", x)
};

// Declare boolean in session storage to store last chat offline toggle state. If page is refreshed, restore offline status based on session storage.
export const globalOfflineState = (chatState) => {
    
    if (sessionStorage.getItem("chatOffline") === "true" && chatState === undefined) {
        sessionStorage.setItem("chatOffline", true)
        // debugger
    } else if (sessionStorage.getItem("chatOffline") === "undefined" && chatState === undefined){
        sessionStorage.setItem("chatOffline", true)
        // debugger
    } else if (sessionStorage.getItem("chatOffline") === "false" && chatState === undefined){
        sessionStorage.setItem("chatOffline", false)
        // debugger
    } else {
        sessionStorage.setItem("chatOffline", chatState)
        // debugger
    }
};

// Function to access the API, map messages to an HTML element, and print the 10 most recent messages.
export const recentMessages = () => {
    // Make global API call and return result to chatStorage
    const threadContainer = document.getElementById("m-history--span")
    getMessages().then(() => {chatStorage = useMessages() 
    
    // Return indivdual threads mapped using html string.
    const mappedMessages = chatStorage.map(singleThread => {
    return printMessageThreads(singleThread)
    })
    // Parse returned messages and print the last 10 items of the array.
    const top10Messages = mappedMessages.slice(Math.max(mappedMessages.length - 10, 0)).join("")
    threadContainer.innerHTML = top10Messages
    // Scroll to bottom of chat threads.
    scrollChatBottom()
})
}


// Function to deactivate Chat field

function disableChat() {
    const inactiveChatMessage = `
    <div class="row-col-1 text-center d-flex justify-content-center align-items-center" id="messages-chat-offline--span"><strong>😴 Chat Offline</strong></div>
    `
    const threadContainer = document.getElementById("m-history--span")
    const sendField = document.getElementById("new-message--input")
    const sendBtn = document.getElementById("message-submit--btn")
    const offlineBtn = document.getElementById("message-offline--radio")
    const onlineBtn = document.getElementById("message-online--radio")
    
    threadContainer.innerHTML = inactiveChatMessage
    sendBtn.setAttribute("disabled", "")
    sendField.setAttribute("disabled", "")
    offlineBtn.setAttribute("checked", "")
    onlineBtn.removeAttribute("checked", "")
    sendBtn.classList.remove("btn-primary")
    sendBtn.classList.add("btn-dark")
    globalOfflineState(true)
};

// Function to activate Chat field
const enableChat = () => {
    const sendField = document.getElementById("new-message--input")
    const sendBtn = document.getElementById("message-submit--btn")
    const offlineBtn = document.getElementById("message-offline--radio")
    const onlineBtn = document.getElementById("message-online--radio")
    const checkGlobalOffline = sessionStorage.getItem("chatOffline")

    sendBtn.removeAttribute("disabled", "")
    sendField.removeAttribute("disabled", "")
    offlineBtn.removeAttribute("checked", "")
    onlineBtn.setAttribute("checked", "")
    sendBtn.classList.remove("btn-dark")
    sendBtn.classList.add("btn-primary")
    globalOfflineState(false)
};

// Create buildThreads function

export const buildThreads = (status) => {
    // Local document selectors
    const threadContainer = document.getElementById("m-history--span")
    const sendField = document.getElementById("new-message--input")
    const sendBtn = document.getElementById("message-submit--btn")
    const checkGlobalOffline = sessionStorage.getItem("chatOffline")

        // debugger
    
    if (status === undefined && checkGlobalOffline === "undefined") {
        // 1. Check for default chat-status state of undefined, print disabled chat message and disable send button.

        disableChat()
        // debugger
    
    } else if (status !== undefined && checkGlobalOffline) {
        // 2. If status has a value, envoke the next series of conditionals
        // debugger

        if (status.attributes.id.value === "message-online--radio" && checkGlobalOffline ) {
            // 2. a. If click event id equals message-online--radio and sessionStorage has value,
            //      envoke enableChat function to display message threads and enable text-field/buttons with updated classes.
     
            recentMessages()

            // threadContainer.innerHTML = activeChat
            enableChat()

            // debugger
            
        } else if (status.attributes.id.value === "message-offline--radio" && checkGlobalOffline) {

            // 2. B. If click event id equals message-offline--radio and sessionStorage has value,
            //      envoke disableChat function to toggle mesage threads and disable text-field/buttons with updated classes.
            disableChat()
            // debugger
            
        }
    } else if (status === undefined && checkGlobalOffline === "true") {
        // 3. A. If function is envoked without click event and sessionStorage = true,
            //      envoke disableChat function to toggle mesage threads and disable text-field/buttons with updated classes.
        disableChat()
        // debugger
    } else if (status === undefined && checkGlobalOffline === "false") {
        // 3. A. Else if function is envoked without click event and sessionStorage = false,
        // envoke enableChat function to toggle mesage threads and enable text-field/buttons with updated classes.
        recentMessages()

        enableChat()
        // debugger
    }       
};