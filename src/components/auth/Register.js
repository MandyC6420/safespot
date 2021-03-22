import React, { useRef } from "react"
import { useHistory } from "react-router-dom"
import "./Login.css"

export const Register = (props) => {
    
    const username = useRef()
    // const verifyPassword = useRef()
    const conflictDialog = useRef()
    const history = useHistory()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?username=${username.current.value}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()


        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    fetch("http://localhost:8088/Users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            username: username.current.value,
                            // name: `${firstName.current.value} ${lastName.current.value}`
                        })
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                localStorage.setItem("safespot_user", createdUser.id)
                                history.push("/")
                            }
                        })
                }
                else {
                    conflictDialog.current.showModal()
                }
            })
        
    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={conflictDialog}>
                <div>Account with that Username already exists</div>
                <button className="button--close" onClick={e => conflictDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register for Safe Spot</h1>
                <fieldset>
                    <label htmlFor="userName"> UserName </label>
                    <input ref={username} type="text" name="username" className="form-control" placeholder="Username" required autoFocus />
                </fieldset>
                {/* <fieldset>
                    <label htmlFor="lastName"> Last Name </label>
                    <input ref={lastName} type="text" name="lastName" className="form-control" placeholder="Last name" required />
                </fieldset> */} 
                {/* <fieldset>
                    <label htmlFor="inputEmail"> Username </label>
                    <input type="username" name="username" className="form-control" placeholder="Username" required />
                </fieldset> */}
                <fieldset>
                    <button type="submit"> Register </button>
                </fieldset>
            </form>
        </main>
    )
}

