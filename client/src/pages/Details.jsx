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
            <Hero />
            <Business id={id} />
            <section className="mx-10 mt-10 mb-20 font-nunito">
                <h1 className="mb-7 text-3xl font-bold">Reviews</h1>
                <div className="mb-3 sm:flex justify-start">
                    {reviews}
                </div>
                {
                    (3 === reviews.length) && 
                        <a
                            className="absolute right-10 rounded-full border-2 border-solid border-red-500 px-7 py-2 text-red-500 active:bg-red-200 active:text-white hover:cursor-pointer"
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
