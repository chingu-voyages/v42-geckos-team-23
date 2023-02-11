import React, { createContext, useState, useEffect } from 'react'

export const InputContext = createContext()

export const InputProvider = ({ children }) => {
    const [category, setCategory] = useState('restaurants%2Cfood')
    const [categoryName, setCategoryName] = useState('Restaurants')
    const [zipCode, setZipCode] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getCurrentPosition = async () => {
            return new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(
                    (position) => resolve(position),
                    (error) => reject(error)
                )
            })
        }

        getCurrentPosition()
            .then((position) => {
                const { latitude: lat, longitude: lng } = position.coords
                const data = { lat, lng }
                fetch('/.netlify/functions/getZipCode', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                    .then((response) => response.json())
                    .then(({ zipCode }) => {
                        setZipCode(zipCode)
                        setIsLoading(false)
                    })
            })
            .catch((err) => {
                console.log(err)
                setIsLoading(false)
            })
    }, [])

    return (
        <InputContext.Provider
            value={{
                category,
                setCategory,
                categoryName,
                setCategoryName,
                zipCode,
                setZipCode,
                isLoading,
                setIsLoading,
            }}
        >
            {children}
        </InputContext.Provider>
    )
}
