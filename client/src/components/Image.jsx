import React, { useState } from 'react'

const Image = (props) => {
    const [isPressed, setIsPressed] = useState(false)

    const handleTouchStart = () => {
        setIsPressed(true)
    }

    const handleTouchEnd = () => {
        setIsPressed(false)
    }

    return (
        <img
            src={props.src}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{
                borderRadius: isPressed ? 0 : '1rem',
                transition: 'border-radius 0.2s ease-in-out',
            }}
            className={props.className}
            alt={props.alt}
        />
    )
}

export default Image
