import React, { useState } from 'react';

const Context = React.createContext()

function ContextProvider({ children }) { // children refers to: <App />, from main.jsx
    // variables: 

    // functions: 
    function test() {
        console.log("context")
    }

    // state: 
    const [location, setLocation] = useState('98155')
    const [category, setCategory] = useState('')
    const [apiData, setApiData] = useState('')

    return (
        <Context.Provider value={{
            // insert functions/variables/state you want to use in other components/files:
            test,
            location,
            setLocation,
            category,
            setCategory,
            apiData,
            setApiData
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