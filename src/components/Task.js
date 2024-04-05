import '../styles/Dashboard.css'

export default function Task({taskName, taskDate, taskCat}) {
    return (
        <row className="task">
            <col>{taskName}</col>
            <col>{taskDate}</col>
            <col>{taskCat}</col>
        </row>
    )
}