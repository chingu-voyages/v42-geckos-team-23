import React, { useEffect, useState, useContext } from 'react'
import Navbar from './components/Navbar'
import PopUp from './components/PopUp'
import Results from './components/Results'
import Footer from './components/Footer'
// import { Context } from '../Context'
import { getBusinessesAPI, getDetailsByIdAPI, getReivewsAPI } from './api/YelpAPI'

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    getBusinessesAPI();
  }, []);

  return (
    <div>
      <p>{!data ? "Loading..." : data}</p>
      <Navbar />
      <PopUp />
      <Results />
      <Footer />
    </div>
  )
}

export default App
