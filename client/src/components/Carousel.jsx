import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import SwiperCore, { EffectFade, Pagination, Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { Context } from '../../Context'
import { imageList } from '../assets'

SwiperCore.use([EffectFade, Pagination, Navigation, Autoplay])

const Carousel = () => {
    const ctx = useContext(Context)
    const location = useLocation()
    const slide_images = location.pathname !== "/" ? ctx.businessImages : imageList

    return (
        <Swiper
            spaceBetween={30}
            loop={true}
            effect={'fade'}
            centeredSlides={true}
            pagination={{ clickable: true, }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            className="mySwiper"
        >
            {slide_images.map((img, i) => {
                return (
                    <SwiperSlide key={i}>
                        <img src={img} alt="" />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default Carousel
