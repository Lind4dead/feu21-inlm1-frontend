import React from 'react'
import { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../contexts/userContext'
import actiontypes from '../reducers/actiontypes'


const Navbar = () => {

  
const { user, dispatch } = useContext(UserContext)

const logout = () => {
  dispatch({
    type: actiontypes().users.logout
  })
}


  useEffect(() => {
    dispatch({
      type: actiontypes().users.checkToken,
    })
  
  }, [dispatch])
  

  return (
    <nav className="navbar navbar-dark navbar-expand-md bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" href="#">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <NavLink className="nav-link active" to="/" aria-current="page" href="#">Home</NavLink>
        </li>
        <li className="nav-item">
          {user ? <NavLink onClick={logout} className="nav-link" to="/">Logout</NavLink> : <NavLink className="nav-link" to="/login">Log in</NavLink>}
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar