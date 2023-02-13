import React, { useEffect, useState, useRef } from 'react'
import { FaYelp } from 'react-icons/fa'
import { FaFlag } from 'react-icons/fa'
import { BsTelephoneFill } from 'react-icons/bs'

import Address from './Address'

const BusinessInfo = ({ id }) => {
    const [details, setDetails] = useState({})

    const mapContainer = useRef(null)
    const map = useRef(null)

    useEffect(() => {
        fetch('/.netlify/functions/getYelpBusinessDetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                setDetails({ ...data })
                if (map.current) return
                const { longitude, latitude } = data.coordinates
                mapboxgl.accessToken = data.apiKey
                map.current = new mapboxgl.Map({
                    container: mapContainer.current,
                    style: 'mapbox://styles/mapbox/streets-v12',
                    center: [longitude, latitude],
                    zoom: 17,
                })
            })
            .catch((err) => console.log(err))
    }, [])

    const address = `${details?.location?.address1} ${details?.location?.city} ${details?.location?.state} ${details?.location?.zip_code}`

    const link = `https://www.google.com/maps/place/${address}`

    return (
        <section className="m-10 font-nunito">
            <h1 className="font-nunito text-4xl font-bold md:text-5xl">
                {details.name}
            </h1>
            <h1 className="mb-7 text-3xl font-bold">Contact</h1>
            <div className="mt-7 lg:flex">
                <div
                    className="webkit-border-radius h-80 overflow-hidden border lg:w-2/5"
                    ref={mapContainer}
                />

                <div className="text-2xl font-semibold md:text-3xl lg:ml-20">
                    <div className="my-5 flex items-center">
                        <FaFlag className="shrink-0" />
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener"
                            className="ml-3 hover:underline sm:ml-7"
                        >
                            <Address location={details.location} />
                        </a>
                    </div>
                    <div className="my-5 flex items-center">
                        <BsTelephoneFill className="shrink-0" />
                        <a
                            className="ml-3 hover:underline sm:ml-7"
                            href={`tel:${details.phone}`}
                        >
                            {details.phone}
                        </a>
                    </div>
                    <div className="my-5 flex items-center">
                        <FaYelp className="shrink-0" />
                        <a
                            className="ml-3 hover:underline sm:ml-7"
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
