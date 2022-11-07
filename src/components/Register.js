import axios from 'axios'
import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/userContext'
import actiontypes from '../reducers/actiontypes'

const Register = () => {

  const { dispatch } = useContext(UserContext)

  const navigate = useNavigate()

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
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
    const res = await axios.post('https://localhost:7035/api/users/register', user)
    if (res.data) {
      dispatch({
        type: actiontypes().users.register,
        payload: res.data
      })
    }
    setUser({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    })
    navigate("/")

  }



  return (
    <div>
      <h1 className='text-center my-4'>Register</h1>
      <form onSubmit={handleSubmit} className='border rounded p-3'>
        <div className="mb-3 row">
          <label htmlFor="firstName" className="col-sm-2 col-form-label">First Name</label>
          <div className="col-sm-10">
            <input value={user.firstName} onChange={onChange} name="firstName" type="text" className="form-control" placeholder="John" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="lastName" className="col-sm-2 col-form-label">Last Name</label>
          <div className="col-sm-10">
            <input value={user.lastName} onChange={onChange} name="lastName" type="text" className="form-control" placeholder="Doe" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input value={user.email} onChange={onChange} name="email" type="text" className="form-control" placeholder="email@example.com" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input value={user.password} onChange={onChange} name="password" type="password" placeholder='Password' className="form-control" id="inputPassword" />
          </div>
        </div>
        <button className='btn-dark btn'>Register</button>
      </form>

    </div>
  )
}

export default Register