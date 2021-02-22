// Message.js: Function to build the message chat element and print to the DOM.
// Author: Jon Newton

// Function to print individual threads to the chat widget.
export const printMessageThreads = (messageIndex) => {
    const userShortName = messageIndex.user.full_name
    const userEmail = messageIndex.user.email
    // If userShortName is not defined in the API, use current users email when printing threads.
    if (userShortName === undefined) {
        return `<div class="row-col-1 p-1 d-block m-thread-${messageIndex.user.id}--block"><strong>${userEmail}:</strong> ${messageIndex.message}</div>`    
    } else {
        const userFirstName = userShortName.split(" ")
        return `<div class="row-col-1 p-1 d-block m-thread-${messageIndex.user.id}--block"><strong>${userFirstName[0]}:</strong> ${messageIndex.message}</div>`
    }
};

// Unfinished function to flag last message sent.

// export const newestUserMessage = (messageIndex) => {
//     const userShortName = messageIndex.user.full_name.split(" ")
//     return `<div class="row-col-1 p-1 d-block m-lastThread-${messageIndex.user.id}--block"><strong>${userShortName[0]}:</strong> ${messageIndex.message}</div>`
// };

export const printMessageForm = (messageIndex , userIndex) => {
    // Declare empty string to hold printed message threads.
    let compiledThreads = ""

    // Declare variable to hold the activeUser Id
    const userId = Number(sessionStorage.getItem("activeUser"))
    
    // Match user passed from userData Provider to userId and return as an object.
    const matchedUserReturned = () => {
        let unIndexedUser = userIndex.filter(user => user.id === userId)
        return unIndexedUser[0]
    };
    
    // Store user returned by filter in variable.
    const indexUserReturned = matchedUserReturned();

    const displayUserEmail = indexUserReturned.email
    
    // Condition checks for full name in user object, if none exists prints the user's email to the DOM.
    if (indexUserReturned.full_name === undefined) {
        compiledThreads = `
                <div class="container-fluid" id="messages-inside--container">
                    <div class="col-12">
                        <h5 class="text-center mt-4">Messages</h5>
                    </div>
                    <div class="row justify-content-around align-items-center">
                        <div class="col-3 d-flex justify-content-start m-status--span"><strong>${displayUserEmail}</strong></div>
                        <div class="col-7 d-flex justify-content-end m-status--span">
                            <input type="radio" class="btn-check" name="options-outlined" id="message-online--radio" autocomplete="off">
                            <label class="btn btn-outline-primary" for="message-online--radio">Online</label>
                            <input type="radio" class="btn-check" name="options-outlined" id="message-offline--radio" autocomplete="off">
                            <label class="btn btn-outline-danger" for="message-offline--radio">Offline</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="container-fluid mt-2" id="m-history--container">
                            <div class="row">
                                <div class="col mb-2" id="m-history--span">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="container-fluid mt-2 align-items-end" id="m-send--container">
                            <div class="row">
                                <div class="input-group col-9">
                                    <input class="form-control" placeholder="New Message" type="text" name="message-field" id="new-message--input">
                                    <button class="submit btn btn-primary" id="message-submit--btn" value="Send">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`    
    } else {
        compiledThreads = `
                <div class="container-fluid" id="messages-inside--container">
                    <div class="col-12">
                        <h5 class="text-center mt-4">Messages</h5>
                    </div>
                    <div class="row justify-content-around align-items-center">
                        <div class="col-3 d-flex justify-content-start m-status--span"><strong>${indexUserReturned.full_name}</strong></div>
                        <div class="col-7 d-flex justify-content-end m-status--span">
                            <input type="radio" class="btn-check" name="options-outlined" id="message-online--radio" autocomplete="off">
                            <label class="btn btn-outline-primary" for="message-online--radio">Online</label>
                            <input type="radio" class="btn-check" name="options-outlined" id="message-offline--radio" autocomplete="off">
                            <label class="btn btn-outline-danger" for="message-offline--radio">Offline</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="container-fluid mt-2" id="m-history--container">
                            <div class="row">
                                <div class="col mb-2" id="m-history--span">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="container-fluid mt-2 align-items-end" id="m-send--container">
                            <div class="row">
                                <div class="input-group col-9">
                                    <input class="form-control" placeholder="New Message" type="text" name="message-field" id="new-message--input">
                                    <button class="submit btn btn-primary" id="message-submit--btn" value="Send">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
    }

    return compiledThreads
};