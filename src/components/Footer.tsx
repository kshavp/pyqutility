import React from 'react'
import Quotations from './Quotations'

const Footer:React.FC = () => {
  return (
    <div className='font-semibold w-full p-4 border-t-2 border-customRed-light bg-white'> 
      <Quotations /> 
    </div>
  )
}

export default Footer