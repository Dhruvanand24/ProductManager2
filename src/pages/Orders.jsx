import React from 'react';
import ItemSummary from '../components/ItemSummary';

const Orders = () => {
  return (
    <div className="text-center p-8">
      <div>
        <h1 className='font-bold text-2xl'>Orders</h1>
      </div>
      <div>
        <ItemSummary />
        <ItemSummary />
        <ItemSummary />
        <ItemSummary />
      </div>
    </div>
  );
};

export default Orders;
