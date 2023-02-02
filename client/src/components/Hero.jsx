import React, { useRef } from 'react'
import ArrowButton from './ArrowButton'
import Carousel from './Carousel'

const Hero = () => {
    const arrowButtonRef = useRef()

    return (
        <div className="relative z-0">
            <h1 className="text-shadow absolute top-[10%] left-0 right-0 text-center md:text-left md:left-auto  z-10 font-nunito text-[50px] font-bold leading-tight text-white md:right-[5%] md:text-[70px]">
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
