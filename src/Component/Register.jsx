import React, { useState } from 'react'

import { Link } from 'react-router-dom'

const Register = () => {

    const [userDetails,setUserDetails]=useState({
        name:"",
        email:"",
        password:"",
        age:"",
    })

    function handleInput(event)
    {
        setUserDetails((prevState)=>{
          return {...prevState,[event.target.name]:event.target.value};

        })
    }
    function handleSubmit(event)
    {
      event.preventDefault();
      console.log(userDetails);

      fetch("http://localhost:5173/register",{
        method:"POST",
        body:JSON.stringgify(userDetails),
        headers:{
          "Content-Type":"applicatiob/json"
        }
      })
      .then((response)=>{
        console.log(response);
      })
      .catch((err)=>{
        console.log(err);
      })
    }

  return (
    <>
      <div className="form-element">
         <form action="" className='form' onSubmit={handleSubmit}>
            <h1>REGISTER FOR USER</h1>
                <div className="mb-2">
                    <label htmlFor="exampleInputName1" className="form-label">Enter Your name</label>
                    <input type="text" onChange={handleInput} className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder='Full name' name='name' value={userDetails.name}/>
                </div>
                <div className="mb-2">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" onChange={handleInput} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Email' name='email' value={userDetails.email} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-2">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" onChange={handleInput} className="form-control" maxLength={8} id="exampleInputPassword1" placeholder='*******' name='password' value={userDetails.password}/>
                </div>
                <div className="mb-2">
                    <label htmlFor="exampleInputNumber1" className="form-label">Age</label>
                    <input type="number" onChange={handleInput} min={12} className="form-control" id="exampleInputNumber1" placeholder='enter your age' name='age' value={userDetails.age}/>
                </div>
                <button className='primary'>JOIN</button>
                <div className="text-center pt-3">Already Register? <Link to="/login">LOGIN</Link> </div>
         </form>
      </div>
    </>
  )
}

export default Register
