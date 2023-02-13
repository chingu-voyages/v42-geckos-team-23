import React from 'react'
import { MdOutlineAddLocationAlt } from 'react-icons/md';

const Location = ({ size = 30, className = '', onClick }) => {

    return (
        <button className={className} type="button" onClick={onClick}>
            <MdOutlineAddLocationAlt className="icon z-[1] ml-1" size={size} />
            <span className="description">
                Use My Location
            </span>
        </button>
    )
}

export default Location
