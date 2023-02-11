import React, { useState } from 'react'

import { range } from '../utils/utils'

const StarRating3 = ({ rating, max = 5 }) => {
    const [ratingValue] = useState(rating)
    const percentage = Math.round((ratingValue / max) * 100)

    return (
        <div className="relative inline-flex items-center rating">
            {range(max).map((_, index) => (
                <Star
                    key={index}
                    className="flex w-4 space-x-0.5"
                    width={16}
                    fill="black"
                />
            ))}
            <div
                className="overlay"
                style={{ width: `${100 - percentage}%` }}
            />
            <span className="tooltip">Review rating</span>
        </div>
    )
}

const Star = ({ size = 18, color = '#ef4444' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            width={size}
            height={size}
            fill={color}
        >
            <path d="M124.9,57.7c2-2.4,2.6-5.6,1.7-8.6c-1-3-3.4-5.2-6.4-6l-30-7.6c-0.8-0.2-1.4-0.7-1.9-1.4L71.7,7.9C70,5.2,67.1,3.6,64,3.6 s-6,1.6-7.7,4.2L39.8,34.1c-0.4,0.7-1.1,1.2-1.9,1.4l-30,7.6c-3,0.8-5.4,3-6.4,6c-1,3-0.4,6.2,1.7,8.6l19.8,23.8 c0.5,0.6,0.8,1.4,0.7,2.2l-2,30.9c-0.2,3.1,1.2,6.1,3.7,8c2.5,1.8,5.8,2.3,8.7,1.1l28.8-11.5c0.7-0.3,1.6-0.3,2.3,0l28.8,11.5 c1.1,0.4,2.2,0.7,3.4,0.7c1.9,0,3.8-0.6,5.3-1.7c2.5-1.8,3.9-4.8,3.7-8l-2-30.9c-0.1-0.8,0.2-1.6,0.7-2.2L124.9,57.7z M50,50 c3.3,0,6,2.7,6,6s-2.7,6-6,6s-6-2.7-6-6S46.7,50,50,50z M83.7,77.4C82.1,86.8,73.9,94,64,94s-18.1-7.2-19.7-16.6 c-0.3-1.8,1.1-3.4,3-3.4h33.5C82.6,74,84,75.6,83.7,77.4z M81.7,62H72c-1.7,0-3-1.3-3-3s1.3-3,3-3h9.7c1.7,0,3,1.3,3,3 S83.4,62,81.7,62z" />
        </svg>
    )
}

export default StarRating3
