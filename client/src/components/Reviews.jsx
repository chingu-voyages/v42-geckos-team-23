import React from 'react'

const Reviews = ({ reviews }) => {
    return (
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
    )
}

export default Reviews
