import React, { useContext } from 'react'

import Hero from './components/Hero'
import Navbar from './components/Navbar'
import PopUp from './components/PopUp'
import Results from './components/Results'
import Spinner from './components/Spinner'
import Footer from './components/Footer'
import { Context } from '../Context'

function App() {
  const ctx = useContext(Context)
  console.log(ctx.status)

  return (
    <div className="min-h-screen font-nunito flex flex-col">
      <Navbar />
      <Hero />
      {!ctx.isSearchBtnClicked && <PopUp />}
      {ctx.status === 'loading' && <Spinner />}
      {ctx.status === 'success' && <Results />}
      <Footer />
    </div>
  )
}

export default App
