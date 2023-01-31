import React from 'react'

function Address({ location, className, row = 1 }) {
    if (location === undefined) return null

    let address = location.display_address

    if (address.length > 2) {
        const rowOne = `${address[0]} ${address[1]}` // 1st row
        const rowTwo = address[2] // 2nd row
        address = [rowOne, rowTwo]
    }

    return (
        <address className={className}>
            {row === 1 ? (
                <p>{address.join(', ')}</p>
            ) : (
                <>
                    <p>{address[0]}</p>
                    <p>{address[1]}</p>
                </>
            )}
        </address>
    )
}

export default Address
