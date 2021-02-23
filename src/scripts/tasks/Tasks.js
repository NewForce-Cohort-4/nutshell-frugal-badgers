/* This function is to build the task element
Author: Sophia Spaulding*/
export const Task = (taskNote) => {
    return `
    <section class = "task-container flex-container"
        <div class = "task-card">
            <p>Task: ${taskNote.task}</p>
            <p>Date: ${taskNote.date}</p>
            <div class = "checkbox"
            <p>Completed <input type="checkbox" id="completeNote--${taskNote.id}"></p>
            </div>
        </div>
    </section>
    `
}
