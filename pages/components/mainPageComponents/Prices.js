import React from 'react'
import busData from '../../../public/json/busData.json'


function Prices() {

    const tableHeaders = ["Route ID", "Price (JOD)"]
    const tableData = busData.price
    
    return (
        <div id='section4' className='bg-transparent w-full flex justify-center items-center 
        transition duration-1000 opacity-0 -translate-y-28 -z-20'>
            <table className='w-4/5 border-separate border-spacing-3 pt-5 pb-5'>

                <thead>
                    <tr>
                        {
                            tableHeaders.map(cell => {
                                return <th className='text-2vw p-2 bg-secondary-top text-tratiary-top rounded-lg shadow-md hover:shadow-primary-top
                                transition duration-300'
                                >{cell}</th>
                            })
                        }
                    </tr>
                </thead>

                <tbody>
                    {
                        tableData.map(row => {
                            return <tr>
                                {
                                    Object.keys(row).map((key, index) => {
                                        if (key != "RouteID") {
                                            return <td className='text-15vw font-bold text-center text-tratiary-top bg-primary-top opacity-75 rounded-lg
                                            hover:cursor-pointer hover:bg-secondary-top hover:text-primary-top hover:scale-105 transition duration-300'
                                            >{row[key]}</td>
                                        } else {
                                            return <td onClick={() => {document.querySelector('#divider3').scrollIntoView({behavior: 'smooth'})}}
                                            className='text-15vw font-bold text-center text-tratiary-top bg-primary-top opacity-75 rounded-lg
                                            hover:cursor-pointer hover:bg-secondary-top hover:text-primary-top hover:scale-105 transition duration-300'
                                            >{row[key]}</td>
                                        }
                                    })
                                }
                            </tr>
                        })
                    }
                </tbody>

            </table>    
        </div>
    )
}

export default Prices