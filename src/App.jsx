import React, { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Register from './Component/Register'
import Login from './Component/Login';
import NotFount from './Component/NotFount';
import Home from './Component/Home';

import { UserContext } from './contexts/UserContex';

const App = () => {

  const [loggedUser, setLoggedUser]= useState({})
  return (
    <>


    <UserContext.Provider value={{loggedUser,setLoggedUser}}>
      <BrowserRouter>
        <Routes>

            <Route path='/' element={<Login/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/track' element={<Home/>}/>
            <Route path='*' element={<NotFount/>}/>

        </Routes>
      </BrowserRouter>
      </UserContext.Provider>
    </>
  )
}

export default App
