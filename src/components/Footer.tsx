import React from 'react'
import Quotations from './Quotations'

const Footer:React.FC = () => {
  return (
    <div className='fixed z-10 bottom-0 w-full p-4 border-t-2 border-blue'> 
      <Quotations /> 
    </div>
  )
}

export default Footer