import React from 'react'

function Login({handleLogin}) {
  return (
    <>
    
      <h1>Login</h1>
      <button className='btn btn-primary' onClick={handleLogin}> Login</button>

    </>
  )
}

export default Login