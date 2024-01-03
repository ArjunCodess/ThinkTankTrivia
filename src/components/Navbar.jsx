import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='h-16 shadow-sm flex items-center'>
      <nav className='flex justify-between items-center mx-auto w-full'>
        <div>
          <Link to="/">
            <h1 className='text-xl ml-4 font-bold hover:tracking-widest transition-all duration-300'>ThinkTankTrivia</h1>
          </Link>
        </div>
        <div className='flex items-center space-x-5'>
          <ul className='md:flex items-center space-x-5'>
            <Link to="/quiz">
              <button className='mr-4 border-2 border-blue-700 hover:bg-blue-700 bg-white px-4 py-2 hover:text-white rounded-lg hover:tracking-widest transition-all duration-300'>
                Catalogue
              </button>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
