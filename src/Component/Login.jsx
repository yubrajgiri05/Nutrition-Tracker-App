import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
       <div className="form-element">
         <form action="" className='form'>
            <h1>LogIn For FITNESS</h1>
                <div className="mb-2">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Email' />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-2">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='*******'/>
                </div>
                <button className='primary'>LOGIN</button>
                <div className="text-center pt-3"> Not Register ? <Link to="/register">Creat Account</Link></div>
         </form>
      </div>
    </>
  )
}

export default Login
