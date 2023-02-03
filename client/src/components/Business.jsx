import React, { useEffect, useState, useRef, useContext } from 'react'
import { FaYelp } from 'react-icons/fa'
import { FaFlag } from 'react-icons/fa'
import { BsTelephoneFill } from 'react-icons/bs'
import { getDetailsByIdFromYelpApi } from '../api/YelpAPI'
import Address from './Address'
import { Context } from '../../Context'

const Business = ({ id }) => {
    const [details, setDetails] = useState({})
    const ctx = useContext(Context)

    const MAPBOX = import.meta.env.VITE_MAPBOX_API_KEY

    mapboxgl.accessToken = MAPBOX;

    const mapContainer = useRef(null)
    const map = useRef(null)

    useEffect(() => {
        getDetailsByIdFromYelpApi(id)
            .then(data => {
                setDetails({ ...data })
                ctx.setBusinessImages([...data.photos])

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
                        <Address location={details.location} className='ml-7' />
                    </div>
                    <div className='my-5 flex items-center'>
                        <BsTelephoneFill />
                        <a className='ml-7' href="tel:#">
                            {details.phone}
                        </a>
                    </div>
                    <div className='my-5 flex items-center'>
                        <FaYelp />
                        <a className='ml-7' href={details?.url}>
                            Go to Yelp page
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Business