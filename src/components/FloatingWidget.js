import '../styles/Dashboard.css'

export default function FloatingWidget() {
    var taskList = []
    var catList = []
    var showAddTaskWidget = false
    var showAddCatWidget = false

    if (showAddTaskWidget) {
        r = (
            <div className="floatingWidget">
                <NewTaskForm taskList={taskList} catList={catlist} showAddTaskWidget={showAddTaskWidget} showAddCatWidget={showAddCatWidget} />
            </div>
        )
    } else if (showAddCatWidget) {
        r = (
            <div className="floatingWidget">
                <NewCatForm catList={catList} />
            </div>
        )
    } else {
        r = (
            <div className="floatingWidget">
                <TaskList />
                <br />
                <AddTaskButton />
            </div>
        )
    }
    return (
        r
    )
}