import create from 'zustand'

const useTodoStore = create((set) => ({
    todos: {},
    loading: true,
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

        fetch("https://todo-api-18-140-52-65.rakamin.com/todos", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    },
}))

export default useTodoStore
