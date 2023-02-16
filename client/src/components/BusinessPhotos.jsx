import React, { useEffect, useState } from 'react'

const BusinessPhotos = ({ id }) => {
    const [details, setDetails] = useState({})

    useEffect(() => {
        let getPhotos = async () => {
            try {
                const response = await fetch('/.netlify/functions/getDetailsByIdFromYelpApi', {
                    method: 'POST', 
                    body: JSON.stringify({ id })
                })
                const data = await response.json()
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
            } catch (err) {
                err => console.log(err)
            }
        }
        getPhotos()
    }, [])
    
    return (
        <section className="m-10 font-nunito">
            <h1 className="mb-7 text-3xl font-bold">Photos</h1>
            <div className="my-10 flex flex-col gap-4 sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-6">
                {details.photos?.map((photo) => (
                    <div
                        key={photo}
                        className="flex-1 overflow-clip rounded-2xl shadow-2xl md:w-full"
                    >
                        <figure className="relative h-72  ">
                            <img
                                className="h-full w-full object-cover"
                                src={photo}
                                alt={details.name}
                            />
                        </figure>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default BusinessPhotos
