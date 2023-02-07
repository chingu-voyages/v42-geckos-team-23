import React, { useEffect, useState, useRef } from 'react'
import { FaYelp } from 'react-icons/fa'
import { FaFlag } from 'react-icons/fa'
import { BsTelephoneFill } from 'react-icons/bs'

import { getDetailsByIdFromYelpApi } from '../api/YelpAPI'
import Address from './Address'

const BusinessInfo = ({ id }) => {
    const [details, setDetails] = useState({})

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
        <section className="m-10 font-nunito">
            <h1 className="font-nunito text-4xl font-bold md:text-5xl">
                {details.name}
            </h1>
            <h1 className="mb-7 text-3xl font-bold">Contact</h1>
            <div className="mt-7 lg:flex">
                <div
                    className="h-80 rounded-2xl border lg:w-2/5"
                    ref={mapContainer}
                ></div>

                <div className="text-2xl font-semibold md:text-3xl lg:ml-20">
                    <div className="my-5 flex items-center">
                        <FaFlag className="shrink-0" />
                        <Address
                            className="ml-3 sm:ml-7"
                            location={details.location}
                        />
                    </div>
                    <div className="my-5 flex items-center">
                        <BsTelephoneFill className="shrink-0" />
                        <a className="ml-3 sm:ml-7" href="#">
                            {details.phone}
                        </a>
                    </div>
                    <div className='my-5 flex items-center'>
                        <FaYelp className='shrink-0' />
                        <a className='ml-3 sm:ml-7' href={details?.url}>
                            Go to Yelp page
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BusinessInfo
