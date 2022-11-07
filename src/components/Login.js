import axios from 'axios'
import { useContext } from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/userContext'
import actiontypes from '../reducers/actiontypes'


const Login = () => {

  const { dispatch } = useContext(UserContext)
  const navigate = useNavigate()

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const onChange = e => {
    setUser(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.post('https://localhost:7035/api/users/login', user)
    dispatch({
      type: actiontypes().users.login,
      payload: res.data
    })
    setUser({
      email: '',
      password: ''
    })
    navigate("/")

  }

  return (
    <div>
      <h1 className='text-center my-4'>Login</h1>
      <form onSubmit={handleSubmit} className='border rounded p-3'>
        <div className="mb-3 row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input value={user.email} onChange={onChange} type="text" className="form-control" name='email' placeholder="email@example.com" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input value={user.password} onChange={onChange} type="password" placeholder='Password' name='password' className="form-control" id="inputPassword" />
          </div>
        </div>
        <button className='btn-dark btn'>Login</button>
      </form>
      
    </div>
  )
}

export default Login