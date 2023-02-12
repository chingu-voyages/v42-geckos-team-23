import React from 'react'

const Button = ({ variant, color = 'red', children, ...delegated }) => {
    const classes = []
    if (color === 'red') {
        classes.push('bg-red-500', 'text-white')
    } else if (color === 'white') {
        classes.push('bg-white', 'text-red-500', 'border-2', 'border-red-500')
    }

    const navbarBtnClasses =
        'flex items-center rounded-full px-10 py-2 md:px-3 md:py-3 transition duration-150 ease-in-out button'
    const navbarMobileBtnClasses =
        'flex items-center rounded-full px-5 py-2 md:px-3 md:py-3 transition duration-150 ease-in-out button'
    const defaultBtnClasses =
        'flex items-center rounded-full px-10 py-2 md:px-3 md:py-3 transition duration-150 ease-in-out button'
    const popupBtnClasses =
        'flex items-center justify-center mx-auto rounded-full py-3 w-full transition duration-150 ease-in-out button'

    let btnClasses = defaultBtnClasses

    if (variant === 'navbar') {
        btnClasses = navbarBtnClasses
    } else if (variant === 'navbar-mobile') {
        btnClasses = navbarMobileBtnClasses
    } else if (variant === 'popup') {
        btnClasses = popupBtnClasses
    }

    return (
        <button className={`${btnClasses} ${classes.join(' ')}`} {...delegated}>
            {children}
        </button>
    )
}

export default Button
