// Message.js: Function to build the message chat element and print to the DOM.
// Author: Jon Newton

export const printMessageThreads = (messageIndex, userId) => {
    const userShortName = messageIndex.user.full_name.split(" ")
    return `<div class="row-col-1 p-1 d-block m-thread-${messageIndex.user.id}--block"><strong>${userShortName[0]}:</strong> ${messageIndex.message}</div>`
};

export const printMessageForm = (messageIndex, index) => {
    const indexUserReturned = messageIndex[index]
    const userShortName = indexUserReturned.user.full_name.split(" ")
    let compiledThreads = ""
    
    compiledThreads = `
                <div class="container-fluid" id="messages-inside--container">
                    <div class="col-12">
                        <h5 class="text-center mt-4">Messages</h5>
                    </div>
                    <div class="row justify-content-around align-items-center">
                        <div class="col-3 d-flex justify-content-start m-status--span"><strong>${indexUserReturned.user.full_name}</strong></div>
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
                </div>
    `

    return compiledThreads
};