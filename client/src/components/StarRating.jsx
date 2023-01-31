import React from 'react'
import { Rating } from 'react-simple-star-rating'

function StarRating({ rating }) {
    const [ratingValue] = React.useState(rating);

    return (
        <Rating
            initialValue={ratingValue}
            readonly={true}
            size={16}
            fillColor={'#FC0706'}
            allowFraction
            SVGstyle={{ display: 'inline-block' }}
        />
    )
}

export default StarRating
