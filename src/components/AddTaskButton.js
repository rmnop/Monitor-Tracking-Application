import '../styles/Dashboard.css'

export default function AddTaskButton({showAddTaskWidget, taskList}) {
    const addTask = (e) => {
        showAddTaskWidget=true
    }

    return (
        <div>
            <button onClick={addTask}>Add Task</button>
        </div>
    )
}