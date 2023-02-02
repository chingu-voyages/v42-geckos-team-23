import React from 'react'
import { Loader } from 'react-feather'

const Spinner = ({ size = 48 }) => {
    return (
        <span className="spinner">
            <Loader size={size} />
        </span>
    )
}

export default Spinner
