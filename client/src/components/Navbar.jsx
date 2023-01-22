import React from 'react'
import Button from './Button'

const Navbar = () => {

  //state stores user's zip code and category
  const [zipCode, setZipCode] = React.useState('');
  const [category, setCategory] = React.useState('');

  return (
    <div className="bg-red-50">
      <div className=" flex flex-col px-8 py-8 items-center justify-between md:flex-row">
        <img className="w-[175px] pb-8 sm:hidden" src="src/assets/goPup_mobile-logo.png" alt="logo" />
        <img className="sm:w-[150px] hidden sm:block sm:pb-4 " src="src/assets/goPup_logo.png" alt="logo" />

        <div className="">
          <form className="flex flex-col items-center gap-4 md:flex-row md:gap-1 lg:gap-4">
              <input className="bg-gray-200 text-center rounded-full px-2 py-2 md:px-0 md:w-[150px] md:mr-1 lg:mr-0 lg:w-[200px] lg:px-2" type="text" placeholder="enter a zip code" value={zipCode} onChange={e => setZipCode(e.target.value)} />

              <div className="flex flex-col gap-4 text-center text-black font-mono sm:flex-row sm:gap-10 md:gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <input type="radio" id="restaurants-category" name="restaurants-category" value="restaurants" 
                  onChange={e => setCategory(e.target.value)} />
                  <label className="px-1" htmlFor="restaurants-category">Restaurants</label>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center">
                  <input type="radio" id="events-category" name="events-category" value="events" 
                  onChange={e => setCategory(e.target.value)} />
                  <label className="px-1" htmlFor="events-category">Events</label>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center">
                  <input type="radio" id="services-category" name="services-category" value="services" 
                  onChange={e => setCategory(e.target.value)} />
                  <label className="px-1" htmlFor="services-category">Services</label>
                </div>
              </div>

              <Button>
              <img className="pr-1 md:pr-0" src="src/assets/search-icon.svg" />
              <span className="md:hidden">Search</span></Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Navbar