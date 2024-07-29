import React from 'react';

function Navbar() {
  return (
    <nav className='bg-white p-4 mb-3'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-black text-xl font-bold'>Logo</div>
        <div className='flex space-x-4'>
          <a href='#' className='text-black hover:text-gray-600'>
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
