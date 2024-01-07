import React from 'react'
import { Products } from '../products'


function Home({user}) {




  return (
    <>

      <h1>Home Page</h1>
      <Products user={user} />


    
    </>
  )
}

export default Home