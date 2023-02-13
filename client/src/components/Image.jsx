import React, { useState } from 'react'

const Image = (props) => {
    const [isPressed, setIsPressed] = useState(false)

    const handleTouchStart = () => {
        setIsPressed(true)
    }

    const handleTouchEnd = () => {
        setIsPressed(false)
    }

    const style =
        props.variant === 'rounded'
            ? {
                  borderRadius: isPressed ? '0px' : '16px',
                  transition: 'border-radius 0.2s ease-in-out',
              }
            : {}

    return (
        <img
            src={props.src}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={style}
            className={props.className}
            alt={props.alt}
        />
    )
}

export default Image
