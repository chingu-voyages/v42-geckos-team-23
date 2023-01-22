import React from 'react'

const Button = ({color = 'red', children}) => {
  const classes = [];
  if (color === 'red') {
    classes.push('bg-red-500', 'text-white')
  } else if (color === 'white') {
    classes.push('bg-white', 'text-red-500', 'border-2', 'border-red-500')
  }
  
  return (
    <button className={`flex items-center rounded-full px-10 py-2 md:px-3 md:py-3 ${classes.join(' ')}`} type="submit">
    {children}
    </button>  
  )
}

export default Button