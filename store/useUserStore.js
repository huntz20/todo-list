import create from 'zustand'
import useTodoStore from "./useTodoStore.js";

const useUserStore = create((set) => ({
    email: '',
    name: '',
    token: '',
    loading: false,
    isSigning: true,
    errorMsg: '',
    setSigning: (payload) => {
        set({isSigning: payload})
    },
    signIning: async (formVal) => {
        set({loading: true})
        const myHeaders = new Headers();
        myHeaders.append("Cookie", "");
        myHeaders.append("Content-Type", "application/json");

        const body = JSON.stringify(formVal)

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body,
            redirect: 'follow'
        };

        const request = await fetch("https://todo-api-18-140-52-65.rakamin.com/auth/login", requestOptions)
        const response = await request.json()
        if (request.status !== 200){
            set({errorMsg: response.message, loading: false})
            return
        }
        useTodoStore.getState().fetch(response.auth_token)
        set({email: formVal.email, token: response.auth_token})
    },
    signup: async (formVal) => {
        set({loading: true})
        const myHeaders = new Headers();
        myHeaders.append("Cookie", "");
        myHeaders.append("Content-Type", "application/json");

        const body = JSON.stringify(formVal)

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body,
            redirect: 'follow'
        };

        const request = await fetch("https://todo-api-18-140-52-65.rakamin.com/signup", requestOptions)
        const response = await request.json()
        console.log(response);
        if (request.status !== 201){
            set({errorMsg: response.message, loading: false})
            return
        }
        useTodoStore.getState().fetch(response.auth_token)
        set({email: formVal.email, token: response.auth_token})
    }
}))

export default useUserStore
