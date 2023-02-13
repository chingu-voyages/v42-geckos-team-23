import React from 'react'
import { useNavigate } from 'react-router-dom'

import PriceRating from './PriceRating'
import Address from './Address'
import defaultCardImage from '../assets/goPup_logo_card.png'
import StarRating from './StarRating'
import Image from './Image'


const Card = ({ id, name, location, rating, image_url, price }) => {
    const navigate = useNavigate()

    const clickHandler = () => {
        navigate(`details/${id}`)
    }


    return (
        <a onClick={clickHandler} tabIndex="0">
            <div className="card h-[382px] max-w-[384px] cursor-pointer border bg-base-100 transition duration-300 ease-in-out hover:scale-105 hover:transform hover:shadow-lg">
                <figure className="relative h-72">
                    <Image
                        className="webkit-touch-callout h-full w-full object-cover"
                        src={image_url || defaultCardImage}
                        alt={name}
                    />
                </figure>
                <div className="card-body flex-row items-baseline justify-between">
                    <div className="w-9/12">
                        <h2 className="card-title">{name}</h2>
                        <Address location={location} row={2} />
                    </div>
                    <div className="flex w-3/12 flex-col items-end space-y-2">
                        <PriceRating rating={price} />
                        <StarRating rating={rating} />
                    </div>

                    <div className="card-actions absolute top-4  right-4 hidden justify-end" />
                </div>
            </div>
        </a>
    )
}

export default Card
