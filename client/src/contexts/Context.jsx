import React, { useState, createContext } from 'react'

import useGetCurrentPosition from '../hooks/useGetCurrentPosition'

const Context = createContext()

const ContextProvider = ({ children }) => {
    // children refers to: <App />, from main.jsx
    // variables:

    // functions:
    const resetState = () => {
        setResultsList([])
        setIsDataLoading(false)
        setResultsTitle('')
        setHasBeenCalled(false)
    }

    // state:
    const [resultsList, setResultsList] = useState([])
    const [isDataLoading, setIsDataLoading] = useState(false)
    const [resultsTitle, setResultsTitle] = useState('')
    const [hasBeenCalled, setHasBeenCalled] = useState(false)
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const { location, isLocationLoading, handleButtonClick, isButtonClicked } = useGetCurrentPosition()

    return (
        <Context.Provider
            value={{
                // insert functions/variables/state you want to use in other components/files:
                resultsList,
                setResultsList,
                isDataLoading,
                setIsDataLoading,
                resultsTitle,
                setResultsTitle,
                hasBeenCalled,
                setHasBeenCalled,
                modalIsOpen,
                setModalIsOpen,
                resetState,
                location,
                isLocationLoading,
                handleButtonClick,
                isButtonClicked
            }}
        >
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
