import React from 'react'; 

const Context = React.createContext()

function ContextProvider({children}) { // children refers to: <React.StrictMode> <App /> </React.StrictMode>, from main.jsx
    // variables: 
    const testVar = 'variable from context'

    // functions: dfdsdfdsds
    function testFunc() {
        console.log('function from context')
    }

    return (
        <Context.Provider value={{
            // insert functions/variables you want to use in other components/files:
            testVar, 
            testFunc
        }}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider} 

/*  

    to access Context from a component, use 'import { Context } from context path'

    function ComponentName() {
        const { variables/functions from Context.jsx } = useContext(Context)

        return (
            jsx here: 
        )
    }

*/
