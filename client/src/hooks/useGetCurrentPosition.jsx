import { useState, useEffect } from 'react';

const useGetCurrentPosition = () => {
    const [location, setLocation] = useState('')
    const [isLocationLoading, setIsLocationLoading] = useState(true)
    const [isButtonClicked, setIsButtonClicked] = useState(false)

    useEffect(() => {
        if (!isButtonClicked) return

        const getCurrentPosition = async () => {
            return new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(
                    (position) => resolve(position),
                    (error) => reject(error)
                )
            })
        }

        const fetchZipCode = async () => {
            const position = await getCurrentPosition()
            const { latitude: lat, longitude: lng } = position.coords
            const data = { lat, lng }
            const response = await fetch('/.netlify/functions/getZipCode', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            const { zipCode } = await response.json()
            setLocation(zipCode)
            setIsLocationLoading(false)
        }

        setIsLocationLoading(true)
        fetchZipCode().catch((err) => {
            console.log(err)
            setIsLocationLoading(false)
        })
    }, [isButtonClicked])

    const handleButtonClick = () => {
        setIsButtonClicked(true)
    }

    return { location, isLocationLoading, handleButtonClick, isButtonClicked }
}

    export default useGetCurrentPosition
