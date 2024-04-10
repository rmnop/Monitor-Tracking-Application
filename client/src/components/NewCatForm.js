import '../styles/Dashboard.css'

export default function NewCatForm({catList, showAddCatWidget}) {

    const addCat = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const formProps = Object.fromEntries(formData)
        catList.push({catName: formProps.catName, catPriority: formProps.taskCat})
        showAddCatWidget = false
    }

    const cancel = (e) => {
        e.preventDefault()
        showAddCatWidget = false
    }

    var tf = document.getElementById("addCatForm")
    tf.addEventListener("addCat", addCat)
    tf.addEventListener("cancel", cancel)

    return (
        <form className="addCatForm">
            <label for="catName">Category Name:</label>
            <input id="catName" type="text"></input>
            <label for="catPriority">Category Priority:</label>
            <input id="catPriority" type="number"></input>
            <button id="addCat">Add Category</button>
            <button id="cancel">Cancel</button>
        </form>
    )
}