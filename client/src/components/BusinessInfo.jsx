import React, { useEffect, useState, useRef } from 'react'
import { FaYelp } from 'react-icons/fa'
import { FaFlag } from 'react-icons/fa'
import { BsTelephoneFill } from 'react-icons/bs'

import Address from './Address'

const BusinessInfo = ({ id }) => {
    const [details, setDetails] = useState({})

    const MAPBOX =
        import.meta.env.VITE_MAPBOX_API_KEY || process.env.MAPBOX_API_KEY

    mapboxgl.accessToken = MAPBOX

    const mapContainerRef = useRef(null)
    const mapRef = useRef(null)

    useEffect(() => {
        const fetchData = async (id) => {
            try {
                const response = await fetch('/.netlify/functions/details', {
                    method: 'POST',
                    body: JSON.stringify({
                        id,
                    }),
                })
                const data = await response.json()
                setDetails({ ...data })
                const { longitude, latitude } = data.coordinates
                if (mapRef.current) return
                mapRef.current = new mapboxgl.Map({
                    container: mapContainerRef.current,
                    style: 'mapbox://styles/mapbox/streets-v12',
                    center: [longitude, latitude],
                    zoom: 17,
                })
            } catch (error) {
                console.error(error)
            }
        }
        fetchData(id)
    }, [])

    // const getMap = async (data) => {
    //     const { longitude: lng, latitude: lat } = data.coordinates
    //     fetch('/.netlify/functions/mapbox', {
    //         method: 'POST',
    //         body: JSON.stringify({ lng, lat }),
    //     })
    //         .then((response) => response.json())
    //         .then((data) => console.log(data))
    // }

    // const getDetails = async (id) => {
    //     await fetch('/.netlify/functions/details', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             id,
    //         }),
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setDetails({ ...data })
    //             return data
    //         })
    //         .catch((err) => console.log(err))
    // }

    return (
        <section className="m-10 font-nunito">
            <h1 className="font-nunito text-4xl font-bold md:text-5xl">
                {details.name}
            </h1>
            <h1 className="mb-7 text-3xl font-bold">Contact</h1>
            <div className="mt-7 lg:flex">
                <div
                    className="h-80 rounded-2xl border lg:w-2/5"
                    ref={mapContainerRef}
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
                    <div className="my-5 flex items-center">
                        <FaYelp className="shrink-0" />
                        <a
                            className="ml-3 sm:ml-7"
                            href={details?.url}
                            target="_blank"
                            rel="noopener"
                        >
                            Go to Yelp page
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BusinessInfo
