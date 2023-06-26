import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Register() {
    const [value,setValue] = useState({
        name:'',
        email:'',
        password:''
    }) 
    axios.defaults.withCredentials = true;
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:5000/register',value)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
              <div className='mb-3'>
                <label htmlFor='name'>
                    <strong>Name</strong>
                </label>
                <input type='text' name='name'
                onChange={(e)=>setValue(e.target.value)}
                 className='form-control rounded-0'></input>
              </div>
              <div className='mb-3'>
                <label htmlFor='email'>
                    <strong>Email</strong>
                </label>
                <input type='email' name='email' 
                onChange={(e)=>setValue(e.target.value)}
                className='form-control rounded-0'></input>
              </div>
              <div className='mb-3'>
                <label htmlFor='password'>
                    <strong>Password</strong>
                </label>
                <input type='password' name='password' 
                onChange={(e)=>setValue(e.target.value)}
                className='form-control rounded-0'></input>
              </div>
              <button type='submit' className='btn btn-success mb-3'>Register</button>
              <p>Already have account</p>
              <Link to='/login' className='btn btn-primary mb-3'>Login</Link>
            </form>
        </div>
    </div>
  )
}

export default Register