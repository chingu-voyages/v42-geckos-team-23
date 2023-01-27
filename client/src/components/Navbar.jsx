import React from 'react'
import Button from './Button'
import ZipCodeInput from './ZipCodeInput'
import CategoryInputs from './CategoryInputs'

const Navbar = () => {
    return (
        <div className="bg-red-50">
            <div className=" flex flex-col px-8 py-8 items-center justify-between md:flex-row">
                <img
                    className="w-[175px] pb-8 sm:hidden"
                    src="src/assets/goPup_mobile-logo.png"
                    alt="logo"
                />
                <img
                    className="sm:w-[150px] hidden sm:block sm:pb-4 "
                    src="src/assets/goPup_logo.png"
                    alt="logo"
                />

                <div className="">
                    <form className="flex flex-col items-center gap-4 md:flex-row md:gap-1 lg:gap-4">
                        <ZipCodeInput variant="navbar" />
                        <CategoryInputs variant="navbar" />
                        <Button variant="navbar">
                            <img
                                className="pr-1 md:pr-0"
                                src="src/assets/search-icon.svg"
                            />
                            <span className="md:hidden">Search</span>
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Navbar
