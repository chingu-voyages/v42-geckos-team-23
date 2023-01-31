import React from 'react'
import Carousel from './Carousel'

function Hero() {
  return (
      <div className="relative">
          <h1 className="absolute top-[10%] right-[10%] z-10 text-[70px] leading-tight text-white font-bold font-nunito text-shadow">
              Take your pets
              <br />
              wherever you go!
          </h1>

          <Carousel />
      </div>
  )
}

export default Hero
