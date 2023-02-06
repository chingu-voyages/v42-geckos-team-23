import React, { useContext } from 'react'
import { InputContext } from '../contexts/InputProvider'

const ZipCodeInput = ({ variant = 'popup' }) => {
    const { zipCode, setZipCode } = useContext(InputContext)

    const navbarClasses =
        'bg-gray-200 rounded-full px-4 py-2 w-[150px] md:mr-1 lg:mr-0 '

    const popUpClasses = 'bg-gray-200 rounded-full py-3 pl-4 w-full mx-auto'

    const inputClasses = variant === 'navbar' ? navbarClasses : popUpClasses

    return (
        <div>
            <input
                className={`${inputClasses}`}
                placeholder="Enter a zip code"
                value={zipCode}
                onChange={e => setZipCode(e.target.value)}
                pattern="[0-9]{5}" // 5 digits
                title="Zip codes must contain 5 digits. e.g. 90210" // error message
                maxLength="5" // max length of input
                required
            />
        </div>
    )
}

export default ZipCodeInput
