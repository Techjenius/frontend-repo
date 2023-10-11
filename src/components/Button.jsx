import React from 'react'

export default function Button({ ...props }) {
  return (
    
    <button {...props} className='bg-[#007bff] py-3 rounded-md outline-none border-none text-white text-center w-full mt-8'>{props.text}</button>
  )
}
