import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";

const url = 'http://127.0.0.1:8000/driver/api/driverapp/';

const Stations =  () => {
    const [data, setData] = useState([])

const fetchData = async () => {
        try {
            const response = await axios.get(url);
            console.log(response.data);

            return response.data

    } catch (error) {
        console.log(response.response)

    }}
    useEffect(() => {
        fetchData().then(res=>{setData(res)})
    }, []);
    if (data.length >0 ){

        return <h2 className='text-black '>{data[0].user_name} </h2>;
    }else{
        return <h2 className='text-black '>loading </h2>;

    } 
};
export default Stations;
