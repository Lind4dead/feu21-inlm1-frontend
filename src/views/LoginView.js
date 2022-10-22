import React from 'react'

const LoginView = () => {
  return (
    <div className='container'>
      <h1 className='text-center my-4'>Login</h1>
      <div className='border rounded p-3'>
        <div className="mb-3 row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" placeholder="email@example.com" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputPassword"  className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" placeholder='Password' className="form-control" id="inputPassword" />
          </div>
        </div>
        <button className='btn-dark btn'>Login</button>
      </div>
      <p className='text-center'>or <span className=''>register here</span></p>
    </div>
  )
}

export default LoginView