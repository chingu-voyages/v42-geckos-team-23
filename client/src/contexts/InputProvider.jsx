import React, { createContext, useState } from 'react'

export const InputContext = createContext()

export function InputProvider({ children }) {
    const [category, setCategory] = useState('restaurants%2Cfood')
    const [categoryName, setCategoryName] = useState('Restaurants')
    const [zipCode, setZipCode] = useState('')
    const [hasBeenCalled, setHasBeenCalled] = useState(false)

    console.log(hasBeenCalled)
    return (
        <InputContext.Provider
            value={{
                category,
                setCategory,
                categoryName,
                setCategoryName,
                zipCode,
                setZipCode,
                hasBeenCalled,
                setHasBeenCalled,
            }}
        >
            {children}
        </InputContext.Provider>
    )
}
