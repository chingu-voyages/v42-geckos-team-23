import React from 'react'

function ReviewCard({ user, text, time_created }) {
    const date = time_created.slice(0, 10)

    return (
        <section className='font-nunito w-1/3 pr-6'>
            <div className='flex items-center'>
                <img className='w-12 h-12 rounded-full'
                    // TODO: set default image
                    src={user.image_url}
                    alt={`${user.name}'s profile picture on Yelp`} />
                <div className='ml-5'>
                    <h1 className='text-3xl font-semibold'>{user.name}</h1>
                    <p>{date}</p>
                </div>
            </div>
            <p className='tracking-widest mt-3'>{text}</p>
        </section>
    )
}

export default ReviewCard