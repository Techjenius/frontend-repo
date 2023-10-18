import React from 'react'
import Image from 'next/image'
import Employ from '../../public/images/persons.svg'
import Employees from '../../public/images/employee.svg'
import Revolve from '../../public/images/revolve.svg'

const Card = () => {
  return (
    <div className='lg:w-[965px] w-full p-10 bg-[#0077FF] rounded-lg shadow-md'>
        <header className='text-white flex item-center justify-between  '>
            <h1 className='font-bold md:text-[24px] text-[16px]'>Start Onboarding</h1>
            <div className='flex items-start  gap-4'>
                <p className=' opacity-70 text-[12px]'>Total Tasks</p>
                <span className='md:text-[40px] text-[20px] font-bold'>3.78</span>
            </div>
        </header>

        <div className='flex flex-col md:flex-row mt-5 items-center justify-between gap-2'>
            <div className='flex flex-col items-center'>
                <Image src={Employ} alt='employ' className='bg-white p-2 rounded-full shadow-sm w-[100px]' />
                <button className=' px-[20px] py-[10px] bg-white mt-3 text-[#4D94FF] rounded shadow-md hover:opacity-75'>Onboard Employees</button>
            
            </div>
            <div className='flex flex-col items-center'>
                <Image src={Employees} alt='employ' className='bg-white p-2 rounded-full shadow-sm w-[100px]'  />
                <button className=' px-[20px] py-[10px] bg-white mt-3 text-[#4D94FF] rounded shadow-md hover:opacity-75'>Create Task </button>
            
            </div>
            <div className='flex flex-col items-center'>
                <Image src={Revolve} alt='employ' className='bg-white p-2 rounded-full shadow-sm w-[100px]'  />
                <button className=' px-[20px] py-[10px] bg-white mt-3 text-[#4D94FF] rounded shadow-md hover:opacity-75'>Add Admin</button>
            
            </div>
        </div>

        
    </div>
  )
}

export default Card