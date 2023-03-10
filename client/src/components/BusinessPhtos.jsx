import React, { useEffect, useState } from 'react'

import Image from './Image'

const BusinessPhotos = ({ id }) => {
    const [details, setDetails] = useState({})

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
            .then((response) =>
                response.json().then((data) => {
                    setDetails({ ...data })
                })
            )
            .catch((err) => console.log(err))
    }, [])

    return (
        <section className="m-10 font-nunito">
            <h1 className="mb-7 text-3xl font-bold">Photos</h1>
            <div className="my-10 flex flex-col gap-4 sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-6">
                {details.photos?.map((photo) => (
                    <div
                        key={photo}
                        className="webkit-border-radius flex-1 overflow-hidden shadow-2xl md:w-full"
                        tabIndex="0"
                    >
                        <figure className="webkit-border-radius relative h-72 overflow-hidden">
                            <Image
                                className="webkit-border-radius webkit-touch-callout h-full w-full overflow-hidden object-cover"
                                src={photo}
                                alt={details.name}
                                variant="rounded"
                            />
                        </figure>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default BusinessPhotos
