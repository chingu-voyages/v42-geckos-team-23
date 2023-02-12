import React, { useContext } from 'react'

import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Results from './components/Results'
import Spinner from './components/Spinner'
import Footer from './components/Footer'
import { Context } from './contexts/Context'
import { InputProvider } from './contexts/InputProvider'

const App = () => {
    const ctx = useContext(Context)
    const isModalOpen = ctx.isDataLoading && !ctx.modalIsOpen

    return (
        <div className="flex min-h-screen flex-col font-nunito">
            <InputProvider>
                <Navbar />
            </InputProvider>
            <Hero />
            {isModalOpen && <Spinner />}
            {!ctx.isDataLoading && <Results />}
            <Footer />
        </div>
    )
}

export default App
