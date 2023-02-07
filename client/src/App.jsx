import React, { useContext, useEffect } from 'react'

import Hero from './components/Hero'
import Navbar from './components/Navbar'
import PopUp from './components/PopUp'
import Results from './components/Results'
import Spinner from './components/Spinner'
import Footer from './components/Footer'
import { Context } from './contexts/Context'
import { InputProvider } from './contexts/InputProvider'

const App = () => {
  const ctx = useContext(Context)
  console.log(ctx)

  return (
      <div className="flex min-h-screen flex-col font-nunito">
          <InputProvider>
              <Navbar />
          </InputProvider>
          <Hero />
          {/* {!ctx.isSearchBtnClicked && <PopUp />} */}
          {ctx.isLoading && <Spinner />}
          {!ctx.isLoading && <Results />}
          <Footer />
      </div>
  )
}

export default App
