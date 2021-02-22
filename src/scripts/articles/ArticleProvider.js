/*
 *  This is a provider component that fetchs any saved articles
 *  for a user's account and lets them be displayed on dashboard.
 *  It will also save any new articles to the server for a user
 *  or delete currently saved ones that the user no longer needs.
 * 
 *  Written by Vincent OLeary
 */

// Define the array of saved articles to be empty
let savedArt = [];

// Define a function to copy the fetched list of saved articles so we aren't manipulating the one true array
export const cpArticles = () => savedArt.slice();

// Define a function to fetch all saved articles in the user's account and make the one true array of articles
export const mkArticles = () => {
    return fetch(`http://localhost:8088/articles`)
    // Save the API fetch to a json object    
    .then((returnedData) => returnedData.json())
    // Save the json object as the one true array of saved articles
    .then((parsedData) => {
        savedArt = parsedData
    })
};

// Define a function to bookmark new articles when entered into the save form on the dashboard
export const bmArticle = newArticle => {
    return fetch(`http://localhost:8088/articles`, {
        // This time the user wants to POST a new article to the server
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newArticle)
    })
    // Once the new bookmark is saved to the server, we need to update the one true array for the user
    .then(mkArticles())
};

// Define a function to delete saved articles from a user's account
export const rmArticle = articleID => {
    // This time the user wants to delete a saved article on the server, so post a delete call to the exact article url on the server
    return fetch(`http://localhost:8088/articles/${articleID}`, {
        method: "DELETE"
    })
    // Once the old bookmark is deleted on the server, we need to update the one true array for the user
    .then(mkArticles())
};
