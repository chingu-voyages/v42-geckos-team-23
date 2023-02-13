import React, { useState } from 'react'

import { range } from '../utils/utils'

const PriceRating = ({ rating = '', max = 5 }) => {
    const [ratingValue] = useState(rating.length)
    const percentage = Math.round((ratingValue / max) * 100)

    return (
        <div
            className={
                rating.length === 0
                    ? 'hidden rating'
                    : 'relative inline-flex items-center rating'
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
            <span className="description">Price rating</span>
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
            <defs>
                <linearGradient
                    id="fDWV7FvHONaUhUvUZ1QKDa"
                    x1="24.02"
                    x2="24.02"
                    y1="4"
                    y2="44"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset=".278" stopColor="#ef4444" />
                    <stop offset=".554" stopColor="#f25050" />
                    <stop offset="1" stopColor="#f45b5b" />
                </linearGradient>
            </defs>
            <path
                fill="url(#fDWV7FvHONaUhUvUZ1QKDa)"
                d="M36.26,27.952a8.1,8.1,0,0,0-2.13-2.647,15.178,15.178,0,0,0-3.43-2.076,54.112,54.112,0,0,0-5.17-1.962,13.381,13.381,0,0,1-4.31-2.029A3.319,3.319,0,0,1,20.06,16.6a3.954,3.954,0,0,1,1.19-3.019,4.978,4.978,0,0,1,3.34-1.01,4.752,4.752,0,0,1,3.49,1.286,5.08,5.08,0,0,1,1.158,2.675.984.984,0,0,0,.983.8h5.624a.976.976,0,0,0,.993-1.11,9.4,9.4,0,0,0-2.468-5.118,12.091,12.091,0,0,0-7.3-3.191L27,7.907V4.952A.977.977,0,0,0,26,4H23a.977.977,0,0,0-1,.952v2.99a14.233,14.233,0,0,0-7.16,2.639A7.409,7.409,0,0,0,12,16.571a7.6,7.6,0,0,0,.83,3.658,8.251,8.251,0,0,0,2.32,2.676,19.78,19.78,0,0,0,4.02,2.009,50.4,50.4,0,0,0,4.95,1.772,9.308,9.308,0,0,1,3.68,1.933A3.569,3.569,0,0,1,29,31.448a3.718,3.718,0,0,1-1.34,2.971,4.808,4.808,0,0,1-3.28,1.01,6.094,6.094,0,0,1-4.28-1.372,6.9,6.9,0,0,1-2.025-3.55.983.983,0,0,0-.979-.793H12.043a.983.983,0,0,0-1,1.05,9.108,9.108,0,0,0,2.917,6.188c1.918,1.725,4.611,2.677,8.04,3.107v2.989A.977.977,0,0,0,23,44h3a.977.977,0,0,0,1-.952V40.024a13.26,13.26,0,0,0,7.21-2.653A7.349,7.349,0,0,0,37,31.4,7.638,7.638,0,0,0,36.26,27.952Z"
                data-name="currency"
            />
        </svg>
    )
}

export default PriceRating

