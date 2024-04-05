import '../styles/Dashboard.css'

export default function TaskList({tasklist}) {
    const tasks = []

    for (let t of tasklist){
        tasks.push(<Task taskName={t.taskName} taskDate={t.taskDate} taskCat={t.taskCat} />)
    }

    return (
        <table className="taskList">
            <TableHeader />
            {tasks}
            <Task taskName="" taskDate="" taskCat=""/>
        </table>
    )
}