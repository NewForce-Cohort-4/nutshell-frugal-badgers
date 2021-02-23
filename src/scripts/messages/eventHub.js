// eventHub.js: Document stores event listner functions which are exported to other documents and envoked after HTML elements have been rendered.
// Author: Jon Newton

import { buildThreads , threadTimestamp, recentMessages, clearChat, updateChatIndex } from "./threads.js";
import { sendMessage } from "./messageProvider.js";

// Global variables

let onlineStatus = "";
const offlineStatus = document.getElementById("message-offline--radio")

// Function and variable to store index saved in localStorage and passed to realTimeChat function.
let chatInt = true
const chatIndexer = () => {
    const chatIndexValue = localStorage.getItem("messageValue");
    const trueIndexValue = (chatIndexValue === 'true')
    chatInt = !trueIndexValue
};


// Event listner function to toggle chat offline/online states

export const chatStatusListner = () => {
    const onlineBtn = document.getElementById("message-online--radio")
    const offlineBtn = document.getElementById("message-offline--radio")
    onlineBtn.addEventListener("click", e => {
        onlineStatus = e.target;
        
        if (onlineStatus.id === onlineBtn.id) {            
            buildThreads(onlineStatus)
        }
    })

    offlineBtn.addEventListener("click", e => {
        onlineStatus = e.target;
        
        if (onlineStatus.id === offlineBtn.id) {
            buildThreads(onlineStatus)
        }
    })
};

export const sendMessageListner = () => {
    const messageText = document.getElementById("message-submit--btn")

    // Create new object on send button click
    messageText.addEventListener("click" , () => {
        const newMessageObject = {
            "message": document.getElementById("new-message--input").value,
            "created_at": threadTimestamp(),
            "userId": Number(sessionStorage.getItem("activeUser"))
        }
        // Send newMessageObject to API then clear chat text field and refresh chat threads.
        sendMessage(newMessageObject).then(() => {
            recentMessages();
            clearChat();
        }).then(() => {
            // Envoke real-time chat functions;
            // - increment chat index value by one
            // - store new value in local storage
            // - Reactivate event listner & fetch new chat threads in another user's browser window.
            chatIndexer();    
            updateChatIndex(chatInt);
            chatSync();
        })
    })
};

export const chatSync = () => {
    window.addEventListener("storage", () => {
        buildThreads();
    })
};