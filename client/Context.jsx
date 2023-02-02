import React, { useState } from 'react';

const Context = React.createContext()

function ContextProvider({ children }) { // children refers to: <App />, from main.jsx
    // variables:

    // functions:

    // state:
    const [location, setLocation] = useState('')
    const [category, setCategory] = useState('')
    const [resultsList, setResultsList] = useState([])
    const [isSearchBtnClicked, setIsSearchBtnClicked] = useState(false)
    const [status, setStatus] = useState('idle');

    return (
        <Context.Provider value={{
            // insert functions/variables/state you want to use in other components/files:
            location,
            setLocation,
            category,
            setCategory,
            resultsList,
            setResultsList,
            isSearchBtnClicked,
            setIsSearchBtnClicked,
            status,
            setStatus
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
