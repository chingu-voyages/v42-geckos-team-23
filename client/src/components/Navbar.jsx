import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Button from './Button'
import ZipCodeInput from './ZipCodeInput'
import CategoryInputs from './CategoryInputs'
import mobileLogo from '../assets/goPup_mobile-logo.png'
import logo from '../assets/goPup_logo.png'
import { Context } from '../contexts/Context'
import Form from './Form'
import PopUp from './PopUp'
import SearchIcon from './SearchIcon'

import { InputContext } from '../contexts/InputProvider'

const Navbar = () => {
    const ctx = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const [zipCode, setZipCode] = useState('')

    const { category, categoryName } = useContext(InputContext)
    const isHomePage = '/' === location.pathname

    useEffect(() => {
        if (!ctx.hasBeenCalled && isHomePage) {
            ctx.setHasBeenCalled(true)
            openModal()
        }
    }, [ctx.hasBeenCalled])

    const closeModal = () => {
        ctx.setModalIsOpen(false)
    }

    const openModal = () => {
        ctx.setModalIsOpen(true)
    }

    const goHome = () => {
        if (!isHomePage) {
            navigate('/')
        }
        ctx.resetState()
    }

    const getBusinessesHandler = async (e) => {
        e.preventDefault()
        ctx.setIsDataLoading(true)
        try {
            const response = await fetch(
                '/.netlify/functions/getYelpSearchResults',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        location: zipCode,
                        category,
                    }),
                }
            )
            const data = await response.json()
            ctx.setResultsList([...data])
            ctx.setResultsTitle(categoryName)
            closeModal()
        } catch (err) {
            console.log(err)
        } finally {
            ctx.setIsDataLoading(false)
        }
    }

    return (
        <div className="bg-red-50 font-nunito">
            <div className="flex items-center justify-between px-3 py-3 md:flex-row lg:px-8 lg:py-8">
                <img
                    className="w-[55px] hover:cursor-pointer sm:hidden"
                    src={mobileLogo}
                    alt="logo"
                    onClick={goHome}
                />
                <img
                    className="hidden hover:cursor-pointer sm:block sm:w-[150px]"
                    src={logo}
                    alt="logo"
                    onClick={goHome}
                />

                {isHomePage && (
                    <>
                        <Form
                            className="hidden flex-col items-center gap-4 md:ml-10 md:flex-row md:gap-1 lg:flex lg:gap-4"
                            onSubmit={getBusinessesHandler}
                        >
                            <ZipCodeInput
                                variant="navbar"
                                zipCode={zipCode}
                                setZipCode={setZipCode}
                            />
                            <CategoryInputs variant="navbar" />
                            <Button variant="navbar">
                                <SearchIcon className="pr-1 md:pr-0" />
                            </Button>
                        </Form>
                        {/* mobile */}
                        <div className="lg:hidden">
                            <Button variant="navbar-mobile" onClick={openModal}>
                                <p className="mr-2 font-semibold">New Search</p>
                                <SearchIcon className="pr-0" />
                            </Button>
                        </div>
                    </>
                )}
            </div>
            <PopUp
                {...{
                    getBusinessesHandler,
                    modalIsOpen: ctx.modalIsOpen,
                    closeModal,
                    openModal,
                    zipCode,
                    setZipCode,
                }}
            />
        </div>
    )
}

export default Navbar
