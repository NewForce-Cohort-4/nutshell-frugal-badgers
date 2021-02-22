import {LogOutButton} from "./auth/LogoutButton.js";
// Import the functions to list all a user's articles in the dashboard and add a save button for new articles
import { ListArticles } from "./articles/ArticleListView.js";
import { NewArticleButton } from "./articles/ArticleSaveForm.js";
// Import the functions for the navbar functionality
import { PrintNavbar, ResetDashboard } from "./nav/NavView.js"

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
    // First reset the dashboard by clearing the contents of each smallest tag
    
    // Then add all functions previously in Nutshell() for the article widget to show
    ListArticles()
    NewArticleButton()
    })

    // Event listeners for navbar functionality
    document.querySelector("#events-nav-link").addEventListener("click", () => {
    // // First reset the dashboard by clearing the contents of each smallest tag
    document.querySelector(".articles-widget").innerHTML = `<!-- Articles Widget Title -->
    <div class="articles-widget__header"></div>
    <!-- Articles Widget List of Articles -->
    <div class="articles-widget__list"></div>
    <!-- Articles Widget Save Function -->
    <div class="articles-widget__form"></div>`;
    // Then add all functions previously in Nutshell() for the events widget to show
    
    })

    // Event listeners for navbar functionality
    document.querySelector("#tasks-nav-link").addEventListener("click", () => {
    // // First reset the dashboard by clearing the contents of each smallest tag

    // Then add all functions previously in Nutshell() for the tasks widget to show

    })

    // Event listeners for navbar functionality
    document.querySelector("#messages-nav-link").addEventListener("click", () => {
    // // First reset the dashboard by clearing the contents of each smallest tag

    // Then add all functions previously in Nutshell() for the messages widget to show
    
    })
}