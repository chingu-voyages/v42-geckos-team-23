import React, { useState } from 'react'
import Button from './Button'
import ZipCodeInput from './ZipCodeInput'
import CategoryInputs from './CategoryInputs'
import mobileLogo from '../assets/goPup_mobile-logo.png';
import logo from '../assets/goPup_logo.png';
import searchIcon from '../assets/search-icon.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { Spin as Hamburger} from 'hamburger-react';

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
            <div className="flex px-3 py-3 lg:px-8 lg:py-8 items-center justify-between md:flex-row">
                <img
                    className="w-[55px] sm:hidden"
                    src={mobileLogo}
                    alt="logo"
                    onClick={goHome}
                />
                <img
                    className="sm:w-[150px] hidden sm:block hover:cursor-pointer"
                    src={logo}
                    alt="logo"
                    onClick={goHome}
                />

                <form className="hidden lg:flex flex-col items-center gap-4 md:ml-10 md:flex-row md:gap-1 lg:gap-4">
                    <ZipCodeInput variant="navbar" />
                    <CategoryInputs variant="navbar" setCategoryName={setCategoryName} />
                    <Button variant="navbar" categoryName={categoryName}>
                        <img
                            className="pr-1 md:pr-0"
                            src={searchIcon}
                        />
                    </Button>
                </form>

                {/* mobile */}
                <div className="lg:hidden">
                    <Hamburger rounded size={28} direction="right"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar
