import React from 'react'

function HeaderItem({title, Icon}) {
  return (
    <div className='flex flex-col items-center w-12 cursor-pointer group sm:w-20 hover:text-white '>
      <Icon className='h-8 mb-1 group-hover:animate-bounce text-black'/>
      <p className='tracking-widest opacity-0 group-hover:opacity-100 text-black font-bold' >{title}</p>
    </div>
  )
}

export default HeaderItem