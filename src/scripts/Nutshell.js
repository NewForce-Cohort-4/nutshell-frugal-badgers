import {LogOutButton} from "./auth/LogoutButton.js"
import { renderMessage } from "./messages/messageForm.js";
import { globalOfflineState } from "./messages/threads.js";
import { TaskList } from "./tasks/TaskList.js"
import { TaskForm } from "./tasks/TaskForm.js"
import { newTaskButton } from "./tasks/TaskForm.js"

export const Nutshell = () => {
  // Render all your UI components here
  TaskForm()
  TaskList()
  newTaskButton()
  LogOutButton()
  renderMessage()
  globalOfflineState()
    

}
