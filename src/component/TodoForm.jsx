import React, {useState} from "react";
import useTodoStore from "../../store/useTodoStore.js";

const TodoForm = () => {
    const [todo, setTodo] = useState({title: '', description: ''})
    const loading = useTodoStore(state => state.addLoading)
    const addTodo = useTodoStore(state => state.addTodo)
    const onSubmit = async (evt) => {
        evt.preventDefault()
        await addTodo(todo)
        setTodo({title: '', description: ''})
    }
    return <form onSubmit={onSubmit} className="mb-4">
        <div className="mb-4">
            <label htmlFor="title">Title</label><br/>
            <input placeholder="Type title" type="text" id="title" value={todo.title}
                   onChange={(evt) => setTodo({...todo, title: evt.target.value})}/>
        </div>
        <div className="mb-4">
            <label htmlFor="description">Description</label><br/>
            <textarea className="progress-task" placeholder="Type your description" type="text" id="description" value={todo.description}
                   onChange={(evt) => setTodo({...todo, description: evt.target.value})}/>
        </div>

        <div className="flex justify-end my-6">
            <button disabled={loading}  className="secondary">Cancel</button>
            <button disabled={loading} className="primary">Save Todo</button>
        </div>
    </form>
}

export default TodoForm
