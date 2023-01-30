import React, { useState } from 'react'

const CategoryInputs = ({ variant }) => {
    const [category, setCategory] = useState('')

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
        <div className={`${containerClasses} font-mono text-black`}>
            <div className={`${inputClasses}`}>
                <input
                    type="radio"
                    id="restaurants-category"
                    name="category"
                    value="restaurants"
                    onChange={(e) => setCategory(e.target.value)}
                />
                <label className="px-1" htmlFor="restaurants-category">
                    Restaurants
                </label>
            </div>

            <div className={`${inputClasses}`}>
                <input
                    type="radio"
                    id="events-category"
                    name="category"
                    value="events"
                    onChange={(e) => setCategory(e.target.value)}
                />
                <label className="px-1" htmlFor="events-category">
                    Events
                </label>
            </div>

            <div className={`${inputClasses}`}>
                <input
                    type="radio"
                    id="services-category"
                    name="category"
                    value="services"
                    onChange={(e) => setCategory(e.target.value)}
                />
                <label className="px-1" htmlFor="services-category">
                    Services
                </label>
            </div>
        </div>
    )
}

export default CategoryInputs
