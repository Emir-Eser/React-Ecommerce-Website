import React from 'react'
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard'

function Products({user}) {
    const [last50Products, setLast50Products] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=50')
            .then(res => res.json())
            .then(res => setLast50Products(res))
    })
    return (
        <>
            <h2>Products</h2>
            <div className='row row-cols-sm-3 row-cols-md-4'>
                {last50Products.map(product => <ProductCard  key={product.id} item={product} user={user} />)}
            </div>
        </>
    )
}

export default Products