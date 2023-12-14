import React from 'react'
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import Modal from './Modal';

const Navbar = () => {
    
  return (
    <header className='shadow-md fixed top-0 left-0 right-0 z-50'>
      <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Made 2 Automate</a>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle btn-lg">
        <div className="indicator">
        <MdOutlineQrCodeScanner />
        </div>
      </div>
      
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          
          <div className="card-actions">
            <button className="btn btn-primary btn-block">Show Qr code here</button>
          </div>
        </div>
      </div>
    </div>

        <div className="indicator">
        <button className="btn bg-blue-900 text-white hover:text-black" onClick={()=>document.getElementById('my_modal_5').showModal()}>Add Product</button>
       <Modal />
        </div>
      
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    </header>
  )
}

export default Navbar
