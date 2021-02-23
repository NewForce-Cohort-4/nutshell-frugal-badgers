import { buildThreads , threadTimestamp, recentMessages, clearChat, updateChatIndex, realTimeChat } from "./threads.js";
import { sendMessage } from "./messageProvider.js";

let onlineStatus = "";

const offlineStatus = document.getElementById("message-offline--radio")

export const chatStatusListner = () => {
    const onlineBtn = document.getElementById("message-online--radio")
    const offlineBtn = document.getElementById("message-offline--radio")
    onlineBtn.addEventListener("click", e => {
        onlineStatus = e.target;
        

        if (onlineStatus.id === onlineBtn.id) {
            // console.log(offlineBtn.attributes);
            
            buildThreads(onlineStatus)
        }
    })

    offlineBtn.addEventListener("click", e => {
        onlineStatus = e.target;
        

        if (onlineStatus.id === offlineBtn.id) {
            // console.log(e.target.attributes.id.value);
            
            buildThreads(onlineStatus)
        }
    })
};

// Function and variable to store index saved in localStorage and passed to realTimeChat function.
let chatInt = 1

const chatIndexer = () => {
    return chatInt++
};

export let chatIndexId = chatIndexer();

export const sendMessageListner = () => {
    const messageText = document.getElementById("message-submit--btn")

    messageText.addEventListener("click" , () => {
        const newMessageObject = {
            "message": document.getElementById("new-message--input").value,
            "created_at": threadTimestamp(),
            "userId": Number(sessionStorage.getItem("activeUser"))
        }
        sendMessage(newMessageObject).then(() => {
            recentMessages();
            clearChat();
        }).then(() => {
            chatIndexer();
            updateChatIndex(chatInt);
            chatSync();
        })
    })
};

export const chatSync = () => {
    window.addEventListener("storage", (event) => {
        realTimeChat(event)
    })
};