'use client'
import Image from 'next/image';
import React from 'react';
import User from '../../../public/images/people.png'
import { Search } from '@mui/icons-material';

const Navbar = () => {

    return (
        <div>
            <div className="py-4 px-6 flex justify-between items-center shadow-md gap-5">
                <div className='flex justify-start items-center'>
                    <Search size={40} className='text-[#e0dfdf] hover:text-primary'/>
                    <input type="search" name="search" id="search" className='w-[100%] md:w-[300px] border-2 border-[#ececec] focus:border-primary outline-[#ececec] focus:outline-primary py-2 rounded-md' />
                </div>
                <div className="flex justify-start items-center pl-5 md:pl-0">
                    <Image  
                        src={User}
                        alt='userphoto.png'
                        width={300}
                        height={100}
                        className='w-[40px] h-[40px] rounded-full'
                    />
                    <span className='flex-col justify-start items-center pl-2 hidden md:flex'>
                        <h4 className='text-[15px] self-start font-semibold'>Daniel Alexander</h4>
                        <p className='text-[13px] self-start'>Admin</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar