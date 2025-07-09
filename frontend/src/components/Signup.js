import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, cpassword } = credentials;

    if (password !== cpassword) {
      props.showAlert("Passwords do not match", "danger");
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password }),
      });

      const json = await response.json();
      console.log("🔐 Signup Response:", json);

      if (json.success) {
        localStorage.setItem('token', json.authtoken);
        props.showAlert("Account Created Successfully", "success");
        navigate("/");
      } else {
        props.showAlert("Invalid details", "danger");
      }

    } catch (error) {
      console.error("❌ Signup Error:", error.message);
      props.showAlert("Something went wrong. Please try again.", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className='container mt-2'>
      <h2 className='my-3'>Create an account to use iNotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-2 my-2">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" name="name" onChange={onChange} placeholder="Enter name" required />
        </div>
        <div className="mb-2 my-2">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" name="email" onChange={onChange} placeholder="Enter email" required />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="mb-2 my-2">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" name="password" onChange={onChange} id="password" placeholder="Password" minLength={5} required />
        </div>
        <div className="mb-2 my-2">
          <label htmlFor="cpassword">Confirm Password</label>
          <input type="password" className="form-control" name="cpassword" onChange={onChange} id="cpassword" placeholder="Confirm Password" minLength={5} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
