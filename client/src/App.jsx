import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import PopUp from './components/PopUp'
import Results from './components/Results'
import Footer from './components/Footer'
import { Context } from '../Context'

function App() {
  const ctx = useContext(Context)

  // useEffect(() => {
  // getDetailsByIdFromYelpApi(ctx.id)
  //   .then(data => console.log(data))
  //   .catch(err => console.log(err))

  // getReviewsFromYelpApi(ctx.id)
  //   .then(data => console.log(data))
  //   .catch(err => console.log(err))
  // }, []);

  return (
    <div>
      <Navbar />
      {!ctx.isSearchBtnClicked && <PopUp />}
      {ctx.isSearchBtnClicked && <Results />}
      <Footer />
    </div>
  )
}

export default App
