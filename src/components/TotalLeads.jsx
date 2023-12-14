import React from 'react'
import Product from './Product'

const TotalLeads = () => {
  return (
    <div>
      <div className='flex justify-between w-screen p-10'>
        <h1 className='text-2xl'>Total Leads</h1>
        <button className="btn btn-primary">View All</button>
      </div>
      <div className='px-10 ml-5'>
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  )
}

export default TotalLeads
