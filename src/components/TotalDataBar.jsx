import React from 'react';

const TotalDataBar = () => {
  return (
    <div className='flex justify-between w-screen p-4 flex-wrap bg-gradient-to-b from-0% from-[#ffffff] to-[#FCFCFC] to-100% border-b border-gray-500'>
       <div className='flex flex-col items-center justify-center m-4 p-2'>
      <h1 className='text-4xl font-bold'>112</h1>
      <h3>Total Orders</h3>
    </div>
    <div className='flex flex-col items-center justify-center m-4 p-2'>
      <h1 className='text-4xl font-bold'>50</h1>
      <h3>New Stocks</h3>
    </div>
    <div className='flex flex-col items-center justify-center m-4 p-2'>
      <h1 className='text-4xl font-bold'>0</h1>
      <h3>Dead Stocks</h3>
    </div>
    <div className='flex flex-col items-center justify-center m-4 p-2'>
      <h1 className='text-4xl font-bold'>25</h1>
      <h3>Total Leads</h3>
    </div>
    <div className='flex flex-col items-center justify-center m-4 p-2'>
      <h1 className='text-4xl font-bold'>1,11,200</h1>
      <h3>Total Revenue</h3>
    </div>
      
      
    </div>
  );
};

export default TotalDataBar;
