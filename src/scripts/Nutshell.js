import {LogOutButton} from "./auth/LogoutButton.js"
import { TaskList } from "./tasks/TaskList.js"
import { TaskForm } from "./tasks/TaskForm.js"
import { newTaskButton } from "./tasks/TaskForm.js"

export const Nutshell = () => {
  TaskForm()
  TaskList()
  newTaskButton()
    LogOutButton()
      // Render all your UI components here
}


