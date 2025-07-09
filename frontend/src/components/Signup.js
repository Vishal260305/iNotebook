import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({ name:"" ,email: "", password: "" , cpassword:""});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name,email,password} = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name,email,password}),
    });

    const json = await response.json();
    console.log(json);
    if (json.success) {
        // redirect
        localStorage.setItem('token' , json.authtoken);
        navigate("/");
        props.showAlert("Account Created Successfully" , "success")
    } else {
        props.showAlert("Invalid details" , "danger")
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
          <input type="text" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp" placeholder="Enter name" />
        </div>
        <div className="mb-2 my-2">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="mb-2 my-2">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" name="password" onChange={onChange} id="password" placeholder="Password" minLength={5} required/>
        </div>
        <div className="mb-2 my-2">
          <label htmlFor="cpassword">Confirm Password</label>
          <input type="password" className="form-control" name="cpassword" minLength={5} onChange={onChange} id="cpassword" placeholder="Password" required/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signup
