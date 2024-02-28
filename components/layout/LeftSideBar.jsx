"use client";

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Thuy from "../../assets/Thuy.jpg"
import logo from "../../assets/logo.jpg"
import Menu from "./Menu";
import { SignOutButton, SignedIn, UserButton } from "@clerk/nextjs";
import { Logout } from '@mui/icons-material';

const LeftSideBar = () => {

  const isLoggedIn = true;

  return (
    <div className='h-screen left-0 top-0 sticky overflow-auto px-10 py-6 flex flex-col gap-6 max-md:hidden custom-scrollbar'>
      <Link className='flex items-center' href="/">
        <Image src={logo} alt="logo" width={150} height={150} />
        <div>USEC SOCIAL</div>
      </Link>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col gap-2 items-center text-light-1'>
          <Link href="/">
            <Image src={Thuy} alt="profile photo" width={50} height={50} className='rounded-full' />
          </Link>
          <p className='text-small-bold'> Danny</p>
        </div>
        <div className='flex text-light-1 justify-between'>
          <div className='flex flex-col items-center '>
            <p className='text-base-bold'> 1</p>
            <p className='text-base-bold'> Posts</p>
          </div>

          <div className='flex flex-col items-center '>
            <p className='text-base-bold'> 1</p>
            <p className='text-base-bold'> Follower</p>
          </div>

          <div className='flex flex-col items-center '>
            <p className='text-base-bold'> 1</p>
            <p className='text-base-bold'> Following</p>
          </div>
        </div>

        <hr />

        <Menu />

        <hr />

        <div className='flex gap-4 items-center'>
          <UserButton />
          <div className='flex flex-col'>
            <p className='text-light-1 text-body-bold'> Manager Account</p>
          </div>
        </div>
        <SignedIn>
          <SignOutButton>
            <div className='flex cursor-pointer gap-4 items-center '>
              <Logout sx={{ color: "white", fontSize: "32px" }} />
              <p className='text-body-bold text-light-1'>Log out</p>
            </div>
          </SignOutButton>
        </SignedIn>

      </div>
    </div>
  )
}

export default LeftSideBar;
