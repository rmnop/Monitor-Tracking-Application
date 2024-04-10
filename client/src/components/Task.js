import '../styles/Dashboard.css'

export default function Task({taskName, taskDate, taskCat}) {
    return (
        <tr className="task">
            <td>{taskName}</td>
            <td>{taskDate}</td>
            <td>{taskCat}</td>
        </tr>
    )
}