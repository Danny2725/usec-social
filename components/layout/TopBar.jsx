
"use client";

import { Add, Search } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { SignOutButton, SignedIn, UserButton } from "@clerk/nextjs";
import { Logout } from '@mui/icons-material';
import React, { useState } from 'react'

const TopBar = () => {

  const router = useRouter()
  const [search, setSearch] = useState('')

  return (
    <div className='flex justify-between items-center mt-6 '>
      <div className="relative">
        <input
          type="text"
          className="search-bar"
          placeholder="Search posts, people, ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search
          className="search-icon"
          onClick={() => { }}
        />
      </div>
      <button className='create-post-btn' onClick={() => router.push("/create-post")}>
        <Add /> <p> Create A Post</p>
      </button>
              <div className='flex gap-3'>
        <SignedIn>
          <SignOutButton>
            <div className='flex cursor-pointer gap-4 items-center '>
              <Logout sx={{ color: "white", fontSize: "32px" }} />
            </div>
          </SignOutButton>
        </SignedIn>
      </div>

    </div>
  // hashdas
  )
}

export default TopBar

