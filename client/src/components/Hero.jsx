import React, { useRef } from 'react'
import ArrowButton from './ArrowButton'
import Carousel from './Carousel'

function Hero() {
    const arrowButtonRef = useRef()

    return (
        <div className="relative">
            <h1 className="text-shadow absolute top-[10%] right-[10%] z-10 font-nunito text-[70px] font-bold leading-tight text-white">
                Take your pets
                <br />
                wherever you go!
            </h1>
            <ArrowButton
                ref={arrowButtonRef}
                className="absolute top-[5%] left-[5%] z-10"
            />
            <Carousel />
        </div>
    )
}

export default Hero
