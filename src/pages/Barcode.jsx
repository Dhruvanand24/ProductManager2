import React from 'react';
import Summary from '../components/Summary';
import { useParams } from 'react-router-dom';

const Barcode = () => {
  const { productId } = useParams();

  

  return (
    <div className="text-center p-8">
      <div>
        <h1 className='font-bold text-2xl'>Barcode</h1>
      </div>
      <div>
        <Summary data={productId} />
        
        
      </div>
    </div>
  );
};
export default Barcode;
