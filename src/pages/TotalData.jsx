import React from 'react'
import TotalDataBar from '../components/TotalDataBar'
import TotalOrders from '../components/TotalOrders'
import TotalLeads from '../components/TotalLeads'
import DeadStocks from '../components/DeadStocks'

const TotalData = () => {
  return (
    <div className='flex flex-col'>
      <TotalDataBar />
      <TotalOrders />
      <TotalLeads />
      <DeadStocks />
    </div>
  )
}

export default TotalData
