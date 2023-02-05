import React, { useEffect, useState } from 'react'
import { getDetailsByIdFromYelpApi } from '../api/YelpAPI'

const BusinessPhotos = ({ id }) => {
    const [details, setDetails] = useState({})

    useEffect(() => {
        getDetailsByIdFromYelpApi(id)
            .then(data => {
                setDetails({ ...data })
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <section className='m-10 font-nunito'>
            <h1 className="mb-7 text-3xl font-bold">Photos</h1>
            <div className="my-10 flex flex-col gap-4 xl:gap-0 sm:grid sm:grid-cols-3">
                {details.photos?.map((photo) => (
                    <div key={photo} className="flex-1 shadow-xl md:max-w-[384px] ">
                        <figure className="h-72">
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
