import React, { useState } from 'react';
import '../styles/signup.css';

function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleFormSubmit(e) {
        e.preventDefault();
            localStorage.setItem("username", JSON.stringify(username));
            localStorage.setItem("email", JSON.stringify(email));
            localStorage.setItem("password", JSON.stringify(password));
            alert("Successful Sign Up");
            setUsername("");
            setEmail("");
            setPassword("");
    }

    return (
        <>
            <div className='signup_page'>
                <div className="signup_container">
                    {" "}
                        <form onSubmit={handleFormSubmit}>
                            <h1>Sign Up</h1>
                            <div className='input_signup'>
                                <div className='label'>
                                    <input type='text' value={username} onChange={(event) => setUsername(event.target.value)} required />
                                    <label> Username</label>
                                </div>
                                <div className='label'>
                                    <input type='email' value={email} onChange={(event) => setEmail(event.target.value)} required />
                                    <label>Email</label>
                                </div>
                                <div className='label'>
                                    <input type='password' value={password} onChange={(event) => setPassword(event.target.value)} required />
                                    <label>Password</label>
                                </div>
                                <button type='submit'>Sign Up</button>
                                
                            </div>
                        </form>
                </div>
            </div>
        </>
    )
}
export default Signup; 