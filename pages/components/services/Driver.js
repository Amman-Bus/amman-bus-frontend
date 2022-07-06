import React, {useState} from 'react'
import { QrReader } from 'react-qr-reader';
import { BsCameraVideoOffFill } from "react-icons/bs";


function Driver(props) {
    
    const [data, setData] = useState('---,---,---')
    const [isCameraOpened, setIsCameraOpened] = useState(false)
    const items = ["Passenger name: ", "Pick-up station: ", "Drop-off station: "]
    
    return(
        <div className="w-full py-28 flex flex-col justify-center items-center">

            <div className='w-4/5 p-20 rounded-2xl shadow-2xl flex flex-col justify-center items-center'>

                <div className='w-full text-4vw font-russo text-secondary-top pb-8 text-center'>
                    Scan QR-Code</div>

                <button 
                onClick={(e) => {
                    e.preventDefault()
                    isCameraOpened ? setIsCameraOpened(false) : setIsCameraOpened(true)
                }}
                className='w-fit font-bold rounded-2xl m-2 text-white bg-secondary-top px-4 py-2 shadow-md hover:bg-white hover:text-secondary-top transition duration-200 ease-in'>
                    {isCameraOpened ? 'Close Camera' : 'Open Camera'}
                </button>


                <div className='h-[50vh] bg-secondary-top m-2 p-2 flex justify-center items-center rounded-3xl'>
                    <div id='qrcodeScanner'>
                        {
                            isCameraOpened ?
                            <QrReader
                                onResult={(result, error) => {
                                    if(!!result) {
                                        setData(result?.text)
                                        console.log(result.text)
                                        }
                                    if(!!error) {console.info(error)}
                                }}
                                className='w-[50vh]'
                            /> :
                            
                            <div className='w-full h-full flex justify-center items-center'>
                                <BsCameraVideoOffFill size={"80%"} color={"#FFF"} />
                            </div> 
                        }
                    </div>
                </div>

                <div className='font-bold text-secondary-top'>
                    {
                        data.split(',').map((item, index) => {
                            return(
                                <div className='text-left'>
                                    {items[index]} {item} 
                                </div>
                            )
                        })
                    }
                </div>
                
                <button 
                onClick={() => {
                    window.location.reload()
                    props.setIsService(false)
                    document.querySelector('#main').scrollIntoView({behavior: 'smooth'})
                }}
                className='mt-20 w-fit font-bold rounded-2xl m-2 hover:text-white hover:bg-secondary-top px-4 py-2 shadow-md bg-white text-secondary-top transition duration-200 ease-in'>
                    Back to the main page
                </button>

            </div>

        </div>
    )
}


export default Driver