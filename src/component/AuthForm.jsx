import React, {useState} from "react";

const AuthForm = () => {
    const [isSigning, setIsSigning] = useState(true)
    const [auth, setAuth] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    })
    const onSubmit = (evt) => {
        evt.preventDefault()
    }

    const renderSigning = () => {
        return <form onSubmit={onSubmit} className="mb-4">
            <div className="mb-4">
                <label htmlFor="email">Email</label><br/>
                <input required={true} placeholder="Type your email" type="email" id="email" value={auth.email}
                       onChange={(evt) => setAuth({...auth, email: evt.target.value})}/>
            </div>
            <div className="mb-4">
                <label htmlFor="password">password</label><br/>
                <input required={true} className="progress-task" placeholder="Type your password" type="password" id="password"
                       value={auth.password}
                       onChange={(evt) => setAuth({...auth, password: evt.target.value})}/>
            </div>

            <div className="flex justify-end my-6">
                <button className="primary">Sign In</button>
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
                <input required={true} className="progress-task" placeholder="Type your password" type="password" id="password"
                       value={auth.password}
                       onChange={(evt) => setAuth({...auth, password: evt.target.value})}/>
            </div>
            <div className="mb-4">
                <label htmlFor="passwordConfirmation">Password Confirmation</label><br/>
                <input required={true} className="progress-task" placeholder="Retype your password" type="password"
                       id="passwordConfirmation"
                       value={auth.password_confirmation}
                       onChange={(evt) => setAuth({...auth, password_confirmation: evt.target.value})}/>
            </div>

            <div className="flex justify-end my-6">
                <button className="primary">Sign In</button>
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
