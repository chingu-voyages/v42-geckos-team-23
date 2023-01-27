import React, { useContext } from 'react'
import { Context } from '../../Context'

const ZipCodeInput = ({ variant = 'popup' }) => {
    const ctx = useContext(Context)

    const navbarClasses =
        'bg-gray-200 text-center rounded-full px-2 py-2 md:px-0 md:w-[150px] md:mr-1 lg:mr-0 lg:w-[200px] lg:px-2'

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
            />
        </div>
    )
}

export default ZipCodeInput
