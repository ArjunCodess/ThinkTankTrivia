import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='h-16 shadow-sm flex items-center'>
      <nav className='flex justify-between items-center w-9/12 mx-auto'>
        <a href="/">
          {/* <img src='' alt='ThinkTankTrivia Logo' /> */}
          <Link to="/"><h1 className='text-xl font-bold hover:tracking-widest transition-all duration-300'>ThinkTankTrivia</h1></Link>
        </a>

        <div className='flex items-center space-x-5'>
          <ul className='md:flex items-center space-x-5'>
          <Link to="/about"><li className='group hover:underline underline-offset-8 hover:tracking-widest hover:text-blue-500 py-2 bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>About Us</li></Link>
          </ul>
          <Link to="/quiz"><button className='font-medium px-5 py-1 border border-[#379eff] hover:text-white hover:bg-blue-700 hover:border-grey-900 rounded-lg hover:tracking-widest transition-all duration-300'>View Catalog</button></Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar