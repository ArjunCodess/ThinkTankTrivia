import React from 'react'
import loading from '../assets/loading.gif'

const Loading = () => {
    return (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center flex-col bg-zinc-700 bg-opacity-70 backdrop-filter backdrop-blur-sm z-50'>
            <img src={loading} alt="loading"/>
            <h1 className='text-white text-3xl font-medium'>Loading...</h1>
        </div>
    )
}

export default Loading