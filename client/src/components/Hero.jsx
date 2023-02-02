import React, { useRef, useContext } from 'react'

import { Context } from '../../Context'
import ArrowButton from './ArrowButton'
import Carousel from './Carousel'

function Hero() {
    const arrowButtonRef = useRef()
    const ctx = useContext(Context)

    return (
        <div className="relative z-0">
            <h1 className="text-shadow absolute top-[10%] left-0 right-0 z-10 text-center font-nunito  text-[50px] font-bold leading-tight text-white md:left-auto md:right-[5%] md:text-left md:text-[70px]">
                Take your pets
                <br />
                wherever you go!
            </h1>
            {ctx.isSearchBtnClicked && (
                <ArrowButton
                    ref={arrowButtonRef}
                    className="absolute top-[5%] left-[5%] z-10"
                />
            )}

            <Carousel />
        </div>
    )
}

export default Hero
