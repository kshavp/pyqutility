import React from 'react'
import {info} from '../constant';
import Navbar from './Navbar';

const Header:React.FC = () => {
  return (
    <> 
        <h1>{info.title}</h1>
        <h1>{info.desc}</h1>
        <Navbar />
    </>
  )
}

export default Header