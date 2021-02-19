import { buildThreads , threadTimestamp } from "./threads.js";
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

export const sendMessageListner = () => {
    const messageText = document.getElementById("message-submit--btn")

    messageText.addEventListener("click" , () => {
        const newMessageObject = {
            "message": document.getElementById("new-message--input").value,
            "created_at": threadTimestamp(),
            "userId": Number(sessionStorage.getItem("activeUser"))
        }
        sendMessage(newMessageObject);
        debugger
    })
};