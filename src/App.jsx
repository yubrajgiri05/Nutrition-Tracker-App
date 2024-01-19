import React from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Register from './Component/Register'
import Login from './Component/Login';
import NotFount from './Component/NotFount';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>

            <Route path='/' element={<Login/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='*' element={<NotFount/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
