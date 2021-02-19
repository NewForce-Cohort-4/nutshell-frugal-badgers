/*
 *  This is a list component that lists all the articles saved
 *  in a user account to view in the dashboard. Each article
 *  also has a delete button to remove any article from the 
 *  user's account when clicked.
 *  It imports the modules to fetch and copy all the articles on the
 *  server for a user's account, and the module to delete.
 * 
 *  Written by Vincent OLeary
 */

import { mkArticles, cpArticles, rmArticle } from "./ArticleProvider.js";
import { NewArticleButton } from "./ArticleSaveForm.js";

// Define DOM elements to view the articles in
const titleTarget = document.querySelector(".articles-widget__header")
const listTarget = document.querySelector(".articles-widget__list")

// Define a function to list all the articles linked to a specific user's acount
export const ListArticles = () => {
    // Print the header of the news widget
    titleTarget.innerHTML = `<h2>News</h2>`
    // Refresh list of articles and make a copy to display in the dashboard
    mkArticles()
    .then(() => {
        const ALLarticles = cpArticles();
        // Test to make sure articles array is created
        console.log(ALLarticles)

        // Loop over each article and print the details for articles with the user's ID
        listTarget.innerHTML = ALLarticles.map(ONEarticle => {
            // Save the current user's ID
            const userID = sessionStorage.getItem('activeUser')

            // Add article to list only if it matches the current user's ID
            if (ONEarticle.userID === userID) {
                //console.log("Found a match!")
                return `
                <div class="articles-widget__card">
                <p>${ONEarticle.title}</p>
                <p>${ONEarticle.synopsis}</p>
                <p>${ONEarticle.url}</p>
                <button id="delete-${ONEarticle.id}">Delete</button>
                </div>
                `
            }
        }).join("")
    })
}

// Use event listener to capture when a user clicks the "Delete" button in the article widget and delete that article from their account
listTarget.addEventListener("click", clickEvent => {
    // If the click is on a delete button in the article widget, then delete that information to the local server
    if(clickEvent.target.id.startsWith("delete")) {
        // ID the article to be deleted
        const deleteID = clickEvent.target.id.split("-")[1]
        
        // Test to make sure the save button is being clicked
        console.log("The delete button for article",deleteID,"was clicked")
        
        // Use the delete function with the ID of the article to delete
        rmArticle(deleteID)
        .then(ListArticles())
        .then(NewArticleButton())
    }
})