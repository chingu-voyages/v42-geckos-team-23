import React, { useState } from 'react'

import { range } from '../utils/utils'

const StarRating2 = ({ rating, max = 5 }) => {
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

const Star = ({ size = 18, color = '#EF4444' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width={size}
            height={size}
            fill={color}
        >
            <path
                fill="#E5AA17"
                d="M7.9,256C7.9,119,119,7.9,256,7.9C393,7.9,504.1,119,504.1,256c0,137-111.1,248.1-248.1,248.1C119,504.1,7.9,393,7.9,256z"
            />
            <path
                fill="#FFF"
                d="M256 97.9L304.8 196.7 413.8 212.6 334.9 289.5 353.5 398.1 256 346.8 158.4 398.1 177.1 289.5 98.2 212.6 207.2 196.7z"
            />
        </svg>
    )
}

export default StarRating2
