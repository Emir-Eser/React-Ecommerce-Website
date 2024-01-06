import React from 'react'
import Categories from './Categories'
import Products from './Products'
import Category from './Category'
import Product from './Product'
import { Outlet } from 'react-router-dom'

function ProductLayout() {
  return (
    <div className='row'>
      <div className=''> <Categories /> </div>
      <div> 
          <Outlet />
         {/* <Category />  */}
         </div>
    </div>
  )
}

export default ProductLayout
