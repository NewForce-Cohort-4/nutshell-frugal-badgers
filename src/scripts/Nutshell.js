import {LogOutButton} from "./auth/LogoutButton.js"
import { renderMessage } from "./messages/messageForm.js";
import { globalOfflineState } from "./messages/threads.js";

export const Nutshell = () => {

    LogOutButton()
      // Render all your UI components here
    renderMessage()
    globalOfflineState()
    

}