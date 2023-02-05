import React, { useContext } from 'react'
import { Context } from '../../Context'

const ZipCodeInput = ({ variant = 'popup' }) => {
    const ctx = useContext(Context)

    const navbarClasses =
        'bg-gray-200 rounded-full px-4 py-2 w-[150px] md:mr-1 lg:mr-0 '

    const popUpClasses = 'bg-gray-200 rounded-full py-3 pl-4 w-full mx-auto'

    const inputClasses = variant === 'navbar' ? navbarClasses : popUpClasses

    return (
        <div>
            <input
                className={`${inputClasses}`}
                type="text"
                placeholder="enter a zip code"
                value={ctx.location}
                onChange={(e) => ctx.setLocation(e.target.value)}
                minLength="5"
            />
        </div>
    )
}

export default ZipCodeInput
