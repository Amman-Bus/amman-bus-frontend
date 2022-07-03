import React from 'react'
import busData from '../../../public/json/busData.json'


function Routes() {
    const tableHeaders = ["Route ID", "Starts from", "Ends at", "Route Stations", "Duration", "Distance"]
    const tableData = busData.routes

    return (
        <div id='section3' className='bg-transparent w-full flex justify-center items-center 
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
                        tableData.map(obj => {
                            return <tr>
                                {
                                    Object.keys(obj).map((key, index) => {
                                        if(key != "Stations") {
                                            return <td 
                                            className='text-15vw font-bold text-center text-tratiary-top bg-primary-top opacity-75 rounded-lg
                                            hover:cursor-pointer hover:bg-secondary-top hover:text-primary-top hover:scale-105 transition duration-300'
                                            >{obj[key]}</td>
                                        } else {
                                            return <td 
                                            className='text-15vw font-bold text-center text-tratiary-top opacity-75
                                            hover:cursor-pointer hover:scale-105 transition duration-300'
                                            >
                                                <div className='w-full h-full grid grid-cols-3 gap-1'>
                                                    {
                                                        obj[key].map(subcell => {
                                                            return(<di className='p-1 bg-primary-top rounded-lg hover:text-primary-top hover:bg-secondary-top'>
                                                                {subcell}</di>)
                                                        })
                                                    }
                                                </div>
                                            </td>
                                        }

                                        // return <td className='text-15vw font-bold text-center text-tratiary-top bg-primary-top opacity-75 rounded-lg
                                        // hover:cursor-pointer hover:bg-secondary-top hover:text-primary-top hover:scale-105 transition duration-300'
                                        // >{row[key]}</td>
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

export default Routes