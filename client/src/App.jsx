import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import PopUp from './components/PopUp'
import Results from './components/Results'
// import { Context } from '../Context'

function App() {
    return (
        <div>
            <Navbar />
            <PopUp />
            <Results />
            <a href={`/page1`}>Test Link to Page 1</a> 
        </div>
    )
}

export default App
