import '../styles/Dashboard.css'

export default function NewTaskForm({taskList, catList, showAddTaskWidget, showAddCatWidget}) {
    options = []
    
    const addTask = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const formProps = Object.fromEntries(formData)
        taskList.push({taskName: formProps.taskName, taskDate: formProps.taskDate, taskCat: formProps.taskCat})
        showAddTaskWidget = false
    }

    const addCat = (e) => {
        e.preventDefault()
        showAddTaskWidget = false
        showAddCatWidget = true
    }

    const cancel = (e) => {
        e.preventDefault()
        showAddTaskWidget = false
    }

    var tf = document.getElementById("addTaskForm")
    tf.addEventListener("addTask", addTask)
    tf.addEventListener("addCat", addCat)
    tf.addEventListener("cancel", cancel)

    for (let o of catList) {
        options.push(<option value={o.catName}>o</option>)
    }

    return (
        <form className="addTaskForm">
            <label for="taskName">Task Name:</label>
            <input id="taskName" type="text"></input>
            <label for="taskDate">Task Date:</label>
            <input id="taskDate" type="date"></input>
            <label for="taskCat">Task Category:</label>
            <select id="taskCat">
                {options}
            </select>
            <button id="addTask">Add Task</button>
            <button id="addCat">Add Category</button>
            <button id="cancel">Cancel</button>
        </form>
    )
}