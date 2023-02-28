import React, { useState } from 'react';
import '../styles/signin.css';

function Signin() {
    const [usernamelog, setUsernamelog] = useState("");
    const [passwordlog, setPasswordlog] = useState("");

    function handleLogin(e) {
        e.preventDefault();
        let pass = localStorage
            .getItem("password")
            .replace(/"/g, "");
        let user = localStorage.getItem("username").replace(/"/g, "");


        if (!usernamelog || !passwordlog) {
            alert("Enter your username and password to login");
        } else if (passwordlog !== pass || usernamelog !== user) {
            alert("Wrong password or username")
        } else {
            alert("Successful Login")
            setUsernamelog("");
            setPasswordlog("");
        }
    }
    return (
        <>
            <div className='signin_page'>
                <div className="signin_container" >
                        <form onSubmit={handleLogin}>
                            <h1>Sign In</h1>
                            <div className='input_signin'>
                                <div className='label'>
                                    <input type='text' value={usernamelog} onChange={(event) => setUsernamelog(event.target.value)} required />
                                    <label> Username</label>
                                </div>
                                <div className='label'>
                                    <input type='password' value={passwordlog} onChange={(event) => setPasswordlog(event.target.value)} required />
                                    <label>Password</label>
                                </div>
                                <button type='submit'>Sign In</button>
                            </div>
                        </form>
                </div>
            </div>
        </>
    )
}
export default Signin; 