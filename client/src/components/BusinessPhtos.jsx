import React, { useEffect, useState } from 'react'


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
                        className="flex-1 overflow-hidden rounded-2xl active:rounded-2xl active:overflow-hidden shadow-2xl md:w-full"
                        tabIndex="0"

                    >
                        <figure className="relative h-72 overflow-hidden rounded-2xl">
                            <img
                                className="h-full w-full object-cover rounded-2xl overflow-hidden"
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
