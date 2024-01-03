import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
    <Navbar />
    <Outlet />
    <Analytics />
    </>
  )
}

export default App
