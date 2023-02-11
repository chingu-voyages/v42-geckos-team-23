import React, { useState } from 'react'

import { range } from '../utils/utils'

const PriceRating3 = ({ rating = '', max = 5 }) => {
    const [ratingValue] = useState(rating.length)
    const percentage = Math.round((ratingValue / max) * 100)

    return (
        <div
            className={
                rating.length === 0
                    ? 'rating hidden'
                    : 'rating relative inline-flex items-center'
            }
        >
            {range(max).map((_, index) => (
                <Price
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
            <span className="tooltip">Price rating</span>
        </div>
    )
}

const Price = ({ size = 18 }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width={size}
            height={size}
        >
            <path
                fill="#ef4444"
                d="M44,24c0,11.044-8.956,20-20,20S4,35.044,4,24S12.956,4,24,4S44,12.956,44,24z"
            />
            <path
                fill="#fff"
                d="M26.898,29.195c0-0.805-0.215-1.441-0.645-1.918s-1.16-0.918-2.191-1.32s-3.355-1.707-4.367-2.648c-0.547-0.508-0.953-1.125-1.25-1.82C18.148,20.789,18,19.961,18,19c0-1.656,0.496-3.094,1.406-4.25C20.656,13.156,23,13,23,13v-3h2v3c1.164,0,3.465,0.387,4.82,2.461C31.016,17.293,31,20,31,20h-4c0-1.18-0.234-2.02-0.699-2.602c-0.473-0.586-1.195-0.879-1.98-0.879c-0.777,0-1.258,0.336-1.68,0.793C22.215,17.77,22,18.398,22,19.203c0,0.746,0.207,1.348,0.625,1.797c0.414,0.449,1.066,0.809,2.199,1.277c1.129,0.473,2.059,0.914,2.785,1.332c0.73,0.418,1.344,0.891,1.844,1.414c0.504,0.523,0.887,1.125,1.152,1.793C30.867,27.492,31,28.273,31,29.168c0,1.668-0.5,3.023-1.504,4.063S26.758,34.883,25,35.07V38h-2v-2.914c-1.938-0.219-3.34-0.93-4.402-2.145C17.531,31.73,17,30.012,17,28h4c0,1.168,0.266,2.172,0.801,2.793c0.535,0.625,1.195,0.938,2.199,0.938c0.832,0,1.695-0.23,2.18-0.684C26.66,30.586,26.898,29.973,26.898,29.195z"
            />
        </svg>
    )
}

export default PriceRating3

// #4caf50 is the color of the star in the original SVG file
