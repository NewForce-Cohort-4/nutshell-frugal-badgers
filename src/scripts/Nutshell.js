import {LogOutButton} from "./auth/LogoutButton.js";
// Import the functions to list all a user's articles in the dashboard and add a save button for new articles
import { ListArticles} from "./articles/ArticleListView.js";
import { BuildSaveForm } from "./articles/ArticleSaveForm.js";


export const Nutshell = () => {
    
    LogOutButton()
    // Render all your UI components here
    // Article components
    ListArticles()
    BuildSaveForm() 

}
