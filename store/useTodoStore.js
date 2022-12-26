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
    showTaskModal: false,
    taskLoading: false,
    parentSelected: null,
    taskSelected: null,
    setTaskSelected: (payload) => {
        set({taskSelected: payload})
    },
    setParentSelected: (payload) => {
        set({parentSelected: payload})
    },
    setShowTaskModal: (payload) => {
      set({showTaskModal: payload})
    },
    setShowAddModal: (payload) => {
        set({showAddModal: payload})
    },
    addTask: async (formValue) => {
        set({taskLoading: true})
        const token = useUserStore.getState().token
        const todos = get().todos
        const parentSelected = get().parentSelected
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
        const request = await fetch(`https://todo-api-18-140-52-65.rakamin.com/todos/${parentSelected}/items`, requestOptions)
        const response = await request.json()
        const indexParent = todos.map(e => e.id).indexOf(parentSelected)
        todos[indexParent].children = [...todos[indexParent].children, response]
        set({todos, taskLoading: false, showTaskModal: false})
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
