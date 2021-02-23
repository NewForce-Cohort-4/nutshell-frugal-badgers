import {LogOutButton} from "./auth/LogoutButton.js";
// Import the functions to list all a user's articles in the dashboard and add a save button for new articles
import { ListArticles } from "./articles/ArticleListView.js";
import { NewArticleButton } from "./articles/ArticleSaveForm.js";
// Import the functions to list tasks in dashboard
import { TaskList } from "./tasks/TaskList.js"
import { TaskForm } from "./tasks/TaskForm.js"
import { newTaskButton } from "./tasks/TaskForm.js"
// Import the functions for the navbar functionality
import { PrintNavbar, ResetDashboard } from "./nav/NavView.js"
// Import chat functiuons
import { renderMessage } from "./messages/messageForm.js";
import { globalOfflineState, scrollChatBottom } from "./messages/threads.js";
//Import the functions to list all a user's events in the dashboard
import { newEventButton } from "./event/eventForm.js"
import {} from './event/eventSelect.js'
import {eventList} from './event/eventList.js'

export const Nutshell = () => {
    LogOutButton()
    // Render all your UI components here

}

// Function to render the navbar and dynamically clear the page and replace with only the widget selected in the navbar when click
// Written by Vincent OLeary
export const NutshellSplash = () => {
    
    LogOutButton()
    // Render splash page with navigation bar when first logged in
    // Uses event listeners for each page to run functions previously used in Nutshell
    PrintNavbar()

    // Event listeners for navbar functionality
    document.querySelector("#articles-nav-link").addEventListener("click", () => {
    //console.log("You clicked the article button")
    // First reset the dashboard by clearing the contents of each smallest tag
    ResetDashboard()
    // Then add all functions previously in Nutshell() for the article widget to show
    ListArticles()
    NewArticleButton()
    })

    // Event listeners for navbar functionality
    document.querySelector("#events-nav-link").addEventListener("click", () => {
    //console.log("You clicked the event button")
    // First reset the dashboard by clearing the contents of each smallest tag
    ResetDashboard()
    // Then add all functions previously in Nutshell() for the events widget to show
    newEventButton()
    eventList()
    })

    // Event listeners for navbar functionality
    document.querySelector("#tasks-nav-link").addEventListener("click", () => {
    //console.log("You clicked the task button")
    // First reset the dashboard by clearing the contents of each smallest tag
    ResetDashboard()
    // Then add all functions previously in Nutshell() for the tasks widget to show
    TaskForm()
    TaskList()
    newTaskButton()
    })

    // Event listeners for navbar functionality
    document.querySelector("#messages-nav-link").addEventListener("click", () => {
    //console.log("You clicked the message button")
    // First reset the dashboard by clearing the contents of each smallest tag
    ResetDashboard()
    // Then add all functions previously in Nutshell() for the messages widget to show
    renderMessage()
    globalOfflineState()
    })

}
