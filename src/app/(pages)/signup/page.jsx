'use client'

import React from 'react';
import Image from 'next/image';
import EmailSetUp from '@/components/atoms/emailSetUp';
import PasswordSetUp from '@/components/atoms/passwordSetUp';
import { AuthContainer } from '@/components/atoms';
import Button from '@/components/Button';
import IOS from '../../../../public/images/ios-logo.svg'
import Facebook from '../../../../public/images/facebook-logo.svg'
import Google from '../../../../public/images/google-logo.svg'
import Link from 'next/link';
import NameSetUp from '@/components/atoms/nameSetUp';
import PhoneSetUp from '@/components/atoms/phoneSetUp';

export default function Signup() {

  const imgLogo = [
    {
      img: IOS,
    },
    {
      img: Facebook,
    },
    {
      img: Google,
    },
  ]
 
  return (
        <AuthContainer>
        {/* <Image src="/images/people-happy.jpg" fill className="  absolute z-[999] " alt="img"  /> */}
        <Image src="/images/people-learning.png" alt="image" className='md:h-[100vh] md:relative  bg-contain h-[50vh] mb-3' width={1000} height={40} />
        <div className='flex flex-col items-center'>
          <h2 className='text-[#007bff] md:text-[40px] text-[24px] font-[500]   mb-[2rem]'>Sign Up</h2>
          <form  className='flex flex-col '>
            <NameSetUp text={"Name"} />
            <EmailSetUp/>
            <PasswordSetUp />
            <PhoneSetUp />
            <Link href={'/complete-sign-up'}>
            <Button text={"Next"}/>
            </Link>
          </form>
          <div className='flex items-center gap-[1rem] mt-4 md:mt-[4rem]'>
            <div className='md:w-[200px] m-4 w-[100px] bg-[#1D1D1D] h-[1px]'></div>
            <div>Or</div>
            <div className='md:w-[200px] w-[100px] bg-[#1D1D1D] h-[1px]'></div>
          </div>

        <div className="flex items-center justify-center gap-4 mt-[3rem]">
          {
            imgLogo.map(items => (
              <div key={items.img} className='bg-slate-100 w-[45px] h-[45px] flex items-center justify-center rounded-full'>
                <Image src={items.img} alt='image' />
              </div>
            ))
          }

        </div>

          <span className='mt-4'>Already have an account ?  <Link href='/signin' className='text-[#007bff]'>Sign In</Link></span>
        </div>
        </AuthContainer>
  );
}

