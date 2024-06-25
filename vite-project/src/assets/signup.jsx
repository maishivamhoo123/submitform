import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signuppage = () => {
    const [name , setName] = useState();
    const [email , setEmail] = useState();
    const [password , setPassword] = useState();
    const handelSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/register' , {name , email, password})
        .then(result =>console.log(result))
        .catch(err =>console.log(err))
    }

  return (
    <div style={{  color: 'white', height: '100vh', width:'100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft:'50%' }}>
      <form className="row g-3" style={{ backgroundColor: '#333', padding: '20px', borderRadius: '10px', width: '400px' }} onSubmit={handelSubmit}>
        <div className="col-md-12">
          <label htmlFor="nameOfCandidate" className="form-label">Name</label>
          <input type="text" className="form-control" id="nameOfCandidate" style={{ backgroundColor: '#555', color: 'white' }}
          onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className="col-md-12">
          <label htmlFor="inputEmail4" className="form-label">Email</label>
          <input type="email" className="form-control" id="inputEmail4" style={{ backgroundColor: '#555', color: 'white' }} 
          onChange={(e)=>{
            setEmail(e.target.value)
          }}/>
        </div>
        <div className="col-md-12">
          <label htmlFor="inputPassword4" className="form-label">Password</label>
          <input type="password" className="form-control" id="inputPassword4" style={{ backgroundColor: '#555', color: 'white' }} 
          onChange={(e)=>{
            setPassword(e.target.value)
          }}/>
        </div>
        <div className="col-12">
          <button style={{ backgroundColor: 'green', color: 'white', width: "100%" }} type="submit" className="btn btn-primary">Register</button>
        </div>
        <p>Already have an account?</p>
        <div className="col-12">
          <Link to="/login">
            <button style={{ backgroundColor: 'green', color: 'white', width: "100%" }} type="button" className="btn btn-primary">Sign in</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signuppage;
