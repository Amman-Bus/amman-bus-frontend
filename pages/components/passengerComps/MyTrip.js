import React, {useState} from 'react'
import QRCode from "qrcode.react"


function MyTrip(props) {

    function downloadQRCode() {
        document.querySelector('#myTrip').scrollIntoView({behavior: 'smooth'})
        const canvas = document.getElementById('qrcode')
        const pngUrl = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "trip code.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }

    return(

        <div id='myTrip'
        className='w-4/5 p-20 rounded-2xl shadow-2xl flex flex-col justify-center items-center'>

                <div className='w-full text-4vw font-russo text-secondary-top pb-8 text-center'>
                    My Plan's QR-Code</div>

                <div id='qrcodeContainer' className='w-[50vh] h-[50vh] flex justify-center items-center'>
                    {props.value != '' && (
                        <QRCode
                            id='qrcode'
                            title="QR Code for your trip"
                            value={props.value}
                            size={props.size === '' ? 0 : props.size}
                            includeMargin={true}
                        />
                    )}
                </div>

                <button 
                onClick={(e) => {
                    e.preventDefault()
                    downloadQRCode()
                }}
                className='w-fit font-bold rounded-2xl m-2 text-white bg-secondary-top px-4 py-2 shadow-md hover:bg-white hover:text-secondary-top transition duration-200 ease-in'>
                    Download the QR-Code
                </button>

                <button 
                onClick={(e) => {
                    e.preventDefault()
                    props.setIsService(false)
                    document.querySelector('#main').scrollIntoView({behavior: 'smooth'})
                }}
                className='w-fit font-bold rounded-2xl m-2 hover:text-white hover:bg-secondary-top px-4 py-2 shadow-md bg-white text-secondary-top transition duration-200 ease-in'>
                    Back to the main page
                </button>

        </div>

    )
}


export default MyTrip