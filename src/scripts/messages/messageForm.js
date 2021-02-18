import { getMessages, useMessages , sendMessage } from "./messageProvider.js";
import { printMessageForm } from "./message.js";

let messageTarget = document.getElementById("messages-container")

export const renderMessage = () => {
    getMessages().then(() => {
        let allMessages = useMessages();

        console.log(allMessages);

        let domString = printMessageForm(allMessages, 0)
        
        
        messageTarget.innerHTML = domString
        
        // for (const message of allMessages) {
            
        // }


    })
};