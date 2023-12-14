import React from 'react'
import Product from './Product'
import { useLocation, useNavigate } from 'react-router-dom'

const TotalOrders = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const handleViewAll = () =>{
        navigate('/orders', {state:{from: location}})
    }
  return (
    <div>
      <div className='flex justify-between w-screen p-10'>
        <h1 className='text-2xl'>Total Orders</h1>
        <button className="btn btn-primary" onClick={handleViewAll}>View All</button>
      </div>
      <div className='px-10 ml-5'>
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  )
}

export default TotalOrders
