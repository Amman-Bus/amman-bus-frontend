import {
    HomeIcon,
    SearchIcon,
    UserIcon,
    ArrowsExpandIcon,
    CashIcon,
  } from '@heroicons/react/outline';

  
  import React from 'react'
  import HeaderItem from './HeaderItem'
  
  function Header() {
    return (
         <header className='flex flex-col items-center justify-between h-auto m-3 sm:flex-row'>

            <div className='grid text-black font-bold place-items-start'>AMMAN BUS PROJECT</div>

         <div className='flex flex-grow max-w-xl justify-evenly'>
             <HeaderItem title='ABOUT US' Icon={HomeIcon} />
             <HeaderItem title='ROUTES' Icon={ArrowsExpandIcon} />
             <HeaderItem title='SEARCH' Icon={SearchIcon} />
              <HeaderItem title='PRICES' Icon={CashIcon} />

         </div>
         <div className='grid max-w-xl place-items-end'>
         <HeaderItem title='SIGN IN' Icon={UserIcon} />
         </div>
        </header>

    )
  }
  
  export default Header