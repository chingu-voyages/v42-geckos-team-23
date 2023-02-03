import React, { useState, createContext } from 'react';

const Context = createContext()

function ContextProvider({ children }) { // children refers to: <App />, from main.jsx
    // variables:

    // functions:

    // state:
    const [location, setLocation] = useState('')
    const [category, setCategory] = useState('')
    const [categoryName, setCategoryName] = useState('')
    const [resultsList, setResultsList] = useState([])
    const [isSearchBtnClicked, setIsSearchBtnClicked] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [businessImages, setBusinessImages] = useState([])

    return (
        <Context.Provider value={{
            // insert functions/variables/state you want to use in other components/files:
            location,
            setLocation,
            category,
            setCategory,
            categoryName,
            setCategoryName,
            resultsList,
            setResultsList,
            isSearchBtnClicked,
            setIsSearchBtnClicked,
            isLoading,
            setIsLoading,
            businessImages,
            setBusinessImages
        }}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider }

/*

    to access Context from a component, use 'import { Context } from context path'

    function ComponentName() {
        const { variables/functions from Context.jsx } = useContext(Context)

        return (
            jsx here:
        )
    }

*/
