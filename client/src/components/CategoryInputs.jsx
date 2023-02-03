import React, { useContext } from 'react'
import { Context } from '../../Context'

const CategoryInputs = ({ variant, setCategoryName }) => {
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

    const changeHandler = (e) => {
        setCategoryName(e.target.id)
        ctx.setCategory(e.target.value)
    }

    return (
        <div className={`${containerClasses} text-black`}>
            <div className={`${inputClasses}`}>
                <input
                    type="radio"
                    id="Restaurants"
                    name="category"
                    value="restaurants%2Cfood"
                    onChange={(e) => changeHandler(e)}
                />
                <label className="px-1" htmlFor="Restaurants">
                    Restaurants
                </label>
            </div>

            <div className={`${inputClasses}`}>
                <input
                    type="radio"
                    id="Cafés"
                    name="category"
                    value="cafes%2Ccoffee"
                    onChange={(e) => changeHandler(e)}
                />
                <label className="px-1" htmlFor="Cafés">
                    Cafés
                </label>
            </div>

            <div className={`${inputClasses}`}>
                <input
                    type="radio"
                    id="Activities"
                    name="category"
                    value="active"
                    onChange={(e) => changeHandler(e)}
                />
                <label className="px-1" htmlFor="Activities">
                    Activities
                </label>
            </div>

            <div className={`${inputClasses}`}>
                <input
                    type="radio"
                    id="Hotels & Travel"
                    name="category"
                    value="hotelstravel"
                    onChange={(e) => changeHandler(e)}
                />
                <label className="px-1" htmlFor="Hotels & Travel">
                    Hotels & Travel
                </label>
            </div>

            <div className={`${inputClasses}`}>
                <input
                    type="radio"
                    id="Shopping"
                    name="category"
                    value="shopping"
                    onChange={(e) => changeHandler(e)}
                />
                <label className="px-1" htmlFor="Shopping">
                    Shopping
                </label>
            </div>
        </div>
    )
}

export default CategoryInputs
