import React from 'react'
import {Link} from 'react-router-dom'

function PageNotFound() {
  return (
    <>
    <h1>404- Page Not Found</h1>
    <Link to='/' className='btn btn-info'>Return Home Page</Link>
    </>
  )
}

export default PageNotFound