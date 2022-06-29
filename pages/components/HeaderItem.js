import React from 'react'


function HeaderItem(props) {
  return (
    <button className='bg-secondary-top h-fit mr-12 p-3 text-tratiary-top text-lg font-bold rounded-lg
    transition duration-300 ease-out hover:-skew-y-6 hover:scale-130 hover:bg-primary-top hover:text-secondary-top
    '>
      {props.title}
    </button>
  )
}

export default HeaderItem