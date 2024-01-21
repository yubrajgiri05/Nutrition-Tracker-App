import React from 'react'
import CardDisplay from './CardDisplay'

const Home = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
        <div className="container d-flex justify-content-between">
          <a className="navbar-brand" href="#">Navbar</a>
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  style={{width:"fit-content"}}/>
        </div>
      </nav>


       <CardDisplay/>
    </>
  )
}

export default Home
