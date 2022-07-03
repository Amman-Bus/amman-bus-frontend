import React from 'react'


function DownArrows(props) {

    const cName = 'relative top-16 p-2 flex flex-col z-20 ' + props.h + ' ' + props.w

    return (
        <div className={cName}>
            <img className='w-full h-1/3 animate-arrows' src=".\images\arrow.png"/>
            <img className='w-full h-1/3 animate-arrows3' src=".\images\arrow.png"/>
            <img className='w-full h-1/3 animate-arrows6' src=".\images\arrow.png"/>
            <img className='w-full h-1/3 animate-arrows9' src=".\images\arrow.png"/>
        </div>
    )
}

export default DownArrows