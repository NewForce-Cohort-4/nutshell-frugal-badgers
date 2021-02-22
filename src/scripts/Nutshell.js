import {LogOutButton} from "./auth/LogoutButton.js"
import { myEvents, newEventButton } from "./event/eventForm.js"
import {} from './event/eventSelect.js'
import { TaskList } from "./tasks/TaskList.js"
import { TaskForm } from "./tasks/TaskForm.js"
import { newTaskButton } from "./tasks/TaskForm.js"

export const Nutshell = () => {
  newEventButton()
  myEvents()
  TaskForm()
  TaskList()
  newTaskButton()
    LogOutButton()
      // Render all your UI components here
      
}


