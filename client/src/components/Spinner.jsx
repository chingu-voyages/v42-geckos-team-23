import React from 'react'
import { FiLoader  } from "react-icons/fi";

const Spinner = ({ size = 36 }) => {
    return (
        <span className="spinner">
            <FiLoader size={size} />
        </span>
    )
}

export default Spinner
