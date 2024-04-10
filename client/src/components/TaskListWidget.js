import React, { Component } from "react";
import '../styles/Dashboard.css'
import FloatingWidget from "./FloatingWidget";
import TaskList from "./TaskList";
import AddTaskButton from "./AddTaskButton";
import NewTaskWidget from "./NewTaskWidget";

class TaskListWidget extends FloatingWidget {
    taskList = []
    catList = []

    tw = new NewTaskWidget()
    cw = new NewCatWidget()

    setTaskList = (task) => {
        taskList = task
    }

    render() {
        if (this.state.isActive) {
            return (
                <div className="floatingWidget">
                    <TaskList taskList={taskList}/>
                    <br />
                    <AddTaskButton hide={this} show={tw} text="Add Task"/>
                </div>
            )
        } else {
            return null
        }
    }
}