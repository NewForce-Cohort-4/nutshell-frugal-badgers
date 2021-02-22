//Import the functions to list all a user's events in the dashboard
import { myEvents, newEventButton } from "./event/eventForm.js"
import {} from './event/eventSelect.js'
import {LogOutButton} from "./auth/LogoutButton.js";
// Import the functions to list all a user's articles in the dashboard and add a save button for new articles
import { ListArticles } from "./articles/ArticleListView.js";
import { NewArticleButton } from "./articles/ArticleSaveForm.js";
// Import the functions to list tasks in dashboard
import { TaskList } from "./tasks/TaskList.js"
import { TaskForm } from "./tasks/TaskForm.js"
import { newTaskButton } from "./tasks/TaskForm.js"

export const Nutshell = () => {
    LogOutButton()
    // Render all your UI components here
    // Article components
    ListArticles()
    NewArticleButton()
    // Task components
    TaskForm()
    TaskList()
    newTaskButton()
    //Events components
    newEventButton()
    myEvents()
}
