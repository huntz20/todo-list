import React, {useState} from "react";

const TaskForm = ({ data = null}) => {
    const [task, setTask] = useState(data ? data : {name: '', progress_percentage: ''})
    const handleProgressPercentageChange = (evt) => {
        const value = evt.target.value.replace('%','')
        console.log(value);
        if (!/[0-9]/.test(value)) {
            return evt.preventDefault()
        }
        setTask({...task, progress_percentage: value + '%'})

    }
    const onSubmit = (evt) => {
        evt.preventDefault()
    }
    return <form onSubmit={onSubmit} className="mb-4">
        <div className="mb-4">
            <label htmlFor="taskName">Task Name</label><br/>
            <input placeholder="Type your Task" type="text" id="taskName" value={task.name}
                   onChange={(evt) => setTask({...task, name: evt.target.value})}/>
        </div>
        <div className="mb-4">
            <label htmlFor="progressPercentage">Progress</label><br/>
            <input className="progress-task" placeholder="70%" type="text" id="progressPercentage" value={task.progress_percentage}
                   onChange={handleProgressPercentageChange}/>
        </div>

        <div className="flex justify-end my-6">
            <button  className="secondary">Cancel</button>
            <button className="primary">Save Task</button>
        </div>
    </form>
}

export default TaskForm
