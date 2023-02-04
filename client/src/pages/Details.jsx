import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Business from '../components/Business'
import ReviewCard from '../components/ReviewCard'
import Reviews from '../components/Reviews'
import ArrowButton from '../components/ArrowButton'
import { useParams } from 'react-router-dom'
import { getReviewsFromYelpApi } from '../api/YelpAPI'

const Details = () => {
    let { id } = useParams()
    const [reviews, setReviews] = useState('')

    const renderReviews = (reviewsArr = []) => {
        if (0 === reviewsArr.length) {
            return <p className='text-2xl'>Business has no reviews.</p>
        } else {
            return reviewsArr.map((review) => (
                <ReviewCard key={review.id} {...review} />
            ))
        }
    }

    useEffect(() => {
        getReviewsFromYelpApi(id)
            .then(data => setReviews(renderReviews(data)))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <Navbar />
            <ArrowButton className="mt-5 ml-10" />
            <Business id={id} />
            <Reviews reviews={reviews} />
            <Footer />
        </>
    )
}

export default Details
