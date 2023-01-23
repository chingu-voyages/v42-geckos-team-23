import React from 'react'

const Button = ({variant, color = 'red', children}) => {

  const classes = [];
  if (color === 'red') {
    classes.push('bg-red-500', 'text-white')
  } else if (color === 'white') {
    classes.push('bg-white', 'text-red-500', 'border-2', 'border-red-500')
  }

  const navbarBtnClasses = "flex items-center rounded-full px-10 py-2 md:px-3 md:py-3"
  const defaultBtnClasses = "flex items-center rounded-full px-10 py-2 md:px-3 md:py-3"
  const popupBtnClasses = "flex items-center justify-center mx-auto rounded-full py-3 w-full"

  let btnClasses = defaultBtnClasses
  
  if (variant === 'navbar') {
    btnClasses = navbarBtnClasses
  } else if (variant === 'popup') {
    btnClasses = popupBtnClasses
  }

  return (
    <button className={`${btnClasses} ${classes.join(' ')}`} type="submit">
    {children}
    </button>  
  )
}

export default Button;