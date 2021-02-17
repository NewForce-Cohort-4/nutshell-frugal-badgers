/*
 *  This is a form component that saves information about the article
 *  a user enters into the form and keeps in the user's account.
 *  It imports the modules to fetch/save an article to the server
 * 
 *  Written by Vincent OLeary
 */

import { cpArticles, mkArticles, bmArticle } from "./ArticleProvider.js"

// Define DOM element to put the save form in
const saveTarget = document.querySelector(".articles-widget__form")

// Build the save form that will take a url and info about the article and save to a user's profile with the session ID
export const BuildSaveForm = () => { 
    saveTarget.innerHTML = 
    `
    <p>Write your note here: <input placeholder="Enter note" type="text" id="note-text"></input></p>
    <button id="saveNote">Save Note</button>
    `
}
