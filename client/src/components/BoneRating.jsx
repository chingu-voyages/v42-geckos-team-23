import React, { useState } from 'react'

import { range } from '../utils/utils'

const BoneRating = ({ rating, max = 5 }) => {
    const [ratingValue] = useState(rating)
    const percentage = Math.round((ratingValue / max) * 100)

    return (
        <div className="relative inline-flex items-center">
            {range(max).map((_, index) => (
                <Bone
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
        </div>
    )
}

const Bone = ({ size = 16, color = 'red' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width={size}
            height={size}
            fill={color}
        >
            <path d="M 16 50 C 11.515625 50 8 46.484375 8 42 C 3.515625 42 0 38.484375 0 34 C 0 29.515625 3.515625 26 8 26 C 9.835938 26 11.53125 26.59375 12.960938 27.726563 L 27.730469 12.957031 C 26.621094 11.535156 26 9.777344 26 8 C 26 3.515625 29.515625 0 34 0 C 38.484375 0 42 3.515625 42 8 C 46.484375 8 50 11.515625 50 16 C 50 20.484375 46.484375 24 42 24 C 40.164063 24 38.46875 23.40625 37.039063 22.273438 L 22.269531 37.042969 C 23.378906 38.464844 24 40.222656 24 42 C 24 46.484375 20.484375 50 16 50 Z" />
        </svg>
    )
}

export default BoneRating
