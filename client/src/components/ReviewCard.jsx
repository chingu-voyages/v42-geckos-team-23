import React from 'react' 

function ReviewCard() {
    return (
        <section className='font-nunito w-1/3 pr-6'>
            <div className='flex items-center'>
                <img className='w-12 h-12 rounded-full' src='https://s3-media2.fl.yelpcdn.com/bphoto/FTQfPJubJEtYeyHqwAsVKw/o.jpg' alt='profile-pic'/>
                <div className='ml-5'>
                    <h1 className='text-3xl font-semibold'>dynamic</h1>
                    <p>dynamic date</p> 
                </div>
            </div>
            <p className='tracking-widest mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
    )
}

export default ReviewCard