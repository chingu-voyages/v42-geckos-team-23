import React, { useContext } from 'react'

import Hero from './components/Hero'
import Navbar from './components/Navbar'
import PopUp from './components/PopUp'
import Results from './components/Results'
import Footer from './components/Footer'
import { Context } from '../Context'

function App() {
  const ctx = useContext(Context)

  return (
    <div className="min-h-screen font-nunito flex flex-col justify-between">
      <Navbar />
      <Hero />
      {!ctx.isSearchBtnClicked && <PopUp />}
      {ctx.isSearchBtnClicked && <Results />}
      <Footer />
    </div>
  )
}

export default App
