import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({ email: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
        });

        const json = await response.json();
        console.log(json);
        if (json.success) {
            // redirect
            localStorage.setItem('token' , json.authtoken);
            props.showAlert("Logged in Successfully" , "success")
            navigate("/");
        } else {
            props.showAlert("Invalid details" , "danger")
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div className='mt-3'>
            <h2>Login to iNotebook</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        value={credentials.email} 
                        onChange={onChange} 
                        name="email" 
                        aria-describedby="emailHelp" 
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        onChange={onChange} 
                        id="password" 
                        value={credentials.password} 
                        name="password" 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Login;
