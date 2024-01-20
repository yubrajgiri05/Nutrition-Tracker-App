import { NavLink } from "react-router-dom"


const Header = () => {
  return (
    <>
      <div className="container">
      <ul className="d-flex justify-content-between">
        <li>Home</li>
        <NavLink to="/login">Logout</NavLink>
      </ul>
      </div>
    </>
  )
  }

export default Header
