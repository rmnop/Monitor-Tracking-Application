import '../styles/Dashboard.css'

export default function AddTaskButton({taskListWidget, newTaskWidget}) {
    const addTask = (e) => {
        taskListWidget.handleHide()
        newTaskWidget.handleShow()
    }

    return (
        <div>
            <button onClick={addTask}>Add Task</button>
        </div>
    )
}