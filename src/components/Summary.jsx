
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase.config';
import React, { useEffect, useRef, useState } from 'react';
import Barcode from 'react-barcode';

const Summary = (props) => {
  const barcodeRef = useRef(null);
 
  const [productData, setProductData] = useState(null);
  const handleAdd = () => {
       
  }
  const handlePrint = () =>{
       window.print();
  };
  const handleSave = () => {
    const barcodeContainer = document.querySelector('.barcode-container');
    const svgElement = barcodeContainer.firstChild.cloneNode(true);
  
    const svgString = new XMLSerializer().serializeToString(svgElement);
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
  
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'barcode.svg';
    a.click();
  };

  // Helper function to convert data URI to blob
  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeString });
  };
  
  
  useEffect(() => {
    // Fetch product data from Firebase using the document ID
    const fetchProductData = async () => {
      try {
        const productDocRef = doc(db, 'Products', props.data);
        const productSnapshot = await getDoc(productDocRef);

        if (productSnapshot.exists()) {
          // Set the product data in the state
          setProductData(productSnapshot.data());
          
        } else {
          console.error('Product not found in Firestore.');
        }
      } catch (error) {
        console.error('Error fetching product data from Firestore:', error);
      }
    };

    fetchProductData();
  }, [props.data]); // Fetch data when the document ID changes

  if (!productData) {
    return <span className="loading loading-spinner text-info"></span>; // You can render a loading state while fetching data
  }
  return (
    <div>
     <h1 className='font-bold'>Successfully Added Item</h1>   
    <div className="card card-side bg-base-100 shadow-xl m-4">
    
<figure><img src={productData.ImageUrl} alt="Product" style={{ maxWidth: '100%', maxHeight: '300px', width: 'auto', height: 'auto' }}/></figure>
<div className="card-body">
  <h2 className="card-title">{productData.Name}</h2>
  <p>{productData.Description}</p>
  <div className='flex'>
      <p className='font-bold'>Price: <span className='font-medium'>{productData.Price}</span></p>
      <p className='font-bold'>Product Id: <span className='font-medium'></span>{props.data}</p>
      <p className='font-bold'>Category: <span className='font-medium'>{productData.Category}</span></p>
      <p className='font-bold'>Manufacturer Name: <span className='font-medium'>{productData.manufacturer}</span></p>
      <p className='font-bold'>Quantity: <span className='font-medium'>{productData.Quantity}</span></p>
      
      
  </div>
  <div className="card-actions justify-center mt-5">
  {/* <Barcode value={`https://localhost:5173/barcode/${props.data}`}  width={1}/> */}
  <div className="barcode-container"><Barcode value="https://www.mutualfundsahihai.com"  width={1} height={50} ref={barcodeRef}/> </div>
  <button className="btn btn-primary mx-5" onClick={handlePrint}>Print Bar Code</button>
    <button className="btn btn-primary mx-5" onClick={handleSave}>Save to device</button>

  </div>
</div>
</div>
<div className='justify-center items-center m-4'>
        <div className='flex justify-center items-center bg-white w-1/2 p-3 rounded-2xl shadow-md'>
          <div className='w-10 mx-5'><img  src="https://cdn.icon-icons.com/icons2/2428/PNG/512/shopify_black_logo_icon_147085.png" alt="store logo" /></div>
          <h1 className='mx-5'>Add Product to Shopify</h1>
          <button className="btn btn-outline btn-success" onClick={handleAdd}>Add</button>
        </div>
        </div>
  </div>
  )
}

export default Summary
