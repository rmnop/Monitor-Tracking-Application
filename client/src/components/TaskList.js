import TableHeader from './TableHeader'
import Task from './Task'
import '../styles/Dashboard.css'

export default function TaskList({taskList}) {
    var tasks = []

    for (let t of taskList){
        tasks.push(<Task taskName={t.taskName} taskDate={t.taskDate} taskCat={t.taskCat} />)
    }

    return (
        <table className="taskList">
            <tbody>
                <TableHeader />
                {tasks}
                <Task taskName="" taskDate="" taskCat=""/>
            </tbody>
        </table>
    )
}