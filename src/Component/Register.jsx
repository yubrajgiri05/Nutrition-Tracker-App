import React, { useState } from 'react'

import { Link } from 'react-router-dom'

const Register = () => {

    const [userDetails,setUserDetails]=useState({
        name:"",
        email:"",
        password:"",
        age:""
    })

    function handleInput(event)
    {
        
    }
  return (
    <>
      <div className="form-element">
         <form action="" className='form'>
            <h1>REGISTER FOR USER</h1>
                <div className="mb-2">
                    <label htmlFor="exampleInputName1" className="form-label">Enter Your name</label>
                    <input type="text" onChange={handleInput} className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder='Full name' name='name'/>
                </div>
                <div className="mb-2">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" onChange={handleInput} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Email' name='email' />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-2">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" onChange={handleInput} className="form-control" id="exampleInputPassword1" placeholder='*******' name='password'/>
                </div>
                <div className="mb-2">
                    <label htmlFor="exampleInputNumber1" className="form-label">Age</label>
                    <input type="number" onChange={handleInput} className="form-control" id="exampleInputNumber1" placeholder='enter your age' name='number'/>
                </div>
                <button className='primary'>JOIN</button>
                <div className="text-center pt-3">Already Register? <Link to="/login">LOGIN</Link> </div>
         </form>
      </div>
    </>
  )
}

export default Register
