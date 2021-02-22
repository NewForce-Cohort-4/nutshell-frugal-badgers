/*
 *  This is a list component that lists all the navbar entries
 *  after a user has logged in to their dashboard.
 * 
 *  Written by Vincent OLeary
 */

// Define DOM element the navbar resides in
const navTarget = document.querySelector("nav")

// Build the navbar when the user logs in or sees the splash page
export const PrintNavbar = () => { 
    navTarget.innerHTML = 
    `   
    <a id="articles-nav-link" href="#">Articles</a>
    <a id="events-nav-link" href="#">Events</a>
    <a id="tasks-nav-link" href="#">Tasks</a>
    <a id="messages-nav-link" href="#">Messages</a>
    `
}

// Reset Dashboard by clearing each tag that has widget content
// querySelectorAll returns a NodeList instead of array, so we need a function to loop over the contents and return an array we can actually  use
var forEach = function (array, callback, scope) { 
    for (var i = 0; i < array.length; i++) {
        callback.call(scope, i , array[i]);
    }
}

// Reset function takes the tagNodeList object, runs the forEach function to make an array, and then clears the HTML for each tag it found
export const ResetDashboard = () => {
    const tagNodeList = document.querySelectorAll(".dashboard-clear");
    forEach( tagNodeList, function (index, value) {
        value.innerHTML = ""
    })
}