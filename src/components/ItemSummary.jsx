import React from 'react'

const ItemSummary = () => {
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl m-4">
  <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">Length Counter with PNP/NPN Sensor Input | Make Multispan LC-10460</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos totam praesentium nostrum, quae assumenda possimus.</p>
    <div className='flex'>
        <p className='font-bold'>Price: <span className='font-medium'>12000</span></p>
        <p className='font-bold'>Customer Name: <span className='font-medium'>Rakesh Singh</span></p>
        <h2 className='font-bold'>12 Pieces</h2>
    </div>
    <div className="card-actions justify-center mt-5">
    <button className="btn btn-primary">Order Again</button>
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default ItemSummary
