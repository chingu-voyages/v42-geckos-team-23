import React, { useState } from 'react'
import Button from './Button'
import ZipCodeInput from './ZipCodeInput'
import CategoryInputs from './CategoryInputs'
import mobileLogo from '../assets/goPup_mobile-logo.png';
import logo from '../assets/goPup_logo.png';
import searchIcon from '../assets/search-icon.svg';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [categoryName, setCategoryName] = useState('')

    const location = useLocation()
    const navigate = useNavigate()

    const goHome = () => {
        if (location.pathname !== '/') {
            navigate('/')
        } 
    }

    return (
        <div className="bg-red-50">
            <div className=" flex flex-col px-8 py-8 items-center justify-between md:flex-row">
                <img
                    className="w-[175px] pb-8 sm:hidden"
                    src={mobileLogo}
                    alt="logo"
                    onClick={goHome}
                />
                <img
                    className="sm:w-[150px] hidden sm:block sm:pb-4 hover:cursor-pointer"
                    src={logo}
                    alt="logo"
                    onClick={goHome}
                />

                <form className="flex flex-col items-center gap-4 md:flex-row md:gap-1 lg:gap-4">
                    <ZipCodeInput variant="navbar" />
                    <CategoryInputs variant="navbar" setCategoryName={setCategoryName} />
                    <Button variant="navbar" categoryName={categoryName}>
                        <img
                            className="pr-1 md:pr-0"
                            src={searchIcon}
                        />
                        <span className="md:hidden">Search</span>
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Navbar
