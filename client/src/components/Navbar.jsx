import React, { useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Button from './Button'
import ZipCodeInput from './ZipCodeInput'
import CategoryInputs from './CategoryInputs'
import mobileLogo from '../assets/goPup_mobile-logo.png'
import logo from '../assets/goPup_logo.png'
import searchIcon from '../assets/search-icon.svg'
import { Context } from '../contexts/Context'
import Form from './Form'
import PopUp from './PopUp'
import { InputContext } from '../contexts/InputProvider'

const Navbar = () => {
    const ctx = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const { modalIsOpen, setModalIsOpen } = ctx


    const { category, categoryName, zipCode } = useContext(InputContext)
    const isHomePage = '/' === location.pathname

    useEffect(() => {
        if (!ctx.hasBeenCalled && isHomePage) {
            ctx.setHasBeenCalled(true)
            openModal()
        }
    }, [ctx.hasBeenCalled])

    const closeModal = () => {
        setModalIsOpen(false)
    }

    const openModal = () => {
        setModalIsOpen(true)
    }

    const goHome = () => {
        if (!isHomePage) {
            navigate('/')
        }
        ctx.resetState()
    }

    // const getBusinessesHandler = async (e) => {
    //     e.preventDefault()
    //     try {
    //         const response = await fetch(
    //             '/.netlify/functions/getBusinessesFromYelpApi',
    //             {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify({
    //                     location: zipCode,
    //                     category,
    //                 }),
    //             }
    //         )
    //         const data = await response.json()
    //         ctx.setResultsList([...data])
    //         ctx.setResultsTitle(categoryName)
    //         closeModal()
    //     } catch (err) {
    //         console.log(err)
    //     } 
    // }

    const getBusinessesHandler = async (e) => {
        e.preventDefault()
        // ctx.setIsLoading(true)

        // console.log(zipCode)
        // console.log(category)
        // console.log(categoryName)

        try {
            const response = await fetch('/.netlify/functions/getBusinessesFromYelpApi', {
                method: 'POST', 
                body: JSON.stringify({ 
                    zipCode: zipCode, 
                    category: categoryName
                })
            })
            .then(res => res.json())
            .then(data => {
                ctx.setResultsList([data])
                ctx.setResultsTitle(categoryName)
                ctx.setIsLoading(false)
                closeModal()
                console.log({data})
                return JSON.stringify(data)})
            //console.log(response)
        } catch (err) {
            ctx.setIsLoading(false) // if there is an error, set isLoading to false
            ctx.setResultsList([]) // if there is an error, set resultsList to empty array
            ctx.setResultsTitle('')
            console.log(err)
        }        
    }
    

        /* 
        getBusinessesFromYelpApi(zipCode, category)
            .then((data) => {
                ctx.setResultsList([...data])
                ctx.setResultsTitle(categoryName)
                ctx.setIsLoading(false)
                closeModal()
            })
            .catch((err) => {
                // if we catch an error that means zip code was "invalid"
                ctx.setIsLoading(false) // if there is an error, set isLoading to false
                ctx.setResultsList([]) // if there is an error, set resultsList to empty array
                ctx.setResultsTitle('')
                console.log(err)
            }) */

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
                            <ZipCodeInput variant="navbar" />
                            <CategoryInputs variant="navbar" />
                            <Button variant="navbar">
                                <img
                                    className="pr-1 md:pr-0"
                                    src={searchIcon}
                                />
                            </Button>
                        </Form>
                        {/* mobile */}
                        <div className="lg:hidden">
                            <Button variant="navbar-mobile" onClick={openModal}>
                                <p className="mr-2 font-semibold">New Search</p>
                                <img className="pr-0" src={searchIcon} />
                            </Button>
                        </div>
                    </>
                )}
            </div>
            <PopUp
                {...{
                    getBusinessesHandler,
                    modalIsOpen,
                    closeModal,
                    openModal,
                }}
            />
        </div>
    )
}

export default Navbar
