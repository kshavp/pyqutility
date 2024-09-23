import React from 'react'
import {info} from '../constant';
import Navbar from './Navbar';

const Header:React.FC = () => {
  return (
    <div className='my-6 md:px-12'> 
        <h1 className='font-bold my-6 text-5xl text-customRed-dark text-center'>{info.title}</h1>
        <h1 className='text-sm my-6 text-center mx-8'>{info.desc}</h1>
        <Navbar />
    </div>
  )
}

export default Header