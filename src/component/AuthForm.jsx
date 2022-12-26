import React, {useState} from "react";
import useUserStore from "../../store/useUserStore.js";
import Alert from "./Alert.jsx";

const AuthForm = () => {
    const signing = useUserStore(state => state.signIning)
    const signup = useUserStore(state => state.signup)
    const setIsSigning = useUserStore(state => state.setSigning)
    const authLoading = useUserStore(state => state.loading)
    const isSigning = useUserStore(state => state.isSigning)
    const authErrMsg = useUserStore(state => state.errorMsg)
    const [auth, setAuth] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    })
    const onSubmit = (evt) => {
        evt.preventDefault()

        if (isSigning) {
            signing({email: auth.email, password: auth.password})
            return
        }

        signup({...auth})
    }

    const renderSigning = () => {
        return <form onSubmit={onSubmit} className="mb-4">
            <Alert type='error-alert' show={authErrMsg !== ''}>
                {authErrMsg}
            </Alert>
            <div className="mb-4">
                <label htmlFor="email">Email</label><br/>
                <input required={true} placeholder="Type your email" type="email" id="email" value={auth.email}
                       onChange={(evt) => setAuth({...auth, email: evt.target.value})}/>
            </div>
            <div className="mb-4">
                <label htmlFor="password">password</label><br/>
                <input required={true} className="progress-task" placeholder="Type your password" type="password"
                       id="password"
                       value={auth.password}
                       onChange={(evt) => setAuth({...auth, password: evt.target.value})}/>
            </div>

            <div className="flex justify-end my-6">
                <button disabled={authLoading} className="primary">Sign In</button>
            </div>
            <div className="text-center text-sm mb-2 text-gray-500">
                <span>If you don't have account you can sign up from <span
                    className="text-blue-600 cursor-pointer underline"
                    onClick={() => setIsSigning(false)}>here</span></span>
            </div>
        </form>
    }

    const renderSignup = () => {
        return <form onSubmit={onSubmit} className="mb-4">
            <Alert type='error-alert' show={authErrMsg !== ''}>
                {authErrMsg}
            </Alert>
            <div className="mb-4">
                <label htmlFor="name">Name</label><br/>
                <input required={true} placeholder="Type your name" type="text" id="name" value={auth.name}
                       onChange={(evt) => setAuth({...auth, name: evt.target.value})}/>
            </div>
            <div className="mb-4">
                <label htmlFor="email">Email</label><br/>
                <input required={true} placeholder="Type your email" type="email" id="email" value={auth.email}
                       onChange={(evt) => setAuth({...auth, email: evt.target.value})}/>
            </div>
            <div className="mb-4">
                <label htmlFor="password">Password</label><br/>
                <input required={true} className="progress-task" placeholder="Type your password" type="password"
                       id="password"
                       value={auth.password}
                       onChange={(evt) => setAuth({...auth, password: evt.target.value})}/>
            </div>
            <div className="mb-4">
                <label htmlFor="passwordConfirmation">Password Confirmation</label><br/>
                <input required={true} className="progress-task" placeholder="Retype your password" type="password"
                       id="passwordConfirmation"
                       value={auth.passwordConfirmation}
                       onChange={(evt) => setAuth({...auth, passwordConfirmation: evt.target.value})}/>
            </div>

            <div className="flex justify-end my-6">
                <button disabled={authLoading} className="primary">Sign In</button>
            </div>
            <div className="text-center text-sm mb-2 text-gray-500">
                <span>If you have account you can sign in from <span
                    className="text-blue-600 cursor-pointer underline"
                    onClick={() => setIsSigning(true)}>here</span></span>
            </div>
        </form>
    }
    if (!isSigning) {
        return renderSignup()
    }
    return renderSigning()
}


export default AuthForm
