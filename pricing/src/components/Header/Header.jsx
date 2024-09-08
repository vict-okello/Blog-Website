import React from 'react'
import { useState } from 'react'

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <div className='flex, flex-wrap sticky top-0 left-0 justify-center items-center p-4 bg-[#141414]'>
        <div className='container mx-auto flex justify-between '>
            <a href="#" 
            className='text-white text-2xl font-bold cursor-pointer'>
                <span className='rounded-lg w-5 h-5 bg-[#E50914] 
                px-2 '>T</span>
                <span className='text-white text-2xl font-serif font-bold
                
                '> rivos Safaris</span>
                 </a>
                 <ul className='flex items-center space-x-6'>
                    <li>
                       <a href=""
                       className='text-white hover:text-[#94a3b8] font-semibold
                       font-size-sm cursor-pointer '
                       >
                        Home</a> 
                    </li>
                    <li>
                       <a href=""
                       className='text-white hover:text-[#94a3b8] font-semibold
                       font-size-sm cursor-pointer'
                       >
                        About</a> 
                    </li>
                    <li>
                       <a href=""
                       className='text-white hover:text-[#94a3b8] font-semibold
                       font-size-sm cursor-pointer'
                       >
                        Blog</a> 
                    </li>
                    <li>
                       <a href=""
                       className='text-white hover:text-[#94a3b8] font-semibold
                       font-size-sm cursor-pointer'
                       >
                        Pricing</a> 
                    </li>
                 </ul>
        </div>
        </div>
    
  )
}

export default Header