import React, { Component } from "react";
import '../styles/Dashboard.css'

class FloatingWidget extends Component {
    state = {
        isActive: true,
    }
    
    handleShow = () => {
    this.setState({
        isActive: true
    })
    }

    handleHide = () => {
    this.setState({
        isActive: false
    })
    }

    render() {
        return null
    }

    /*
    if (showAddTaskWidget) {
        r = (
            <div className="floatingWidget">
                <NewTaskForm taskList={taskList} catList={catList} showAddTaskWidget={showAddTaskWidget} showAddCatWidget={showAddCatWidget} />
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
                <TaskList taskList={taskList}/>
                <br />
                <AddTaskButton />
            </div>
        )
    }
    return (
        r
    )*/
}

export default FloatingWidget