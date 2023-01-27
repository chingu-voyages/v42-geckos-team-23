import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Business from '../components/Business'
import ReviewCard from '../components/ReviewCard'

function Details() {
    return (
        <section>
            <Navbar />
            <Business />
            <section className='relative font-nunito mx-10 mt-10 mb-20'>
                <h1 className='text-4xl font-semibold mb-7'>Reviews</h1> {/* static at the moment */}
                <div className='flex justify-start mb-3'>
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                </div>
                <a className='px-7 py-2 absolute right-0 text-red-500 border-solid rounded-full border-red-500 border-2 active:bg-red-200 active:text-white' href='#'>
                    More Reviews on Yelp
                </a>
            </section>
            <Footer />
        </section>
    )
}

export default Details