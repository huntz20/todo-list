import TodoCard from "./component/TodoCard.jsx";
import React, {useState} from "react";
import Modal from "./component/Modal.jsx";
import AuthForm from "./component/AuthForm.jsx";
import useUserStore from "../store/useUserStore.js";
import useTodoStore from "../store/useTodoStore.js";
import addIcon from "./assets/add.svg"
import TodoForm from "./component/TodoForm.jsx";

function App() {
    const addTodoModal = useTodoStore(state => state.showAddModal)
    const setAddTodoModal = useTodoStore(state => state.setShowAddModal)
    const email = useUserStore((state) => state.email)
    const authLoading = useUserStore(state => state.loading)
    const isSigning = useUserStore(state => state.isSigning)
    const todoLoading = useTodoStore(state => state.loading)
    const todos = useTodoStore(state => state.todos)

    const renderTodosLoading = () => {
        if (!todoLoading) return null;
        return <>
            <TodoCard isLoading={true}/>
            <TodoCard isLoading={true}/>
            <TodoCard isLoading={true}/>
            <TodoCard isLoading={true}/>
        </>
    }

    const renderAddTodos = () => {
        if (todos.length >= 4) return null;
        return <div>
            <Modal show={addTodoModal} onClose={() => setAddTodoModal(false)} title='Add Todos'>
                <TodoForm />
            </Modal>
            <div className="h-[345px] cursor-pointer border-2 rounded-lg p-4" onClick={() => setAddTodoModal(true)}>
                <div className="h-full flex justify-center flex-col items-center gap-4">
                    <img src={addIcon} alt="addIcon" width="80"/>
                    <span className="text-gray-400">Click here to add todos</span>
                </div>
            </div>
        </div>
    }

    const renderTodos = () => {
        if (todoLoading) return null;
        return <>
            {todos.map(((e, i) => <TodoCard data={e} key={e.id} index={i} />))}
            {renderAddTodos()}
        </>
    }


    return (
        <div className="App">
            <Modal show={email === ''} title={isSigning ? 'Sign In' : 'Sign Up'} disableClose={authLoading}>
                <AuthForm/>
            </Modal>
            <div className="border-b-2 px-4 py-4">
                <h1 className="text-bold">Product Roadmap</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 py-6 w-full">
                {renderTodosLoading()}
                {renderTodos()}
            </div>
        </div>
    )
}

export default App
