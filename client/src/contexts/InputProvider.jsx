import React, { createContext, useState } from 'react'

export const InputContext = createContext()

export const InputProvider = ({ children }) => {
    const [category, setCategory] = useState('')
    const [categoryName, setCategoryName] = useState('')
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
