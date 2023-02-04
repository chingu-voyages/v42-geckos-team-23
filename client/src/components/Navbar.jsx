import React, { useState, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

import Button from './Button'
import ZipCodeInput from './ZipCodeInput'
import CategoryInputs from './CategoryInputs'
import mobileLogo from '../assets/goPup_mobile-logo.png';
import logo from '../assets/goPup_logo.png';
import searchIcon from '../assets/search-icon.svg';
import { Context } from '../../Context'

const Navbar = () => {
    const ctx = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()

    const goHome = () => {
        if (location.pathname !== '/') {
            navigate('/')
        }
    }

    return (
        <div className="bg-red-50 font-nunito">
            <div className="flex px-3 py-3 lg:px-8 lg:py-8 items-center justify-between md:flex-row">
                <img
                    className="w-[55px] sm:hidden hover:cursor-pointer"
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

                {
                    '/' === location.pathname &&
                    <>
                        <form className="hidden lg:flex flex-col items-center gap-4 md:ml-10 md:flex-row md:gap-1 lg:gap-4">
                            <ZipCodeInput variant="navbar" />
                            <CategoryInputs variant="navbar" setCategoryName={ctx.setCategoryName} />
                            <Button variant="navbar" categoryName={ctx.categoryName}>
                                <img
                                    className="pr-1 md:pr-0"
                                    src={searchIcon}
                                />
                            </Button>
                        </form>

                        {/* mobile */}
                        <div className="lg:hidden">
                            <Button variant="navbar-mobile" categoryName={ctx.categoryName}>
                                <p className='mr-2 font-semibold'>New Search</p>
                                <img
                                    className="pr-0"
                                    src={searchIcon}
                                />
                            </Button>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Navbar
