import React from 'react'
import { useParams } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ArrowButton from '../components/ArrowButton'
import Reviews from '../components/Reviews'
import BusinessInfo from '../components/BusinessInfo'
import BusinessPhotos from '../components/BusinessPhtos'
import { InputProvider } from '../contexts/InputProvider'
import ScrollUpButton from '../components/ScrollUpButton'

const Details = () => {
    let { id } = useParams()

    return (
        <>
            <InputProvider>
                <Navbar />
            </InputProvider>
            <div className="relative min-h-screen xl:container xl:mx-auto">
                <BusinessPhotos id={id} />
                <Reviews id={id} />
                <BusinessInfo id={id} />
                <ArrowButton className="icon-button absolute right-0 bottom-0 mr-8 lg:bottom-8 xl:bottom-16" />
            </div>
            <Footer />
        </>
    )
}

export default Details
