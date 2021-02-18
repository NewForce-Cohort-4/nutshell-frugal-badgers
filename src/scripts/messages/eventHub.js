import { buildThreads } from "./threads.js";

let onlineStatus = ""
const offlineStatus = document.getElementById("message-offline--radio")

export const chatStatusListner = () => {
    const onlineBtn = document.getElementById("message-online--radio")
    const offlineBtn = document.getElementById("message-offline--radio")
    onlineBtn.addEventListener("click", e => {
        onlineStatus = e.target;

        if (onlineStatus.value === "on") {
            // console.log(offlineBtn.attributes);
            buildThreads(onlineStatus)
        }
    })

    offlineBtn.addEventListener("click", e => {
        onlineStatus = e.target;

        if (onlineStatus.value === "on") {
            // console.log(e.target.attributes.id.value);
            buildThreads(onlineStatus)
        }
    })
};