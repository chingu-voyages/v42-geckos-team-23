import React, { useContext, useEffect, useCallback } from 'react'

import Location from './Location'
import { Context } from '../contexts/Context'

const ZipCodeInput = ({ variant = 'popup', zipCode, setZipCode }) => {
    const { location, isLocationLoading } = useContext(Context)

    useEffect(() => {
        if (location !== null && !isLocationLoading) {
            setZipCode(location)
        }
    }, [location])

    const handleClick = useCallback(() => {
      if (location === null && isLocationLoading) return;

      setZipCode(location)
    }, [location, isLocationLoading])

    const navbarClasses =
        'bg-gray-200 rounded-full px-4 py-2 w-[130px] placeholder:text-[14px] xl:w-[150px] xl:placeholder:text-[16px] md:mr-1 lg:mr-0 relative focus:ring-1 invalid:text-slate-500'

    const popUpClasses =
        'bg-gray-200 rounded-full py-3 pl-4 w-full mx-auto relative focus:ring-1 invalid:text-slate-500'

    const inputClasses = variant === 'navbar' ? navbarClasses : popUpClasses

    const locationClasses =
        variant === 'navbar'
            ? 'relative flex items-center location-left'
            : 'relative flex items-center location-top'

    const containerClasses =
        variant === 'navbar'
            ? 'flex items-center gap-1'
            : 'flex items-center gap-1 flex-row-reverse'

    return (
        <div className={containerClasses}>
            <Location className={locationClasses} onClick={handleClick} />

            <input
                className={`${inputClasses}`}
                placeholder="Enter a zip code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                pattern="[0-9]{5}" // 5 digits
                title="Zip codes must contain 5 digits. e.g. 90210" // error message
                maxLength="5" // max length of input
                required
            />
        </div>
    )
}

export default ZipCodeInput
