# Nutshell: The Information Dashboard

## _Frugal Badgers Edition_

### Setup

1. Clone this repository
2. `cd` into the new directory
3. Run the following command: `cd api && touch database.json`
4. Delete the `.ignore` file in the `api` directory
5. Open the `database.json` file in the `api` directory and paste the following:
```json
{
    "users": [
    ],
     "messages": [
    ],
     "articles": [
    ],
    "tasks": [
    ],
    "events": [
    ]
}
```
6. Navigate from the `api` to the `src` folder with the following `cd src` and then `code .` to launch the program and then click go live to open in the browser


    **Note**: The `database.json` file is present in the project `.gitignore` file. This file is unique to the current instance of nutshell.

## Features

### Messages
Implemented chat widget to dynamically print after successful login, that allows for an enable/disable (online/offline) states and utilizes sub-function to print message threads chronologically to the DOM, while displaying the newest thread at the bottom.
### Articles
With local json server running and VS code hosting, you should be able to log in as any user and see a button to add news articles under the News section of the dashboard. Once clicked, a save form is created to save a title, URL, and summary. After hitting save, you should see all articles that user has saved displayed in the dashboard widget. Articles are shown by most recently saved at the top. Each article has a delete button that will remove that article from the user's account.
### Tasks
The task branch is used to save both completed and incomplete tasks. When a user logs in, they are able to see their saved tasks. The user is able to save the expected completion date with each task as well. The user can click the completed? button, to either mark the specific task as complete or incomplete. The specific task will then be listed in the corresponding list.
### Events
Event branch that can be accessed once logged in. This feature will allow you to save events by their date, name, and location. Once you save one you can add it to the list of your events.

## A Note About Authentication

We want you to know that the login and registration code we have given you is fake, completely insecure, and would never be implemented in a professional application. It is a simulation authentication using very simplistic tools, because authentication is not a learning objective of students at NewForce.

You will be using [session storage](https://javascript.info/localstorage#sessionstorage) to keep track of which user has logged into Nutshell. You need to read the code in the **`LoginForm`**, **`RegisterForm`**, and **`LogoutButton`** components so that you see what is going on, but you do not need to change it.

When the user logs in, they should see _their_ data printed to the DOM. You can accomplish this by retrieving their user Id from session storage and using it to query json-server for their associated data. 
