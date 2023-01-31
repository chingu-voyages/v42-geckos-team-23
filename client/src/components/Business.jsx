import React, { useState, useRef } from 'react'
import { FaYelp } from 'react-icons/fa'
import { BsGlobe2 } from 'react-icons/bs'
import { FaFlag } from 'react-icons/fa'
import { BsTelephoneFill } from 'react-icons/bs'
import { getDetailsByIdFromYelpApi } from '../api/YelpAPI'
import { useEffect } from 'react'

function Business({ id }) {
    const [details, setDetails] = useState({})

    console.log(import.meta.env.VITE_MAPBOX_API_KEY)

    const MAPBOX = import.meta.env.VITE_MAPBOX_API_KEY

    mapboxgl.accessToken = MAPBOX;

    const mapContainer = useRef(null)
    const map = useRef(null)

    useEffect(() => {
        getDetailsByIdFromYelpApi(id)
            .then(data => {
                setDetails({ ...data })
                let lng = data.coordinates.longitude
                let lat = data.coordinates.latitude

                if (map.current) return; 
                map.current = new mapboxgl.Map({
                    container: mapContainer.current,
                    style: 'mapbox://styles/mapbox/streets-v12',
                    center: [lng, lat],
                    zoom: 17
                })
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <section className='m-10 font-nunito'>
            <h1 className='text-5xl font-bold'>{details.name}</h1>
            <div className='flex mt-7'>

                <div className='border h-80 w-2/5 rounded-2xl' ref={mapContainer}></div>
                
                <div className='ml-20 text-3xl font-semibold'>
                    <div className='my-5 flex items-center'>
                        <FaFlag />
                        <p className='ml-7'>
                            {details.location?.display_address}
                        </p>
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