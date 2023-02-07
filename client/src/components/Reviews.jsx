import React, { useEffect, useState } from "react"

import ReviewCard from '../components/ReviewCard'
import { getReviewsFromYelpApi } from '../api/YelpAPI'

const Reviews = ({ id }) => {
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
        <section className="mx-10 mt-10 mb-20 font-nunito relative">
            <h1 className="mb-7 text-3xl font-bold">Reviews</h1>
            <div className="mb-6 flex flex-col gap-4 sm:gap-6 sm:grid sm:grid-cols-3">
                {reviews}
            </div>
            {
                (3 === reviews.length) &&
                    <a
                        className="absolute right-0 rounded-full border-2 border-solid border-red-500 px-7 py-2 text-red-500 active:bg-red-200 active:text-white hover:cursor-pointer"
                        href={reviews[0]?.props.url}
                    >
                        More Reviews on Yelp
                    </a>
            }
        </section>
    )
}

export default Reviews
