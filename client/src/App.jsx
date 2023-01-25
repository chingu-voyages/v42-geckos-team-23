import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import PopUp from './components/PopUp'
import Results from './components/Results'
import Footer from './components/Footer'
// import { Context } from '../Context'

function App() {
    return (
        <div>
            <Navbar />
            <PopUp />
            <Results />
            <Footer />
        </div>
    )
}

export default App
