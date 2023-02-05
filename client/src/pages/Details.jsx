import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ArrowButton from '../components/ArrowButton'
import { useParams } from 'react-router-dom'
import Reviews from '../components/Reviews'
import BusinessInfo from '../components/BusinessInfo'
import BusinessPhotos from '../components/BusinessPhtos'
import { getDetailsByIdFromYelpApi } from '../api/YelpAPI'

const Details = () => {
    let { id } = useParams()
    // const [details, setDetails] = useState({})

    // useEffect(() => {
    //     getDetailsByIdFromYelpApi(id)
    //         .then(data => {
    //             setDetails({ ...data })
    //         })
    //         .catch(err => console.log(err))
    // }, [])

    return (
        <>
            <Navbar />
            <div className="xl:container xl:mx-auto">
                <ArrowButton className="mt-5 ml-10" />
                <BusinessPhotos id={id} />
                <Reviews id={id} />
                <BusinessInfo id={id} />
            </div>
            <Footer />
        </>
    )
}

export default Details
