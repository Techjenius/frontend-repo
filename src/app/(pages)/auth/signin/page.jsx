'use client'

import React, { useEffect } from 'react';
import Image from 'next/image';
// import { gsap } from 'gsap';
import EmailSetUp from '@/components/atoms/emailSetUp';
import PasswordSetUp from '@/components/atoms/passwordSetUp';
import { AuthContainer } from '@/components/atoms';
import Button from '@/components/Button';
import IOS from '../../../../../public/images/ios-logo.svg'
import Facebook from '../../../../../public/images/facebook-logo.svg'
import Google from '../../../../../public/images/google-logo.svg'
import Link from 'next/link';

export default function Signin() {

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
  // useEffect(() => {
  //   // Create a GSAP animation
  //   const tween = gsap.fromTo(
  //     '.animate-out',
  //     { opacity: 1},
  //     { opacity: 0, duration: 5, easeOut: 'elastic' }
  //   );
  //   const twin = gsap.fromTo(
  //     '.animate-in',
  //     { opacity: 0, },
  //     { opacity: 1, duration: 5, easeIn: 'elastic', }
  //   );

  //   // Pause the animation initially
  //   tween.pause();
  //   twin.pause();
  //   // Play the animation with a duration of 3 seconds
  //   tween.play();
  //   // tween.pause();
  //   twin.play();
  //   // twin.pause();
  // }, []);
  
  return (
        <AuthContainer>
        {/* <Image src="/images/people-happy.jpg" fill className="  absolute z-[999] " alt="img"  /> */}
        <Image src="/images/manhappy.png" alt="image" className='md:h-[100vh] md:relative  bg-contain h-[50vh]' width={1000} height={40} />
        <div className='flex flex-col z-[999] items-center md:mt-0 mt-[2rem]'>
          <h2 className='text-[#007bff] md:text-[40px] text-[24px] font-[500]   mb-[2rem]'>Sign In</h2>
          <form  className='flex flex-col '>
            <EmailSetUp/>
            <PasswordSetUp />
            <Link href={'/home'}>
            <Button text={"Sign In"}/>
            </Link>
          </form>
          <div className='flex items-center gap-[1rem] mt-4 md:mt-[4rem]'>
            <div className='md:w-[200px] w-[100px] bg-[#1D1D1D] h-[1px]'></div>
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

          <span className='mt-4'>Dont have an account ?  <Link href='/auth/signup' className='text-[#007bff]'>Sign Up</Link></span>
        </div>
        </AuthContainer>
  );
}

