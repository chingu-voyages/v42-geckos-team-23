import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Business from '../components/Business'
import ReviewCard from '../components/ReviewCard'
import { useParams } from 'react-router-dom'
import { getReviewsFromYelpApi } from '../api/YelpAPI'

const Details = () => {
    let { id } = useParams()
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        getReviewsFromYelpApi(id)
            .then(data => setReviews([...data]))
            .catch(err => console.log(err))
    }, [])

    const renderReviews = () => {
        console.log(reviews)
        if (0 === reviews.length) {
            return <p className='text-2xl'>Business has no reviews.</p>
        } else {
            reviews.map((review) => (
                <ReviewCard key={review.id} {...review} />
            )) 
        }
    }

    return (
        <>
            <Navbar />
            <Hero />
            <Business id={id} />
            <section className="relative mx-10 mt-10 mb-10 font-nunito">
                <h1 className="mb-7 text-3xl font-bold">Reviews</h1>
                <div className="mb-3 sm:flex justify-start">
                    {renderReviews()}
                </div>
                {
                    0 !== reviews.length && 
                        <a
                            className="absolute right-0 rounded-full border-2 border-solid border-red-500 px-7 py-2 text-red-500 active:bg-red-200 active:text-white"
                            href={reviews[0]?.url}
                        >
                            More Reviews on Yelp
                        </a>
                }
            </section>
            <Footer />
        </>
    )
}

export default Details
