import React from 'react'
import Info from './components/Info'
import Task from './components/Task'
import Employment from './components/Employment'

const Admin = () => {
  return (
    <div className="mx-2 md:mx-20 md:my-5">
      <header className='my-2'>
        <h1 className='md:text-[32px] text-[24px] font-bold text-[#333] '>Admin</h1>
      </header>
      <div className='flex items-center justify-center gap-10 lg:flex-row flex-col' >
        <Info />
        <Task />
      </div>
      <Employment />
      
    </div>
  )
}

export default Admin