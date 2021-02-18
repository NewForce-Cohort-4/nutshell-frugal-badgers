/*
 *  This is a form component that saves information about the article
 *  a user enters into the form and keeps it in the user's account.
 *  It imports the modules to fetch/save an article to the server
 *  and to list the articles in the dashboard after a new one is saved.
 * 
 *  Written by Vincent OLeary
 */

import { bmArticle } from "./ArticleProvider.js"
import { ListArticles } from "./ArticleListView.js"

// Define DOM element to put the save form in
const saveTarget = document.querySelector(".articles-widget__form")

// Build the save form that will take a url and info about the article and save to a user's profile with the session ID
export const BuildSaveForm = () => { 
    saveTarget.innerHTML = 
    `
    <p><b>Bookmark an article:</b> Enter all information and click "Save" to bookmark an article to your dashboard<p>
    <p>URL of article: <input placeholder="Enter URL" type="text" id="bookmarked-URL"></input></p>
    <p>Title of article: <input placeholder="Enter title" type="text" id="bookmarked-title"></input></p>
    <p>Summary of article: <input placeholder="Type a short summary" type="text" id="bookmarked-summary"></input></p>    
    <button id="save-Article">Save</button>
    `
}

// Use event listener to capture when a user clicks the "Save" button in the article widget and save that information to their account
saveTarget.addEventListener("click", clickEvent => {
    // If the click is on the save button in the article widget, then save that information to the local server
    if(clickEvent.target.id === "save-Article") {
        // Save the current timestamp to sort articles by time the user saved them
        const timestamp = Date.now();
        // Save the current userID to link articles to the user's account
        const userID = sessionStorage.getItem('activeUser')

        // Test to make sure the save button is being clicked
        console.log("User #"+userID,"clicked the article save button at",timestamp)

        // Create the array for a new article using the entered information
        const newArticle = {
            // Enter the key/value pairs for the article
            "title": document.querySelector("#bookmarked-title").value,
            "synopsis": document.querySelector("#bookmarked-summary").value,
            "url": document.querySelector("#bookmarked-URL").value,
            "created_at": timestamp,
            "userID": userID
        }

        // Add the newArticle object to the local server by running a save function from the Provider component and then update article list
        bmArticle(newArticle)
        .then(ListArticles())
        .then(BuildSaveForm())
    }
})
