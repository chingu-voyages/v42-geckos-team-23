import React, { useContext } from 'react'

import { Context } from '../../Context'
import RadioButton from './RadioButton'

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

    const changeHandler = (e) => {
        ctx.setCategoryName(e.target.getAttribute('data-category-name'))
        ctx.setCategory(e.target.getAttribute('data-category'))
    }

    console.log(ctx)

    return (
        <div className={`${containerClasses} text-black`}>
            <div className={`${inputClasses}`}>
                <RadioButton label="Restaurants" category="restaurants%2Cfood" value={ctx.categoryName === "Restaurants"} onChange={changeHandler} />
            </div>

            <div className={`${inputClasses}`}>
                <RadioButton label="Cafés" category="cafes%2Ccoffee" value={ctx.categoryName === "Cafés"} onChange={changeHandler} />
            </div>

            <div className={`${inputClasses}`}>
                <RadioButton label="Activities" category="active" value={ctx.categoryName === "Activities"} onChange={changeHandler} />
            </div>

            <div className={`${inputClasses}`}>
                <RadioButton label="Hotels & Travel" category="hotelstravel" value={ctx.categoryName === "Hotels & Travel"} onChange={changeHandler} />
            </div>

            <div className={`${inputClasses}`}>
                <RadioButton label="Shopping" category="shopping" value={ctx.categoryName === "Shopping"} onChange={changeHandler} />
            </div>
        </div>
    )
}

export default CategoryInputs
