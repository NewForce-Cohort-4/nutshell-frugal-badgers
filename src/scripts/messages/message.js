export const printMessageForm = (messageIndex, index) => {
    const indexUserReturned = messageIndex[index]

    return `
                <div class="col-6">
                    <h5 class="text-center">Messages</h5>
                </div>
                <div class="row">
                    <div class="col-2 m-status--span">${indexUserReturned.user.email}</div>
                    <div class="col-4 m-status--span">
                        <input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" checked>
                        <label class="btn btn-outline-success" for="success-outlined">Online</label>

                        <input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off">
                        <label class="btn btn-outline-danger" for="danger-outlined">Offline</label>
                    </div>
                </div>
                <div class="row">
                    <div class="container-fluid mt-2" id="m-history--container">
                        <div class="row">
                            <div class="col-6" id="m-history--span">
                                <div class="row p-1 d-block m-rec--block">Goodbye Earth!</div>
                                <div class="row p-1 d-block m-sent--block">${indexUserReturned.message}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="container-fluid mt-2 align-items-end" id="m-send--container">
                        <div class="row">
                            <input class="col-4" type="text" name="message-field" id="new-message--input">
                            <input class="col-2 ms-2 submit btn btn-primary" type="submit" id="message-submit--btn" value="Send">
                        </div>
                    </div>
                </div>
    `
};