import { useState } from 'react'
import Login from '../components/Login'
import Register from '../components/Register'

const LoginView = () => {
  const [login, setLogin] = useState(true)
  return (
    <div className='container'>
      {login ? 
      <Login /> :
      <Register />
      }
      {
        login ?
        <p className='text-center'>or <span role="button" onClick={() => setLogin(false)} className='cursor'>register here</span></p> :
        <p className='text-center'>or <span role="button" onClick={() => setLogin(true)} className='cursor'>login here</span></p>
      }
      
    </div>
  )
}

export default LoginView