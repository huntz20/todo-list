import React, {useState} from "react";
import useTodoStore from "../../store/useTodoStore.js";

const TaskForm = ({data = null}) => {
    const [task, setTask] = useState(data ? data : {name: '', progress_percentage: ''})
    const addTask = useTodoStore(state => state.addTask)
    const onSubmit = async (evt) => {
        evt.preventDefault()
        await addTask(task)
        setTask({name: '', progress_percentage: ''})
    }
    return <form onSubmit={onSubmit} className="mb-4">
        <div className="mb-4">
            <label>Task Name</label><br/>
            <input placeholder="Type your Task" type="text" value={task.name}
                   onChange={(evt) => setTask({...task, name: evt.target.value})}/>
        </div>
        <div className="mb-4">
            <label>Progress</label><br/>
            <input className="progress-task" placeholder="70%" type="text" value={task.progress_percentage}
                   onChange={(evt) => setTask({...task, progress_percentage: evt.target.value})}/>
        </div>

        <div className="flex justify-end my-6">
            <button className="secondary">Cancel</button>
            <button className="primary">Save Task</button>
        </div>
    </form>
}

export default TaskForm
