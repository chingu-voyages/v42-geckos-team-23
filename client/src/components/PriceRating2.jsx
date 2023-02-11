import React, { useState } from 'react'

import { range } from '../utils/utils'

const PriceRating2 = ({ rating = '', max = 5 }) => {
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
            <defs>
                <radialGradient
                    id="VNrxw~JIjlHX7W5aF3XJja"
                    cx="24.063"
                    cy="3.451"
                    r="12.334"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset=".061" stop-color="#b28a41" />
                    <stop offset=".21" stop-color="#ac853e" />
                    <stop offset=".4" stop-color="#9d7837" />
                    <stop offset=".612" stop-color="#82632a" />
                    <stop offset=".839" stop-color="#5e4519" />
                    <stop offset="1" stop-color="#402c0b" />
                </radialGradient>
                <radialGradient
                    id="VNrxw~JIjlHX7W5aF3XJjb"
                    cx="-791.685"
                    cy="28.25"
                    r="23.616"
                    gradientTransform="matrix(1 0 0 .722 816 7.859)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset=".061" stop-color="#fbcd73" />
                    <stop offset=".189" stop-color="#f5c86f" />
                    <stop offset=".353" stop-color="#e6b964" />
                    <stop offset=".535" stop-color="#cba153" />
                    <stop offset=".732" stop-color="#a7803a" />
                    <stop offset=".938" stop-color="#78551b" />
                    <stop offset="1" stop-color="#694710" />
                </radialGradient>
                <radialGradient
                    id="VNrxw~JIjlHX7W5aF3XJjc"
                    cx="24.375"
                    cy="29.313"
                    r="17.055"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset=".061" stop-color="#92640a" />
                    <stop offset=".2" stop-color="#8d610a" />
                    <stop offset=".358" stop-color="#7f5709" />
                    <stop offset=".526" stop-color="#694807" />
                    <stop offset=".701" stop-color="#493205" />
                    <stop offset=".88" stop-color="#201602" />
                    <stop offset="1" />
                </radialGradient>
                <radialGradient
                    id="VNrxw~JIjlHX7W5aF3XJjd"
                    cx="24"
                    cy="14.5"
                    r="7.704"
                    gradientTransform="matrix(-1 0 0 1 48 0)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stop-color="#644c1d" />
                    <stop offset="1" stop-color="#211705" />
                </radialGradient>
            </defs>
            <g data-name="money bag">
                <path
                    fill="url(#VNrxw~JIjlHX7W5aF3XJja)"
                    d="M33.159,5.473c-1.852-.565-5.9-.311-9.159-.373-3.259.062-7.307-.192-9.159.373a1.012,1.012,0,0,0-.409,1.655c1.6,1.8,1.645,4.784,4.568,6.872H29c2.923-2.088,2.965-5.077,4.568-6.872A1.012,1.012,0,0,0,33.159,5.473Z"
                />
                <path
                    fill="url(#VNrxw~JIjlHX7W5aF3XJjb)"
                    d="M41,34c0,9.941-7.059,10-17,10S7,43.941,7,34s9-20,17-20S41,24.059,41,34Z"
                />
                <path
                    fill="url(#VNrxw~JIjlHX7W5aF3XJjc)"
                    d="M26,33.568a2.081,2.081,0,0,0-.517-1.484,4.705,4.705,0,0,0-1.757-1.018,20.638,20.638,0,0,1-2.138-.926,6.868,6.868,0,0,1-1.541-1.058,4.252,4.252,0,0,1-1-1.405,4.71,4.71,0,0,1-.358-1.922,4.264,4.264,0,0,1,1.228-3.15,5.186,5.186,0,0,1,3.264-1.433V19.648a.91.91,0,0,1,.91-.91h0a.91.91,0,0,1,.909.91v1.558a4.628,4.628,0,0,1,3.938,3.083,1.635,1.635,0,0,1-1.521,2.2h0a1.622,1.622,0,0,1-1.558-1.2,2.239,2.239,0,0,0-.421-.844,1.859,1.859,0,0,0-1.506-.677,1.918,1.918,0,0,0-1.445.53,2.013,2.013,0,0,0-.511,1.461,1.92,1.92,0,0,0,.5,1.387,5.512,5.512,0,0,0,1.859,1.069,20.741,20.741,0,0,1,2.235,1.029,6.429,6.429,0,0,1,1.478,1.092,4.245,4.245,0,0,1,.922,1.387,4.78,4.78,0,0,1,.318,1.815,4.247,4.247,0,0,1-1.206,3.139,5.28,5.28,0,0,1-3.32,1.42v1.36a.9.9,0,0,1-.9.9h0a.9.9,0,0,1-.9-.9V38.117a5.476,5.476,0,0,1-3.611-1.654,4.611,4.611,0,0,1-.942-1.585,1.625,1.625,0,0,1,1.54-2.151h.012A1.6,1.6,0,0,1,21.5,33.875a2.376,2.376,0,0,0,.5.927,2.344,2.344,0,0,0,1.848.722,2.253,2.253,0,0,0,1.58-.529A1.834,1.834,0,0,0,26,33.568Z"
                />
                <path
                    fill="url(#VNrxw~JIjlHX7W5aF3XJjd)"
                    d="M30,16a1,1,0,0,1-.316-.052A16.664,16.664,0,0,0,24,15a16.664,16.664,0,0,0-5.684.948,1,1,0,1,1-.632-1.9A18.594,18.594,0,0,1,24,13a18.594,18.594,0,0,1,6.316,1.052A1,1,0,0,1,30,16Z"
                />
            </g>
        </svg>
    )
}

export default PriceRating2

{
    /* <stop offset=".278" stop-color="#4adb2e"/><stop offset=".554" stop-color="#43ce21"/><stop offset="1" stop-color="#33b004"/> */
}
{
    /* <stop offset=".278" stopColor="rgba(180,58,73,1)" />
<stop offset=".554" stopColor="rgba(242,72,20,1)" />
<stop offset="1" stopColor="rgba(252,69,69,1)" /> */
}
