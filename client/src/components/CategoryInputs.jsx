import React from 'react'
import { useContext } from 'react'
import { Context } from '../../Context'

const CategoryInputs = ({ variant }) => {
    const ctx = useContext(Context)

    const navbarInputsClasses = 'flex flex-col sm:flex-row sm:items-center'
    const navbarContainerClasses =
        'flex flex-col gap-4 text-center  sm:flex-row sm:gap-10 md:gap-4'

    const popUpInputsClasses = 'flex flex-row'
    const popUpContainerClasses = 'flex flex-col gap-3 text-center pb-5 '

    const inputClasses =
        variant === 'navbar' ? navbarInputsClasses : popUpInputsClasses

    const containerClasses =
        variant === 'navbar' ? navbarContainerClasses : popUpContainerClasses

    return (
        <div className={`${containerClasses} text-black`}>
            <div className={`${inputClasses}`}>
                <input
                    type="radio"
                    id="restaurants-category"
                    name="category"
                    value="restaurants%2Cfood"
                    onChange={(e) => ctx.setCategory(e.target.value)}
                />
                <label className="px-1" htmlFor="restaurants-category">
                    Restaurants
                </label>
            </div>

            <div className={`${inputClasses}`}>
                <input
                    type="radio"
                    id="cafes-category"
                    name="category"
                    value="cafes%2Ccoffee"
                    onChange={(e) => ctx.setCategory(e.target.value)}
                />
                <label className="px-1" htmlFor="cafes-category">
                    Cafés
                </label>
            </div>

            <div className={`${inputClasses}`}>
                <input
                    type="radio"
                    id="activities-category"
                    name="category"
                    value="active"
                    onChange={(e) => ctx.setCategory(e.target.value)}
                />
                <label className="px-1" htmlFor="activities-category">
                    Activities
                </label>
            </div>

            <div className={`${inputClasses}`}>
                <input
                    type="radio"
                    id="hotelstravel-category"
                    name="category"
                    value="hotelstravel"
                    onChange={(e) => ctx.setCategory(e.target.value)}
                />
                <label className="px-1" htmlFor="hotelstravel-category">
                    Hotels & Travel
                </label>
            </div>

            <div className={`${inputClasses}`}>
                <input
                    type="radio"
                    id="shopping-category"
                    name="category"
                    value="shopping"
                    onChange={(e) => ctx.setCategory(e.target.value)}
                />
                <label className="px-1" htmlFor="shopping-category">
                    Shopping
                </label>
            </div>
        </div>
    )
}

export default CategoryInputs
