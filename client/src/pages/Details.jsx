import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Business from '../components/Business'
import ReviewCard from '../components/ReviewCard'
import { useParams } from 'react-router-dom'
import { getReviewsFromYelpApi } from '../api/YelpAPI'

function Details() {
    let { id } = useParams()
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        getReviewsFromYelpApi(id)
            .then(data => setReviews([...data]))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <Navbar />
            <Business id={id} />
            <section className="relative mx-10 mt-10 mb-20 font-nunito">
                <h1 className="mb-7 text-4xl font-semibold">Reviews</h1>
                <div className="mb-3 flex justify-start">
                    {reviews.map((review) => (
                        <ReviewCard key={review.id} {...review} />
                    ))}
                </div>

                <a
                    className="absolute right-0 rounded-full border-2 border-solid border-red-500 px-7 py-2 text-red-500 active:bg-red-200 active:text-white"
                    href={reviews[0]?.url}
                >
                    More Reviews on Yelp
                </a>
            </section>
            <Footer />
        </>
    )
}

export default Details
