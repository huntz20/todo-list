import create from 'zustand'
import useUserStore from "./useUserStore.js";

const mapTaskToTodo = async (headers, key, parent) => fetch(`https://todo-api-18-140-52-65.rakamin.com/todos/${key}/items`, headers)
    .then(res => res.json())
    .then(res => ({...parent, children: res}))
    .catch(err => parent)

const useTodoStore = create((set, get) => ({
    todos: [],
    loading: true,
    addLoading: false,
    showAddModal: false,
    setShowAddModal: (payload) => {
        set({showAddModal: payload})
    },
    addTodo: async (formValue) => {
        const token = useUserStore.getState().token
        const todos = get().todos
        const myHeaders = new Headers();
        const body = JSON.stringify(formValue)
        myHeaders.append("Cookie", "");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow',
            body
        };
        const request = await fetch("https://todo-api-18-140-52-65.rakamin.com/todos", requestOptions)
        const response = await request.json()
        const newTodo = {
            ...response,
            description: formValue.description
        }
        set({todos: [...todos, newTodo], addLoading: false, showAddModal: false})
    },
    fetch: async (token) => {
        const myHeaders = new Headers();
        myHeaders.append("Cookie", "");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);
        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const request = await fetch("https://todo-api-18-140-52-65.rakamin.com/todos", requestOptions)
        const response = await request.json()
        const newTodos = await Promise.all(response.map(e => mapTaskToTodo(requestOptions, e.id, e)))
        console.log(newTodos);
        set({todos: newTodos, loading: false})
    },
}))

export default useTodoStore
