import React from 'react'
import { useParams } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ArrowButton from '../components/ArrowButton'
import Reviews from '../components/Reviews'
import BusinessInfo from '../components/BusinessInfo'
import BusinessPhotos from '../components/BusinessPhtos'
import { InputProvider } from '../contexts/InputProvider'

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
            <InputProvider>
                <Navbar />
            </InputProvider>
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
