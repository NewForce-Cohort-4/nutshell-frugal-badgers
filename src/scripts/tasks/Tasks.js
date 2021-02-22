export const Task = (taskNote) => {
    return `
    <section class = "task-container flex-container"
        <div class = "task-card">
            <p>Task: ${taskNote.task}</p>
            <p>Date: ${taskNote.date}</p>
            <div class = "checkbox"
            <p><input type="checkbox" id="completeNote--${taskNote.id}"></p>
            </div>
        </div>
    </section>
    `
}

export const CheckedTask = (taskNote) => {
    return `
    <section class = "task-container flex-container"
        <div class = "task-card">
            <p>Task: ${taskNote.task}</p>
            <p>Date: ${taskNote.date}</p>
            <div class = "checkbox"
            <p><input type="checkbox" checked id="completeNote--${taskNote.id}"></p>
            </div>
        </div>
    </section>
    `
}