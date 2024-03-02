import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import validation from '../utilities/loginValidation';

export default function Login() {
    const [values, setValues] = useState({
        username: '', 
        password: ''
    })

    const [errors, setErrors] = useState({})

    const handleSubmit=(event)=>{
        event.preventDefault(); 
        setErrors(validation(values))
    }

    const handleInput=(event)=>{
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
   
    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'> 
        <div className='bg-white p-3 rounded w-25'>
            <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="username"><strong>Username</strong></label>
                    <input type="username" placeholder='Enter Username' name='username'
                     onChange={handleInput} className='form-control rounded-0'/>
                    {errors.username && <span className='text-danger'>{errors.username}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder='Enter Password' name='password'
                    onChange={handleInput} className='form-control rounded-0'/>
                     {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                <button type='submit' className='btn btn-success w-100'>Log in</button>
                <p>You are agree to our terms and policies</p>
                <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
            </form>
        </div>
    </div>
  )
}
