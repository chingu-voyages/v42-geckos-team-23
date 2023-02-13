import React, { useState } from 'react'

import { range } from '../utils/utils'

const StarRating = ({ rating, max = 5 }) => {
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
            <span className="description rating">Review rating</span>
        </div>
    )
}

const Star = ({ size = 18, color = '#EF4444' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width={size}
            height={size}
            fill={color}
        >
            <path
                fill={color}
                d="M24 4.051L30.49 17.186 45 19.29 34.5 29.512 36.977 43.949 24 37.137 11.023 43.949 13.5 29.512 3 19.29 17.51 17.186z"
            />
        </svg>
    )
}

export default StarRating

