import React, { useEffect, useState } from "react"

import ReviewCard from '../components/ReviewCard'

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
      fetch('/.netlify/functions/getYelpBusinessReviews', {
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
                  setReviews(renderReviews(data))
              })
          )
          .catch((err) => console.log(err))
    }, [])

    return (
        <section className="relative mx-10 mt-10 mb-20 font-nunito">
            <h1 className="mb-7 text-3xl font-bold">Reviews</h1>
            <div className="mb-6 flex flex-col gap-4 sm:grid sm:grid-cols-3 sm:gap-6">
                {reviews}
            </div>
            {3 === reviews.length && (
                <a
                    className="absolute right-0 rounded-full border-2 border-solid border-red-500 px-7 py-2 text-red-500 transition duration-200 ease-in-out  hover:cursor-pointer hover:border-red-700 hover:text-red-700 active:scale-95"
                    href={reviews[0]?.props.url}
                    target="_blank"
                    rel="noopener"
                >
                    More Reviews on Yelp
                </a>
            )}
        </section>
    )
}

export default Reviews
