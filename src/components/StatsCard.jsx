'use client'
import React, { useState } from 'react';
// import Image from 'next/image';
// import Baseline from '../../public/images/greater.svg'
import SpringModal from './molecules/Modal';


const StatsCard = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='lg:w-[680px] rounded-lg w-full shadow-lg border py-[49px] px-[84px] h-[40vh] overflow-x-auto cursor-pointer' onClick={handleOpen}>
        <h1 className='text-[24px] leading-8 font-medium'>Pending List</h1>
        <div>
          <p className=' mt-5 text-[32px] text-slate-300 '>You have no current records</p>
        </div>
        <SpringModal open={open} header={'Pending Requests'} handleClose={handleClose}/>
    </div>
  )
}

export default StatsCard