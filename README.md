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
Messages can be accessed once logged in. This feature will allow a user to broadcast messages to all other users when the chat window is active, as well as view messages sent from other users. This feature works in real-time, so if two users are logged in at the same time they can view each others messages instantly. All messages appear with the most recent shown at the bottom first.

|![Chat Page](/images/Chat-widget.png)|
|---|
| *Screenshot of the messages page showing the default chat window turned off.* |

|![Chat Page Active](/images/Active-Chat-function.png)|
|---|
| *Screenshot of the messages page showing the chat window active and the user is able to send and view messages.* |

|![Two Way Chat](/images/Two-Chats-Active.png)|
|---|
| *Screenshot of the messages page showing the chat window active and the user is able to view messages sent by other logged in users.* |

### Articles
Articles can be accessed once logged in. This feature will allow the user to save articles with their URL, a title, and a summary to their dashboard. After saving an article, the user's articles are shown by most recently saved at the top. Each article has a delete button that will remove that article from the user's account.

|![Articles Page](/images/Articles-widget.png)|
|---|
| *Screenshot of the articles page showing multiple articles sorted by the most recently saved first.* |

|![Articles Page Action](/images/Add-Article-function.png)|
|---|
| *Screenshot of the articles page showing the "save article" action working.* |

### Tasks
Tasks can be accessed once logged in. This feature will allow the user to save new tasks with a completion date and name and view their list of tasks to compplete. The user can click the "completed?" button to either mark the specific task as complete or incomplete. Once a task is marked complete, it is removed and displayed under the completed task page instead.

|![Task Page](/images/Tasks-widget.png)|
|---|
| *Screenshot of the default task page showing multiple tasks that are not complete.* |

|![Task Page Action](/images/Add-Task-function.png)|
|---|
| *Screenshot of the task page showing the "save task" action working.* |

|![Completed Task Page](/images/Completed-Task-widget.png)|
|---|
| *Screenshot of the completed task page showing a completed task the user can mark not complete and move back into their ToDos.* |

### Events
Events can be accessed once logged in. This feature will allow the user to save their events by their date, name, and location. Once saved, the user will view it on the dashboard.

|![Events Page](/images/Events-widget.png)|
|---|
| *Screenshot of the events page showing multiple events and the first one is emphasized for the user.* |

|![Events Page Action](/images/Add-Event-function.png)|
|---|
| *Screenshot of the events page showing the "save event" action working and the user can scroll their events in the list.* |

## A Note About Authentication

We want you to know that the login and registration code we have given you is fake, completely insecure, and would never be implemented in a professional application. It is a simulation authentication using very simplistic tools, because authentication is not a learning objective of students at NewForce.

You will be using [session storage](https://javascript.info/localstorage#sessionstorage) to keep track of which user has logged into Nutshell. You need to read the code in the **`LoginForm`**, **`RegisterForm`**, and **`LogoutButton`** components so that you see what is going on, but you do not need to change it.

When the user logs in, they should see _their_ data printed to the DOM. You can accomplish this by retrieving their user Id from session storage and using it to query json-server for their associated data. 
