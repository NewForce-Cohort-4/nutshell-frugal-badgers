/*
 *  This is a list component that lists all the navbar entries
 *  after a user has logged in to their dashboard.
 *  It imports the modules 
 * 
 *  Written by Vincent OLeary
 */

// Define DOM element the navbar resides in
const navTarget = document.querySelector("nav")

// Build a button that will show the save form when clicked by the user
export const PrintNavbar = () => { 
    navTarget.innerHTML = 
    `   
    <a id="articles-nav-link" href="#">Articles</a>
    <a id="events-nav-link" href="#">Events</a>
    <a id="tasks-nav-link" href="#">Tasks</a>
    <a id="messages-nav-link" href="#">Messages</a>
    `
}