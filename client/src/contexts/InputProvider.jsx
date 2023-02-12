import React, { createContext, useState, useEffect } from 'react'

export const InputContext = createContext()

export const InputProvider = ({ children }) => {
    const [category, setCategory] = useState('restaurants%2Cfood') // 'restaurants%2Cfood'
    const [categoryName, setCategoryName] = useState('Restaurants') // 'Restaurants'
    const [zipCode, setZipCode] = useState('')

    return (
        <InputContext.Provider
            value={{
                category,
                setCategory,
                categoryName,
                setCategoryName,
                zipCode,
                setZipCode,
            }}
        >
            {children}
        </InputContext.Provider>
    )
}
