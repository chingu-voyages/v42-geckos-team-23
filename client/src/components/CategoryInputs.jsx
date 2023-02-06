import React, { useContext } from 'react'

import RadioButton from './RadioButton'
import { InputContext } from '../contexts/InputProvider'

const CategoryInputs = ({ variant }) => {
    const { setCategory, categoryName, setCategoryName } = useContext(InputContext)

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
        setCategoryName(e.target.getAttribute('data-category-name'))
        setCategory(e.target.getAttribute('data-category'))
    }

    return (
        <div className={`${containerClasses} text-black`}>
            <div className={`${inputClasses}`}>
                <RadioButton label="Restaurants" category="restaurants%2Cfood" value={categoryName === "Restaurants"} onChange={changeHandler} />
            </div>

            <div className={`${inputClasses}`}>
                <RadioButton label="Cafés" category="cafes%2Ccoffee" value={categoryName === "Cafés"} onChange={changeHandler} />
            </div>

            <div className={`${inputClasses}`}>
                <RadioButton label="Activities" category="active" value={categoryName === "Activities"} onChange={changeHandler} />
            </div>

            <div className={`${inputClasses}`}>
                <RadioButton label="Hotels & Travel" category="hotelstravel" value={categoryName === "Hotels & Travel"} onChange={changeHandler} />
            </div>

            <div className={`${inputClasses}`}>
                <RadioButton label="Shopping" category="shopping" value={categoryName === "Shopping"} onChange={changeHandler} />
            </div>
        </div>
    )
}

export default CategoryInputs
