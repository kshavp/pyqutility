import React from 'react'
import {info} from '../constant';
import Navbar from './Navbar';

const Header:React.FC = () => {
  return (
    <div className='md:container my-6 md:mx-12'> 
        <h1 className='text-5xl text-customRed-dark text-center'>{info.title}</h1>
        <h1 className='text-sm text-center mx-8'>{info.desc}</h1>
        <Navbar />
    </div>
  )
}

export default Header