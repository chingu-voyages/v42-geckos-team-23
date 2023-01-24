import React, { useEffect, useState, useContext } from 'react'
import Navbar from './components/Navbar'
import PopUp from './components/PopUp'
import Results from './components/Results'
import Footer from './components/Footer'
// import { Context } from '../Context'

function App() {
  const [data, setData] = useState('');
  // var url = new URL("/api/yelp");
  // var params = { location: 98155 };
  // url.search = new URLSearchParams(params).toString();

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message))
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setData(data.name))
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
