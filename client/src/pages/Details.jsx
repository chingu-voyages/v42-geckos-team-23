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
            <section className='relative font-nunito mx-10 mt-10 mb-20'>
                <h1 className='text-4xl font-semibold mb-7'>Reviews</h1>
                <div className='flex justify-start mb-3'>
                    {reviews.map((review) => <ReviewCard key={review.id} {...review} />)}
                </div>
                <a className='px-7 py-2 absolute right-0 text-red-500 border-solid rounded-full border-red-500 border-2 hover:shadow-sm hover:shadow-red-400 active:bg-red-200 active:text-white'
                    href={reviews[0]?.url}>
                    More Reviews on Yelp
                </a>
            </section>
            <Footer />
        </>
    )
}

export default Details
