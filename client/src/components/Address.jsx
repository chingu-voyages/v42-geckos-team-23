import React from 'react'

function Address({ location }) {
    const address = location.display_address
    
    return (
        <address>
            {address.map((line, index) => (
                <p key={index}>{line}</p>
            ))}
        </address>
    )
}

export default Address
