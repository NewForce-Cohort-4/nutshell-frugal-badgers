import {LogOutButton} from "./auth/LogoutButton.js";
// Import the functions to list all a user's articles in the dashboard and add a save button for new articles
import { ListArticles } from "./articles/ArticleListView.js";
import { NewArticleButton } from "./articles/ArticleSaveForm.js";
// Import the functions for the navbar functionality
import { PrintNavbar } from "./nav/NavView.js"

export const Nutshell = () => {
    
    LogOutButton()
    // Render all your UI components here
    // Article components
    ListArticles()
    NewArticleButton()
}

export const NutshellSplash = () => {
    
    LogOutButton()
    // Render splash page with navigation bar when first logged in
    // Will have to add event listeners for each page to run functions previously used in Nutshell
    PrintNavbar()

    // Event listeners for navbar functionality
    document.querySelector("#articles-nav-link").addEventListener("click", () => {
    // First erase the dashboard
    
    // Then add all functions previously in Nutshell() for the article widget to show
    ListArticles()
    NewArticleButton()
    })
}