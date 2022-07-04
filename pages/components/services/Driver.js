import React from 'react'


function Driver(props) {

    function scanQRCode() {
    }


    return(
        <div className="w-full py-28 flex flex-col justify-center items-center">

            <div className='w-4/5 p-20 rounded-2xl shadow-2xl flex flex-col justify-center items-center'>

                <div className='w-full text-4vw font-russo text-secondary-top pb-8 text-center'>
                    Scan QR-Code</div>

                <div id='qrcodeScanner' className='w-[50vh] h-[50vh]'>

                </div>
                
                <button 
                onClick={(e) => {
                    e.preventDefault()
                    scanQRCode()
                }}
                className='w-fit font-bold rounded-2xl m-2 text-white bg-secondary-top px-4 py-2 shadow-md hover:bg-white hover:text-secondary-top transition duration-200 ease-in'>
                    Download the QR-Code
                </button>

                <button 
                onClick={(e) => {
                    e.preventDefault()
                    props.setIsService(false)
                }}
                className='w-fit font-bold rounded-2xl m-2 hover:text-white hover:bg-secondary-top px-4 py-2 shadow-md bg-white text-secondary-top transition duration-200 ease-in'>
                    Back to the main page
                </button>

            </div>

        </div>
    )
}


export default Driver