import React, { useState } from 'react'
import { FaYelp } from 'react-icons/fa'
import { BsGlobe2 } from 'react-icons/bs'
import { FaFlag } from 'react-icons/fa'
import { BsTelephoneFill } from 'react-icons/bs'
import { getDetailsByIdFromYelpApi } from '../api/YelpAPI'
import { useEffect } from 'react'
import Address from './Address'

function Business({ id }) {
    const [details, setDetails] = useState({})

    useEffect(() => {
        getDetailsByIdFromYelpApi(id)
            .then(data => setDetails({ ...data }))
            .catch(err => console.log(err))
    }, [])

    return (
        <section className='m-10 font-nunito'>
            <h1 className='text-5xl font-bold'>{details.name}</h1>
            <div className='flex mt-7'>
                {/* TODO: google maps */}
                <p className='w-1/3 bg-teal-100 rounded-xl'>map placeholder</p>
                <div className='ml-16 text-3xl font-semibold'>
                    <div className='my-5 flex items-center'>
                        <FaFlag />
                        <Address location={details.location} className='ml-7' />
                    </div>
                    {/* <div className='my-5 flex items-center'>
                        <BsGlobe2 />
                        <a className='ml-7' href='#'>
                            business' website
                        </a>
                    </div> */}
                    <div className='my-5 flex items-center'>
                        <BsTelephoneFill />
                        <a className='ml-7' href="tel:#">
                            {details.phone}
                        </a>
                    </div>
                    {/* <div className='my-5 flex items-center'>
                        <FaYelp />
                        <a className='ml-7' href={details.url}>
                            Go to Yelp page
                        </a>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Business

/*
        <div id='map' style='width: 400px; height: 300px;'></div>
        <script>
            mapboxgl.accessToken = 'pk.eyJ1IjoiYW5uYW5kb2JvdCIsImEiOiJjbGRjZTZybXgwOXQ4M29wejIxMWI0NmduIn0.mDJIbiZqOqop2DID64mIwA';
            const map = new mapboxgl.Map({
                container: 'map', // container ID
                style: 'mapbox://styles/mapbox/streets-v12', // style URL
                center: [-122.393303, 37.795831], // starting position [lng, lat]
                zoom: 16, // starting zoom
            });
        </script>
*/
